import { User } from '../../shared/models/user.interface';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {
  public user$: Observable<User>;
 

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }




  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
  

  
  public updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'ADMIN',
    };

    return userRef.set(data, { merge: true });
  }


  

/*   get appUser$(user: User): Observable<User> {
    return this.isUserLoggedIn(`users/${user.role}`);

  } */
}






