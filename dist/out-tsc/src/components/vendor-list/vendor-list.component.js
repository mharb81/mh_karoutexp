import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let VendorListComponent = class VendorListComponent {
    constructor() {
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
        // For products
        this.ven1 = [
            { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
            { img: "assets/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }
        ];
    }
    ngOnInit() { }
};
VendorListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-vendor-list',
        templateUrl: './vendor-list.component.html',
        styleUrls: ['./vendor-list.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], VendorListComponent);
export { VendorListComponent };
//# sourceMappingURL=vendor-list.component.js.map