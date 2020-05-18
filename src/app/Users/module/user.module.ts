import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {UserPageComponent} from '../user-page/user-page.component';


@NgModule({
  declarations: [ AdminPageComponent, UserPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class UserModule { }
