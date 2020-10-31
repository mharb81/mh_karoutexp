import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RewardPointsPage } from './reward-points.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: RewardPointsPage
    }
];
let RewardPointsPageModule = class RewardPointsPageModule {
};
RewardPointsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RewardPointsPage]
    })
], RewardPointsPageModule);
export { RewardPointsPageModule };
//# sourceMappingURL=reward-points.module.js.map