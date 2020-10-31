import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectCountryPage } from './select-country.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: SelectCountryPage
    }
];
let SelectCountryPageModule = class SelectCountryPageModule {
};
SelectCountryPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule,
        ],
        declarations: [SelectCountryPage]
    })
], SelectCountryPageModule);
export { SelectCountryPageModule };
//# sourceMappingURL=select-country.module.js.map