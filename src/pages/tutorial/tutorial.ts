import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { BtcPage } from '../btc/btc';
import { EthPage } from '../eth/eth';
import { GpuMiningPage } from '../gpu-mining/gpu-mining';
import { AsicMiningPage } from '../asic-mining/asic-mining';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public menu: MenuController) {
    this.menu.enable(true);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }
  crypto() {
    let alert = this.alertCtrl.create({
      title: 'Confirm tutorial',
      message: 'Do you want to see?',
      buttons: [
        {
          text: 'Bitcoin',
          handler: () => {
            this.navCtrl.setRoot(BtcPage);
          }
        },
        {
          text: 'Ethereum',
          handler: () => {
            this.navCtrl.setRoot(EthPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  mining() {
    let alert = this.alertCtrl.create({
      title: 'Confirm tutorial',
      message: 'Do you want to see?',
      buttons: [
        {
          text: 'GPU Mining',
          handler: () => {
            this.navCtrl.setRoot(GpuMiningPage);
          }
        },
        {
          text: 'ASIC Mining',
          handler: () => {
            this.navCtrl.setRoot(AsicMiningPage);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
