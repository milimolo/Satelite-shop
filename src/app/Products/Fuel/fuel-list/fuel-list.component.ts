import { Component, OnInit } from '@angular/core';
import {FuelService} from '../shared/fuel.service';
import {Fuel} from '../shared/fuel.model';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.css']
})
export class FuelListComponent implements OnInit {

  fuel$: Observable<Fuel[]>;
  constructor(private fuelService: FuelService,
              private router: Router) { }

  ngOnInit(): void {
    this.fuel$ = this.fuelService.getAllFuels();
  }

  goToFuelDetail(id: string) {
    this.router.navigate(['fuel/info/' + id]);
  }

}
