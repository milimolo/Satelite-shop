import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './Cart/cart/cart.component';
import {SatelliteListComponent} from './Products/Satellite/satellite-list/satellite-list.component';
import {SatelliteInfoComponent} from './Products/Satellite/satellite-info/satellite-info.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
