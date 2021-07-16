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

  updateProduct(form:any){

    console.log(form);

    const updateProduct = {
      id: form.value.id,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
    };

    this.productService.updateProduct(this.productId, updateProduct).subscribe(data => {
      console.log(data);
    });

  }

}
