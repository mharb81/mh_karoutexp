import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShippingAddressPage } from './shipping-address.page';
// For Translation Language
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: ShippingAddressPage
    }
];
let ShippingAddressPageModule = class ShippingAddressPageModule {
};
ShippingAddressPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [ShippingAddressPage]
    })
], ShippingAddressPageModule);
export { ShippingAddressPageModule };
//# sourceMappingURL=shipping-address.module.js.map