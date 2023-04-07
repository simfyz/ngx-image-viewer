import { TestBed } from '@angular/core/testing';

import { NgxImageViewerService } from './ngx-image-viewer.service';

describe('NgxImageViewerService', () => {
  let service: NgxImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
