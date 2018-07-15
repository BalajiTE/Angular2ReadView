"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_services_1 = require("./products.services");
require("rxjs/add/operator/map");
var AppComponent = /** @class */ (function () {
    function AppComponent(_product) {
        this._product = _product;
        this.appTitle = 'Welcome';
        this.appStatus = true;
        this.appList = [
            { "ID": "1", "Name": "One" },
            { "ID": "2", "Name": "Two" }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iproducts = this._product.getproducts();
        this.iproducts.subscribe(function (iproducts) { return _this.products = iproducts; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>Hello {{name}}</h1>'
        }),
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/views/app.component.html',
            providers: [products_services_1.ProductService]
        }),
        __metadata("design:paramtypes", [products_services_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map