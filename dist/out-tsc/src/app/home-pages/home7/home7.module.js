import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home7Page } from './home7.page';
const routes = [
    {
        path: '',
        component: Home7Page
    }
];
let Home7PageModule = class Home7PageModule {
};
Home7PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home7Page]
    })
], Home7PageModule);
export { Home7PageModule };
//# sourceMappingURL=home7.module.js.map