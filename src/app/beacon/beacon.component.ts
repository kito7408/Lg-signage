import { Component, OnInit } from '@angular/core';
import { Beacon } from '../beacon';
import { BeaconService } from '../beacon.service';

@Component({
  selector: 'app-beacon',
  templateUrl: './beacon.component.html',
  styleUrls: ['./beacon.component.css']
})
export class BeaconComponent implements OnInit {

  beacons: Beacon[];
  select: boolean;
  beacon: Beacon;
  newBeacon: Beacon;

  constructor(private service: BeaconService) { }

  ngOnInit() {
    this.select=false;
    this.beacon=null;
    this.newBeacon=new Beacon;
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => this.beacons=data);
  }

  selectedItem(uuid: string): void {
    this.service.getById(uuid)
    .subscribe(data => {
      console.log(data);
      this.beacon=data;
      this.select=true;
    });
  }

  save(major: string, minor: string, state: string): void{
    this.newBeacon.major=major;
    this.newBeacon.minor=minor;
    this.newBeacon.state=state;
    console.log("New Beacon: ",this.newBeacon);
  }
}
