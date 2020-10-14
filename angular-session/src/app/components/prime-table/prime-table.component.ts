import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/inteface/company';
import { ApiService } from 'src/app/services/api.service';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.css']
})
export class PrimeTableComponent implements OnInit {
  companyList: ICompany[];
  value: any;
  cities1: any[];

  cities2: any[];

  selectedCity1: any;

  selectedCity2: any;
  selectedCar: string;

  groupedCars: SelectItemGroup[];
  constructor(private apiService: ApiService) {
    this.companyList = [];
    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.groupedCars = [
      {
        label: 'Germany',
        items: [
          { label: 'Audi', value: 'Audi' },
          { label: 'BMW', value: 'BMW' },
          { label: 'Mercedes', value: 'Mercedes' }
        ]
      },
      {
        label: 'USA',
        items: [
          { label: 'Cadillac', value: 'Cadillac' },
          { label: 'Ford', value: 'Ford' },
          { label: 'GMC', value: 'GMC' }
        ]
      },
      {
        label: 'Japan',
        items: [
          { label: 'Honda', value: 'Honda' },
          { label: 'Mazda', value: 'Mazda' },
          { label: 'Toyota', value: 'Toyota' }
        ]
      },
      {
        label: 'India',
        items: [
          { label: 'Maruti', value: 'Maruti' },
          { label: 'Suzuki', value: 'Suzuki' },
          { label: 'Toyota', value: 'Toyota' }
        ]
      }
    ];
  }

  clickEvent() {
    debugger;
  }
  ChangeEvent() {
    debugger;
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
