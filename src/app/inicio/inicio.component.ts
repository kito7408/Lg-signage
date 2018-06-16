import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: User;
  userString: string;
  tokenString: string;
  token:{
    access_token: string;
    token_type: string;
  }

  aux: any;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.userString=sessionStorage.getItem("user");
  }

  login(email: string,password: string):void{
    this.service.login(email,password)
    .subscribe(data => {
      this.aux = data;
      this.token = this.aux.data.token;
      this.user=this.aux.data.user;
      this.tokenString=this.token.token_type + ' ' + this.token.access_token;
      sessionStorage.setItem("token", this.tokenString);
      sessionStorage.setItem("user",this.user.name + ' ' + this.user.last_name);
      this.userString=sessionStorage.getItem("user");
      sessionStorage.setItem("user_id",this.user.id.toString());
    });
  }

  logout(): void {
    this.service.logout()
    .subscribe(data => {
      this.userString=null;
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user_id");
    })
  }
}
