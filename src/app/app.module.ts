import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SateliteListComponent } from './Products/Satelite/satelite-list/satelite-list.component';
import { SateliteInfoComponent } from './Products/Satelite/satelite-info/satelite-info.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SateliteListComponent,
    SateliteInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
