import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cashier } from '../../model/cashier.model';

@Injectable({
  providedIn: 'root'
})
export class CashierService {

  baseUrl: string = "http://localhost:3000/cashier";

  constructor(private http: HttpClient) { }


  getAllcashier(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveCashier(cashier: Cashier): Observable<any> {

    return this.http.post(this.baseUrl, cashier);

  }

  deleteCashier(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id);

  }

  getCashierById(id: string): Observable<any> {

    return this.http.get(this.baseUrl + '/' + id);

  }

  updateCashier(id: string, cashier: Cashier): Observable<any> {

    return this.http.put(this.baseUrl + '/' + id, cashier);

  }

}
