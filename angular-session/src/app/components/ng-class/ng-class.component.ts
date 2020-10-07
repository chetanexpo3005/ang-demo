import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isSidepanel: boolean;
  companyList: string[];
  company: string;
  constructor(private apiService: ApiService) {
    this.isSidepanel = false;
    this.companyList = [];
  }

  ngOnInit() {
  }

  getCompany() {
    this.apiService.getCompany().subscribe((res: any) => {
      debugger;
      const data = res;
    }, error => {
    });
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
