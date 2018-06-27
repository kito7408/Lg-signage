import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Image } from '../image';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  select: boolean;
  product: Product;
  newProduct: Product;
  categories: Category[];

  constructor(private service: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
    this.select=false;
    this.product=null;
    this.newProduct = new Product;
    this.getAll();
  }

  save(name: string, description: string, size: string, color: string, category: string): void{
    this.newProduct.name=name;
    this.newProduct.description=description;
    this.newProduct.color=color;
    this.newProduct.categoryId=parseInt(category);
    this.newProduct.size=size;
    this.service.save(this.newProduct)
    .subscribe(data => {
      this.getAll();
    });
  }

  getAllCategories(): void{
    this.categoryService.getAll()
    .subscribe(data => {
      this.categories=data;
    });
  }

  getAll(): void{
    this.service.getAll()
    .subscribe(data => this.products=data);
  }

  selectedItem(id: number): void{
    this.service.getById(id)
    .subscribe(data => {
      this.product=data;
      this.select = true;
    });
  }
}
