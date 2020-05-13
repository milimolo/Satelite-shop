import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CartComponent} from './Cart/cart/cart.component';
import {SatelliteInfoComponent} from './Products/Satellite/satellite-info/satellite-info.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'satellite', loadChildren: () => import('./Products/Satellite/module/satellite.module').then(s => s.SatelliteModule)},
  { path: 'order', loadChildren: () => import('./Orders/module/order.module').then(o => o.OrderModule)},
  { path: 'fuel', loadChildren: () => import('./Products/Fuel/module/fuel.module').then(f => f.FuelModule)},
  { path: 'user', loadChildren: () => import('./Users/module/user.module').then(u => u.UserModule)},
  { path: 'satelliteInfo/:id', component: SatelliteInfoComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
