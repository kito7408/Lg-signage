import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = '';
  private logUrl = 'http://35.231.37.9/api/auth/login';
  private logoutUrl = 'http://35.231.37.9/api/auth/logout';

  constructor(private http: HttpClient) { }

  getAll():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.url,user);
  }

  getById(id: number): Observable<User>{
    const newUrl = this.url + '/' + id;
    return this.http.get<User>(newUrl);
  }

  login(email: string, password: string){
    return this.http.post(this.logUrl, {email, password});
  }

  logout() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem("token"),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.get(this.logoutUrl,httpOptions);
  }
}
