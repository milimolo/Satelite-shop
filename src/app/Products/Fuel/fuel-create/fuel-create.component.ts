import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-fuel-create',
  templateUrl: './fuel-create.component.html',
  styleUrls: ['./fuel-create.component.css']
})
export class FuelCreateComponent implements OnInit {

  private createForm = this.fb.group({
    model: [''],
    brand: [''],
    price: [''],
    typeOfPurchase: ['']
  });

  constructor(private fuelService: FuelService,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
