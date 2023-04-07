import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageViewerComponent } from './ngx-image-viewer.component';

describe('NgxImageViewerComponent', () => {
  let component: NgxImageViewerComponent;
  let fixture: ComponentFixture<NgxImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
