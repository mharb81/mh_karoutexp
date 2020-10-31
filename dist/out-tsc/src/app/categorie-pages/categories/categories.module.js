import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriesPage } from './categories.page';
const routes = [
    {
        path: '',
        component: CategoriesPage
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [CategoriesPage]
    })
], CategoriesPageModule);
export { CategoriesPageModule };
//# sourceMappingURL=categories.module.js.map