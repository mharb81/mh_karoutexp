import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ScratchCardPage } from './scratch-card.page';
const routes = [
    {
        path: '',
        component: ScratchCardPage
    }
];
let ScratchCardPageModule = class ScratchCardPageModule {
};
ScratchCardPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ScratchCardPage]
    })
], ScratchCardPageModule);
export { ScratchCardPageModule };
//# sourceMappingURL=scratch-card.module.js.map