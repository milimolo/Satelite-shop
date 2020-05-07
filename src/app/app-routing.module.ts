import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from './Products/Satelite/satellite-list/satellite-list.component';
import {SatelliteInfoComponent} from './Products/Satelite/satellite-info/satellite-info.component';

const routes: Routes = [
  { path: 'satellites', component: SatelliteListComponent},
  { path: 'satelliteInfo/:id', component: SatelliteInfoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
