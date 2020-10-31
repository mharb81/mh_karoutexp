import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let CartPage = class CartPage {
    constructor(shared, config) {
        this.shared = shared;
        this.config = config;
        this.products = [
            { image: "assets/images/2.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
        ];
        console.log(shared.cartquantity);
    }
    ngOnInit() {
    }
};
CartPage = tslib_1.__decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.page.html',
        styleUrls: ['./cart.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        ConfigService])
], CartPage);
export { CartPage };
//# sourceMappingURL=cart.page.js.map