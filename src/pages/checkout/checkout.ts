import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EmailComposer} from "@ionic-native/email-composer";
import {AngularFireAuth} from "angularfire2/auth";
import { TiendaPage } from '../tienda/tienda';


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  currentStep: string;
  reviewArray: any = [];
  address: any;
  payment: any;
  total: number = 0;
  emai: string;


  full_name: string = "";
  country: string = "";
  state: string = "";
  city: string = "";
  postal_code: string = "";
  email: string = "";
  address1: string = "";

  card: string = "";
  cvv: string = "";
  date: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private emailComposer: EmailComposer,
              public aut: AngularFireAuth,) {

    this.emai = aut.auth.currentUser.email;
    this.reviewArray = this.navParams.get("cesta");

    console.log(this.reviewArray);

    this.currentStep = "Address";

    this.reviewArray.map(value => {
      this.total += value.price;
    });
  }

  remove(products, index) {
    this.reviewArray.splice(index, 1);
    this.resta(products.price)
  }

  add(products) {
    this.reviewArray.push(products)
    this.suma(products.price)
  }

  suma(price) {
    this.total += price;
  }

  resta(price) {
    this.total -= price;
  }

  proceedToNextStep() {

    if (this.currentStep === "Address") {

      this.currentStep = "Payment";

      return;
    }

    if (this.currentStep === "Payment") {

      this.currentStep = "Review";

      return;

    }

    if (this.currentStep === "Review") {

      return;
    }

  }

  completeCheckout() {
    let email = {
      to: 'proyectocriptomoneda@gmail.com',
      cc: this.emai,
      attachments: [],
      subject: 'Gracias por comprar en nuestra tienda',
      body:
      'Información del usuario' + '<br>' +
      'name: ' + this.full_name + '<br>' +
      'country: ' + this.country + '<br>' +
      'city: ' + this.city + '<br>' +
      'postal code: ' + this.postal_code + '<br>' +
      'email: ' + this.email + '<br>' +
      'address: ' + this.address1 + '<br>' +

      'Información de la tarjeta' + '<br>' +
      'card: ' + this.card + '<br>' +
      'cvv: ' + this.cvv + '<br>' +
      'date: ' + this.date + '<br>' +

      'Lista de Productos' + '<br>' +
      this.getFormattedBody() + '<br>' +
      'Total: ' + this.total,

    };
    this.emailComposer.open(email);
  }

  getFormattedBody() {
    let body = ''

    for (let element of this.reviewArray) {
      body += ('<br>' +
        element.name + "   -->   " + element.price + "€" + '<br>');
    }
    return body;

  }

  backPage(){
    this.navCtrl.setRoot(TiendaPage);
  }
}
