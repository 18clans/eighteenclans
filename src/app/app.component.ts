import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eighteenclans';

  firebaseConfig = {
    apiKey: 'AIzaSyAB8vCGU0uanR_8zPbYH_diWL2gkCnKjDo',
    authDomain: 'eighteenclans-1.firebaseapp.com',
    projectId: 'eighteenclans-1',
    storageBucket: 'eighteenclans-1.appspot.com',
    messagingSenderId: '987501836609',
    appId: '1:987501836609:web:be2abf335a348a87a4c9c0',
    measurementId: 'G-F6SHL1K8T7',
  };

  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
}
