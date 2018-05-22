import {Component} from '@angular/core';
import {FabContainer, IonicPage, LoadingController, NavController, MenuController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {CestaPage} from "../cesta/cesta";
import {DataProvider} from "../../providers/data/data";
import {ChatcoinPage} from '../chatcoin/chatcoin';

@IonicPage()
@Component({
  selector: 'page-tiendacoin',
  templateUrl: 'tiendacoin.html',
})
export class TiendacoinPage {

  arraySpeakers: any = [];
  all: any = [];
  addcest: any = [];


  // actualizar las monedas
  moneda: any;
  moneda1: any;
  moneda2: any;
  moneda3: any;
  moneda4: any;
  moneda5: any;
  moneda6: any;
  moneda7: any;
  moneda8: any;
  moneda9: any;
  moneda10: any;
  moneda11: any;
  moneda12: any;
  moneda13: any;
  moneda14: any;

  // para hacer luego el destroid

  peticionre: any;
  peticionBtc: any;
  peticionLtc: any;
  peticionEth: any;
  peticionRip: any;
  peticion: any;
  peticion1: any;
  peticion2: any;
  peticion3: any;
  peticion4: any;
  peticion5: any;
  peticion6: any;
  peticion7: any;
  peticion8: any;
  peticion9: any;
  peticion10: any;
  peticion11: any;
  peticion12: any;
  peticion13: any;
  peticion14: any;


  constructor(public data: AngularFireDatabase,
              public navCtrl: NavController,
              public bitcoin: DataProvider,
              public menu: MenuController,
              public loadingCtrl: LoadingController) {

    this.all = [];
    this.registro();
    this.menu.enable(true);

  }

  actualizar() {

    this.peticion = this.bitcoin.BTC().subscribe(
      (bit) =>{
        this.moneda = bit

        this.data.database.ref('menu/coins/bit1/price').set( this.moneda.EUR);
        this.data.database.ref('filtroMoneda/Bitcoin/bit1/price').set( this.moneda.EUR);

      });

    this.peticion1 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda1 = bit

        this.data.database.ref('menu/coins/bit2/price').set(this.moneda1.EUR * 0.5);
        this.data.database.ref('filtroMoneda/Bitcoin/bit2/price').set(this.moneda1.EUR * 0.5);
      });

    this.peticion2 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda2 = bit

        this.data.database.ref('menu/coins/bit3/price').set(this.moneda2.EUR * 0.1);
        this.data.database.ref('filtroMoneda/Bitcoin/bit3/price').set(this.moneda2.EUR * 0.1);
      });

    this.peticion3 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda3 = bit

        this.data.database.ref('menu/coins/bit4/price').set(this.moneda3.EUR * 0.05);
        this.data.database.ref('filtroMoneda/Bitcoin/bit4/price').set(this.moneda3.EUR * 0.05);
      });

    this.peticion4 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda4 = bit

        this.data.database.ref('menu/coins/bit5/price').set(this.moneda4.EUR * 0.01);
        this.data.database.ref('filtroMoneda/Bitcoin/bit5/price').set(this.moneda4.EUR * 0.01);
      });

    this.peticion5 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda5 = bit

        this.data.database.ref('menu/coins/bit6/price').set(this.moneda5.EUR * 0.005);
        this.data.database.ref('filtroMoneda/Bitcoin/bit6/price').set(this.moneda5.EUR * 0.005);
      });

    this.peticion6 = this.bitcoin.BTC().subscribe(
      (bit) => {
        this.moneda6 = bit

        this.data.database.ref('menu/coins/bit7/price').set(this.moneda6.EUR * 0.001);
        this.data.database.ref('filtroMoneda/Bitcoin/bit7/price').set(this.moneda6.EUR * 0.001);
      });

    this.peticion7 = this.bitcoin.ETH().subscribe(
      (bit) => {
        this.moneda7 = bit

        this.data.database.ref('menu/coins/eth1/price').set(this.moneda7.EUR);
        this.data.database.ref('filtroMoneda/Ethereum/eth1/price').set(this.moneda7.EUR);
      });
    this.peticion8 = this.bitcoin.ETH().subscribe(
      (bit) => {
        this.moneda8 = bit

        this.data.database.ref('menu/coins/eth2/price').set(this.moneda8.EUR * 0.5);
        this.data.database.ref('filtroMoneda/Ethereum/eth2/price').set(this.moneda8.EUR * 0.5);
      });
    this.peticion9 = this.bitcoin.ETH().subscribe(
      (bit) => {
        this.moneda9 = bit

        this.data.database.ref('menu/coins/eth3/price').set(this.moneda9.EUR * 0.1);
        this.data.database.ref('filtroMoneda/Ethereum/eth3/price').set(this.moneda9.EUR * 0.1);
      });
    this.peticion10 = this.bitcoin.ETH().subscribe(
      (bit) => {
        this.moneda10 = bit

        this.data.database.ref('menu/coins/eth4/price').set(this.moneda10.EUR * 0.05);
        this.data.database.ref('filtroMoneda/Ethereum/eth4/price').set(this.moneda10.EUR * 0.05);
      });

    this.peticion11 = this.bitcoin.LTC().subscribe(
      (bit) => {
        this.moneda11 = bit

        this.data.database.ref('menu/coins/ltc1/price').set(this.moneda11.EUR);
        this.data.database.ref('filtroMoneda/Litecoin/ltc1/price').set(this.moneda11.EUR);
      });
    this.peticion12 = this.bitcoin.LTC().subscribe(
      (bit) => {
        this.moneda12 = bit

        this.data.database.ref('menu/coins/ltc2/price').set(this.moneda12.EUR * 0.5);
        this.data.database.ref('filtroMoneda/Litecoin/ltc2/price').set(this.moneda12.EUR * 0.5);
      });
    this.peticion13 = this.bitcoin.LTC().subscribe(
      (bit) => {
        this.moneda13 = bit

        this.data.database.ref('menu/coins/ltc3/price').set(this.moneda13.EUR * 0.1);
        this.data.database.ref('filtroMoneda/Litecoin/ltc3/price').set(this.moneda13.EUR * 0.1);
      });

    this.peticion14 = this.bitcoin.XRP().subscribe(
      (bit) => {
        this.moneda14 = bit
        this.data.database.ref('menu/coins/rip1/price').set(this.moneda14.EUR);
        this.data.database.ref('filtroMoneda/Ripple/rip1/price').set(this.moneda14.EUR);
      });

  }

  BTC(all, fab: FabContainer) {

    this.all = [];

    this.peticionBtc = this.data.list('filtroMoneda/Bitcoin').snapshotChanges().subscribe((ram) => {
      ram.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }

  ETH(all, fab: FabContainer) {

    this.all = [];
    this.peticionEth = this.data.list('filtroMoneda/Ethereum').snapshotChanges().subscribe((disco) => {
      disco.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }

  LTE(all, fab: FabContainer) {

    this.all = [];
    this.peticionLtc = this.data.list('filtroMoneda/Litecoin').snapshotChanges().subscribe((placa) => {
      placa.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

  }

  RIP(all, fab: FabContainer) {

    this.all = [];
    this.peticionRip = this.data.list('filtroMoneda/Ripple').snapshotChanges().subscribe((cpu) => {
      cpu.map((speaker) => {

        this.all.push(speaker.payload.val());
      });
    });
    fab.close();

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
    this.actualizar();
    this.refres();
  }

  refres() {
    this.all = [];
    this.arraySpeakers = [];

    this.peticionre = this.data.list('menu/coins/').snapshotChanges().subscribe((speakers) => {
      speakers.map((speaker) => {

        this.arraySpeakers.push(speaker.payload.val());

        this.all.push(speaker.payload.val());
      });
    });
    this.all = [];
  }


  doRefresh(refresher) {
    this.refres();
    setTimeout(() => {

      refresher.complete();
    }, 2000);
  }

  // para que pare de suscribir las peticiones

  ngOnDestroy() {

    if (this.peticionre) this.peticionre.unsubscribe();

    if (this.peticion) this.peticion.unsubscribe();
    if (this.peticion1) this.peticion1.unsubscribe();
    if (this.peticion2) this.peticion2.unsubscribe();
    if (this.peticion3) this.peticion3.unsubscribe();
    if (this.peticion4) this.peticion4.unsubscribe();
    if (this.peticion5) this.peticion5.unsubscribe();
    if (this.peticion6) this.peticion6.unsubscribe();
    if (this.peticion7) this.peticion7.unsubscribe();
    if (this.peticion8) this.peticion8.unsubscribe();
    if (this.peticion9) this.peticion9.unsubscribe();
    if (this.peticion10) this.peticion10.unsubscribe();
    if (this.peticion11) this.peticion11.unsubscribe();
    if (this.peticion12) this.peticion12.unsubscribe();
    if (this.peticion13) this.peticion13.unsubscribe();
    if (this.peticion14) this.peticion14.unsubscribe();

    if (this.peticionBtc) this.peticionBtc.unsubscribe();
    if (this.peticionEth) this.peticionEth.unsubscribe();
    if (this.peticionLtc) this.peticionLtc.unsubscribe();
    if (this.peticionRip) this.peticionRip.unsubscribe();
  }

  searchProduct() {
    this.all = [];
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
    this.navCtrl.setRoot(CestaPage, {cesta: this.addcest});
  }

  chatcoin() {
    this.navCtrl.push(ChatcoinPage, {
      param1: 'coin'
    });
  }

}
