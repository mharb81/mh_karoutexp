import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home9Page } from './home9.page';
const routes = [
    {
        path: '',
        component: Home9Page
    }
];
let Home9PageModule = class Home9PageModule {
};
Home9PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home9Page]
    })
], Home9PageModule);
export { Home9PageModule };
//# sourceMappingURL=home9.module.js.map