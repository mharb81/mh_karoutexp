import * as tslib_1 from "tslib";
import { Component, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from 'src/providers/alert/alert.service';
import { LoadingService } from 'src/providers/loading/loading.service';
let MyAccountPage = class MyAccountPage {
    constructor(http, config, shared, platform, navCtrl, alert, applicationRef, loading) {
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.applicationRef = applicationRef;
        this.loading = loading;
        this.myAccountData = {};
        this.password = '';
        //============================================================================================  
        //function updating user information
        this.updateInfo = function () {
            this.loading.show();
            if (this.password != '')
                this.myAccountData.password = this.password;
            this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, this.myAccountData).then((data) => {
                this.loading.hide();
                this.shared.login(JSON.parse(data.body));
                this.applicationRef.tick();
                this.nav.navigateRoot("/settings");
                this.shared.toast("Data Updated!");
            }, (err) => { this.shared.toast("Error Updating Data!"); });
        };
    }
    ionViewWillEnter() {
        this.myAccountData.first_name = this.shared.customerData.first_name;
        this.myAccountData.last_name = this.shared.customerData.last_name;
    }
    ngOnInit() {
    }
};
MyAccountPage = tslib_1.__decorate([
    Component({
        selector: 'app-my-account',
        templateUrl: './my-account.page.html',
        styleUrls: ['./my-account.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigService,
        SharedDataService,
        Platform,
        NavController,
        AlertService,
        ApplicationRef,
        LoadingService])
], MyAccountPage);
export { MyAccountPage };
//# sourceMappingURL=my-account.page.js.map