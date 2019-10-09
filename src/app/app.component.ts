import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction } from 'angular-maps';

let PathData: Array<any> = null;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  private _markerTypeId = MarkerTypeId;
  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 6
  };

  private _box: IBox = {
    maxLatitude: 60,
    maxLongitude: 40,
    minLatitude: 35,
    minLongitude: -3
  };

  private _markers1: Array<ILatLong> = new Array<ILatLong>();
  //private _markers2: Array<ILatLong> = new Array<ILatLong>();
  //private _markers3: Array<ILatLong> = new Array<ILatLong>();
  private _layers: Array<any> = new Array<any>(
    {
      markers: this._markers1,
      id: 0,
      visible: true,
      location: "Madrid",
      title: "Winter in Madrid",
      author: "C.J. Sansom",
      goodReadsLink: "https://www.goodreads.com/book/show/891671.Winter_in_Madrid"
    }
    //{ markers: this._markers2, id: 1, visible: true },
    //{ markers: this._markers3, id: 2, visible: true }
  );

  constructor() {
    this._markers1.push({ latitude: 40.416775, longitude: -3.703790 })
    //for (let i: number = 0; i < 20; i++) {
    //  this._markers1.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random() });
    //}
    //for (let i: number = 0; i < 10; i++) {
    //  this._markers2.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random() });
    //}
    //for (let i: number = 0; i < 15; i++) {
    //  this._markers3.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random() });
    //}
  }

  private _goToLink(url: string) {
    window.open(url, "_blank");
  }

  private _click(layerindex: number, markerindex: number) {
    console.log(`Marker ${markerindex} of layer ${layerindex} says: hello world...`);
  }

  private _toggleLayer(index: number) {
    let l: any = this._layers.find(l => l.id == index);
    if (l != null) {
      l.visible = !l.visible;
    }
  }
}
