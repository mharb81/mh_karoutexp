import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CurrencyListPage } from './currency-list.page';
const routes = [
    {
        path: '',
        component: CurrencyListPage
    }
];
let CurrencyListPageModule = class CurrencyListPageModule {
};
CurrencyListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CurrencyListPage]
    })
], CurrencyListPageModule);
export { CurrencyListPageModule };
//# sourceMappingURL=currency-list.module.js.map