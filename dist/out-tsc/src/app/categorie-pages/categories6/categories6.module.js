import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { Categories6Page } from './categories6.page';
const routes = [
    {
        path: '',
        component: Categories6Page
    }
];
let Categories6PageModule = class Categories6PageModule {
};
Categories6PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [Categories6Page]
    })
], Categories6PageModule);
export { Categories6PageModule };
//# sourceMappingURL=categories6.module.js.map