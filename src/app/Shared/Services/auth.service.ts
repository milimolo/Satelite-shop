import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from '../../Users/shared/user.model';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase';
import * as firebase from 'firebase';
import {UserService} from '../../Users/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  userData: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private userService: UserService) {
    this.userData = afAuth.authState;
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.userService.getUser(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  SignInEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  async googleSignIn() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      const subscription = this.userService.updateGoogleUserData(credential.user)
        .subscribe(() => {subscription.unsubscribe()});
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
