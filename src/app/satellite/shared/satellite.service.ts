import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {

  constructor(private afs: AngularFirestore,
              private router: Router) { }

  form = new FormGroup({
    model: new FormControl(''),
    photo: new FormControl(''),
    price: new FormControl('')
  });
}
