import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historial } from './historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private url = 'http://localhost:3000/historial';

  constructor(private http: HttpClient) { }

  getHistorial(): Observable<Historial[]> {
    return this.http.get<Historial[]>(this.url);
  }
}
