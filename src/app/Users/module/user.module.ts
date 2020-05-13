import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {AdminPageComponent} from '../admin-page/admin-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [ AdminPageComponent],
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
