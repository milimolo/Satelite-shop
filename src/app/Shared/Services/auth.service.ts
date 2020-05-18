import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {User} from '../../Users/shared/user.model';
import {Observable, of} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import {auth} from 'firebase';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  public loggedIn = false;
  userData: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    this.userData = afAuth.authState;
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/' + user.uid).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  SignInEmailAndPassword(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are now logged in', res);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }
  async googleSignIn() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      this.updateUserData(credential.user);
      this.loggedIn = true;
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      this.loggedIn = false;
      this.router.navigate(['']);
    });
  }

  private updateUserData({ uid, email, displayName, photoURL }: User) {
    // sets user data to firestone on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, {merge: true});
  }
}
