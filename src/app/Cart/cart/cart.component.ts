import { Component, OnInit } from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderline$: Orderline[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderline$ = this.cartService.getCart();
  }

  deleteOrderline(orderlineToDelete: Orderline) {
    this.cartService.deleteOrderline(orderlineToDelete);
    this.orderline$ = this.cartService.getCart();
  }

  decreaseProductAmount(orderline: Orderline) {
    this.cartService.decreaseProductAmount(orderline);
    this.orderline$ = this.cartService.getCart();
  }

  increaseProductAmount(orderline: Orderline) {
    this.cartService.increaseProductAmount(orderline);
    this.orderline$ = this.cartService.getCart();
  }

}
