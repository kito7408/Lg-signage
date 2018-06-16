import { Component, OnInit } from '@angular/core';
import { Prediction } from '../prediction';
import { PredictionService } from '../prediction.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

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

  constructor(private service: PredictionService, private productService: ProductService) { }

  ngOnInit() {
    this.select=false;
    this.newPrediction=new Prediction;
    this.getAll();
    this.getAllProducts();
  }

  getAll(): void {
    this.service.getByUserId()
    .subscribe(data => {
      this.prediction=data;
    });
  }

  getAllProducts(): void {
    this.productService.getAll()
    .subscribe(data => {
      this.products=data;
    });
  }

  /*selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.prediction=data;
      this.select=true;
    });
  }*/

  save(user: string, product: string, beacon: string){
    this.newPrediction.user_id=parseInt(user);
    this.newPrediction.product_id=parseInt(product);
    this.newPrediction.beacon_id=parseInt(beacon);
    console.log("New Prediction:",this.newPrediction);
  }
}
