import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailPage } from './product-detail.page';
const routes = [
    {
        path: '',
        component: ProductDetailPage
    }
];
let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductDetailPage]
    })
], ProductDetailPageModule);
export { ProductDetailPageModule };
//# sourceMappingURL=product-detail.module.js.map