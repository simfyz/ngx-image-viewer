import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {CustomImageViewerEvent, ImageViewerConfig} from '../image-viewer-config.model';

const DEFAULT_CONFIG: ImageViewerConfig = {
  btnClass: 'default',
  zoomFactor: 0.1,
  containerBackgroundColor: '#ccc',
  wheelZoom: false,
  allowFullscreen: true,
  allowKeyboardNavigation: true,
  btnShow: {
    zoomIn: true,
    zoomOut: true,
    rotateClockwise: true,
    rotateCounterClockwise: true,
    next: true,
    prev: true
  },
  btnIcons: {
    zoomIn: 'fa-solid fa-plus',
    zoomOut: 'fa-solid fa-minus',
    rotateClockwise: 'fa-solid fa-repeat',
    rotateCounterClockwise: 'fa-solid fa-undo',
    next: 'fa-solid fa-arrow-right',
    prev: 'fa-solid fa-arrow-left',
    fullscreen: 'fa-solid fa-arrows-alt'
  }
};

@Component({
  selector: 'ngx-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['../image-viewer/image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() src: string[] = [];

  @Input() index = 0;

  @Input() config: ImageViewerConfig = DEFAULT_CONFIG;

  @Output() indexChange: EventEmitter<number> = new EventEmitter();

  @Output() configChange: EventEmitter<ImageViewerConfig> = new EventEmitter();

  @Output() customEvent: EventEmitter<CustomImageViewerEvent> = new EventEmitter();

  public style = {transform: '', msTransform: '', oTransform: '', webkitTransform: ''};
  public fullscreen = false;
  public loading = true;
  private scale = 1;
  private rotation = 0;
  private translateX = 0;
  private translateY = 0;
  private prevX: number = 0;
  private prevY: number = 0;
  private hovered = false;


  constructor(@Optional() @Inject('config') public moduleConfig: ImageViewerConfig) {
  }


  ngOnInit() {
    const merged = this.mergeConfig(DEFAULT_CONFIG, this.moduleConfig);
    this.config = this.mergeConfig(merged, this.config);
    this.triggerConfigBinding();
  }

  @HostListener('window:keyup.ArrowRight', ['$event'])
  nextImage(event: Event) {
    if (this.canNavigate(event) && this.index < this.src.length - 1) {
      this.loading = true;
      this.index++;
      this.triggerIndexBinding();
      this.reset();
    }
  }

  @HostListener('window:keyup.ArrowLeft', ['$event'])
  prevImage(event: Event) {
    if (this.canNavigate(event) && this.index > 0) {
      this.loading = true;
      this.index--;
      this.triggerIndexBinding();
      this.reset();
    }
  }

  zoomIn() {
    if (this.config?.zoomFactor) {
      this.scale *= (1 + this.config.zoomFactor);
      this.updateStyle();
    }
  }

  zoomOut() {
    if (this.config?.zoomFactor && this.scale > this.config.zoomFactor) {
      this.scale /= (1 + this.config.zoomFactor);
    }
    this.updateStyle();
  }

  scrollZoom($event: WheelEvent) {
    if (this.config.wheelZoom) {
      $event.deltaY > 0 ? this.zoomOut() : this.zoomIn();
      return false;
    }
    return;
  }

  rotateClockwise() {
    this.rotation += 90;
    this.updateStyle();
  }

  rotateCounterClockwise() {
    this.rotation -= 90;
    this.updateStyle();
  }

  onLoad() {
    this.loading = false;
  }

  onLoadStart() {
    this.loading = true;
  }

  onDragOver($event: DragEvent) {
    this.translateX += ($event.clientX - this.prevX);
    this.translateY += ($event.clientY - this.prevY);
    this.prevX = $event.clientX;
    this.prevY = $event.clientY;
    this.updateStyle();
  }

  onDragStart($event: DragEvent) {
    if ($event.dataTransfer && $event.dataTransfer.setDragImage) {
      const element = ($event.target as Element).nextElementSibling as Element;
      $event.dataTransfer.setDragImage(element, 0, 0);
    }
    this.prevX = $event.clientX;
    this.prevY = $event.clientY;
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
    if (!this.fullscreen) {
      this.reset();
    }
  }

  triggerIndexBinding() {
    this.indexChange.emit(this.index);
  }

  triggerConfigBinding() {
    this.configChange.next(this.config);
  }

  fireCustomEvent(name: string, imageIndex: number) {
    this.customEvent.emit(new CustomImageViewerEvent(name, imageIndex));
  }

  reset() {
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.updateStyle();
  }

  @HostListener('mouseover')
  private onMouseOver() {
    this.hovered = true;
  }

  @HostListener('mouseleave')
  private onMouseLeave() {
    this.hovered = false;
  }

  private canNavigate(event: any) {
    return event == null || (this.config.allowKeyboardNavigation && this.hovered);
  }

  private updateStyle() {
    this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;
    this.style.msTransform = this.style.transform;
    this.style.webkitTransform = this.style.transform;
    this.style.oTransform = this.style.transform;
  }

  private mergeConfig(defaultValues: ImageViewerConfig, overrideValues: ImageViewerConfig): ImageViewerConfig {
    let result: ImageViewerConfig = {...defaultValues};
    if (overrideValues) {
      result = {...defaultValues, ...overrideValues};

      if (overrideValues.btnIcons) {
        result.btnIcons = {...defaultValues.btnIcons, ...overrideValues.btnIcons};
      }
    }
    return result;
  }

}
