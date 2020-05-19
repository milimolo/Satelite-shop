import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from './user.model';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;
  constructor(private afs: AngularFirestore) {
    this.userCollection = afs.collection('users');
  }

  createUser(user: User): Observable<any> {
    return from(this.userCollection.doc(user.uid).set({
      displayName: user.displayName,
      email: user.email,
      address: user.address,
      zipCode: user.zipCode,
      photoURL: user.photoURL,
      isAdmin: true,
      city: user.city
    }));
  }

  getUser(uid: string): Observable<User> {
    this.userDoc = this.afs.doc<User>('users/' + uid);
    return this.userDoc.snapshotChanges().pipe(
      map(u => {
        const user = u.payload.data() as User;
        user.uid = uid;
        return user;
      })
    );
  }

  updateGoogleUserData({ uid, email, displayName, photoURL }: User): Observable<any> {
    this.userDoc = this.afs.doc('users/' + uid);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };
    return from(this.userDoc.set(data, {merge: true}));
  }
}
