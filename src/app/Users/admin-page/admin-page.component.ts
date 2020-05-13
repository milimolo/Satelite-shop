import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../../Products/Satellite/shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../../Products/Satellite/shared/satellite';
import {Fuel} from "../../Products/Fuel/shared/fuel.model";
import {FuelService} from "../../Products/Fuel/shared/fuel.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  fuels$: Observable<Fuel[]>;
  constructor(private satelliteService: SatelliteService,
              private fuelService: FuelService) { }

  ngOnInit(): void {
    this.getSatellites();
    this.getFuels();
  }

  getSatellites() {
    this.satellites$ = this.satelliteService.getAllSatellites();
  }

  deleteSatellite(id: string) {
    const subscription = this.satelliteService.deleteSatellite(id)
      .subscribe(() => {
        subscription.unsubscribe();
      });
  }

  getFuels() {
    this.fuels$ = this.fuelService.getAllFuels();
  }

  deleteFuel(id: string) {
    const subscription = this.fuelService.deleteFuel(id)
      .subscribe(() => {
        subscription.unsubscribe();
      });
  }

}
