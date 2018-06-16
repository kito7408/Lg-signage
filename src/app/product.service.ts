import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://35.231.37.9/api/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Product>(newUrl);
  }

  save(product: Product): Observable<Product>{

    const newUrl = this.url + '/create';

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Product>(newUrl,product,httpOptions);
  }
}
