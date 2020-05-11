import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './Cart/cart/cart.component';

const routes: Routes = [
  { path: 'satellite', loadChildren: () => import('./Products/Satellite/module/satellite.module').then(m => m.SatelliteModule)},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
