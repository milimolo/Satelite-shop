import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {Observable} from 'rxjs';
import {Fuel} from '../shared/fuel.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fuel-info',
  templateUrl: './fuel-info.component.html',
  styleUrls: ['./fuel-info.component.css']
})
export class FuelInfoComponent implements OnInit {

  fuel$: Fuel;

  constructor(private fuelService: FuelService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFuel();
  }

  getFuel() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fuelService.getFuel(id).subscribe(fuel => this.fuel$ = {
      id: fuel.id,
      brand: fuel.brand,
      model: fuel.model,
      typeOfPurchase: fuel.typeOfPurchase,
      price: fuel.price
      });
  }

  addToCart() {

  }

}
