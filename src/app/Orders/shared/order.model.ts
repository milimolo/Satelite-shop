import {Orderline} from './orderline.model';

export interface Order {
  id?: string;
  uid: string;
  orderLines: Orderline[];
  totalPrice: number;
}
