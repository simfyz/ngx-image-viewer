import {ModuleWithProviders, NgModule} from '@angular/core';
import {ImageViewerComponent} from './image-viewer/image-viewer.component';
import {ImageViewerConfig} from './image-viewer-config.model';
import {ToggleFullscreenDirective} from './fullscreen.directive';
import {NgForOf, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';


@NgModule({
  declarations: [
    ImageViewerComponent,
    ToggleFullscreenDirective
  ],
  imports: [
    NgStyle,
    NgIf,
    NgOptimizedImage,
    NgForOf
  ],
  exports: [
    ImageViewerComponent
  ]
})
export class NgxImageViewerModule {
  static forRoot(config?: ImageViewerConfig): ModuleWithProviders<NgxImageViewerModule> {
    return {
      ngModule: NgxImageViewerModule,
      providers: [{provide: 'config', useValue: config}]
    };
  }
}
