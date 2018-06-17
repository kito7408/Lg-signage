import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beacon } from './beacon';

@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  private url = 'http://35.231.37.9/api/beacons/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Beacon[]>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.get<Beacon[]>(this.url, httpOptions);
  }

  getById(uuid: string): Observable<Beacon> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const newUrl = this.url + uuid;
    return this.http.get<Beacon>(newUrl,httpOptions);
  }

  save(beacon: Beacon):Observable<Beacon>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
      })
    };

    const newUrl = this.url + 'create';
    return this.http.post<Beacon>(newUrl,beacon,httpOptions);
  }
}
