import * as tslib_1 from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Events, ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { AlertService } from 'src/providers/alert/alert.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { Storage } from '@ionic/storage';
let ProductComponent = class ProductComponent {
    constructor(config, shared, navCtrl, modalCtrl, events, storage, loading, alert, translate) {
        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.loading = loading;
        this.alert = alert;
        this.translate = translate;
        this.isLiked = 0;
        this.wishArray = [];
        events.subscribe('wishListUpdate', (id, value) => {
            if (id == this.p.id)
                this.isLiked = value;
        });
        this.storage.get('wishListProducts').then((val) => {
            this.wishArray = val;
            this.checkWishList();
        });
    }
    checkWishList() {
        //getting wishList items from local storage
        let count = 0;
        if (this.wishArray != null)
            for (let value of this.wishArray) {
                if (value.id == this.p.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    }
    pDiscount() {
        var rtn = "";
        var p1 = parseInt(this.p.regular_price);
        var p2 = parseInt(this.p.sale_price);
        if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
        }
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            rtn = "";
        }
        rtn = result + '%';
        return rtn;
    }
    showProductDetail() {
        let navigationExtras = { queryParams: { data: this.p } };
        this.navCtrl.navigateForward("product-detail", navigationExtras);
        if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
        }
    }
    checkProductNew() {
        var pDate = new Date(this.p.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    }
    addToCart() {
        this.shared.addToCart(this.p, null, null, null);
        //this.navCtrl.push(CartPage); 
    }
    isInCart() {
        var found = false;
        for (let value of this.shared.cartProducts) {
            if (value.product_id == this.p.id) {
                found = true;
            }
        }
        if (found == true)
            return true;
        else
            return false;
    }
    removeRecent() {
        this.shared.removeRecent(this.p);
    }
    clickWishList() {
        // this.loading.autoHide(500);
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    }
    addWishList() {
        this.shared.addWishList(this.p);
    }
    removeWishList() {
        this.shared.removeWishList(this.p);
    }
    ngOnChanges() {
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input('data'),
    tslib_1.__metadata("design:type", Object)
], ProductComponent.prototype, "p", void 0);
tslib_1.__decorate([
    Input('type'),
    tslib_1.__metadata("design:type", Object)
], ProductComponent.prototype, "type", void 0);
ProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product',
        encapsulation: ViewEncapsulation.None,
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigService,
        SharedDataService,
        NavController,
        ModalController,
        Events,
        Storage,
        LoadingService,
        AlertService,
        TranslateService])
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map