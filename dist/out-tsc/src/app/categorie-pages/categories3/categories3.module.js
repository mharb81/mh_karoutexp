import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Categories3Page } from './categories3.page';
const routes = [
    {
        path: '',
        component: Categories3Page
    }
];
let Categories3PageModule = class Categories3PageModule {
};
Categories3PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [Categories3Page]
    })
], Categories3PageModule);
export { Categories3PageModule };
//# sourceMappingURL=categories3.module.js.map