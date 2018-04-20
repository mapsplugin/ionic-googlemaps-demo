import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-camera-tilt',
  templateUrl: 'get-camera-tilt.html',
})
export class GetCameraTiltPage {
  map: GoogleMap;

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {

    this.map = GoogleMaps.create("map_canvas");

  }

  onButton_click() {
    // Show the current camera tilt.
    let text: string = "tilt: " + this.map.getCameraTilt();

    let alert = this.alertCtrl.create({
      title: 'Current camera tilt',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
