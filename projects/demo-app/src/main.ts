import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {provideNgxImageViewer} from '../../ngx-image-viewer';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideNgxImageViewer({})
  ]
})
  .catch(err => console.error(err));
