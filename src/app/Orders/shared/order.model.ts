import {Orderline} from './orderline.model';

export interface Order {
  id: string;
  orderlines: Orderline[];
}
