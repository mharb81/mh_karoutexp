import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BillingAddressPage } from './billing-address.page';
// For Translation Language
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: BillingAddressPage
    }
];
let BillingAddressPageModule = class BillingAddressPageModule {
};
BillingAddressPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [BillingAddressPage]
    })
], BillingAddressPageModule);
export { BillingAddressPageModule };
//# sourceMappingURL=billing-address.module.js.map