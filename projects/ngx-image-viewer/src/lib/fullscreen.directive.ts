import {Directive, ElementRef, inject, input, OnChanges} from '@angular/core';
import screenfull from 'screenfull';

@Directive({selector: '[ngxToggleFullscreen]'})
export class ToggleFullscreenDirective implements OnChanges {
  private el = inject(ElementRef);

  readonly isFullscreen = input<boolean>(false, {alias: "ngxToggleFullscreen"});

  ngOnChanges() {
    if (this.isFullscreen() && screenfull.isEnabled) {
      screenfull.request(this.el.nativeElement);
    } else if (screenfull.isEnabled) {
      screenfull.exit();
    }
  }

}
