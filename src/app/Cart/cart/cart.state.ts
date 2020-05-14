import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {AddToCart, DecreaseProductAmount, IncreaseProductAmount, RemoveOrderline} from './cart.action';
import {Product} from '../../Products/shared/product.model';
import {OrderModule} from '../../Orders/module/order.module';

export class CartStateModel {
  orderlines: Orderline[];
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    orderlines: []
  }
})

@Injectable()
export class CartState {
  orderlines: Orderline[];
  state: CartStateModel;

  constructor() {
    this.state = new CartStateModel();
    this.orderlines = this.state.orderlines;
  }

  @Selector()
  static getCart(state: CartStateModel) {
    return state.orderlines;
  }

  @Action(AddToCart)
  addToCart(ctx: StateContext<CartStateModel>, action: AddToCart) {
    const state = ctx.getState();
    if (this.checkForProduct(action.product, ctx) && this.checkForOrderLine(action, ctx)) {
      this.increaseProductAmount(action, ctx);
    } else {
      const orderlinesNew = [...state.orderlines];
      orderlinesNew.push({
        product: action.product,
        amount: action.amount,
        totalPrice: action.totalPrice
      });
      ctx.setState({
        ...state,
        orderlines: orderlinesNew
      });
    }

  }

  @Action(DecreaseProductAmount)
  DecreaseProductAmount(ctx: StateContext<CartStateModel>, action: DecreaseProductAmount) {
    this.decreaseProductAmount(action, ctx);

  }


  @Action(IncreaseProductAmount)
  IncreaseProductAmount(ctx: StateContext<CartStateModel>, action: IncreaseProductAmount) {
    this.increaseProductAmount(action, ctx);
  }

  @Action(RemoveOrderline)
  RemoveOrderline(ctx: StateContext<CartStateModel>, action: RemoveOrderline) {

    const state = ctx.getState();
    let orderlinesNew = [...state.orderlines];
    orderlinesNew = orderlinesNew.filter(orderline => orderline.product.id !== action.product.id);
    ctx.setState({
      ...state,
      orderlines: orderlinesNew
    });
  }


  checkForProduct(product: Product, ctx: StateContext<CartStateModel>): boolean {
    const state = ctx.getState();
    const orderlinesNew = [...state.orderlines];
    for (const ol of orderlinesNew) {
      if (product.id === ol.product.id) {
        return true;
      }
    }
    return false;
  }


  decreaseProductAmount(orderline: Orderline, ctx: StateContext<CartStateModel>) {
    const state = ctx.getState();
    let orderlinesNew = [...state.orderlines];

    for (let i = 0; i < orderlinesNew.length; i++) {
      if (orderlinesNew[i].product.id === orderline.product.id) {
        if (orderline.amount < 2) {
          orderlinesNew = orderlinesNew.filter(ol => ol.product.id !== orderline.product.id);
        } else {
          orderlinesNew[i].amount--;
        }
      }
    }
  }

  increaseProductAmount(orderline: Orderline, ctx: StateContext<CartStateModel>) {
    const state = ctx.getState();
    const orderlinesNew = [...state.orderlines];

    for (let i = 0; i < orderlinesNew.length; i++) {
      if (orderlinesNew[i].product.id === orderline.product.id) {
        orderlinesNew[i].amount = orderlinesNew[i].amount + orderline.amount;
      }
    }
  }

  getOrderlineByProduct(product: Product, ctx: StateContext<CartStateModel>): Orderline {
    const state = ctx.getState();
    const orderlinesNew = [...state.orderlines];

    const tempOrderline = orderlinesNew.filter(ol => ol.product.id === product.id);
    return tempOrderline[0];
  }

  checkForOrderLine(orderline: Orderline, ctx: StateContext<CartStateModel>): boolean {
    const state = ctx.getState();
    const orderlinesNew = [...state.orderlines];

    for (const line of orderlinesNew) {
      if (orderline.product.id === line.product.id) {
        return true;
      } else {
        return false;
      }
    }
  }

}


