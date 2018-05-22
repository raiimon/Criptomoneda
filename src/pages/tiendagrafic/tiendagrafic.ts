import {Component} from '@angular/core';
import {FabContainer, IonicPage, LoadingController, NavController, MenuController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {CestaPage} from "../cesta/cesta";
import { ChatcoinPage } from '../chatcoin/chatcoin';

/**
 * Ramon casaña martinez
 */

@IonicPage()
@Component({
  selector: 'page-tiendagrafic',
  templateUrl: 'tiendagrafic.html',
})
export class TiendagraficPage {


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
    this.all=[];
    this.entrarTienda();
  }


  ram(all, fab: FabContainer){

    this.all = [];
    this.peticion5 = this.data.list('filtro/ram').snapshotChanges().subscribe((ram) => {
      ram.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }
  disco(all, fab: FabContainer){

    this.all = [];
    this.peticion6 = this.data.list('filtro/disco').snapshotChanges().subscribe((disco) => {
      disco.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }
  placa(all, fab: FabContainer){

    this.all = [];
    this.peticion7 = this.data.list('filtro/placa').snapshotChanges().subscribe((placa) => {
      placa.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }
  procesador(all, fab: FabContainer){

    this.all = [];
    this.peticion8 = this.data.list('filtro/cpu').snapshotChanges().subscribe((cpu) => {
      cpu.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }
  grafica(all, fab: FabContainer){

    this.all = [];
    this.peticion9 = this.data.list('filtro/graficas').snapshotChanges().subscribe((grafica) => {
      grafica.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }

// para que pare de suscribir las peticiones

  ngOnDestroy() {


    if (this.peticion4) this.peticion4.unsubscribe();
    if (this.peticion5) this.peticion5.unsubscribe();
    if (this.peticion6) this.peticion6.unsubscribe();
    if (this.peticion7) this.peticion7.unsubscribe();
    if (this.peticion8) this.peticion8.unsubscribe();
    if (this.peticion9) this.peticion9.unsubscribe();
  }

  searchProduct() {

    this.all = this.arraySpeakers;
  }


  entrarTienda() {

    this.all = [];
    this.arraySpeakers = [];
    this.peticion4 = this.data.list('menu/minado/lista').snapshotChanges().subscribe((speakers) => {
      speakers.map((speaker) => {

        this.arraySpeakers.push(speaker.payload.val());

        this.all.push(speaker.payload.val());
      });
    });
  }
  doRefresh(refresher) {
    this.entrarTienda();
    setTimeout(() => {

      refresher.complete();
    }, 2000);
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
    this.navCtrl.setRoot(CestaPage, {cesta: this.addcest});
  }
  chatgrafic() {
    this.navCtrl.push(ChatcoinPage, {
      param1: 'gpu'
    });
  }

}
