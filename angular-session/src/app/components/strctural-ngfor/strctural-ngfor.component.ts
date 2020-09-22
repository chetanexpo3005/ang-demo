import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strctural-ngfor',
  templateUrl: './strctural-ngfor.component.html',
  styleUrls: ['./strctural-ngfor.component.css']
})
export class StrcturalNgforComponent implements OnInit {

  cityList: string[];
  constructor() {
    this.cityList = [];
    this.cityList.push('Nagpur');
    this.cityList.push('Pune');
    this.cityList.push('Mumbai');
    this.cityList.push('Panji');
    this.cityList.push('Goa');
  }

  getCityList() {
    const stateList = ['Mh', 'Goa', 'Punjab'];
    return stateList;
  }
  ngOnInit() {
  }

}
