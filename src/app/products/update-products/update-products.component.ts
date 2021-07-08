import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../product";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
productId=0;
productDetails!:Product;
  constructor(private activatedRoute:ActivatedRoute,
              private  productService:ProductsService) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(data=>{
        this.productId=data.id;

        this.productService.viewProduct(this.productId).subscribe(productData=>{
          this.productDetails= productData; //get the existing data of the product
        })

      })


  }

}
