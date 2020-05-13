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
      let orderline: Orderline = {
        product: this.product,
        totalPrice,
        amount
      };
      if (this.checkForProduct(this.product)) {
        orderline = this.getOrderlineByProduct(this.product);
        this.increaseProductAmount(orderline);
      } else {
        this.orderlines.push(orderline);
      }
    });
  }

  deleteOrderline(orderlineToDelete: Orderline) {
    this.orderlines = this.orderlines.filter( orderline => orderline !== orderlineToDelete);
  }

  getCart(): Orderline[] {
    return this.orderlines;
  }

  decreaseProductAmount(orderline: Orderline) {
    for (let i = 0; i < this.orderlines.length; i++) {
      if (this.orderlines[i].product.id === orderline.product.id) {
        if (orderline.amount < 2) {
          this.orderlines = this.orderlines.filter(ol => ol.product.id !== orderline.product.id);
        } else {
          this.orderlines[i].amount --;
        }
      }
    }
  }

  increaseProductAmount(orderline: Orderline) {
    for(let i = 0; i < this.orderlines.length; i++) {
      if (this.orderlines[i].product.id === orderline.product.id) {
        this.orderlines[i].amount++;
      }
    }
  }

  clearCart() {
    this.orderlines = [];
  }

  checkForProduct(product: Product): boolean {
    for (const ol of this.orderlines) {
      if (product.id === ol.product.id) {
        return true;
      }
    }
    return false;
  }

  getOrderlineByProduct(product: Product): Orderline {
    const tempOrderline = this.orderlines.filter(ol => ol.product.id === product.id);
    return tempOrderline[0];
  }

  // updateOrderline(orderline: Orderline) {
  //  for (let i = 0; i < this.orderlines.length; i++) {
  //    if (this.orderlines[i].product.id === orderline.product.id) {
  //      this.orderlines[i] = orderline;
  //    }
  //  }
  // }
}
