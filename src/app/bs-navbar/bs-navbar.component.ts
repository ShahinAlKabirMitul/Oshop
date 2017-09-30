
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
user:firebase.User;

  constructor(private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(s=>{
      console.log(s);
      this.user=s;
    });
   }

   logOut(){
    console.log('Sign out Click');
    this.afAuth.auth.signOut();
  }

}
