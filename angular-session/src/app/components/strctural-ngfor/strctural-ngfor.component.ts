import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-strctural-ngfor',
  templateUrl: './strctural-ngfor.component.html',
  styleUrls: ['./strctural-ngfor.component.css']
})
export class StrcturalNgforComponent implements OnInit {

  cityList: string[];
  city: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.city = '';
    this.cityList = [];
  }

  addCity() {
    this.cityList.push(this.city);
    this.city = '';
  }
  getCityList() {
    const stateList = ['Mh', 'Goa', 'Punjab'];
    return stateList;
  }
  ngOnInit() {
    debugger;
    const routeData = this.activeRoute;
  //   this.activatedroute.data.subscribe(data => {
  //     this.product=data;
  // })
  }

}
