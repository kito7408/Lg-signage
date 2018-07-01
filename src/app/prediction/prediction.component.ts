import { Component, OnInit } from '@angular/core';
import { Prediction } from '../prediction';
import { PredictionService } from '../prediction.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { User } from '../user';
import { Beacon } from '../beacon';
import { UserService } from '../user.service';
import { BeaconService } from '../beacon.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  predictions: Prediction[];
  select: boolean;
  prediction: Prediction;
  newPrediction: Prediction;
  products: Product[];
  users: User[];
  beacons: Beacon[];

  constructor(private service: PredictionService, private productService: ProductService, private userService: UserService, private beaconService: BeaconService) { }

  ngOnInit() {
    this.getAll();
    this.getAllProducts();
    this.getAllBeacons();
    this.getAllUsers();
    this.select=false;
    this.newPrediction=new Prediction;
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => {
      this.predictions=data;
    });
  }

  getAllProducts(): void {
    this.productService.getAll()
    .subscribe(data => {
      this.products=data;
    });
  }

  getAllUsers(): void {
    this.userService.getAll()
    .subscribe(data => {
      this.users=data;
    })
  }

  getAllBeacons(): void {
    this.beaconService.getAll()
    .subscribe(data => {
      this.beacons=data;
    })
  }

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.prediction=data;
      this.select=true;
    });
  }

  save(user: string, product: string, beacon: string){
    this.newPrediction.userId=parseInt(user);
    this.newPrediction.productId=parseInt(product);
    this.newPrediction.beaconId=parseInt(beacon);
    this.service.save(this.newPrediction)
    .subscribe(data => this.getAll());
  }

  delete(id: number) :void {
    this.service.delete(id)
    .subscribe(data => {
      this.select=false;
      this.getAll();
    })
  }
}
