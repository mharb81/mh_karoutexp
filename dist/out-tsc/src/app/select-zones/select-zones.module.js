import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectZonesPage } from './select-zones.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: SelectZonesPage
    }
];
let SelectZonesPageModule = class SelectZonesPageModule {
};
SelectZonesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule,
        ],
        declarations: [SelectZonesPage]
    })
], SelectZonesPageModule);
export { SelectZonesPageModule };
//# sourceMappingURL=select-zones.module.js.map