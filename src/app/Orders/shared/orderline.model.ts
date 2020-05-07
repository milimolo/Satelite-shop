import {Product} from '../../Products/shared/product.model';

export interface Orderline {
product: Product;
amount: number;
totalPrice: number;
}
