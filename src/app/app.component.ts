import { Component } from '@angular/core';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookshelves';

  constructor () {
   var firebaseConfig = {
      apiKey: "AIzaSyBZj5xqox2KifSiHHSOqmJ8jEpE9nZi3_c",
      authDomain: "bookshelf-29ad3.firebaseapp.com",
      projectId: "bookshelf-29ad3",
      storageBucket: "bookshelf-29ad3.appspot.com",
      messagingSenderId: "707790078127",
      appId: "1:707790078127:web:a7f012f8ad91ae0788145a",
      measurementId: "G-MP9ZH1051J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


}
