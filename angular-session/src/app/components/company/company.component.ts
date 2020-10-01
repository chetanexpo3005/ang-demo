import { Component, OnInit } from '@angular/core';
// import this to hit method
import { HttpClient } from '@angular/common/http';
import {ICompany} from '../../inteface/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  iCompany: ICompany;
  areaList: any;
  isLoader: boolean;
  isSidePanel: boolean;
  constructor(private http: HttpClient) {
    this.areaList = [];
    this.isLoader = true;
    this.initiCompany();
  }
  initiCompany() {
    this.iCompany = {
      CompanyId: 0,
      CompanyName: ''
    };
  }

  ngOnInit() {
    this.getCompany();
  }
  addCompany() {
    this.isSidePanel =  true;
  }
  getCompany() {
    this.http.get('http://storeapi.gerasim.in/api/Company/GetCompany').subscribe((result: any) => {
      this.areaList = result;
      this.isLoader = false;
    }, error => {
      console.log('error' + error);
      this.isLoader = false;
    });
  }
  saveCompany() {
    this.http.post('http://storeapi.gerasim.in/api/Company/addCompany', this.iCompany).subscribe((result: any) => {
      this.getCompany();
      this.isSidePanel =  false;
    }, error => {
      console.log('error' + error);
      this.isLoader = false;
    });
  }
}



