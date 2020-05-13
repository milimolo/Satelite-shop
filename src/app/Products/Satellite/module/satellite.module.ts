import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SatelliteRoutingModule} from './satellite-routing.module';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {SatelliteUpdateComponent} from '../satellite-update/satellite-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SatelliteCreateComponent} from '../satellite-create/satellite-create.component';



@NgModule({
  declarations: [
    SatelliteInfoComponent,
    SatelliteListComponent,
    SatelliteUpdateComponent,
    SatelliteCreateComponent],
  imports: [
    CommonModule,
    SatelliteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SatelliteModule { }
