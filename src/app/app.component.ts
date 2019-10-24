import { Component, NgModule, VERSION, AfterViewInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, MarkerTypeId, IMapOptions, IBox, WindowRef, DocumentRef, MapServiceFactory, ILatLong, BingMapServiceFactory, ClusterPlacementMode, ClusterClickAction } from 'angular-maps';
import { BooksDetailsService } from './books-details.service';
import { BookDetailsDto } from './dtos/book-details-dto';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { WhereYouGoingComponent } from './where-you-going/where-you-going.component'

let PathData: Array<any> = null;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BooksDetailsService]
})
export class App implements AfterViewInit {
  private _markerTypeId = MarkerTypeId;
  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    //zoom: 6,
    fixedMapPosition: false
  };

  private _box: IBox = {
    maxLatitude: 60,
    maxLongitude: 40,
    minLatitude: 35,
    minLongitude: -3
  };

  //TODO: Don't use "any"
  private _layers: Array<BookDetailsDto>;

  constructor(
    public booksDetailsService: BooksDetailsService,
    public ngxSmartModalService: NgxSmartModalService) {

      booksDetailsService.getJsonBooks().subscribe(book => {

        var booksItem = JSON.parse(JSON.stringify(book));

        this._layers = booksItem.books;

        this.ngxSmartModalService.getModal('whereModal').open();
    })
  }

  private _goToLink(url: string) {
    window.open(url, "_blank");
  }

  ngAfterViewInit() {

    this.ngxSmartModalService.getModal('whereModal').onClose.subscribe((modal: WhereYouGoingComponent) => {

      var selectedCountry = this.ngxSmartModalService.getModal('whereModal').getData();

      //console.log(this._box);

      //TODO: I can't seem to get these values loaded on the map, so it gets focused depending on the new values
      this._box.maxLatitude = selectedCountry.maxLatitude;
      this._box.maxLongitude = selectedCountry.maxLongitude;
      this._box.minLatitude = selectedCountry.minLatitude;
      this._box.minLongitude = selectedCountry.minLongitude;

      //console.log(this._box);

      //var center: ILatLong = {
      //  latitude: 2,
      //  longitude: 3
      //};
      //this._options.center = center;
      //this._options.zoom = 1;




    });
  }
}
