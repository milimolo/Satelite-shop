import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-satellite-create',
  templateUrl: './satellite-create.component.html',
  styleUrls: ['./satellite-create.component.css']
})
export class SatelliteCreateComponent implements OnInit {

  createForm = this.fb.group({
    model: [''],
    brand: [''],
    weight: [''],
    maxRange: [''],
    volume: [''],
    price: [''],
    photoURL: ['']
  });

  constructor(private satelliteService: SatelliteService,
              private location: Location,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const satellite = this.createForm.value;
    this.satelliteService.createSatellite(satellite)
      .subscribe(() => {
        this.location.back();
      });
  }

}
