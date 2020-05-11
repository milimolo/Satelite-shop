import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Satellite} from './satellite';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  private satelliteDoc: AngularFirestoreDocument<Satellite>;
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

  getSatellite(id: string): Observable<Satellite> {
    this.satelliteDoc = this.afs.doc<Satellite>('Satellites/' + id);
    return this.satelliteDoc.snapshotChanges().pipe(
      map(s => {
        const satellite = s.payload.data() as Satellite;
        satellite.id = id;
        return satellite;
      })
    );
  }

  updateSatellite(satellite: Satellite): Observable<any> {
    return from(this.satelliteCollection.doc(satellite.id).update({
      model: satellite.model,
      brand: satellite.brand,
      maxRange: satellite.maxRange,
      volume: satellite.volume,
      weight: satellite.weight,
      price: satellite.price
      }));
  }
}
