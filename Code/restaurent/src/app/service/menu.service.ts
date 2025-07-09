import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl: string = "http://localhost:3000/menu"

  constructor(private http: HttpClient) { }


  getAllMenu(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveMenu(menu: Menu): Observable<any> {

    return this.http.post(this.baseUrl, menu);

  }

  deleteMenu(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id);

  }

  getMenuById(id: string): Observable<any> {

    return this.http.get(this.baseUrl + '/' + id);

  }

  updateMenu(id: string, menu: Menu): Observable<any> {

    return this.http.put(this.baseUrl +'/'+ id, menu);

  }


}
