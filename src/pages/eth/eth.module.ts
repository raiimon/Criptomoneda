import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EthPage } from './eth';

@NgModule({
  declarations: [
    EthPage,
  ],
  imports: [
    IonicPageModule.forChild(EthPage),
  ],
})
export class EthPageModule {}
