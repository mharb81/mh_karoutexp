import * as tslib_1 from "tslib";
import { Component, ApplicationRef } from '@angular/core';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { AlertService } from 'src/providers/alert/alert.service';
import { ConfigService } from 'src/providers/config/config.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
let SearchPage = class SearchPage {
    constructor(navCtrl, config, http, alert, loading, shared, applicationRef) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.alert = alert;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.searchResult = [];
        this.showCategories = true;
        this.onChangeKeyword = function (e) {
            //console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
        };
        this.getSearchData = function () {
            if (this.search != undefined) {
                if (this.search == null || this.search == '') {
                    this.shared.toast("Please enter something");
                    return 0;
                }
            }
            else {
                this.shared.toast("Please enter something");
                return 0;
            }
            this.loading.show();
            this.config.Woocommerce.getAsync("products?status=publish&per_page=50&search=" + this.search + "&" + this.config.productsArguments).then((data) => {
                this.loading.hide();
                this.searchResult = JSON.parse(data.body);
                this.showCategories = false;
                if (this.searchResult.length == 0) {
                    this.shared.toast("No Product found!");
                }
                this.applicationRef.tick();
            });
        };
    }
    openProducts(id, name) {
        this.navCtrl.navigateForward("/products/" + id + "/" + name + "/0");
    }
    ngOnInit() {
    }
};
SearchPage = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.page.html',
        styleUrls: ['./search.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ConfigService,
        HttpClient,
        AlertService,
        LoadingService,
        SharedDataService,
        ApplicationRef])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.page.js.map