import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ThankYouPage } from './thank-you.page';
const routes = [
    {
        path: '',
        component: ThankYouPage
    }
];
let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ThankYouPage]
    })
], ThankYouPageModule);
export { ThankYouPageModule };
//# sourceMappingURL=thank-you.module.js.map