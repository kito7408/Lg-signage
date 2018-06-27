import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private url = 'http://35.231.37.9/api/categories';
  private url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getById(id: number): Observable<Category> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Category>(newUrl);
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url,category);
  }

  update(category: Category): Observable<Category> {
    const newUrl = this.url + '/' + category.id;
    return this.http.put<Category>(newUrl,category);
  }

  delete(id: number): Observable<Category> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Category>(newUrl);
  }
}
