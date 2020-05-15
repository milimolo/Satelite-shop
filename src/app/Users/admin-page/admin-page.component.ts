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
  fuels: Fuel[];
  hasNextSatellite: boolean;
  hasPrevSatellite: boolean;
  hasNextFuel: boolean;
  hasPrevFuel: boolean;

  constructor(private satelliteService: SatelliteService,
              private fuelService: FuelService,
              private priceFormatterService: PriceFormatterService) { }

  ngOnInit(): void {
    this.getSatellites()
    this.getFuels();
  }

  getSatellites() {
    this.hasNextSatellite = false;
    this.hasPrevSatellite = false;
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
    this.hasNextSatellite = false;
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
    this.hasPrevSatellite = false;
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
    this.hasNextFuel = false;
    this.hasPrevFuel = false;
    this.fuelService.getAllFuels()
      .subscribe(list => {
        this.fuels = list;
        this.checkForNextFuel();
        this.checkForPrevFuel();
      });
  }

  getNextFuels() {
    this.fuelService.nextPage()
      .subscribe(list => {
        this.fuels = list;
        this.checkForNextFuel();
        this.checkForPrevFuel();
      });
  }

  getPrevFuels() {
    this.fuelService.prevPage()
      .subscribe(list => {
        this.fuels = list;
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
