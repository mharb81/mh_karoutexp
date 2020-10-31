import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { Categories5Page } from './categories5.page';
const routes = [
    {
        path: '',
        component: Categories5Page
    }
];
let Categories5PageModule = class Categories5PageModule {
};
Categories5PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [Categories5Page]
    })
], Categories5PageModule);
export { Categories5PageModule };
//# sourceMappingURL=categories5.module.js.map