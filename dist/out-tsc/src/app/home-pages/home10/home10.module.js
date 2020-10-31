import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home10Page } from './home10.page';
const routes = [
    {
        path: '',
        component: Home10Page
    }
];
let Home10PageModule = class Home10PageModule {
};
Home10PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home10Page]
    })
], Home10PageModule);
export { Home10PageModule };
//# sourceMappingURL=home10.module.js.map