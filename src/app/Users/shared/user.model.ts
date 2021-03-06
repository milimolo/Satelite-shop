import {Order} from '../../Orders/shared/order.model';

export interface User {
  uid: string;
  displayName?: string;
  email: string;
  photoURL?: string;
  isAdmin?: boolean;
  orders?: Order[];
  address?: string;
  city?: string;
  zipCode?: number;
}
