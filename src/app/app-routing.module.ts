import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'satellite', loadChildren: () => import('./Products/Satellite/module/satellite.module').then(s => s.SatelliteModule)},
  { path: 'order', loadChildren: () => import('./Orders/module/order.module').then(o => o.OrderModule)},
  { path: 'fuel', loadChildren: () => import('./Products/Fuel/module/fuel.module').then(f => f.FuelModule)},
  { path: 'user', loadChildren: () => import('./Users/module/user.module').then(u => u.UserModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
