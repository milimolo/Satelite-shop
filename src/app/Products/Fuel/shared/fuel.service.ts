import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Fuel} from './fuel.model';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Satellite} from '../../Satellite/shared/satellite';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  private fuelDoc: AngularFirestoreDocument<Fuel>;
  private fuelCollection: AngularFirestoreCollection<Fuel>;
  private firstDoc: any;
  private lastDoc: any;
  private previousPageStartAt: any[] = [];

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

  firstPage(): Observable<Fuel[]> {
    this.previousPageStartAt = [];
    return this.afs.collection('Fuel', ref => ref.orderBy('model').limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          if (actions.length > 0) {
            this.firstDoc = actions[0].payload.doc;
            this.lastDoc = actions[actions.length - 1].payload.doc;
          }
          return actions.map(f => {
            const fuel = f.payload.doc.data() as Fuel;
            const id = f.payload.doc.id;
            fuel.id = id;
            return fuel;
          });
        })
      );
  }

  nextPage(): Observable<Fuel[]> {
    this.previousPageStartAt.push(this.firstDoc);
    return this.afs.collection('Fuel', ref => ref.orderBy('model')
      .startAfter(this.lastDoc).limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          if (actions.length > 0) {
            this.firstDoc = actions[0].payload.doc;
            this.lastDoc = actions[actions.length - 1].payload.doc;
          }
          return actions.map(f => {
            const fuel = f.payload.doc.data() as Fuel;
            const id = f.payload.doc.id;
            fuel.id = id;
            return fuel;
          });
        })
      );
  }

  prevPage(): Observable<Fuel[]> {
    return this.afs.collection('Fuel', ref => ref.orderBy('model')
      .startAt(this.getAndRemovePreviousPageDoc()).endBefore(this.lastDoc).limit(5))
      .snapshotChanges().pipe(
        map(actions => {
          if (actions.length > 0) {
            this.firstDoc = actions[0].payload.doc;
            this.lastDoc = actions[actions.length - 1].payload.doc;
          }
          return actions.map(f => {
            const fuel = f.payload.doc.data() as Fuel;
            const id = f.payload.doc.id;
            fuel.id = id;
            return fuel;
          });
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

  hasNextPage(): Observable<boolean> {
    if (this.firstDoc !== undefined) {
      return this.afs.collection('Fuel', ref => ref.orderBy('model').startAfter(this.lastDoc).limit(1))
        .snapshotChanges().pipe(
          map(actions => {
            if (actions.length > 0) {
              return true;
            } else {
              return false;
            }
          })
        );
    }
  }

  hasPrevPage(): Observable<boolean> {
    if (this.firstDoc !== undefined) {
      return this.afs.collection('Fuel', ref => ref.orderBy('model').endBefore(this.firstDoc).limit(1))
        .snapshotChanges().pipe(
          map(actions => {
            if (actions.length > 0) {
              return true;
            } else {
              return false;
            }
          })
        );
    }
  }

  private getAndRemovePreviousPageDoc() {
    const doc = this.previousPageStartAt[this.previousPageStartAt.length - 1];
    const index = this.previousPageStartAt.indexOf(doc);
    this.previousPageStartAt.splice(index, 1);
    return doc;
  }
}
