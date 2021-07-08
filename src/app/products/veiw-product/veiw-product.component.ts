import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../products.service";
import {Product} from "../../product";

@Component({
  selector: 'app-veiw-product',
  templateUrl: './veiw-product.component.html',
  styleUrls: ['./veiw-product.component.css']
})
export class VeiwProductComponent implements OnInit {
 productId=0;
 productDetails!: Product;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data.id;
    })
    this.productService.viewProduct(this.productId).subscribe(productData=>{
      this.productDetails= productData;
    })

  }

}
