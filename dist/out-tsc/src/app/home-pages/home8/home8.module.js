import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home8Page } from './home8.page';
const routes = [
    {
        path: '',
        component: Home8Page
    }
];
let Home8PageModule = class Home8PageModule {
};
Home8PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home8Page]
    })
], Home8PageModule);
export { Home8PageModule };
//# sourceMappingURL=home8.module.js.map