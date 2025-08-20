import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private baseUrl = environment.apiBaseUrl + '/employee/';  // তোমার Spring Boot API base url

   constructor(private http: HttpClient, private authService: AuthService,
      @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  // ✅ Get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  // ✅ Get employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}${id}`);
  }

  // ✅ Create employee (with photo upload)
  createEmployee(user: any, employee: Employee, photo?: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('employee', JSON.stringify(employee));
    if (photo) {
      formData.append('photo', photo);
    }
    return this.http.post<any>(this.baseUrl, formData);
  }

  // ✅ Update employee
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}${id}`, employee);
  }

  // ✅ Delete employee
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }

  
}
