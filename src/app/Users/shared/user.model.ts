import {Order} from '../../Orders/shared/order.model';


export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  orders: Order[];
  address: string;
  city: string;
  zipCode: number;
}
