
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  constructor(private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(s=>{
      console.log(s);
    });
   }

   logOut(){
    console.log('Sign out Click');
    this.afAuth.auth.signOut();
  }

}
