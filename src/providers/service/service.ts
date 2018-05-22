
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";



@Injectable()
export class ServiceProvider {

  constructor(public Db: AngularFireDatabase) {
  }
  notas= [];


  public getProduct(){
    return this.Db.list('menu/');
  }

  public getMenus(id) {
    return this.Db.object('menu/' + id);
  }
}
