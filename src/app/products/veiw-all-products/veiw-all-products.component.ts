import { Component, OnInit } from '@angular/core';

import {ProductsService} from "../products.service";
import {Product} from "../../product";
import {Category} from "../../site-framework/category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-veiw-all-products',
  templateUrl: './veiw-all-products.component.html',
  styleUrls: ['./veiw-all-products.component.css']
})
export class  VeiwAllProductsComponent implements OnInit {
  public productList: Product [] = [];
  productId=0;
  productDetails!: Product ;
  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId=data.id;
    });

    this.productService.viewProduct(this.productId).subscribe(productData => {
     this.productDetails=productData;
    });
  }

}
