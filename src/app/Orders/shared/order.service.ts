import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Order} from "./order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afs: AngularFirestore) { }

  createOrder(order: Order) {
    
  }
}
