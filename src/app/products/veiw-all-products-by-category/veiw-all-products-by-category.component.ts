import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product";
import {ProductsService} from "../products.service";
import {Category} from "../../site-framework/category";


@Component({
  selector: 'app-veiw-all-products-by-category',
  templateUrl: './veiw-all-products-by-category.component.html',
  styleUrls: ['./veiw-all-products-by-category.component.css']
})
export class VeiwAllProductsByCategoryComponent implements OnInit {
  public searchCategory: Category []=[];
  public productList: Product[]= [];
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(data=>{
  this.searchCategory= data.id;

  this.productService.searchByCateoryProducts(this.searchCategory).subscribe(catedata=>{
    this.productList=catedata;
  });
});

  }

}
