import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/inteface/company';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  companyList: ICompany [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCompany();
  }
  getCompany() {
    this.apiService.getCompany().subscribe((res: any) => {
      this.companyList = res;
      this.getSingleRecord();
    }, error => {
    });
  }


  getSingleRecord() {
    const record = this.companyList.find(temp => temp.CompanyName === 'Redme4');
    const recordList = this.companyList.filter(temp => temp.CompanyName === 'Redme4');

    const singlePropertArray = this.companyList.map(m => m.CompanyName);

    const singlePropertArrayList = this.companyList.map(val => ({
      key1: val.CompanyName,
      key2: val.CompanyId
    }));
    debugger;
    const reverseArray = this.companyList.reverse();
    debugger;
    const oLength = this.companyList.length;
    this.companyList.shift();
    const newLength = this.companyList.length;

    const obj = {
      CompanyId: 0,
      CompanyName: 'ZZZ'
    };
    this.companyList.unshift(obj);
    const newLength2 = this.companyList.length;
    const obj2 = {
      CompanyId: 0,
      CompanyName: '333'
    };
    this.companyList.push(obj2);
    const newLength3 = this.companyList.length;
    debugger;
  }

}
