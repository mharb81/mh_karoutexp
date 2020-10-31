import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewsListPage } from './news-list.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: NewsListPage
    }
];
let NewsListPageModule = class NewsListPageModule {
};
NewsListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewsListPage]
    })
], NewsListPageModule);
export { NewsListPageModule };
//# sourceMappingURL=news-list.module.js.map