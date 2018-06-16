import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from './prediction';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private url = 'http://35.231.37.9/api/predictions/';

  constructor(private http: HttpClient) { }

  getByUserId(): Observable<Prediction> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const user_id = parseInt(sessionStorage.getItem("user_id"));
    const newUrl = this.url + user_id;
    return this.http.get<Prediction>(newUrl,httpOptions);
  }
}
