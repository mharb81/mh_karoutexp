import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
let RewardPointsPage = class RewardPointsPage {
    constructor(navCtrl, http, loading, shared, config) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.rewards = [];
        this.httpLoading = true;
        this.getRewards();
    }
    getRewards() {
        this.httpLoading = true;
        this.loading.show();
        this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe((data) => {
            this.httpLoading = false;
            this.loading.hide();
            let dat = data.data;
            this.rewards = dat;
            console.log(dat);
        });
    }
    openShop() {
        this.navCtrl.navigateForward("/products/0/0/newest");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad RewardPointsPage');
    }
    refreshPage() {
        this.getRewards();
    }
    totalPoints() {
        let t = 0;
        for (let v of this.rewards) {
            t = t + parseInt(v.points);
        }
        return t;
    }
    ngOnInit() {
    }
};
RewardPointsPage = tslib_1.__decorate([
    Component({
        selector: 'app-reward-points',
        templateUrl: './reward-points.page.html',
        styleUrls: ['./reward-points.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        HttpClient,
        LoadingService,
        SharedDataService,
        ConfigService])
], RewardPointsPage);
export { RewardPointsPage };
//# sourceMappingURL=reward-points.page.js.map