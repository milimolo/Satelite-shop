import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {Observable} from 'rxjs';
import {Fuel} from '../shared/fuel.model';
import {ActivatedRoute} from '@angular/router';
import {AddToCart} from '../../../Cart/cart/cart.action';
import {Store} from '@ngxs/store';
import {PriceFormatterService} from '../../../Shared/Services/price-formatter.service';
import {Stock} from '../../shared/stock.model';
import {StockService} from "../../shared/stock.service";

@Component({
  selector: 'app-fuel-info',
  templateUrl: './fuel-info.component.html',
  styleUrls: ['./fuel-info.component.css']
})
export class FuelInfoComponent implements OnInit {

  fuel: Fuel;
  stock: Stock;
  amount: number;
  panelOpenState: boolean;

  constructor(private fuelService: FuelService,
              private route: ActivatedRoute,
              private store: Store,
              private priceFormatterService: PriceFormatterService,
              private stockService: StockService) { }

  ngOnInit(): void {
    this.panelOpenState = false;
    this.amount = 1;
    this.getFuel();
  }

  getFuel() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getStockForProduct(id);
    this.fuelService.getFuel(id).subscribe(fuel => this.fuel = {
      id: fuel.id,
      brand: fuel.brand,
      model: fuel.model,
      typeOfPurchase: fuel.typeOfPurchase,
      price: fuel.price,
      photoURL: fuel.photoURL
      });
  }

  addToCart(fuel: Fuel) {
    const product = {
      id: fuel.id,
      model: fuel.model,
      brand: fuel.brand,
      price: fuel.price,
      photoURL: fuel.photoURL
    };
    const totalPrice = this.amount * product.price;
    this.store.dispatch(new AddToCart(product, this.amount, totalPrice));
  }

  decreaseProductAmount() {
    if (this.amount < 2) {
      return;
    }
    this.amount--;
  }

  increaseProductAmount() {
    this.amount++;
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
