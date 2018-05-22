import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CestaPage } from './cesta';

@NgModule({
  declarations: [
    CestaPage,
  ],
  imports: [
    IonicPageModule.forChild(CestaPage),
  ],
})
export class CestaPageModule {}
