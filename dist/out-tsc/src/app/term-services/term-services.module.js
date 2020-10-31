import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TermServicesPage } from './term-services.page';
const routes = [
    {
        path: '',
        component: TermServicesPage
    }
];
let TermServicesPageModule = class TermServicesPageModule {
};
TermServicesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TermServicesPage]
    })
], TermServicesPageModule);
export { TermServicesPageModule };
//# sourceMappingURL=term-services.module.js.map