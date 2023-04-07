import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxImageViewerModule} from '../../../ngx-image-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
