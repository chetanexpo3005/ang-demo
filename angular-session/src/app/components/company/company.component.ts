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
  companyList: any;
  isLoader: boolean;
  isSidePanel: boolean;
  constructor(private http: HttpClient) {
    this.companyList = [];
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
  closeSidepanel() {
    this.isSidePanel = false;
  }
  getCompany() {
    this.isLoader = false;
    this.http.get('http://storeapi.gerasim.in/api/Company/GetCompany').subscribe((result: any) => {
      this.companyList = result;
      this.isLoader = false;
    }, error => {
      console.log('error' + error);
      this.isLoader = false;
    });
  }
  getCompanyById(companyId) {
    this.initiCompany();
    this.http.get('http://storeapi.gerasim.in/api/Company/GetCompanyById/' + companyId).subscribe((result: any) => {
      this.iCompany = result;
      this.getCompany();
      this.isSidePanel =  true;
    }, error => {
      console.log('error' + error);
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
  updateCompany() {
    this.http.put('http://storeapi.gerasim.in/api/Company/updateCompany', this.iCompany).subscribe((result: any) => {
      this.getCompany();
      this.isSidePanel =  false;
    }, error => {
      console.log('error' + error);
      this.isLoader = false;
    });
  }
  deleteCompany(data) {
    this.http.post('http://storeapi.gerasim.in/api/Company/deleteCompany', data).subscribe((result: any) => {
      this.getCompany();
    }, error => {
      console.log('error' + error);
    });
  }
}



