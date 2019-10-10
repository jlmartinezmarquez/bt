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

  //TODO: Store this info to some external file
  private _layers: Array<any> = new Array<any>(
    {
      latitude: 40.416775,
      longitude: -3.703790,
      isbn: "0330411985",
      visible: true,
      location: "Madrid",
      title: "Winter in Madrid",
      author: "C.J. Sansom",
      goodReadsLink: "https://www.goodreads.com/book/show/891671.Winter_in_Madrid",
      coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347651080l/891671.jpg"
    },
    {
      latitude: 37.389091,
      longitude: -5.984459,
      isbn: "9780156029582",
      visible: true,
      location: "Seville",
      title: "The Flanders Panel",
      author: "Arturo Perez-Reverte",
      goodReadsLink: "https://www.goodreads.com/book/show/11031.The_Flanders_Panel",
      coverUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328874807l/11031.jpg"
    }
  );

  constructor() {
  }

  private _goToLink(url: string) {
    window.open(url, "_blank");
  }

}
