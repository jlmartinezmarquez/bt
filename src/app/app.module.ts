import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {
  MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,
  DocumentRef, MapServiceFactory,
  BingMapAPILoaderConfig, BingMapAPILoader,
  GoogleMapAPILoader, GoogleMapAPILoaderConfig
} from 'angular-maps';
import { App } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoBoxComponent } from './info-box/info-box.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { WhereYouGoingComponent } from './where-you-going/where-you-going.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const useBing = true;

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    useBing ? MapModule.forRootBing() : MapModule.forRootGoogle(),
    NgxSmartModalModule.forRoot(),
    NgSelectModule,
    FormsModule
  ],
  declarations: [App, InfoBoxComponent, WhereYouGoingComponent],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory : GoogleMapServiceProviderFactory
    }
  ],
  bootstrap: [App]
})
export class AppModule { }

export function BingMapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j";
  // replace with your bing map key
  // the usage of this key outside this plunker is illegal. 
  bc.branch = "experimental";
  // to use the experimental bing brach. There are some bug fixes for
  // clustering in that branch you will need if you want to use 
  // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

export function GoogleMapServiceProviderFactory() {
  const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
  gc.apiKey = 'AIzaSyDe2QqXrbtaORvL-I0WHpiI72HxtfTz5Zo';
  // replace with your google map key
  // the usage of this key outside this plunker is illegal. 
  gc.enableClustering = true;
  return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}


