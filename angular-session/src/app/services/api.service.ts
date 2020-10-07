import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pieValue: number;
  constructor(private httpClient: HttpClient) {
    this.pieValue = 3.14;
  }

  getCompany(): Observable<any> {
    return this.httpClient.get<any>('http://storeapi.gerasim.in/api/Company/GetCompany');
  }

  getPieValue() {
    return this.pieValue;
  }
}
