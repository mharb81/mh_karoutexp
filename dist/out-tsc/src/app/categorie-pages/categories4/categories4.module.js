import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Categories4Page } from './categories4.page';
const routes = [
    {
        path: '',
        component: Categories4Page
    }
];
let Categories4PageModule = class Categories4PageModule {
};
Categories4PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [Categories4Page]
    })
], Categories4PageModule);
export { Categories4PageModule };
//# sourceMappingURL=categories4.module.js.map