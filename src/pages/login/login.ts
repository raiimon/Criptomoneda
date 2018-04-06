/**
 *  Ramon Casaña Martinez
 */

import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

// ventanas a las que navegaremos
import {RegistroPage} from "../registro/registro";
import {PrincipalPage} from "../principal/principal";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // guardamos el texto introducido
  @ViewChild('username') user;
  @ViewChild('password') password;

  // agregamos al constructor lo que vamos a necesitar
  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  presentLoading() {
    // para que salga un toast de carga

    this.loadingCtrl.create({
      // el texto que saldra
      content: 'Entrando espere...',
      // duración
      duration: 6000,
      // que sea visible
      dismissOnPageChange: true

    }).present();

    // pasamos a otra ventana
    this.navCtrl.push(RegistroPage);
  }
  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then( data => {
        // muestra por consola los datos obtenidos
        console.log('got some data', data);
        // alerta cuando iniciamos sesion
        this.alert('You\'re logged in');
        // te redirige a la paguina seleciona
        this.navCtrl.setRoot( PrincipalPage );
        // si el usuario no esta registrado dara un error
      })
      .catch( error => {
        console.log('got an error', error);
        this.alert(error.message);
      })
    // saldra en la consola el nombre de usuario y la contraseña introducida
    console.log('Would sign in with ', this.user.value, this.password.value);
  }
  // contraseña olvidada

  recoverPassword(){
    return this.fire.auth.sendPasswordResetEmail(this.user.value)
      .then(data => {
        this.alertReset(data);

      }).catch(error => {

        this.alert(error.message);

      })
  }
  // Mensaje de alertas

  alert(message: string) {
    this.alertCtrl.create({
      // el titulo de la ventana
      title: 'Info!',
      // el (message) es lo que recoge tanto el error como el verdadero
      subTitle: message,
      // el boton para quitarlo
      buttons: ['OK']
    }).present();
  }

  // Alerta del Reseteo de contraseña

  alertReset(message: string) {
    this.alertCtrl.create({
      // el titulo de la ventana
      title: 'Look you email',
      // el (message) es lo que recoge tanto el error como el verdadero
      subTitle: message,
      // el boton para quitarlo
      buttons: ['OK']
    }).present();
  }

}
