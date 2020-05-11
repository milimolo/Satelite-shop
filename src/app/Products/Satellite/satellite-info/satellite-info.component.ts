import { Component, OnInit } from '@angular/core';
import {SatelliteService} from '../shared/satellite.service';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from "../../../Cart/shared/cart.service";

@Component({
  selector: 'app-satelite-info',
  templateUrl: './satellite-info.component.html',
  styleUrls: ['./satellite-info.component.css']
})
export class SatelliteInfoComponent implements OnInit {

  satellite$: Observable<Satellite>;
  id: string;

  constructor(private satelliteService: SatelliteService,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getSattelite();
  }

  getSattelite() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.satellite$ = this.satelliteService.getSatellite(this.id);
  }

  addToCart() {
    this.cartService.addToCart(this.id, 1);
  }

}
