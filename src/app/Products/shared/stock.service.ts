import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Stock} from './stock.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stockDoc: AngularFirestoreDocument<Stock>
  constructor(private afs: AngularFirestore) { }

  getStockForProduct(pid: string): Observable<Stock> {
    this.stockDoc = this.afs.doc<Stock>('Stock/' + pid);
    return this.stockDoc.snapshotChanges().pipe(
      map(s => {
        const stock = s.payload.data() as Stock;
        stock.id = s.payload.id;
        return stock;
      })
    );
  }
}
