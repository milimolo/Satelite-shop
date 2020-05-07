import Order = jasmine.Order;

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
