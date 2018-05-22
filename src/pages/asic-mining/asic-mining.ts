import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-asic-mining',
  templateUrl: 'asic-mining.html',
})
export class AsicMiningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsicMiningPage');
  }

  backPage(){
    this.navCtrl.setRoot(TutorialPage);
  }
}
