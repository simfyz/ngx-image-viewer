import {makeEnvironmentProviders} from '@angular/core';
import {ImageViewerConfig} from './image-viewer-config.model';

export function provideNgxImageViewer(globalConfig: Partial<ImageViewerConfig>) {
  return makeEnvironmentProviders([{provide: 'config', useValue: globalConfig}]);
}
