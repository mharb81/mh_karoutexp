import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Home5Page } from './home5.page';
const routes = [
    {
        path: '',
        component: Home5Page
    }
];
let Home5PageModule = class Home5PageModule {
};
Home5PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [Home5Page]
    })
], Home5PageModule);
export { Home5PageModule };
//# sourceMappingURL=home5.module.js.map