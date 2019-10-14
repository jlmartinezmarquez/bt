import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction } from 'angular-maps';
import { BooksDetailsService } from './books-details.service';
import { BookDetailsDto } from './dtos/book-details-dto';

let PathData: Array<any> = null;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BooksDetailsService]
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

  //TODO: Don't use "any"
  private _layers: Array<BookDetailsDto>;

  constructor(booksDetailsService: BooksDetailsService) {

      booksDetailsService.getJsonBooks().subscribe(book => {

        var booksItem = JSON.parse(JSON.stringify(book));

        this._layers = booksItem.books;
    })
  }

  private _goToLink(url: string) {
    window.open(url, "_blank");
  }

  private _onClick() {
    console.log("clicked");
  }
}
