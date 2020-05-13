import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SatelliteRoutingModule} from './satellite-routing.module';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [SatelliteInfoComponent, SatelliteListComponent],
  imports: [
    CommonModule,
    SatelliteRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class SatelliteModule { }
