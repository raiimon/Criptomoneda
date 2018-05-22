import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { GpuMiningPage } from '../gpu-mining/gpu-mining';

@IonicPage()
@Component({
  selector: 'page-eth',
  templateUrl: 'eth.html',
})
export class EthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EthPage');
  }

  sendMiningPage(){
    this.navCtrl.push(GpuMiningPage);
  }
  
  backPage(){
    this.navCtrl.setRoot(TutorialPage);
  }
}
