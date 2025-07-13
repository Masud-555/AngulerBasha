import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTable } from '../../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  baseUrl: string = "http://localhost:3000/book";

  constructor(private http: HttpClient) { }


  getBook(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveBook(book: BookTable): Observable<any> {

    return this.http.post(this.baseUrl, book);

  }

  deleteBook(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id);

  }

  getBookById(id: string): Observable<any> {

    return this.http.get(this.baseUrl + '/' + id);

  }

  updateBook(id: string, book: BookTable): Observable<any> {

    return this.http.put(this.baseUrl + '/' + id, book);

  }
}
