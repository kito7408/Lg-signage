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

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.beacon=data;
      this.select=true;
    });
  }

  save(uuid: string, major: string, minor: string, active: string): void{
    this.newBeacon.uuid=uuid;
    this.newBeacon.major=major;
    this.newBeacon.minor=minor;
    this.newBeacon.active=parseInt(active);
    this.service.save(this.newBeacon)
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
