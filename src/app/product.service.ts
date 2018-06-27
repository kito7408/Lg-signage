import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*private url = 'http://35.231.37.9/api/products';*/   //Previous Api
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: number): Observable<Product> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Product>(newUrl);
  }

  save(product: Product): Observable<Product>{

    //necesary for the previous api, sent newUrl instead of url in the request
    //const newUrl = this.url + '/create';

    //Sent httpOptions in the post request only if is necesary be logged
    /*const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    };*/

    return this.http.post<Product>(this.url,product);
  }

  update(product: Product): Observable<Product> {
    const newUrl = this.url + '/' + product.id;
    return this.http.put<Product>(newUrl,product);
  }

  delete(id: number): Observable<Product> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Product>(newUrl);
  }
}