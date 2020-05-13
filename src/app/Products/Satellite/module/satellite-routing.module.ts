import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';

const routes: Routes = [
  {
    path: '',
    component: SatelliteListComponent
  },
  {
    path: 'info/:id',
    component: SatelliteInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SatelliteRoutingModule {}
