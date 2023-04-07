import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import screenfull from 'screenfull';

@Directive({
  selector: '[ngxToggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnChanges {

  @Input('ngxToggleFullscreen') isFullscreen: boolean = false;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    if (this.isFullscreen && screenfull.isEnabled) {
      screenfull.request(this.el.nativeElement);
    } else if (screenfull.isEnabled) {
      screenfull.exit();
    }
  }

}
