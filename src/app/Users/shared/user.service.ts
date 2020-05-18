import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from "./user.model";
import {from, Observable} from "rxjs";

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
    return;
  }
}
