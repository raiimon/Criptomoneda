import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpuMiningPage } from './gpu-mining';

@NgModule({
  declarations: [
    GpuMiningPage,
  ],
  imports: [
    IonicPageModule.forChild(GpuMiningPage),
  ],
})
export class GpuMiningPageModule {}
