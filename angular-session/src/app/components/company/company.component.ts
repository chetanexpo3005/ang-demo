import { Component, OnInit } from '@angular/core';
// import this to hit method
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  areaList: any;
  isLoader: boolean;
  constructor(private http: HttpClient) {
    this.areaList = [];
    this.isLoader = true;
  }

  ngOnInit() {
    this.getCompany();
  }
  getCompany() {
    this.http.get('http://storeapi.gerasim.in/api/Customer/GetArea').subscribe((result: any) => {
      this.areaList = result;
      this.isLoader = false;
    }, error => {
      console.log('error' + error);
      this.isLoader = false;
    });
  }
}
