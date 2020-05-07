import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SateliteListComponent } from './satelite/satelite-list/satelite-list.component';
import { SateliteInfoComponent } from './satelite/satelite-info/satelite-info.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAAVgyiaP2VjsSktf9Xk8ooRhtFIpiU-nA',
  authDomain: 'satelite-database.firebaseapp.com',
  databaseURL: 'https://satelite-database.firebaseio.com',
  projectId: 'satelite-database',
  storageBucket: 'satelite-database.appspot.com',
  messagingSenderId: '112771841346',
  appId: '1:112771841346:web:992bbbeba620f6ede85cdb',
  measurementId: 'G-D73H65QJT6'
};

@NgModule({
  declarations: [
    AppComponent,
    SateliteListComponent,
    SateliteInfoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
