import * as _ from 'underscore';
import { PagerService } from '../../services/common/pager.services.index'

import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products/product';
import { ProductService } from '../../services/products/products.services';
import { HeaderComponent } from '../common/app.headerComponent';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// template assignment by defining the component
@Component ({
   selector: 'Products',
       templateUrl:'app/views/products/productsView.html',
       providers: [ProductService]
})

export class ProductComponent implements OnInit {
    iproducts: Observable<Product[]>;
    products: Product[];    
    selectedProduct: Product;

    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];

    // constructor
    constructor(private _product: ProductService, private pagerService: PagerService) {}    

    // ngOnInit() function to support initialization
    ngOnInit() : void {
         this.iproducts =  this._product.getproducts();
        
         this.iproducts.subscribe(iproducts => 
            {
                this.products = iproducts,
                // initialize to page 1
                this.setPage(1);
            }            
        );
     }

     setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.products.length, page);

        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

     // function to be called when user clicks on EDIT
     ShowDetails(showProduct: Product) : void{
        this.selectedProduct = showProduct;
     }

     // function to be called when user clicks on EDIT
     editProduct(selectedProductId: number) : void{
         alert('Hello, You have selected ' + selectedProductId );
     }

     // function to be called when user clicks on DELETE
     removeProduct(selectedProductId: number) : void{
        alert('Hello, Are you sure to Delete ' + selectedProductId )
     }
    }