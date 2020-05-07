import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {Satellite} from '../shared/satellite';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-satelite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  satellites: Satellite[];
  constructor(private satelliteService: SatelliteService) { }

  ngOnInit(): void {
    this.getAllSatellites();
  }

  getAllSatellites() {
    this.satellites$ = this.satelliteService.getAllSatellites();
  }

}
