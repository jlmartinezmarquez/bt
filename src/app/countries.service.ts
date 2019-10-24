import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  //TODO: Don't use any
  public getCountriesByContinent(continent: string): Observable<any> {
    return this.http.get("./assets/countries/" + continent.toLowerCase() + ".json");
  }
}
