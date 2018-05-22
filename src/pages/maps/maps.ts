import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import { AjustesPage } from '../ajustes/ajustes';

declare  var google: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  @ViewChild('map') mapRef : ElementRef;

  peticion :any;

  arrayinfor: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public data: AngularFireDatabase,
              public menu: MenuController) {
                this.menu.enable(false);
  }

  ionViewDidLoad() {
    this.showMap();
  }


  // Location
  showMap() {

    // Location - lat long
    const location = new google.maps.LatLng(39.5115021, -0.4183711000000585);

    // Map options

    const options = {
      center: location,
      zoom: 10
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);

  }
  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }
  backConfig(){
    this.navCtrl.setRoot(AjustesPage);
  }
}
