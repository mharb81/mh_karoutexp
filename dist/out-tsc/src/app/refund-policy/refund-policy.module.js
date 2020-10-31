import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RefundPolicyPage } from './refund-policy.page';
const routes = [
    {
        path: '',
        component: RefundPolicyPage
    }
];
let RefundPolicyPageModule = class RefundPolicyPageModule {
};
RefundPolicyPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RefundPolicyPage]
    })
], RefundPolicyPageModule);
export { RefundPolicyPageModule };
//# sourceMappingURL=refund-policy.module.js.map