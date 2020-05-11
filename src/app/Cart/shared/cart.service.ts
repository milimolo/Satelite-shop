import {Injectable} from '@angular/core';
import {Orderline} from '../../Orders/shared/orderline.model';
import {Product} from '../../Products/shared/product.model';
import {SatelliteService} from '../../Products/Satellite/shared/satellite.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderlines: Orderline[] = [];
  product: Product;
  doneLoading: boolean;

  constructor(private satelliteService: SatelliteService) { }

  addToCart(id: string, amount: number) {
    this.doneLoading = false;
    this.satelliteService.getSatellite(id).subscribe( productFromSatelliteService => {
      this.product = {
        id: productFromSatelliteService.id,
        price: productFromSatelliteService.price,
        model: productFromSatelliteService.model,
        brand: productFromSatelliteService.brand
      };
      const totalPrice = this.product.price * amount;
      const orderline: Orderline = {
        product: this.product,
        totalPrice,
        amount
      };
      this.orderlines.push(orderline);
    });
  }

  deleteOrderline(orderlineToDelete: Orderline) {
    this.orderlines = this.orderlines.filter( orderline => orderline !== orderlineToDelete);
  }

  getCart(): Orderline[] {
    return this.orderlines;
  }

  decreaseProduct(orderline: Orderline) {}

  clearCart() {
    this.orderlines = [];
  }
}
