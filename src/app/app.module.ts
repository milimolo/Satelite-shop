import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SatelliteListComponent } from './satellite/satellite-list/satellite-list.component';
import { SatelliteInfoComponent } from './satellite/satellite-info/satellite-info.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SatelliteListComponent,
    SatelliteInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
