import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, Events, Platform, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoginPage } from '../login/login.page';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
let SettingsPage = class SettingsPage {
    constructor(navCtrl, modalCtrl, config, storage, loading, http, events, shared, iab, socialSharing, plt, appVersion, oneSignal) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.events = events;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.setting = {};
    }
    ionViewDidEnter() {
        this.events.publish('footerChange', 'SettingsPage');
    }
    updateSetting() {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    }
    openLoginPage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: LoginPage,
                componentProps: {
                    'hideGuestLogin': true
                }
            });
            return yield modal.present();
        });
    }
    logOut() {
        this.shared.logOut();
    }
    openPage(page) {
        if (page == 'myAccount')
            this.navCtrl.navigateForward("my-account");
    }
    openSite() {
        this.loading.autoHide(2000);
        this.iab.create(this.config.siteUrl, "blank");
    }
    //============================================================================================
    //turning on off local  notification
    onOffPushNotification(value) {
        if (value == false) {
            this.oneSignal.setSubscription(false);
        }
        else {
            this.oneSignal.setSubscription(true);
        }
        this.updateSetting();
    }
    ;
    hideShowFooterMenu() {
        this.events.publish('setting', this.setting);
        this.updateSetting();
    }
    hideShowCartButton() {
        this.events.publish('setting', this.setting);
        this.updateSetting();
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
    ionViewDidLoad() {
        this.storage.get('setting').then((val) => {
            if (val != null || val != undefined) {
                this.setting = val;
            }
            else {
                this.setting.localNotification = true;
                this.setting.notification = true;
                this.setting.cartButton = true;
                this.setting.footer = true;
            }
        });
    }
    rateUs() {
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then((val) => {
                this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
        }
    }
    share() {
        this.loading.autoHide(2000);
        if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
        }
        else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then((val) => {
                this.socialSharing.share(this.config.appName, this.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
        }
    }
    checkAvatar() {
        return this.shared.checkAvatar();
    }
    getNameFirstLetter() {
        return this.shared.getNameFirstLetter();
    }
    ngOnInit() {
    }
};
SettingsPage = tslib_1.__decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.page.html',
        styleUrls: ['./settings.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ModalController,
        ConfigService,
        Storage,
        LoadingService,
        HttpClient,
        Events,
        SharedDataService,
        InAppBrowser,
        SocialSharing,
        Platform,
        AppVersion,
        OneSignal])
], SettingsPage);
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map