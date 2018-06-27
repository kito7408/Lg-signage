import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url = 'http://localhost:3000/state';

  constructor(private http: HttpClient) { }

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.url);
  }

  updateStatus(state: Status): Observable<Status> {
    return this.http.put<Status>(this.url,state);
  }
}
