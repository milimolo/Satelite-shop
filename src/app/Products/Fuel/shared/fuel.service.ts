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
    this.fuelCollection = afs.collection('Fuel');
  }

  getFuel(id: string): Observable<Fuel> {
    this.fuelDoc = this.afs.doc<Fuel>('Fuel/' + id);
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

  createFuel(fuel: Fuel): Observable<any> {
    return from(this.afs.collection('Fuel').add({
      model: fuel.model,
      brand: fuel.brand,
      price: fuel.price,
      typeOfPurchase: fuel.typeOfPurchase
    }));
  }

  updateFuel(fuel: Fuel): Observable<any> {
    return from(this.fuelCollection.doc(fuel.id).update({
      model: fuel.model,
      brand: fuel.brand,
      price: fuel.price,
      typeOfPurchase: fuel.typeOfPurchase
    }));
  }

  deleteFuel(id: string): Observable<any> {
    return from(this.fuelCollection.doc(id).delete());
  }
}
