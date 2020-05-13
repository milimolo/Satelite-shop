import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {AddToCart} from './cart.action';

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

  constructor() {
  }

  @Selector()
  static orderlines(state: CartStateModel) {
    return state.orderlines;
  }

  @Action(AddToCart)
  addToCart(ctx: StateContext<CartStateModel>, action: AddToCart) {
    const state = ctx.getState();
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


