import {Component, OnInit} from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {CartService} from '../shared/cart.service';
import {Action, Select, StateContext, Store} from '@ngxs/store';
import {CartState, CartStateModel} from './cart.state';
import {Observable} from 'rxjs';
import {AddToCart, ClearCart, DecreaseProductAmount, IncreaseProductAmount, RemoveOrderline} from './cart.action';
import {PriceFormatterService} from '../../Shared/Services/price-formatter.service';
import {AuthService} from "../../Shared/Services/auth.service";
import {OrderService} from "../../Orders/shared/order.service";
import {Order} from "../../Orders/shared/order.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Orderline[];
  @Select(CartState.getCart)
  getCart: Observable<Orderline[]>;
  constructor(
    private cartService: CartService,
    private store: Store,
    private priceFomartter: PriceFormatterService,
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router) {
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

  buy() {
    if (this.cart && this.cart.length > 0) {
      this.authService.userData
        .subscribe(user => {
          const order: Order = {
            uid: user.uid,
            orderLines: this.cart,
            totalPrice: this.getTotalPrice()
          };
          this.orderService.createOrder(order)
            .subscribe(() => {
              this.store.dispatch(new ClearCart());
              this.router.navigate(['']);
            });
        });
    }
  }

}
