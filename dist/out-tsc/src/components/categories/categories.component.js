import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let CategoriesComponent = class CategoriesComponent {
    constructor(config, shared) {
        this.config = config;
        this.shared = shared;
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: 2.5,
            spaceBetween: 0
        };
        // For products
        this.categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        setTimeout(() => {
            this.categories = [
                { name: "Baby & Mother", img: "assets/images/4.jpg", count: "12" },
                { name: "Cellphones & Accessories", img: "assets/images/2.jpg", count: "12" },
                { name: "Computer, office", img: "assets/images/3.png", count: "12" },
                { name: "Girls Collection", img: "assets/images/4.jpg", count: "15" },
                { name: "Household Merchand", img: "assets/images/5.jpg", count: "12" },
                { name: "Jewelry & Watches", img: "assets/images/6.jpg", count: "12" },
            ];
        }, 4000);
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    Input('type'),
    tslib_1.__metadata("design:type", Object)
], CategoriesComponent.prototype, "type", void 0);
CategoriesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-categories',
        templateUrl: './categories.component.html',
        styleUrls: ['./categories.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigService, SharedDataService])
], CategoriesComponent);
export { CategoriesComponent };
//# sourceMappingURL=categories.component.js.map