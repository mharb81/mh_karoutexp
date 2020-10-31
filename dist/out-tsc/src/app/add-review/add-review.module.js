import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddReviewPage } from './add-review.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: AddReviewPage
    }
];
let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            TranslateModule
        ],
        declarations: [AddReviewPage]
    })
], AddReviewPageModule);
export { AddReviewPageModule };
//# sourceMappingURL=add-review.module.js.map