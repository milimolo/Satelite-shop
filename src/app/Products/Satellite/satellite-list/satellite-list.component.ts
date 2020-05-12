import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {SatelliteService} from '../shared/satellite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-satelite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  constructor(private satelliteService: SatelliteService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllSatellites();
  }

  getAllSatellites() {
    this.satellites$ = this.satelliteService.getAllSatellites();
  }

  goToSatelliteDetail(id: string) {
    this.router.navigate(['satellite/info/' + id]);
  }


}
