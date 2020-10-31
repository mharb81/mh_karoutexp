import * as tslib_1 from "tslib";
var _a;
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { AlertService } from 'src/providers/alert/alert.service';
import { LoadingService } from 'src/providers/loading/loading.service';
let MyOrdersPage = class MyOrdersPage {
    constructor(navCtrl, http, config, shared, alert, loading, applicationRef) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.alert = alert;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.page = 1;
        this.orders = new Array;
        this.httpRunning = true;
    }
    getOrders() {
        this.httpRunning = true;
        if (this.page == 1) {
            this.loading.show();
        }
        this.config.Woocommerce.getAsync('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then((dat) => {
            this.infinite.complete();
            this.httpRunning = false;
            let data = JSON.parse(dat.body);
            if (this.page == 1) {
                this.orders = new Array;
                this.loading.hide();
            }
            if (data.length != 0) {
                this.page++;
                for (let value of data) {
                    this.orders.push(value);
                }
            }
            if (data.length == 0) {
                this.infinite.enable(false);
            }
            this.applicationRef.tick();
        }, err => {
            this.loading.hide();
            this.alert.show("Server Error while Loading Orders");
        });
    }
    ;
    showOrderDetail(order) {
        this.navCtrl.push(OrderDetailPage, { 'data': order });
    }
    ionViewDidLoad() {
        this.httpRunning = true;
        this.getOrders();
    }
    openCart() {
        this.navCtrl.push(CartPage);
    }
    openSearch() {
        this.navCtrl.push(SearchPage);
    }
    openShop() {
        this.navCtrl.push(ProductsPage);
    }
    refreshPage() {
        this.page = 1;
        this.getOrders();
    }
    addCurrecny(order, v2) {
        return order.currency + " " + v2;
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild("InfiniteScroll", { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], MyOrdersPage.prototype, "infinite", void 0);
MyOrdersPage = tslib_1.__decorate([
    Component({
        selector: 'app-my-orders',
        templateUrl: './my-orders.page.html',
        styleUrls: ['./my-orders.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        HttpClient,
        ConfigService,
        SharedDataService,
        AlertService,
        LoadingService, typeof (_a = typeof ApplicattionRef !== "undefined" && ApplicattionRef) === "function" ? _a : Object])
], MyOrdersPage);
export { MyOrdersPage };
//# sourceMappingURL=my-orders.page.js.map