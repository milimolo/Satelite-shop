import { Injectable } from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {Product} from '../../Products/shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderline$: Orderline[];

  constructor() { }

  addToCart(product: Product, amount: number) {
    const totalPrice = product.price * amount;
    const orderline: Orderline =  {
      product,
      amount,
      totalPrice
    };
    this.orderline$.push(orderline);
  }

  getCart(): Orderline[] {
    return this.orderline$;
  }

  clearCart() {
    this.orderline$ = [];
  }
}
