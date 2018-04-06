
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import { DataProvider } from "../data/data";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public Db: AngularFireDatabase, public auth: DataProvider) {
    console.log('Hello ServiceProvider Provider');
  }

}
