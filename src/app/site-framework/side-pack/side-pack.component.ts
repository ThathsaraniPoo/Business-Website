import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../products/products.service";
import {Category} from "../category";
import {Product} from "../../product";

@Component({
  selector: 'app-side-pack',
  templateUrl: './side-pack.component.html',
  styleUrls: ['./side-pack.component.css']
})
export class SidePackComponent implements OnInit {
  categoryList: Category [] = [];
  constructor(private productsService :ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data =>
    {this.categoryList = data;


    });

  }

}
