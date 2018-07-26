import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products/product';

// template assignment by defining the component
@Component ({
    selector: 'ProductDetails',
    templateUrl:'app/views/products/productDetailsView.html'
 })

 export class ProductDetailsComponent implements OnInit { 
    @Input() product: Product;

    constructor() {}

    ngOnInit() {}

  }