import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  employeeList: any;
  constructor() {
    this.employeeList = [
      {
        name: 'AAAA',
        contact: '1122334455',
        attendance: 90
      },
      {
        name: 'BBB',
        contact: '2233445566',
        attendance: 20
      },
      {
        name: 'CCC',
        contact: '5566778899',
        attendance: 100
      },
      {
        name: 'DDD',
        contact: '9988776655',
        attendance: 11
      }
    ];


  }

  ngOnInit() {

  }

}
