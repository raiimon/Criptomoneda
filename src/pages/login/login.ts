
import {Component, ViewChild, NgZone} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, AlertController,MenuController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

// ventanas a las que navegaremos
import {RegistroPage} from "../registro/registro";
import {PrincipalPage} from "../principal/principal";
import { Platform } from 'ionic-angular';
import {GooglePlus} from '@ionic-native/google-plus';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [GooglePlus]

})
export class LoginPage {

  userProfile: any = null;
  provider: any = null;
  credential: any = null;
  zone: NgZone;

  // obtenemos el texto introducido
  @ViewChild('username') user;
  @ViewChild('password') password;

  // agregamos al constructor lo que vamos a necesitar
  constructor(private alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private fire: AngularFireAuth, 
              private googlePlus: GooglePlus,
              public menu: MenuController,
              private platform: Platform) {
                
                this.menu.enable(false);

    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (fire.auth.currentUser == null) {
          this.userProfile = null; 
        } else { 
          this.navCtrl.setRoot(PrincipalPage); 
        }
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registro() {
    // para que salga un toast de carga
    this.loadingCtrl.create({
      // duración
      duration: 3000,
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
      title: 'Look your email',
      // el (message) es lo que recoge tanto el error como el verdadero
      subTitle: message,
      // el boton para quitarlo
      buttons: ['OK']
    }).present();
  }

loginUser(): void {
    this.googlePlus.login({
      'webClientId': '95318396732-4puhn1ounh6lck7rnmh369nfd4fc1vfn.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {
          console.log("Firebase success: " + JSON.stringify(success));
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: ", err));

      this.navCtrl.setRoot( PrincipalPage );

  }

async webGoogleLogin(): Promise<void> {

  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.fire.auth.signInWithPopup(provider);

  } catch(err) {
    console.log(err)
  }
}

   googleLogin() {
    if (this.platform.is("cordova")) {
      this.loginUser();
    } else {
      this.webGoogleLogin();
    }
  }
}
