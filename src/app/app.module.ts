import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {MyApp} from './app.component';

/*-- Pages de la aplicación --*/

/*-- Login y Registro --*/
import {LoginPage} from '../pages/login/login';
import {RegistroPage} from "../pages/registro/registro";

/*-- Mercado de Crypto y Añadir moneda --*/
import {PrincipalPage} from '../pages/principal/principal';
import {TipoMonedaPage} from '../pages/tipo-moneda/tipo-moneda';

/*-- Ajustes y About --*/
import {AjustesPage} from "../pages/ajustes/ajustes";
import {MapsPage} from "../pages/maps/maps";

/*-- Tienda --*/
import {TiendaPage} from "../pages/tienda/tienda";
import {TiendasicPage} from "../pages/tiendasic/tiendasic";
import {TiendagraficPage} from "../pages/tiendagrafic/tiendagrafic";
import {TiendacoinPage} from "../pages/tiendacoin/tiendacoin";

/*-- Cesta --*/
import {CestaPage} from "../pages/cesta/cesta";

/*-- Chat --*/
import {ChatcoinPage} from "../pages/chatcoin/chatcoin";
/*----------------------------*/

/*-- Tutorial --*/
import {TutorialPage} from "../pages/tutorial/tutorial";
/*----------------------------*/
import {BtcPage} from '../pages/btc/btc';
import {EthPage} from '../pages/eth/eth';

/*-- Librerías --*/
import {StatusBar} from '@ionic-native/status-bar';
import {EmailComposer} from '@ionic-native/email-composer';

/*-- Firebase --*/
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";

/*-- Nativas de Ionic --*/
import {IonicStorageModule} from "@ionic/storage";
import {DataProvider} from "../providers/data/data";
import {HttpClientModule} from '@angular/common/http';
import {SplashScreen} from '@ionic-native/splash-screen';
import { GooglePlus } from '@ionic-native/google-plus';
import {CheckoutPage} from "../pages/checkout/checkout";
import { GpuMiningPage } from '../pages/gpu-mining/gpu-mining';
import { AsicMiningPage } from '../pages/asic-mining/asic-mining';
/*--------------*/

/* Variable que obtiene el Token de Firebase para poder autenticar con la base de datos. */
 var FIREBASE = {
   apiKey: "AIzaSyCCfULER0t6TeSaKGloMhoX_kv4IcMgkLE",
   authDomain: "proyectcriptomoneda.firebaseapp.com",
   databaseURL: "https://proyectcriptomoneda.firebaseio.com",
   projectId: "proyectcriptomoneda",
   storageBucket: "proyectcriptomoneda.appspot.com",
   messagingSenderId: "95318396732"

 };

/* Declaramos las pages */
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PrincipalPage,
    TipoMonedaPage,
    RegistroPage,
    AjustesPage,
    TiendaPage,
    CestaPage,
    MapsPage,
    TiendagraficPage,
    TiendacoinPage,
    ChatcoinPage,
    TiendasicPage,
    TutorialPage,
    CheckoutPage,
    BtcPage,
    EthPage,
    GpuMiningPage,
    AsicMiningPage
    ],
  /* Importamos las librerías, principalmente de Firebase */
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
    /* Se usa para mostrar las ventanas */
  entryComponents: [
    MyApp,
    LoginPage,
    PrincipalPage,
    TipoMonedaPage,
    RegistroPage,
    AjustesPage,
    TiendaPage,
    CestaPage,
    MapsPage,
    TiendagraficPage,
    TiendacoinPage,
    ChatcoinPage,
    TiendasicPage,
    TutorialPage,
    CheckoutPage,
    BtcPage,
    EthPage,  
    GpuMiningPage,
    AsicMiningPage
  
  ],
  /* Los Providers son "adapters" entre la información y aquí los declaramos */
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    GooglePlus,
    EmailComposer
  ]
})
export class AppModule {}
