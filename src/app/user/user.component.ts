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

  save(name: string, email: string, phone_number: string, facebook: string){
    this.newUser.name=name;
    this.newUser.email=email;
    this.newUser.phone_number=phone_number;
    this.newUser.facebook=facebook;
    this.service.save(this.newUser)
    .subscribe(data => this.getAll());
  }

  delete(id: number): void {
    this.service.delete(id)
    .subscribe(data => {
      this.select=false;
      this.getAll();
    })
  }
}
