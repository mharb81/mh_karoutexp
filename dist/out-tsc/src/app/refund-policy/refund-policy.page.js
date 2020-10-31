import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController } from '@ionic/angular';
let RefundPolicyPage = class RefundPolicyPage {
    constructor(mdCtrl, config, translate) {
        this.mdCtrl = mdCtrl;
        this.config = config;
    }
    ngOnInit() {
    }
    // For Modal Dismiss
    dismiss() {
        this.mdCtrl.dismiss();
    }
};
RefundPolicyPage = tslib_1.__decorate([
    Component({
        selector: 'app-refund-policy',
        templateUrl: './refund-policy.page.html',
        styleUrls: ['./refund-policy.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        ConfigService,
        TranslateService])
], RefundPolicyPage);
export { RefundPolicyPage };
//# sourceMappingURL=refund-policy.page.js.map