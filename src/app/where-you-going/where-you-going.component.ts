import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-where-you-going',
  templateUrl: './where-you-going.component.html',
  styleUrls: ['./where-you-going.component.css'],
  providers: [CountriesService]
})
export class WhereYouGoingComponent implements OnInit {

  private _continents = [
    { id: 1, name: 'Europe' },
    { id: 2, name: 'America' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Africa' },
    { id: 5, name: 'Oceania' }
  ];

  private _showCountries = false;
  private _countries = [];
  private _countriesService;

  constructor(countriesService: CountriesService, public ngxSmartModalService: NgxSmartModalService) {
    this._countriesService = countriesService;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  selectedContinent(event) {
    this._countriesService.getCountriesByContinent(event.name).subscribe(c => {
      var continentItem = JSON.parse(JSON.stringify(c));
      this._showCountries = true;
      this._countries = continentItem.countries;
    })
  }

  selectedCountry(event) {

    this.ngxSmartModalService.getModal('whereModal').setData(event);

    this.ngxSmartModalService.getModal('whereModal').close();
  }
}

