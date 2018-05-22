import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoMonedaPage } from './tipo-moneda';

@NgModule({
  declarations: [
    TipoMonedaPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoMonedaPage),
  ],
})
export class TipoMonedaPageModule {}
