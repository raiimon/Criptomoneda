import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';

@IonicPage()
@Component({
  selector: 'page-gpu-mining',
  templateUrl: 'gpu-mining.html',
})
export class GpuMiningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GpuMiningPage');
  }

  backPage(){
    this.navCtrl.setRoot(TutorialPage);
  }
}
