import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DownloadsPage } from './downloads.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: DownloadsPage
    }
];
let DownloadsPageModule = class DownloadsPageModule {
};
DownloadsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DownloadsPage]
    })
], DownloadsPageModule);
export { DownloadsPageModule };
//# sourceMappingURL=downloads.module.js.map