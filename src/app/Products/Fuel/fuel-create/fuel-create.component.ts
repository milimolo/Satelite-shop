import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-fuel-create',
  templateUrl: './fuel-create.component.html',
  styleUrls: ['./fuel-create.component.css']
})
export class FuelCreateComponent implements OnInit {

  createForm = this.fb.group({
    model: [''],
    brand: [''],
    price: [''],
    photoURL: [''],
    typeOfPurchase: ['']
  });

  constructor(private fuelService: FuelService,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const fuel = this.createForm.value;
    this.fuelService.createFuel(fuel)
      .subscribe(() => {
        this.location.back();
      });
  }

}
