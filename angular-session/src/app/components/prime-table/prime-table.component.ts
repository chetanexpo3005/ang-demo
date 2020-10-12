import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/inteface/company';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.css']
})
export class PrimeTableComponent implements OnInit {
  companyList: ICompany [];
  value: any;
  constructor( private apiService: ApiService) {
    this.companyList = [];
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.apiService.getCompany().subscribe((res: any) => {
      this.companyList = res;
    }, error => {
    });
  }
}
