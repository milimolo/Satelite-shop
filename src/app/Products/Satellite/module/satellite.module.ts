import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SatelliteRoutingModule} from './satellite-routing.module';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';



@NgModule({
  declarations: [SatelliteInfoComponent, SatelliteListComponent],
  imports: [
    CommonModule,
    SatelliteRoutingModule
  ]
})
export class SatelliteModule { }
