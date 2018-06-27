import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = 'http://localhost:3000/images';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url);
  }

  getById(id: number): Observable<Image> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Image>(newUrl);
  }

  save(image: Image): Observable<Image> {
    return this.http.post<Image>(this.url,image);
  }

  update(image: Image): Observable<Image> {
    const newUrl = this.url + '/' + image.id;
    return this.http.put<Image>(newUrl,image);
  }

  delete(id: number): Observable<Image> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Image>(newUrl);
  }
}
