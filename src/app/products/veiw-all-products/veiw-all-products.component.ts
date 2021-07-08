import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../../product";


@Component({
  selector: 'app-veiw-all-products',
  templateUrl: './veiw-all-products.component.html',
  styleUrls: ['./veiw-all-products.component.css']
})
export class  VeiwAllProductsComponent implements OnInit {
  public productList: Product [] = [];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
   this.productService.getAllProduct().subscribe(data=>{
     this.productList= data;
   })
  }

}
