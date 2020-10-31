import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { Storage } from '@ionic/storage';
let WishListPage = class WishListPage {
    constructor(navCtrl, config, shared, storage) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.storage = storage;
    }
    openProductsPage() {
        this.navCtrl.navigateForward("/products/0/0/newest");
    }
    ngOnInit() {
    }
};
WishListPage = tslib_1.__decorate([
    Component({
        selector: 'app-wish-list',
        templateUrl: './wish-list.page.html',
        styleUrls: ['./wish-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ConfigService,
        SharedDataService,
        Storage])
], WishListPage);
export { WishListPage };
//# sourceMappingURL=wish-list.page.js.map