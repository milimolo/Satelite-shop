import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuelCreateComponent} from '../fuel-create/fuel-create.component';
import {FuelUpdateComponent} from '../fuel-update/fuel-update.component';


const routes: Routes = [
  {
    path: 'create',
    component: FuelCreateComponent
  },
  {
    path: 'update/:id',
    component: FuelUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelRoutingModule { }
