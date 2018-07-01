import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  select: boolean;
  category: Category;
  newCategory: Category;

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.select=false;
    this.category=null;
    this.newCategory=new Category;
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(data => this.categories=data);
  }

  selectedItem(id: number): void {
    this.service.getById(id)
    .subscribe(data => {
      this.category=data;
      this.select=true;
    });
  }

  save(name: string, description: string): void{
    this.newCategory.name=name;
    this.newCategory.description=description;
    this.service.save(this.newCategory)
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
