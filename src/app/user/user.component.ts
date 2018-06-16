import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  select: boolean;
  user: User;
  newUser: User;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.select=false;
    this.user=null;
    this.newUser=new User;
    this.getAll();
  }

  getAll(): void{
    this.service.getAll()
    .subscribe(data => this.users=data);
  }

  selectedItem(id: number): void{
    this.service.getById(id)
    .subscribe(data => {
      this.user=data;
      this.select=true;
    });
  }

  save(name: string, last_name: string){
    this.newUser.name=name;
    this.newUser.last_name=last_name;
    console.log("Nuevo Usuario:", this.newUser);
  }
}
