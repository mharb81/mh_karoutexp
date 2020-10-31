import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let Categories5Page = class Categories5Page {
    constructor() {
        this.items = [
            { name: "Baby & Mother", img: "assets/Images/1.jpg",
                products: [
                    { name: "Baby & Mother", img: "assets/Images/1.jpg", count: "10" },
                    { name: "Cellphones & Accessories", img: "assets/Images/2.jpg", count: "9" },
                    { name: "Computer, office, Security", img: "assets/Images/3.png", count: "3" },
                ]
            },
            { name: "Cellphones & Accessories", img: "assets/Images/2.jpg",
                products: [
                    { name: "Baby & Mother", img: "assets/Images/1.jpg" },
                    { name: "Cellphones & Accessories", img: "assets/Images/2.jpg", count: "12" },
                    { name: "Computer, office, Security", img: "assets/Images/3.png", count: "15" },
                    { name: "Girls Collection", img: "assets/Images/4.jpg", count: "5" }
                ]
            },
            { name: "Computer, office", img: "assets/Images/3.png",
                products: [
                    { name: "Baby & Mother", img: "assets/Images/1.jpg", count: "4" },
                    { name: "Cellphones & Accessories", img: "assets/Images/2.jpg", count: "8" },
                    { name: "Computer, office, Security", img: "assets/Images/3.png", count: "12" },
                    { name: "Girls Collection", img: "assets/Images/4.jpg", count: "21" }
                ]
            },
            { name: "Girls Collection", img: "assets/Images/4.jpg", count: "15",
                products: [
                    { name: "Baby & Mother", img: "assets/Images/1.jpg", count: "12" },
                    { name: "Cellphones & Accessories", img: "assets/Images/2.jpg", count: "12" },
                ]
            },
        ];
    }
    ngOnInit() {
    }
};
Categories5Page = tslib_1.__decorate([
    Component({
        selector: 'app-categories5',
        templateUrl: './categories5.page.html',
        styleUrls: ['./categories5.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Categories5Page);
export { Categories5Page };
//# sourceMappingURL=categories5.page.js.map