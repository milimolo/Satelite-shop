import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteUpdateComponent} from '../satellite-update/satellite-update.component';
import {SatelliteCreateComponent} from '../satellite-create/satellite-create.component';

const routes: Routes = [
  {
    path: '',
    component: SatelliteListComponent
  },
  {
    path: 'info/:id',
    component: SatelliteInfoComponent
  },
  {
    path: 'update/:id',
    component: SatelliteUpdateComponent
  },
  {
    path: 'create',
    component: SatelliteCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SatelliteRoutingModule {}
