import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ApplicationRef } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
let SlidingTabsComponent = class SlidingTabsComponent {
    constructor(shared, http, config, loading, applicationRef) {
        this.shared = shared;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '0';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
    }
    getProducts(infiniteScroll) {
        if (this.loadingServerData)
            return 0;
        if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
        }
        this.loadingServerData = true;
        let query = 'products?' + 'page=' + this.page;
        if (this.selected != '0')
            query = 'products?category=' + this.selected + '&page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        }
        this.config.Woocommerce.getAsync(query).then((data) => {
            let dat = JSON.parse(data.body);
            this.infinite.complete();
            if (this.page == 1) {
                this.products = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.products.push(value);
                }
            }
            if (dat.length < 10) {
                this.infinite.disabled = true;
            }
            this.loadingServerData = false;
            this.applicationRef.tick();
        });
    }
    //changing tab
    changeTab(c) {
        this.infinite.disabled = false;
        this.page = 1;
        if (c == '')
            this.selected = c;
        else
            this.selected = c.id;
        this.getProducts(null);
        this.loading.autoHide(700);
    }
    ngOnInit() {
        this.getProducts(null);
    }
};
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], SlidingTabsComponent.prototype, "infinite", void 0);
tslib_1.__decorate([
    Input('type'),
    tslib_1.__metadata("design:type", Object)
], SlidingTabsComponent.prototype, "type", void 0);
SlidingTabsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sliding-tabs',
        templateUrl: './sliding-tabs.component.html',
        styleUrls: ['./sliding-tabs.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        HttpClient,
        ConfigService,
        LoadingService,
        ApplicationRef])
], SlidingTabsComponent);
export { SlidingTabsComponent };
//# sourceMappingURL=sliding-tabs.component.js.map