import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beacon } from './beacon';

@Injectable({
  providedIn: 'root'
})
export class BeaconService {

  //private url = 'http://35.231.37.9/api/beacons/';
  private url = 'http://localhost:3000/beacons';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Beacon[]>{
    return this.http.get<Beacon[]>(this.url);
  }

  getById(id: number): Observable<Beacon> {
    const newUrl = this.url + '/' + id;
    return this.http.get<Beacon>(newUrl);
  }

  save(beacon: Beacon):Observable<Beacon>{
    return this.http.post<Beacon>(this.url,beacon);
  }

  update(beacon: Beacon): Observable<Beacon> {
    const newUrl = this.url + '/' + beacon.id;
    return this.http.put<Beacon>(newUrl,beacon);
  }

  delete(id: number): Observable<Beacon> {
    const newUrl = this.url + '/' + id;
    return this.http.delete<Beacon>(newUrl);
  }
}
