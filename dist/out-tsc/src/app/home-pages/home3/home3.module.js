import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home3Page } from './home3.page';
const routes = [
    {
        path: '',
        component: Home3Page
    }
];
let Home3PageModule = class Home3PageModule {
};
Home3PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home3Page]
    })
], Home3PageModule);
export { Home3PageModule };
//# sourceMappingURL=home3.module.js.map