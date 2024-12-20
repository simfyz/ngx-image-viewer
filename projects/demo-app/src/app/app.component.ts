import {Component} from '@angular/core';
import {CustomImageViewerEvent, ImageViewerComponent, ImageViewerConfig} from 'ngx-image-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    ImageViewerComponent
  ]
})
export class AppComponent {
  images = [
    '/assets/pexels-photo-352093.jpeg',
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg'
  ];

  imageIndexOne = 0;
  imageIndexTwo = 0;

  config: ImageViewerConfig = {zoomFactor: 0.1};

  handleEvent(event: CustomImageViewerEvent) {
    console.log(`${event?.name} has been click on img ${event?.imageIndex + 1}`);

    switch (event?.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
