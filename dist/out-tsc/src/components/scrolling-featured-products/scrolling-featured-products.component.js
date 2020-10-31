import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let ScrollingFeaturedProductsComponent = class ScrollingFeaturedProductsComponent {
    constructor(config, shared) {
        this.config = config;
        this.shared = shared;
        // For products
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        setTimeout(() => {
            this.products = [
                { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
                { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }
            ];
        }, 10000);
    }
    ngOnInit() { }
    //for infinite scroll
    loadData(event) {
        setTimeout(() => {
            console.log(event);
            this.products.push({ img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false }, { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false });
            event.target.complete();
        }, 500);
    }
};
ScrollingFeaturedProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-scrolling-featured-products',
        templateUrl: './scrolling-featured-products.component.html',
        styleUrls: ['./scrolling-featured-products.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigService, SharedDataService])
], ScrollingFeaturedProductsComponent);
export { ScrollingFeaturedProductsComponent };
//# sourceMappingURL=scrolling-featured-products.component.js.map