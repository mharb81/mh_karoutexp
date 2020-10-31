import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController, NavController, Events } from '@ionic/angular';
import { SelectCountryPage } from 'src/app/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/select-zones/select-zones.page';
import { LoadingService } from 'src/providers/loading/loading.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
let AddressesPage = class AddressesPage {
    constructor(navCtrl, shared, modalCtrl, config, storage, events, loading, location) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.events = events;
        this.loading = loading;
        this.location = location;
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
        //when country is selected
        events.subscribe('countryChange', (page, value) => {
            if (page == "shippingUpdate") {
                this.shippingCountryName = value.name;
                this.shipping.country = value.value;
                this.shipping.state = null;
                this.shipping.city = null;
                this.shipping.postcode = null;
                this.shippingStateName = "";
            }
            if (page == "billingUpdate") {
                this.billingCountryName = value.name;
                this.billing.country = value.value;
                this.billing.state = null;
                this.billing.city = null;
                this.billing.postcode = null;
                this.billingStateName = "";
            }
        });
        //state is selected
        events.subscribe('stateChange', (page, value) => {
            if (page == "shippingUpdate") {
                if (value == 'other') {
                    console.log(page + value);
                    this.shipping.state = 'other';
                    this.shippingStateName = "other";
                }
                else {
                    this.shipping.state = value.value;
                    this.shippingStateName = value.name;
                }
            }
            if (page == "billingUpdate") {
                if (value == 'other') {
                    this.billing.state = 'other';
                    this.billingStateName = "other";
                }
                else {
                    this.billing.state = value.value;
                    this.billingStateName = value.name;
                }
            }
        });
    }
    updateBillingAddress() {
        this.loading.show();
        var d = {
            billing: this.billing
        };
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
            this.loading.hide();
            let dat = JSON.parse(data.body);
            this.shared.customerData.billing = dat.billing;
            this.storage.set('customerData', this.shared.customerData);
            this.shared.toast("Billing Address Updated");
        });
    }
    updateShippingAddress() {
        this.loading.show();
        var d = {
            shipping: this.shipping
        };
        console.log(d);
        this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, d).then((data) => {
            this.loading.hide();
            let dat = JSON.parse(data.body);
            this.shared.customerData.shipping = dat.shipping;
            console.log("customer data");
            console.log(this.shared.customerData);
            this.storage.set('customerData', this.shared.customerData);
            this.shared.toast("Shipping Address Updated");
        });
    }
    selectCountryPage(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: SelectCountryPage,
                componentProps: {
                    page: value
                }
            });
            return yield modal.present();
        });
    }
    selectZonePage(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;
            let modal = yield this.modalCtrl.create({
                component: SelectZonesPage,
                componentProps: {
                    page: value, id: id
                }
            });
            return yield modal.present();
        });
    }
    openCart() {
        this.navCtrl.navigateForward("cart");
    }
    ionViewWillEnter() {
        if (this.shared.customerData.id != null) {
            this.shipping = this.shared.customerData.shipping;
            this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
            this.billing = this.shared.customerData.billing;
            this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
    }
    ngOnInit() {
    }
};
AddressesPage = tslib_1.__decorate([
    Component({
        selector: 'app-addresses',
        templateUrl: './addresses.page.html',
        styleUrls: ['./addresses.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        SharedDataService,
        ModalController,
        ConfigService,
        Storage,
        Events,
        LoadingService,
        LocationDataService])
], AddressesPage);
export { AddressesPage };
//# sourceMappingURL=addresses.page.js.map