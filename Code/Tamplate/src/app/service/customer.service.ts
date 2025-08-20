import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.apiBaseUrl + '/customer/';

  constructor(private http: HttpClient, private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }




  registerJobSeeker(user: any, jobSeeker: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('customer', JSON.stringify(jobSeeker));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl, formData);
  }

  getProfile(): Observable<Customer> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', 'Bearer ' + token);
        console.log(headers);
      }
    }

    return this.http.get<Customer>(`${environment.apiBaseUrl}/customer/profile`, { headers });
  }
  
}
