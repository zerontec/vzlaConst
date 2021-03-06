import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  location = {
    lat: null,
    lon: null
  };


  constructor(private db: AngularFireDatabase) { }

  add(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      foto: user.photoURL,


    }); 
  }
  

  get(uid: string) {
    return this.db.object('/user/' + uid) as unknown as Observable<User>;

  }


setLocation( lat, lon){
  this.location.lat = lat;
  this.location.lon = lon;



}

}
