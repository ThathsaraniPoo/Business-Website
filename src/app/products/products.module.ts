import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { VeiwAllProductsComponent } from './veiw-all-products/veiw-all-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { VeiwProductsByDateComponent } from './veiw-products-by-date/veiw-products-by-date.component';
import { VeiwAllProductsByCategoryComponent } from './veiw-all-products-by-category/veiw-all-products-by-category.component';
import { VeiwProductComponent } from './veiw-product/veiw-product.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    VeiwAllProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    VeiwProductsByDateComponent,
    VeiwAllProductsByCategoryComponent,
    VeiwProductComponent

  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule { }
