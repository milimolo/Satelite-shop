import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-satellite-update',
  templateUrl: './satellite-update.component.html',
  styleUrls: ['./satellite-update.component.css']
})
export class SatelliteUpdateComponent implements OnInit {

  loading: boolean;
  updateForm = this.fb.group({
    id: [''],
    model: [''],
    brand: [''],
    weight: [''],
    maxRange: [''],
    volume: [''],
    price: ['']
  });

  constructor(private satelliteService: SatelliteService,
              private location: Location,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getSatelliteBuildForm();
  }

  getSatelliteBuildForm() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.satelliteService.getSatellite(id)
      .subscribe(satellite => {
        this.updateForm.patchValue({
          id: satellite.id,
          model: satellite.model,
          brand: satellite.brand,
          weight: satellite.weight,
          volume: satellite.volume,
          maxRange: satellite.maxRange,
          price: satellite.price
        });
        this.loading = false;
      });
  }

  onSubmit() {
    const satellite = this.updateForm.value;
    this.satelliteService.updateSatellite(satellite)
      .subscribe(succes => {
        this.location.back();
      });
  }

}
