import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strctural-ngfor',
  templateUrl: './strctural-ngfor.component.html',
  styleUrls: ['./strctural-ngfor.component.css']
})
export class StrcturalNgforComponent implements OnInit {

  cityList: string[];
  city: string;
  constructor() {
    this.city = '';
    this.cityList = [];
     
  }

  addCity() {
    debugger;
    this.cityList.push(this.city);
    this.city = '';
  }
  getCityList() {
    const stateList = ['Mh', 'Goa', 'Punjab'];
    return stateList;
  }
  ngOnInit() {
  }

}
