import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrivacyPolicyPage } from './privacy-policy.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: PrivacyPolicyPage
    }
];
let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [PrivacyPolicyPage]
    })
], PrivacyPolicyPageModule);
export { PrivacyPolicyPageModule };
//# sourceMappingURL=privacy-policy.module.js.map