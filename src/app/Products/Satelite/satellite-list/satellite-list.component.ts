import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {SatelliteService} from '../shared/satellite.service';

@Component({
  selector: 'app-satelite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  constructor(private satelliteService: SatelliteService) { }

  ngOnInit(): void {
    this.getAllSatellites();
  }

  getAllSatellites() {
    this.satellites$ = this.satelliteService.getAllSatellites();
  }

}
