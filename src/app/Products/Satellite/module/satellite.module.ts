import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SatelliteRoutingModule} from './satellite-routing.module';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SatelliteInfoComponent, SatelliteListComponent],
  imports: [
    CommonModule,
    SatelliteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SatelliteModule { }
