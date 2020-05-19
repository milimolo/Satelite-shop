import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuelCreateComponent} from '../fuel-create/fuel-create.component';
import {FuelUpdateComponent} from '../fuel-update/fuel-update.component';
import {FuelListComponent} from '../fuel-list/fuel-list.component';
import {FuelInfoComponent} from '../fuel-info/fuel-info.component';
import {AuthGuard} from '../../../Shared/Guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: FuelListComponent
  },
  {
    path: 'info/:id',
    component: FuelInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: FuelCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    component: FuelUpdateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelRoutingModule { }
