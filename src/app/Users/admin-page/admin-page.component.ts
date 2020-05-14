import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../../Products/Satellite/shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../../Products/Satellite/shared/satellite';
import {Fuel} from '../../Products/Fuel/shared/fuel.model';
import {FuelService} from '../../Products/Fuel/shared/fuel.service';
import {PriceFormatterService} from '../../Shared/Services/price-formatter.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  satellites: Satellite[];
  fuels$: Observable<Fuel[]>;
  hasNextSatellite: boolean;
  hasPrevSatellite: boolean;

  constructor(private satelliteService: SatelliteService,
              private fuelService: FuelService,
              private priceFormatterService: PriceFormatterService) { }

  ngOnInit(): void {
    this.getSatellites()
    this.getFuels();
  }

  getSatellites() {
    this.satelliteService.getFirstPage()
      .subscribe(list => {
        this.satellites = list;
        this.checkForNextSatellite();
        this.checkForPrevSatellite();
      });
  }

  getNextSatellites() {
    this.satelliteService.nextPage()
      .subscribe(list => {
        this.satellites = list;
        this.checkForNextSatellite();
        this.checkForPrevSatellite();
      });
  }

  getPrevSatellites() {
    this.satelliteService.prevPage()
      .subscribe(list => {
        this.satellites = list;
        this.checkForPrevSatellite();
        this.checkForNextSatellite();
      });
  }


  private checkForNextSatellite() {
    this.satelliteService.hasNextPage()
      .subscribe(hasNext => {
        if (hasNext !== undefined) {
          this.hasNextSatellite = hasNext;
        } else {
          this.hasNextSatellite = false;
        }
      });
  }

  private checkForPrevSatellite() {
    this.satelliteService.hasPrevPage()
      .subscribe(hasPrev => {
        if (hasPrev !== undefined) {
          this.hasPrevSatellite = hasPrev;
        } else {
          this.hasPrevSatellite = false;
        }
      });
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

  priceFormat(price: number): string {
    return this.priceFormatterService.formatPrice(price);
  }

}
