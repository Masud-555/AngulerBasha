import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../model/emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:3000/emp";


  constructor(private http: HttpClient) { }


  getEmp(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveEmp(emp: Employee): Observable<any> {

    return this.http.post(this.baseUrl, emp);

  }

  deleteEmp(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id);

  }

  getEmpById(id: string): Observable<any> {

    return this.http.get(this.baseUrl + '/' + id);

  }

  updateEmp(id: string, emp: Employee): Observable<any> {

    return this.http.put(this.baseUrl + '/' + id, emp);

  }
}
