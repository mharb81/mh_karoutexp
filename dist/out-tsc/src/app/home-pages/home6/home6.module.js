import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home6Page } from './home6.page';
const routes = [
    {
        path: '',
        component: Home6Page
    }
];
let Home6PageModule = class Home6PageModule {
};
Home6PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home6Page]
    })
], Home6PageModule);
export { Home6PageModule };
//# sourceMappingURL=home6.module.js.map