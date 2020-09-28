import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isSidepanel: boolean;
  companyList: string[];
  company: string;
  constructor() {
    this.isSidepanel = false;
    this.companyList = [];
   }

  ngOnInit() {
  }
  addCompany() {
    this.isSidepanel = true;
  }
  closeSidepanel() {
    this.isSidepanel = false;
  }

  saveCompany() {
    this.companyList.push(this.company);
    this.company = '';
    this.isSidepanel = false;
  }

}
