import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Satellite} from '../shared/satellite';
import {SatelliteService} from '../shared/satellite.service';
import {Router} from '@angular/router';
import {CartService} from '../../../Cart/shared/cart.service';
import {Product} from '../../shared/product.model';
import {PriceFormatterService} from '../../../Shared/Services/price-formatter.service';


@Component({
  selector: 'app-satelite-list',
  templateUrl: './satellite-list.component.html',
  styleUrls: ['./satellite-list.component.css']
})
export class SatelliteListComponent implements OnInit {

  satellites$: Observable<Satellite[]>;
  constructor(private satelliteService: SatelliteService,
              private router: Router,
              private cartService: CartService,
              private priceFormatterService: PriceFormatterService) { }


  ngOnInit(): void {
    this.getAllSatellites();
  }

  getAllSatellites() {
    this.satellites$ = this.satelliteService.getAllSatellites();
  }

  goToSatelliteDetail(id: string) {
    this.router.navigate(['satellite/info/' + id]);
  }

  addToCart(id: string) {
    this.cartService.addToCart(id, 1);
  }


  updateSatellite(id: string) {
    this.router.navigate(['satellite/update/' + id]);
  }

  priceFormat(price: number): string {
    return this.priceFormatterService.formatPrice(price);
  }
}
