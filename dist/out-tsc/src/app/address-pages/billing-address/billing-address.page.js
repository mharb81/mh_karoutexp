import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController } from '@ionic/angular';
import { SelectCountryPage } from 'src/app/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/select-zones/select-zones.page';
let BillingAddressPage = class BillingAddressPage {
    constructor(shared, modalCtrl, config) {
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        console.log(shared.cartquantity);
    }
    ngOnInit() {
    }
    selectCountryPage(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("ggg");
            let modal = yield this.modalCtrl.create({
                component: SelectCountryPage
            });
            return yield modal.present();
        });
    }
    selectZonePage(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: SelectZonesPage
            });
            return yield modal.present();
        });
    }
};
BillingAddressPage = tslib_1.__decorate([
    Component({
        selector: 'app-billing-address',
        templateUrl: './billing-address.page.html',
        styleUrls: ['./billing-address.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        ModalController,
        ConfigService])
], BillingAddressPage);
export { BillingAddressPage };
//# sourceMappingURL=billing-address.page.js.map