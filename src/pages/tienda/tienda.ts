import { Component } from '@angular/core';
import {IonicPage, NavController, MenuController} from 'ionic-angular';
import {TiendagraficPage} from "../tiendagrafic/tiendagrafic";
import {TiendacoinPage} from "../tiendacoin/tiendacoin";
import {TiendasicPage} from "../tiendasic/tiendasic";


@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})

export class TiendaPage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController

    ) {
      this.menu.enable(true);

  }

  grafic(){

    this.navCtrl.setRoot(TiendagraficPage);
  }
  coin(){

    this.navCtrl.setRoot(TiendacoinPage);
  }
  asic(){

    this.navCtrl.setRoot(TiendasicPage);
  }
}
