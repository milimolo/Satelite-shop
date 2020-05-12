import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FuelCreateComponent} from '../fuel-create/fuel-create.component';


const routes: Routes = [
  {
    path: 'create',
    component: FuelCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelRoutingModule { }
