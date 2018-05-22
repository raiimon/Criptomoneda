import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { CestaPage } from "../cesta/cesta";
import { ChatcoinPage } from '../chatcoin/chatcoin';

/**
 * Ramon casaña martinez
 */


@IonicPage()
@Component({
  selector: 'page-tiendasic',
  templateUrl: 'tiendasic.html',
})
export class TiendasicPage {

  arraySpeakers: any = [];
  all: any = [];
  addcest: any = [];



  // para hacer luego el destroid

  peticion4: any;
  peticion5: any;
  peticion6: any;
  peticion7: any;
  peticion8: any;
  peticion9: any;


  constructor(public data: AngularFireDatabase,
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingCtrl: LoadingController) {

    this.registro();
    this.menu.enable(true);


  }

  registro() {
    // para que salga un toast de carga
    this.loadingCtrl.create({
      // el texto que saldra
      content: 'Entrando espere...',
      // duración
      duration: 2000,
      // que sea visible
      dismissOnPageChange: true

    }).present();
    // pasamos a otra ventana
    this.all = [];
    this.entrarTienda();
  }

  entrarTienda() {
    this.all = [];
    this.arraySpeakers = [];

    this.peticion4 = this.data.list('menu/maquinas').snapshotChanges().subscribe((speakers) => {
      speakers.map((speaker) => {

        this.arraySpeakers.push(speaker.payload.val());

        this.all.push(speaker.payload.val());
      });
    });
  }


  // para que pare de suscribir las peticiones

  ngOnDestroy() {

    if (this.peticion4) this.peticion4.unsubscribe();

  }

  doRefresh(refresher) {
    this.entrarTienda();
    setTimeout(() => {

      refresher.complete();
    }, 2000);
  }

  searchProduct() {

    this.all = this.arraySpeakers;
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.searchProduct();

    // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.all = this.all.filter((all) => {
        console.log(JSON.stringify(all));

        return (all.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  add(add) {
    this.addcest.push(add);
    console.log(JSON.stringify(add));
  }

  cesta() {
    // cuando pasamos a la paguina cesta, pasamos un parametro (cesta) con el array addcest
    this.navCtrl.setRoot(CestaPage, { cesta: this.addcest });
  }
  chatasic() {
    this.navCtrl.push(ChatcoinPage, {
      param1: 'asic'
    });
  }
}

