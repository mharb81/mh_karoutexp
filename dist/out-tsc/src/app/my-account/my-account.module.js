import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyAccountPage } from './my-account.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: MyAccountPage
    }
];
let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MyAccountPage]
    })
], MyAccountPageModule);
export { MyAccountPageModule };
//# sourceMappingURL=my-account.module.js.map