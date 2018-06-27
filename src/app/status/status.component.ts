import { Component, OnInit } from '@angular/core';
import { Status } from '../status';
import { StatusService } from '../status.service';
import { User } from '../user';
import { Image } from '../image';
import { UserService } from '../user.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  newState: Status;
  users: User[];
  images: Image[];
  status: Status;

  constructor(private service: StatusService, private userService: UserService, private imageService: ImageService) { }

  ngOnInit() {
    this.getStatus();
    this.newState=new Status;
    this.getAllImages();
    this.getAllUsers();
  }

  getStatus(): void {
    this.service.getStatus()
    .subscribe(data => {
      this.status = data;
    });
  }

  updateStatus(user: string,image: string,state: string): void {
    this.newState.state=parseInt(state);
    this.newState.userId=parseInt(user);
    this.newState.imageId=parseInt(image);
    this.service.updateStatus(this.newState)
    .subscribe(data => {
      this.getStatus();
    })
  }

  getAllUsers(): void {
    this.userService.getAll()
    .subscribe(data => {
      this.users=data;
    })
  }

  getAllImages() : void {
    this.imageService.getAll()
    .subscribe(data => {
      this.images=data;
    })
  }
}
