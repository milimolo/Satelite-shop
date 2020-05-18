import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SatelliteListComponent} from '../satellite-list/satellite-list.component';
import {SatelliteInfoComponent} from '../satellite-info/satellite-info.component';
import {SatelliteUpdateComponent} from '../satellite-update/satellite-update.component';
import {SatelliteCreateComponent} from '../satellite-create/satellite-create.component';
import {AuthGuard} from '../../../Shared/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SatelliteListComponent
  },
  {
    path: 'info/:id',
    component: SatelliteInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    component: SatelliteUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: SatelliteCreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SatelliteRoutingModule {}
