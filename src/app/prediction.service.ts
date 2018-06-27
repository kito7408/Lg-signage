import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from './prediction';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  //private url = 'http://35.231.37.9/api/predictions/';
  private url = 'http://localhost:3000/predictions';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Prediction[]> {
    return this.http.get<Prediction[]>(this.url);
  }

  getById(id: number): Observable<Prediction> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Prediction>(newUrl);
  }

  save(prediction: Prediction): Observable<Prediction> {
    return this.http.post<Prediction>(this.url,prediction);
  }

  update(prediction: Prediction): Observable<Prediction> {
    const newUrl = this.url + '/' + prediction.id;
    return this.http.put<Prediction>(newUrl,prediction);
  }

  delete(id: number): Observable<Prediction> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Prediction>(newUrl);
  }
}
