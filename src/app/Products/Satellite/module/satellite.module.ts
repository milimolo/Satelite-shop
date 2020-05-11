import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SatelliteRoutingModule} from './satellite-routing.module';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {SatelliteUpdateComponent} from '../satellite-update/satellite-update.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SatelliteInfoComponent, SatelliteListComponent, SatelliteUpdateComponent],
  imports: [
    CommonModule,
    SatelliteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SatelliteModule { }
