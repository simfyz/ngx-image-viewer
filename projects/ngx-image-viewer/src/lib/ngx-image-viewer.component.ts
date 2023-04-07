import {Component} from '@angular/core';
import {ImageViewerConfig} from './image-viewer-config.model';

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
    zoomIn: 'fa fa-plus',
    zoomOut: 'fa fa-minus',
    rotateClockwise: 'fa fa-repeat',
    rotateCounterClockwise: 'fa fa-undo',
    next: 'fa fa-arrow-right',
    prev: 'fa fa-arrow-left',
    fullscreen: 'fa fa-arrows-alt'
  }
};

@Component({
  selector: 'ngx-image-viewer',
  template: `
    <p>
      ngx-image-viewer works!
    </p>
  `,
  styles: []
})
export class NgxImageViewerComponent {

}
