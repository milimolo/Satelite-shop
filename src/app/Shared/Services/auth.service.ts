import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {User} from '../../Users/shared/user.model';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
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

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['login']);
  }

  private updateUserData({ id, address, city, email, name, orders, password, zipCode }: User) {
    // sets user data to firestone on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${id}`);
    const data = {
      id,
      address,
      city,
      email,
      name,
      orders,
      password,
      zipCode
    };

    return userRef.set(data, {merge: true});
  }
}
