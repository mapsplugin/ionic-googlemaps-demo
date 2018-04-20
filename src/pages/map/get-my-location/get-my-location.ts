import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  ILatLng, CameraPosition, Marker
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: "page-get-my-location",
  templateUrl: "get-my-location.html"
})
export class GetMyLocationPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");
  }

  onButtonClick(event) {
    this.map.getMyLocation().then((location) => {
      let msg: string = [
        "Current your location:\n",
        "latitude:" + location.latLng.lat,
        "longitude:" + location.latLng.lng,
        "speed:" + location.speed,
        "time:" + location.time,
        "bearing:" + location.bearing
      ].join("\n");

      let marker: Marker = this.map.addMarkerSync({
        position: location.latLng,
        title: msg
      });

      let position: CameraPosition<ILatLng> = {
        target: marker.getPosition(),
        zoom: 16
      };

      // move the map's camera to position
      this.map.animateCamera(position).then(() => {
        marker.showInfoWindow();
      });
    });

  }
}
