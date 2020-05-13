import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fuel-update',
  templateUrl: './fuel-update.component.html',
  styleUrls: ['./fuel-update.component.css']
})
export class FuelUpdateComponent implements OnInit {

  updateForm = this.fb.group({
    id: [''],
    model: [''],
    brand: [''],
    price: [''],
    typeOfPurchase: ['']
  });
  loading: boolean;

  constructor(private fuelService: FuelService,
              private fb: FormBuilder,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFuel();
  }

  getFuel() {
    this.loading = true;

    const id = this.route.snapshot.paramMap.get('id');
    const subscription = this.fuelService.getFuel(id)
      .subscribe(fuel => {
        this.updateForm.patchValue({
          id: fuel.id,
          model: fuel.model,
          brand: fuel.brand,
          price: fuel.price,
          typeOfPurchase: fuel.typeOfPurchase
        });
        this.loading = false;
        subscription.unsubscribe();
      });
  }

  onSubmit() {
    const fuel = this.updateForm.value;
    const subscription = this.fuelService.updateFuel(fuel)
      .subscribe(() => {
        subscription.unsubscribe();
        this.location.back();
      });
  }
}
