import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderDetailPage } from './order-detail.page';
const routes = [
    {
        path: '',
        component: OrderDetailPage
    }
];
let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderDetailPage]
    })
], OrderDetailPageModule);
export { OrderDetailPageModule };
//# sourceMappingURL=order-detail.module.js.map