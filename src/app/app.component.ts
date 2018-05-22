import { Component, ViewChild} from '@angular/core';
import {Nav, Platform, ModalController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';

/* Declaramos las Pages para después mostrarlas en el menú */
import {PrincipalPage} from "../pages/principal/principal";
import {LoginPage} from "../pages/login/login";
import {TiendaPage} from "../pages/tienda/tienda";
import {AjustesPage} from "../pages/ajustes/ajustes";
import {TutorialPage} from '../pages/tutorial/tutorial';
/* ------------------------------------------------------- */

/* Declaramos la librería de SplashScreen y timer para declarar
 y ajustar el tiempo de muestra del Splash Screen */
import {SplashScreen} from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer';
/* ------------------------------------------------------- */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  showSplash = true;
  
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              modalCtrl: ModalController
              
              ) {
    this.initializeApp();

    this.pages = [
      {title: 'Coin Charts', component: PrincipalPage, icon:"md-analytics"},
      {title: 'Shop', component: TiendaPage, icon:"md-cart"},
      {title: 'Mining Tutorials', component: TutorialPage, icon:"md-book"},
      {title: 'Settings', component: AjustesPage, icon:"md-construct"}
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      /* Ajustamos la duración del Splash*/
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(2000).subscribe(() => this.showSplash = false);
    });
  }
  openPage(page) {
        this.nav.setRoot(page.component);
  }
}
