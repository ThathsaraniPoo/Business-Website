import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {CreateProductComponent} from "./create-product/create-product.component";
import {DeleteProductsComponent} from "./delete-products/delete-products.component";
import {UpdateProductsComponent} from "./update-products/update-products.component";
import {VeiwAllProductsComponent} from "./veiw-all-products/veiw-all-products.component";
import {VeiwAllProductsByCategoryComponent} from "./veiw-all-products-by-category/veiw-all-products-by-category.component";
import {VeiwProductsByDateComponent} from "./veiw-products-by-date/veiw-products-by-date.component";
import {VeiwProductComponent} from "./veiw-product/veiw-product.component";

const routes: Routes = [
  { path: '', component: VeiwAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'view-product/:id', component: VeiwProductComponent },
  { path: 'search-date', component: VeiwProductsByDateComponent },
  { path: 'category/:id', component: VeiwAllProductsByCategoryComponent },
  { path: 'delete-product/:id', component: DeleteProductsComponent },
  { path: 'products/:id', component: VeiwAllProductsComponent},
  { path: 'update-product/:id', component: UpdateProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
