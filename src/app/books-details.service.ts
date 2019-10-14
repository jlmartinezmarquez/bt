import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksDetailsService {

  constructor(private http: HttpClient) {
  }

  //TODO: Don't use "any"
  public getJsonBooks(): Observable<any> {
    return this.http.get("./assets/spain.json");
  }
}
