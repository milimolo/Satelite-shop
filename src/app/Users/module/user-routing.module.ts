import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {AuthGuard} from '../../Shared/Guard/auth.guard';
import {UserPageComponent} from '../user-page/user-page.component';
import {UserCreateComponent} from "../user-create/user-create.component";


const routes: Routes = [
  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'your-page',
    component: UserPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
