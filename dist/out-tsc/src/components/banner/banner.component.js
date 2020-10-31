import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AlertService } from 'src/providers/alert/alert.service';
let BannerComponent = class BannerComponent {
    constructor(shared, navCtrl, config, http, loading, alert) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.alert = alert;
        //===============================================================================================
        //on click image banners
        this.bannerClick = function (image) {
            //  console.log(image);
            if (image.type == 'category') {
                let navigationExtras = { queryParams: { id: parseInt(image.banners_url) } };
                this.navCtrl.navigateRoot("products", navigationExtras);
            }
            else if (image.type == 'product') {
                this.getSingleProductDetail(parseInt(image.banners_url));
            }
            else {
                let navigationExtras = { queryParams: { type: image.type } };
                this.navCtrl.navigateRoot("products", navigationExtras);
            }
        };
    }
    //===============================================================================================
    //getting single product data
    getSingleProductDetail(id) {
        this.loading.show();
        //if (this.type == 'recent' || this.type == 'wishList') {
        this.config.Woocommerce.getAsync("products/" + id + "?" + this.config.productsArguments).then((data) => {
            //this.alert.show("loaded");
            this.loading.hide();
            let navigationExtras = { queryParams: { data: JSON.parse(data.body) } };
            this.navCtrl.navigateRoot("product-detail", navigationExtras);
            this.shared.addToRecent(JSON.parse(data.body));
        }, err => {
            this.loading.hide();
            this.alert.show("Item not Available!");
            console.log(err);
        });
    }
    ngOnInit() { }
};
BannerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-banner',
        templateUrl: './banner.component.html',
        styleUrls: ['./banner.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        NavController,
        ConfigService,
        HTTP,
        LoadingService,
        AlertService])
], BannerComponent);
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map