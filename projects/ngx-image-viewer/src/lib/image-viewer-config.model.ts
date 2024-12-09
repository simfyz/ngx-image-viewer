import {IconProp} from '@fortawesome/angular-fontawesome/types';

export interface ImageViewerConfig {
  btnClass?: string;
  zoomFactor?: number;
  containerBackgroundColor?: string;
  wheelZoom?: boolean;
  allowFullscreen?: boolean;
  allowKeyboardNavigation?: boolean;

  btnShow?: {
    zoomIn?: boolean;
    zoomOut?: boolean;
    rotateClockwise?: boolean;
    rotateCounterClockwise?: boolean;
    next?: boolean;
    prev?: boolean;
  };

  btnIcons?: {
    zoomIn?: IconProp;
    zoomOut?: IconProp;
    rotateClockwise?: IconProp;
    rotateCounterClockwise?: IconProp;
    next?: IconProp;
    prev?: IconProp;
    fullscreen?: IconProp;
  };
}

export class CustomImageViewerEvent {
  name: string;
  imageIndex: number;

  constructor(name: string, imageIndex: number) {
    this.name = name;
    this.imageIndex = imageIndex;
  }
}
