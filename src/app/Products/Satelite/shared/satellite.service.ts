import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Satellite} from './satellite';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  private satelliteCollection: AngularFirestoreCollection<Satellite>;
  constructor(private afs: AngularFirestore) {
    this.satelliteCollection = afs.collection('Satellites');
  }

  getAllSatellites(): Observable<Satellite[]> {
    return from(this.satelliteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(s => {
          const satellite = s.payload.doc.data() as Satellite;
          const id = s.payload.doc.id;
          satellite.id = id;
          return satellite;
        });
      })
    ));
  }
}
