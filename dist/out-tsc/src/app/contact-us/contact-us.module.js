import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactUsPage } from './contact-us.page';
import { TranslateModule } from '@ngx-translate/core';
const routes = [
    {
        path: '',
        component: ContactUsPage
    }
];
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TranslateModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ContactUsPage]
    })
], ContactUsPageModule);
export { ContactUsPageModule };
//# sourceMappingURL=contact-us.module.js.map