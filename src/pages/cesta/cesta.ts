import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {CheckoutPage} from "../checkout/checkout";
import { TiendaPage } from '../tienda/tienda';


@IonicPage()
@Component({
  selector: 'page-cesta',
  templateUrl: 'cesta.html',
})
export class CestaPage {

  /**
   * Creamos el array
   */

  cestaArray: any = [];
  total: number = 0;
  Array: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public aut: AngularFireAuth,) {


    /**
     * igualamos el array con la cesta que obtenemos en la tienda usando el metodo
     * navParams
     */
    this.cestaArray = this.navParams.get("cesta");

    console.log(JSON.stringify(this.cestaArray));

    this.cestaArray.map(value => {
      this.total += value.price;
    });

  }

  remove(products, index) {
    this.cestaArray.splice(index, 1);
    this.resta(products.price)
  }

  add(products) {
    this.cestaArray.push(products)
    this.suma(products.price)
  }

  suma(price) {
    this.total += price;
  }

  resta(price) {
    this.total -= price;
  }

  pagar() {
    this.navCtrl.setRoot(CheckoutPage, {cesta: this.cestaArray});
  }

  backPage(){
    this.navCtrl.setRoot(TiendaPage);
  }
}

