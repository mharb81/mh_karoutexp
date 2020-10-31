import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';
import { ModalController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor(mdCtrl, config, sharedData, translate) {
        this.mdCtrl = mdCtrl;
        this.config = config;
        this.sharedData = sharedData;
        this.translate = translate;
    }
    ngOnInit() {
    }
    // For Modal Dismiss
    dismiss() {
        this.mdCtrl.dismiss();
    }
};
PrivacyPolicyPage = tslib_1.__decorate([
    Component({
        selector: 'app-privacy-policy',
        templateUrl: './privacy-policy.page.html',
        styleUrls: ['./privacy-policy.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        ConfigService,
        SharedDataService,
        TranslateService])
], PrivacyPolicyPage);
export { PrivacyPolicyPage };
//# sourceMappingURL=privacy-policy.page.js.map