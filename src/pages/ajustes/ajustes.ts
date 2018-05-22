import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams,AlertController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { MapsPage } from '../maps/maps';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@IonicPage()

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
  providers: [GooglePlus]
})
export class AjustesPage {

  actualiza: string;
  name: string;
  password: string;
  email:string;
  surname :string;
  country : string;

  constructor(public navCtrl: NavController,
              private fire:AngularFireAuth,
              private alertCtrl: AlertController,
              public navParams: NavParams,
              public aut: AngularFireAuth,
              private storage: Storage,
              public db: AngularFireDatabase,
              private googlePlus: GooglePlus,
              public menu: MenuController,
              public loadingCtrl: LoadingController) {

    this.email = aut.auth.currentUser.email;
    this.menu.enable(true);

  }

  showSearch() {
    this.navCtrl.setRoot(MapsPage);
  }

  enviarpass(){
    return this.fire.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        this.alertReset(data);

      });
  }
  alertReset(message: string) {

    this.alertCtrl.create({
      // el titulo de la ventana
      title: 'Look your email',
      // el (message) es lo que recoge tanto el error como el verdadero
      subTitle: message,
      // el boton para quitarlo
      buttons: ['OK']
    }).present();
  }

  enviar() {

    this.db.database.ref('usuario/' + this.email.split(".")).set({

      name: this.name,
      surname: this.surname,
      country:this.country,

    });


    this.loadingCtrl.create({
      // el texto que saldra
      content: 'Enviando Información',
      // duración
      duration: 3000,
      // que sea visible
      dismissOnPageChange: true

    }).present();
  }


  async logout(): Promise<any> {
    if (this.aut.auth.currentUser != null) {
      this.storage.remove('likedCoins');
      this.navCtrl.setRoot(LoginPage);
      this.googlePlus.logout();
      return this.aut.auth.signOut();
    }
  }
}
