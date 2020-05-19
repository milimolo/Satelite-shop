import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {Fuel} from '../shared/fuel.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AddToCart} from '../../../Cart/cart/cart.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.css']
})
export class FuelListComponent implements OnInit {

  fuel$: Observable<Fuel[]>;
  constructor(private fuelService: FuelService,
              private router: Router,
              private store: Store) { }

  ngOnInit(): void {
    this.fuel$ = this.fuelService.getAllFuels();
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

}
