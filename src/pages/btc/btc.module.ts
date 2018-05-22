import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BtcPage } from './btc';

@NgModule({
  declarations: [
    BtcPage,
  ],
  imports: [
    IonicPageModule.forChild(BtcPage),
  ],
})
export class BtcPageModule {}
