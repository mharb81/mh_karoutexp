import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from '@ionic/angular';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { LoadingService } from 'src/providers/loading/loading.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
let AboutUsPage = class AboutUsPage {
    constructor(shared, config, modalCtrl, loading, iab, translate) {
        this.shared = shared;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
        this.translate = translate;
    }
    ngOnInit() {
    }
    showModal(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (value == 'privacyPolicy') {
                let modal = yield this.modalCtrl.create({
                    component: PrivacyPolicyPage
                });
                return yield modal.present();
            }
            else if (value == 'termServices') {
                let modal = yield this.modalCtrl.create({
                    component: TermServicesPage
                });
                return yield modal.present();
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: RefundPolicyPage
                });
                return yield modal.present();
            }
        });
    }
    openSite() {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    }
    ionViewWillEnter() {
        if (this.config.admob == 1)
            this.shared.showAd();
    }
};
AboutUsPage = tslib_1.__decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './about-us.page.html',
        styleUrls: ['./about-us.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        ConfigService,
        ModalController,
        LoadingService,
        InAppBrowser,
        TranslateService])
], AboutUsPage);
export { AboutUsPage };
//# sourceMappingURL=about-us.page.js.map