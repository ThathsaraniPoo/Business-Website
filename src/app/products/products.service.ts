import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {Observable} from "rxjs";
import {Category} from "../site-framework/category";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  getAllProduct():Observable<Product[]>{
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.get<Product[]>(productUrl);//return observable
  }
  getCategories():Observable<Category[]>{
    const categoriesUrl= 'http://localhost:3000/categories';
    return this.httpClient.get<Category[]>(categoriesUrl);//return observable
  }


 createProduct(productBody:any):Observable<Product>{
   const productUrl= 'http://localhost:3000/products';
   return this.httpClient.post<Product>(productUrl,productBody);//return observable
}
  viewProduct(productId:any):Observable<Product>{
    const productUrl= 'http://localhost:3000/products'+productId;
    return this.httpClient.get<Product>(productUrl);//return observable
  }
  veiwAllProducts(productId:any):Observable<Product[]>{
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.get<Product[] >(productUrl);//return observable
  }
  updateProduct(productBody: any, productId: any):Observable<Product>{
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.put<Product>(productUrl,productBody);//return observable
  }
  deleteProduct(productId: string):Observable<Product>{
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl);//return observable
  }

  searchByCategoryProducts( categoryId:any):Observable<Product[]>{
    const productUrl= 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product[]>(productUrl);//return observable
  }
  SearchByDateCategory(dateParam: string):Observable<Product>{
    const productUrl= 'http://localhost:3000/products/date'+dateParam;
    return this.httpClient.get<Product>(productUrl);//return observable
  }
}
