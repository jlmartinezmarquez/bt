import { Component, OnInit } from '@angular/core';
import { BingApiService } from '../bing-api.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //TODO: Call GoodReads APi from here

}
