import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BingApiService {

  API_KEY = "lNxJIcckbVftEcWD4XHTRA";

  GET_BOOK = "https://www.goodreads.com/search/index.xml?key=" + this.API_KEY + "&q=";

  constructor(private httpClient: HttpClient) { }

  //TODO: Not tested yet
  public getBookByIsbn(isbn: string) {
    return this.httpClient.get(
      `${this.GET_BOOK}${isbn}`
    );
  }
}
