import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-chatcoin',
  templateUrl: 'chatcoin.html',
})
export class ChatcoinPage {

  @ViewChild(Content) content: Content;

  message: string = '';
  pageInit: string = '';
  chatSubscription;
  messages: object[] = [];
  parameter1: string = '';
  email: string;
  names: any = [];
  name: string;

  constructor(public db: AngularFireDatabase,
              public navCtrl: NavController,
              public aut: AngularFireAuth,
              public navParams: NavParams,
              public data: AngularFireDatabase) {

    this.email = aut.auth.currentUser.email;

    this.data.list('usuario/' + this.email.split(".")).snapshotChanges().subscribe((speakers) => {
      speakers.map((speaker) => {
        if (speaker.key == 'name') {
          this.names = speaker.payload.val();
        }
      });
      this.mensaje();
    });

    //asdasd
    this.parameter1 = navParams.get('param1');

    //asdasd

    // console.log(this.navParams);

    //dfgdfg
    if (this.parameter1 == 'coin') {
      this.chatSubscription = this.db.list('/chat/coin/chats').snapshotChanges().subscribe(data => {
        this.messages = data;
        this.scrollToBottom();
      });
    } else if (this.parameter1 == 'gpu') {
      this.chatSubscription = this.db.list('/chat/grafic/chats').snapshotChanges().subscribe(data => {
        this.messages = data;
        this.scrollToBottom();
      });
    } else if (this.parameter1 == 'asic') {
      this.chatSubscription = this.db.list('/chat/asic/chats').snapshotChanges().subscribe(data => {
        this.messages = data;
        this.scrollToBottom();
      });
    }

  }

  mensaje() {

    if (this.parameter1 == 'coin') {
      this.db.list('/chat/coin/chats').push({
        specialMessage: true,
        message: `${this.names}  has joined`
      });
      console.log(JSON.stringify("ramon"+this.names));

    } else if (this.parameter1 == 'gpu') {
      this.db.list('chat/grafic/chats').push({
        specialMessage: true,
        message: `${this.names}  has joined`
      });

    } else if (this.parameter1 == 'asic') {
      this.db.list('/chat/asic/chats').push({
        specialMessage: true,
        message: `${this.names}  has joined`
      });

    }
  }
  sendMessage() {

    //dfgdfg
    if (this.parameter1 == 'coin') {
      this.db.list('/chat/coin/chats').push({
        username: this.names,
        email: this.email,
        message: this.message
      });
      //
      this.message = '';
      //
      this.onFocus();
    } else if (this.parameter1 == 'gpu') {
      this.db.list('chat/grafic/chats').push({
        username: this.names,
        email: this.email,
        message: this.message
      });
      //
      this.message = '';
      //
      this.onFocus();
    } else if (this.parameter1 == 'asic') {
      this.db.list('/chat/asic/chats').push({
        username: this.names,
        email: this.email,
        message: this.message
      });
      this.message = '';
      this.onFocus();
    }
  }

  onFocus() {
    this.content.resize();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 200)
  }


  ionViewWillLeave() {


    if (this.parameter1 == 'coin') {
      this.chatSubscription.unsubscribe();
      this.db.list('/chat/coin/chats').push({
        specialMessage: true,
        message: `${this.names} has left chat`
      });

    } else if (this.parameter1 == 'gpu') {
      this.chatSubscription.unsubscribe();
      this.db.list('chat/grafic/chats').push({
        specialMessage: true,
        message: `${this.names} has left chat`
      });

    } else if (this.parameter1 == 'asic') {
      this.chatSubscription.unsubscribe();
      this.db.list('/chat/asic/chats').push({
        specialMessage: true,
        message: `${this.names} has left chat`
      });
    }
  }
}
