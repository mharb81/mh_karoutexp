import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShippingMethodPage } from './shipping-method.page';
const routes = [
    {
        path: '',
        component: ShippingMethodPage
    }
];
let ShippingMethodPageModule = class ShippingMethodPageModule {
};
ShippingMethodPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ShippingMethodPage]
    })
], ShippingMethodPageModule);
export { ShippingMethodPageModule };
//# sourceMappingURL=shipping-method.module.js.map