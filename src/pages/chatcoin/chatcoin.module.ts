import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatcoinPage } from './chatcoin';

@NgModule({
  declarations: [
    ChatcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatcoinPage),
  ],
})
export class ChatcoinPageModule {}
