import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICompany} from '../../inteface/company';
import { NgForm } from '@angular/forms';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css']
})
export class InlineEditingComponent implements OnInit {
  iCompany: ICompany;
  companyList: any;
  isLoader: boolean; 
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
  }
  closeSidepanel() {
  }


  getCompany() {
    this.isLoader = false;
    this.apiService.getCompany().subscribe((res: any) => {
      this.companyList = res;
      this.companyList.forEach(element => {
        // tslint:disable-next-line:no-string-literal
        element['isEdit'] = false;
      });
      this.isLoader = false;
    }, error => {
      this.isLoader = false;
    });
  }

  close(data) {
    data.isEdit = false;
  }
  getCompanyById(data) {
    data.isEdit = true;
    this.initiCompany();
  }
  saveCompany(comp) {
      this.http.post('http://storeapi.gerasim.in/api/Company/addCompany', comp).subscribe((result: any) => {
        this.getCompany();
      }, error => {
        console.log('error' + error);
        this.isLoader = false;
      });
  }
  updateCompany() {
    this.http.put('http://storeapi.gerasim.in/api/Company/updateCompany', this.iCompany).subscribe((result: any) => {
      this.getCompany(); 
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
