import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiBaseUrl+'/user/';

  constructor(private http:HttpClient){ }


  getAllEmp():Observable<User[]>{

    return this.http.get<User[]>(this.baseUrl)
    
  }
  
}
