import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home4Page } from './home4.page';
const routes = [
    {
        path: '',
        component: Home4Page
    }
];
let Home4PageModule = class Home4PageModule {
};
Home4PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home4Page]
    })
], Home4PageModule);
export { Home4PageModule };
//# sourceMappingURL=home4.module.js.map