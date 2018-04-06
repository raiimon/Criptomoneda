/**
 *  Ramon Casaña Martinez
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';

import {TipoMonedaPage} from "../tipo-moneda/tipo-moneda";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  email: string;

  detailToggle = [];
  objectKeys = Object.keys;
  coins: Object;
  details: Object;
  likedCoins = [];
  chart = [];


  constructor(public loading: LoadingController,
              private storage: Storage,
              private data: DataProvider,
              public navCtrl: NavController,
              public navParams: NavParams) {

    this.storage.remove('likedCoins');
    // saca el correo de la base de datos

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  ionViewWillEnter() {
    this.refreshCoins();
  }

  refreshCoins() {

    let loader = this.loading.create({
      content: 'Refreshing..',
      spinner: 'bubbles'
    });

    loader.present().then(() => {

      this.storage.get('likedCoins').then((val) => {

        // If the value is not set, then:
        if(!val) {
          this.likedCoins.push('BTC','ETH','LTC');
          this.storage.set('likedCoins', this.likedCoins);

          this.data.getCoins(this.likedCoins)
            .subscribe(res => {
              this.coins = res;
              loader.dismiss();
            })
        }
        // It's set
        else {
          this.likedCoins = val;

          this.data.getCoins(this.likedCoins)
            .subscribe(res => {
              this.coins = res;
              loader.dismiss();
            })
        }

      });

    });

  }

  coinDetails(coin,index) {

    if (this.detailToggle[index])
      this.detailToggle[index] = false;
    else {
      this.detailToggle.fill(false);
      this.data.getCoin(coin)
        .subscribe(res => {
          this.details = res['DISPLAY'][coin]['USD'];

          this.detailToggle[index] = true;

          this.data.getChart(coin)
            .subscribe(res => {

              console.log(res);

              let coinHistory = res['Data'].map((a) => (a.close));

              setTimeout(()=> {
                this.chart[index] = new Chart('canvas'+index, {
                  type: 'line',
                  data: {
                    labels: coinHistory,
                    datasets: [{
                      data: coinHistory,
                      borderColor: "#3333ba",
                      fill: false
                    }
                    ]
                  },
                  options: {
                    tooltips: {
                      callbacks: {
                        label: function(tooltipItems, data) {
                          return "$" + tooltipItems.yLabel.toString();
                        }
                      }
                    },
                    responsive: true,
                    legend: {
                      display: false
                    },
                    scales: {
                      xAxes: [{
                        display: false
                      }],
                      yAxes: [{
                        display: false
                      }],
                    }
                  }
                });
              }, 250);

            });


        });


    }

  }

  swiped(index) {
    this.detailToggle[index] = false;
  }

  // para borrar las monedas que tengamos en la lista

  removeCoin(coin) {
    this.detailToggle.fill(false);

    this.likedCoins = this.likedCoins.filter(function(item) {
      return item !== coin
    });

    this.storage.set('likedCoins', this.likedCoins);

    // el tempo de espera

    setTimeout(() => {
      this.refreshCoins();
    }, 300);
  }
  showSearch() {
    this.navCtrl.push(TipoMonedaPage);
  }

}
