import {Component, OnInit} from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {CartService} from '../shared/cart.service';
import {Action, Select, StateContext, Store} from '@ngxs/store';
import {CartState, CartStateModel} from './cart.state';
import {Observable} from 'rxjs';
import {AddToCart, DecreaseProductAmount, IncreaseProductAmount, RemoveOrderline} from './cart.action';
import {PriceFormatterService} from '../../Shared/Services/price-formatter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Orderline[];
  @Select(CartState.getCart)
  getCart: Observable<Orderline[]>;
  constructor(private cartService: CartService, private store: Store, private priceFomartter: PriceFormatterService) {
  }

  ngOnInit(): void {
    this.getOrderLines();
  }

  getOrderLines() {
    this.getCart
      .subscribe(list => {
        this.cart = list;
      });
  }

  getTotalPrice() {
    let totalPrice = 0;
    if (this.cart) {
      this.cart.forEach(orderLine => {
        totalPrice += orderLine.totalPrice;
      });
    }
    return totalPrice;
  }

  deleteOrderline(orderlineToDelete: Orderline) {
    this.store.dispatch((new RemoveOrderline(orderlineToDelete.product)));
  }

  decreaseProductAmount(orderline: Orderline) {
    this.store.dispatch(new DecreaseProductAmount(orderline.product, orderline.amount, orderline.totalPrice));
  }

  increaseProductAmount(orderline: Orderline) {
    const amount = 1;
    this.store.dispatch(new IncreaseProductAmount(orderline.product, amount, orderline.totalPrice));
  }

  formatPrice(price: number) {
    return this.priceFomartter.formatPrice(price);
  }

}
