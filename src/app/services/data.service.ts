import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {DataModel} from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  getDataFromFirebase(): Observable<DataModel[]> {
    return this.db.list<DataModel>('/data/').valueChanges();
  }
}
