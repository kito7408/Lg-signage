import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://35.231.37.9/api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getById(id: number): Observable<Category> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const newUrl = this.url + '/' + id;
    return this.http.get<Category>(newUrl,httpOptions);
  }

  save(category: Category): Observable<Category> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    };

    const newUrl = this.url + '/create';
    return this.http.post<Category>(newUrl,category,httpOptions)
  }
}
