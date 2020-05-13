import {Orderline} from '../../Orders/shared/orderline.model';
import {Product} from '../../Products/shared/product.model';

export class AddToCart {
  static readonly type = '[Cart] GetOrderLine';

  constructor(public product: Product, public amount: number, public totalPrice: number) {
  }
}
