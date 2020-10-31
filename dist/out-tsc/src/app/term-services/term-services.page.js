import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { TranslateService } from '@ngx-translate/core';
let TermServicesPage = class TermServicesPage {
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
TermServicesPage = tslib_1.__decorate([
    Component({
        selector: 'app-term-services',
        templateUrl: './term-services.page.html',
        styleUrls: ['./term-services.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        ConfigService,
        TranslateService])
], TermServicesPage);
export { TermServicesPage };
//# sourceMappingURL=term-services.page.js.map