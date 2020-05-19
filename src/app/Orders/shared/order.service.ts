import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Order} from './order.model';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderCollection: AngularFirestoreCollection<Order>;
  constructor(private afs: AngularFirestore) {
    this.orderCollection = afs.collection('Orders');
  }

  createOrder(order: Order): Observable<any> {
    return from(this.orderCollection.add({
      totalPrice: order.totalPrice,
      orderLines: order.orderLines,
      uid: order.uid
    }));
  }
}
