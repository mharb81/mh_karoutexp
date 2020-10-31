import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsPage } from './news.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: NewsPage
    }
];
let NewsPageModule = class NewsPageModule {
};
NewsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [NewsPage]
    })
], NewsPageModule);
export { NewsPageModule };
//# sourceMappingURL=news.module.js.map