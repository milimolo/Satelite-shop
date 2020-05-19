import {Orderline} from './orderline.model';

export interface Order {
  id?: string;
  orderLines: Orderline[];
  totalPrice: number;
}
