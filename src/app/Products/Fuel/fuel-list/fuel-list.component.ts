import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {Fuel} from '../shared/fuel.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AddToCart} from '../../../Cart/cart/cart.action';
import {Store} from '@ngxs/store';
import {PriceFormatterService} from '../../../Shared/Services/price-formatter.service';

@Component({
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.css']
})
export class FuelListComponent implements OnInit {
  
  fuel: Fuel[];
  hasNextFuel: boolean;
  hasPrevFuel: boolean;
  constructor(private fuelService: FuelService,
              private router: Router,
              private store: Store,
              private priceFormatterService: PriceFormatterService) { }

  ngOnInit(): void {
    this.getAllFuel();
  }

  getAllFuel() {
    this.fuelService.firstPage()
      .subscribe(list => {
        this.fuel = list;
      });
  }

  goToFuelDetail(id: string) {
    this.router.navigate(['fuel/info/' + id]);
  }

  addToCart(fuel: Fuel) {
    const product = {
      id: fuel.id,
      brand: fuel.brand,
      price: fuel.price,
      model: fuel.model
    };
    this.store.dispatch(new AddToCart(product, 1, product.price));
  }

  priceFormat(price: number): string {
    return this.priceFormatterService.formatPrice(price);
  }

  getNextFuels() {
    this.fuelService.nextPage()
      .subscribe(list => {
        this.fuel = list;
        this.checkForNextFuel();
        this.checkForPrevFuel();
      });
  }

  getPrevFuels() {
    this.fuelService.prevPage()
      .subscribe(list => {
        this.fuel = list;
        this.checkForNextFuel();
        this.checkForPrevFuel();
      });
  }

  private checkForNextFuel() {
    this.hasNextFuel = false;
    this.fuelService.hasNextPage()
      .subscribe(bool => {
        if (bool !== undefined) {
          this.hasNextFuel = bool;
        } else {
          this.hasNextFuel = false;
        }
      });
  }

  private checkForPrevFuel() {
    this.hasPrevFuel = false;
    this.fuelService.hasPrevPage()
      .subscribe(bool => {
        if (bool !== undefined) {
          this.hasPrevFuel = bool;
        } else {
          this.hasPrevFuel = false;
        }
      });
  }

}
