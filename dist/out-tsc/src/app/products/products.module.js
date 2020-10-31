import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsPage } from './products.page';
const routes = [
    {
        path: '',
        component: ProductsPage
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductsPage]
    })
], ProductsPageModule);
export { ProductsPageModule };
//# sourceMappingURL=products.module.js.map