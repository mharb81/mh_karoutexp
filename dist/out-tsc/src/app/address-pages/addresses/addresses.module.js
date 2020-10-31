import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddressesPage } from './addresses.page';
// For Translation Language
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: AddressesPage
    }
];
let AddressesPageModule = class AddressesPageModule {
};
AddressesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [AddressesPage]
    })
], AddressesPageModule);
export { AddressesPageModule };
//# sourceMappingURL=addresses.module.js.map