import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WishListPage } from './wish-list.page';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from 'src/components/share/share.module';
const routes = [
    {
        path: '',
        component: WishListPage
    }
];
let WishListPageModule = class WishListPageModule {
};
WishListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule,
            ShareModule,
        ],
        declarations: [WishListPage]
    })
], WishListPageModule);
export { WishListPageModule };
//# sourceMappingURL=wish-list.module.js.map