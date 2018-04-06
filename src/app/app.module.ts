import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {PrincipalPage} from '../pages/principal/principal';
import {LoginPage} from '../pages/login/login';
import {TipoMonedaPage} from '../pages/tipo-moneda/tipo-moneda';
import {RegistroPage} from "../pages/registro/registro";
import {TiendaPage} from "../pages/tienda/tienda";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import { DataProvider } from '../providers/data/data';

import { HttpClientModule} from "@angular/common/http";
import { IonicStorageModule} from "@ionic/storage";
import { ServiceProvider } from '../providers/service/service';

var FIREBASE = {

  apiKey: "AIzaSyCCfULER0t6TeSaKGloMhoX_kv4IcMgkLE",
  authDomain: "proyectcriptomoneda.firebaseapp.com",
  databaseURL: "https://proyectcriptomoneda.firebaseio.com",
  projectId: "proyectcriptomoneda",
  storageBucket: "proyectcriptomoneda.appspot.com",
  messagingSenderId: "95318396732"

};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PrincipalPage,
    TipoMonedaPage,
    RegistroPage,
    TiendaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  // Para que se muestre las ventanas
  entryComponents: [
    MyApp,
    LoginPage,
    PrincipalPage,
    TipoMonedaPage,
    RegistroPage,
    TiendaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    ServiceProvider
  ]
})
export class AppModule {}
