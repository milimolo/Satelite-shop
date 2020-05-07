import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-satelite-info',
  templateUrl: './satellite-info.component.html',
  styleUrls: ['./satellite-info.component.css']
})
export class SatelliteInfoComponent implements OnInit {

  satellite$: Observable<Satellite>;

  constructor(private satelliteService: SatelliteService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getSattelite();
  }

  getSattelite() {
    const id = this.route.snapshot.paramMap.get('id');
    this.satellite$ = this.satelliteService.getSatellite(id);
  }

}
