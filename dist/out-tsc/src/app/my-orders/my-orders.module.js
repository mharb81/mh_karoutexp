import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyOrdersPage } from './my-orders.page';
const routes = [
    {
        path: '',
        component: MyOrdersPage
    }
];
let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MyOrdersPage]
    })
], MyOrdersPageModule);
export { MyOrdersPageModule };
//# sourceMappingURL=my-orders.module.js.map