import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ImageService } from '../image.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: Image[];
  select: boolean;
  image: Image;
  newImage: Image;
  products: Product[];

  constructor(private service: ImageService, private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
    this.select=false;
    this.image=null;
    this.newImage=new Image;
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => this.images=data);
  }

  getAllProducts(): void {
    this.productService.getAll()
    .subscribe(data => {
      this.products=data;
    })
  }

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.image=data;
      this.select=true;
    });
  }

  save(name: string,url: string, product: string): void{
    this.newImage.name=name;
    this.newImage.url=url;
    this.newImage.productId=parseInt(product);
    this.service.save(this.newImage)
    .subscribe(data => this.getAll());
  }
}
