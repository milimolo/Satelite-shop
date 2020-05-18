import {Product} from '../../Products/shared/product.model';

export class AddToCart {
  static readonly type = '[Cart] AddToCart';

  constructor(public product: Product, public amount: number, public totalPrice: number) {
  }
}

export class DecreaseProductAmount {
  static readonly type = '[Cart] DecreaseProductAmount';

  constructor(public product: Product, public amount: number, public totalPrice: number) {
  }
}

export class IncreaseProductAmount {
  static readonly type = '[Cart] IncreaseProductAmount';

  constructor(public product: Product, public amount: number, public totalPrice: number) {
  }
}

export class RemoveOrderline {
  static readonly type = '[Cart] RemoveOrderline';

  constructor(public product: Product) {
  }
}


