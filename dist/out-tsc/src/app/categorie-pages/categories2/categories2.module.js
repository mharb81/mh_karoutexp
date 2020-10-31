import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Categories2Page } from './categories2.page';
const routes = [
    {
        path: '',
        component: Categories2Page
    }
];
let Categories2PageModule = class Categories2PageModule {
};
Categories2PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [Categories2Page]
    })
], Categories2PageModule);
export { Categories2PageModule };
//# sourceMappingURL=categories2.module.js.map