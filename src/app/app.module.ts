import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SatelliteListComponent } from './Products/Satelite/satellite-list/satellite-list.component';
import { SatelliteInfoComponent } from './Products/Satelite/satellite-info/satellite-info.component';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';


@NgModule({
  declarations: [
    AppComponent,
    SatelliteListComponent,
    SatelliteInfoComponent,
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxsModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
