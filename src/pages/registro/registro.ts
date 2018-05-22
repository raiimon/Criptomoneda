import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage{

  name: string;
  password: string;
  email:string;
  surname :string;


  constructor(private alertCtrl: AlertController,
              private fire: AngularFireAuth,
              public navCtrl: NavController,
              public navParams: NavParams,
              private db : AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  // Creamos la alerta del registo
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){

    this.fire.auth.createUserAndRetrieveDataWithEmailAndPassword(this.email, this.password)
      .then(data =>{

        console.log('got data',data);
        this.alert('Registered');

      })
      .catch(error =>{
        console.log('got an error', error);
        this.alert(error.message);

      });

    this.db.database.ref('usuario/'+this.email.split(".")).set({
      surname: this.surname,
      name: this.name,
      password: this.password,
      email: this.email,
    });
  }

  goBack(){
    this.navCtrl.push(LoginPage);

  }
}
