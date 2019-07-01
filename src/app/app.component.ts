import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'blog';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAvRh02lgw4XqShCQkgd-ZJGjAlikhzngY',
      authDomain: 'blog-ecb5f.firebaseapp.com',
      databaseURL: 'https://blog-ecb5f.firebaseio.com',
      projectId: 'blog-ecb5f',
      storageBucket: '',
      messagingSenderId: '271296004107',
      appId: '1:271296004107:web:5984c790d2d4c166'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
