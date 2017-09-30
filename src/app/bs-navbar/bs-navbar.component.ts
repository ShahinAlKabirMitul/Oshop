import { Observable } from 'rxjs/Rx';


import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  user$: Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth) {
    this.user$= afAuth.authState;
    console.log(this.user$);
   }

   logOut(){
    console.log('Sign out Click');
    this.afAuth.auth.signOut();
  }

}
