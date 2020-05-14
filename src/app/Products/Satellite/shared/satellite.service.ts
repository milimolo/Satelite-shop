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
  private firstDoc: any;
  private lastDoc: any;
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

  getFirstPage(): Observable<Satellite[]> {
    return this.afs.collection('Satellites', ref => ref.orderBy('model').limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          this.firstDoc = actions[0].payload.doc;
          this.lastDoc = actions[actions.length - 1].payload.doc;
          return actions.map(s => {
            const satellite = s.payload.doc.data() as Satellite;
            const id = s.payload.doc.id;
            satellite.id = id;
            return satellite;
          });
        })
      );
  }

  nextPage(): Observable<Satellite[]> {
    return this.afs.collection('Satellites', ref => ref.orderBy('model').startAfter(this.lastDoc).limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          this.firstDoc = actions[0].payload.doc;
          this.lastDoc = actions[actions.length - 1].payload.doc;
          return actions.map(s => {
            const satellitte = s.payload.doc.data() as Satellite;
            const id = s.payload.doc.id;
            satellitte.id = id;
            return satellitte;
          });
        })
      );
  }

  prevPage(): Observable<Satellite[]> {
    return this.afs.collection('Satellites', ref => ref.orderBy('model').endBefore(this.firstDoc).limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          this.firstDoc = actions[0].payload.doc;
          this.lastDoc = actions[actions.length - 1].payload.doc;
          return actions.map(s => {
            const satellitte = s.payload.doc.data() as Satellite;
            const id = s.payload.doc.id;
            satellitte.id = id;
            return satellitte;
          });
        })
      );
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

  createSatellite(satellite: Satellite): Observable<any> {
    return from(this.afs.collection('Satellites').add({
      model: satellite.model,
      brand: satellite.brand,
      maxRange: satellite.maxRange,
      volume: satellite.volume,
      weight: satellite.weight,
      price: satellite.price
    }));
  }

  deleteSatellite(id: string): Observable<any> {
    return from(this.satelliteCollection.doc(id).delete());
  }
}
