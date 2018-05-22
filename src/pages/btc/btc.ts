import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';

@IonicPage()
@Component({
  selector: 'page-btc',
  templateUrl: 'btc.html',
})
export class BtcPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController) {
                this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BtcPage');
  }

  backPage(){
    this.navCtrl.setRoot(TutorialPage);
  }
}
