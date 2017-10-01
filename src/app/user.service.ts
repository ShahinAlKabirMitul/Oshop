import { AppUser } from './models/app-user';
import { FirebaseObjectObservable } from 'angularfire2/database/firebase_object_observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { 

  }
  save(user:firebase.User){
    console.log('Save User',user)
    this.db.object('/user/'+user.uid).update({
      name:user.displayName,
      emai:user.email
    });
    console.log('Save User End')
  }

  get(uid:string):FirebaseObjectObservable<AppUser>{
    return this.db.object('/users/'+uid);
  }

}
