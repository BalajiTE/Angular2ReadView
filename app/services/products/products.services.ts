import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Product } from '../../interfaces/products/product';

@Injectable()
export class ProductService {
   private _producturl='app/dataSource/products.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<Product[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <Product[]> response.json())
   }
}