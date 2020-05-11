import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../../Products/Satellite/shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../../Products/Satellite/shared/satellite';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  constructor(private satelliteService: SatelliteService) { }

  ngOnInit(): void {
    this.getSatellites();
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

}
