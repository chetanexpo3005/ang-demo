import { Component, OnInit } from '@angular/core';
// import this to hit method
import { HttpClient } from '@angular/common/http';
import {ICompany} from '../../inteface/company';
import { NgForm } from '@angular/forms';
import {ApiService} from '../../services/api.service';
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
  panCardPattern = '[A-Z]{5}[0-9]{4}[A-Z]{1}';
  constructor(private http: HttpClient, private apiService: ApiService) {
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
    const name =  this.apiService.getPieValue();
  }
  addCompany() {
    this.isSidePanel =  true;
  }
  closeSidepanel() {
    this.isSidePanel = false;
  }


  getCompany() {
    this.isLoader = false;
    this.apiService.getCompany().subscribe((res: any) => {
      this.companyList = res;
      this.isLoader = false;
    }, error => {
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
  saveCompany(form?: NgForm) {
    if (!form.invalid) {
      this.http.post('http://storeapi.gerasim.in/api/Company/addCompany', this.iCompany).subscribe((result: any) => {
        this.getCompany();
        this.isSidePanel =  false;
      }, error => {
        console.log('error' + error);
        this.isLoader = false;
      });

    }
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



