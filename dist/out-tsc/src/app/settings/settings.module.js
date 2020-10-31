import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: SettingsPage
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SettingsPage]
    })
], SettingsPageModule);
export { SettingsPageModule };
//# sourceMappingURL=settings.module.js.map