import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Fuel} from './fuel.model';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  private fuelDoc: AngularFirestoreDocument<Fuel>;
  private fuelCollection: AngularFirestoreCollection<Fuel>;

  constructor(private afs: AngularFirestore) {
    this.fuelCollection = afs.collection('Fuels');
  }

  getFuel(id: string): Observable<Fuel> {
    this.fuelDoc = this.afs.doc<Fuel>('Fuels/' + id);
    return this.fuelDoc.snapshotChanges().pipe(
      map( f => {
        const fuel = f.payload.data() as Fuel;
        fuel.id = id;
        return fuel;
      })
    );
  }

  getAllFuels(): Observable<Fuel[]> {
    return from(this.fuelCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(f => {
          const fuel = f.payload.doc.data() as Fuel;
          const id = f.payload.doc.id;
          fuel.id = id;
          return fuel;
        });
      })
    ));
  }
}
