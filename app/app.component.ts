import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.services';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{name}}</h1>'
})

@Component ({
   selector: 'my-app',
       templateUrl:'app/views/app.component.html' ,
       providers: [ProductService]
})

export class AppComponent {
    appTitle: string = 'Welcome';
    appStatus: boolean = true;
    appList: any[] = [ 
        { "ID": "1", "Name": "One" }, 
        { "ID": "2", "Name": "Two" }]

    iproducts: Observable<IProduct[]>;
    products: IProduct[];
    constructor(private _product: ProductService) {}

    ngOnInit() : void {
        this.iproducts =  this._product.getproducts();
        this.iproducts.subscribe(iproducts => this.products = iproducts);
     }

}

