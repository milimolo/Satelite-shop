import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelRoutingModule } from './fuel-routing.module';
import {FuelCreateComponent} from '../fuel-create/fuel-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FuelUpdateComponent} from '../fuel-update/fuel-update.component';
import {FuelListComponent} from '../fuel-list/fuel-list.component';
import {FuelInfoComponent} from '../fuel-info/fuel-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    FuelCreateComponent,
    FuelUpdateComponent,
    FuelListComponent,
    FuelInfoComponent],
    imports: [
        CommonModule,
        FuelRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        FlexModule,
        MatGridListModule
    ]
})
export class FuelModule { }
