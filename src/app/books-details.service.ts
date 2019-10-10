import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksDetailsService {

  constructor() { }

  //TODO: Don't use any
  getBooks(): Array<any> {
    return new Array<any>(
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
  }


}
