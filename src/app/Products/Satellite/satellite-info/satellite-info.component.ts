import {Component, OnInit} from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../../../Cart/shared/cart.service';
import {Product} from '../../shared/product.model';
import {CartState} from '../../../Cart/cart/cart.state';
import {Select, Store} from '@ngxs/store';
import {AddToCart} from '../../../Cart/cart/cart.action';
import { PriceFormatterService } from 'src/app/Shared/Services/price-formatter.service';
import {Stock} from "../../shared/stock.model";
import {StockService} from "../../shared/stock.service";

@Component({
  selector: 'app-satelite-info',
  templateUrl: './satellite-info.component.html',
  styleUrls: ['./satellite-info.component.css']
})
export class SatelliteInfoComponent implements OnInit {

  satellite$: Observable<Satellite>;
  id: string;
  amount: number;
  panelOpenState: boolean;
  product: Product;
  stock: Stock;

  constructor(private satelliteService: SatelliteService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private cartState: CartState,
              private store: Store,
              private priceFormatterService: PriceFormatterService,
              private stockService: StockService) { }

  ngOnInit(): void {
    this.panelOpenState = false;
    this.amount = 1;
    this.getSattelite();
    this.satellite$.forEach(s => this.product = {
      price: s.price,
      brand: s.brand,
      id: s.id,
      model: s.model,
      photoURL: s.photoURL
    });
  }

  getSattelite() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStockForProduct(this.id);
    this.satellite$ = this.satelliteService.getSatellite(this.id);
  }

  addToCart() {
    const totalPrice = this.amount * this.product.price;
    this.store.dispatch(new AddToCart(this.product, this.amount, totalPrice));
  }

  increaseAmount() {
    this.amount++;
  }

  decreaseAmount() {
    this.amount--;
  }

  priceFormat(price: number): string {
    return this.priceFormatterService.formatPrice(price);
  }

  getStockForProduct(pid: string) {
    this.stockService.getStockForProduct(pid)
      .subscribe(stock => {
        this.stock = stock;
      });
  }
}
