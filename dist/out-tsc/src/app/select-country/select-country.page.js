import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController, Events, IonSearchbar, NavParams } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
let SelectCountryPage = class SelectCountryPage {
    constructor(http, events, config, modalCtrl, loading, shared, navParams, location) {
        this.http = http;
        this.events = events;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.navParams = navParams;
        this.location = location;
        this.searchQuery = '';
        this.countries = new Array;
        this.items = this.countries = this.location.data.countries;
        setTimeout(() => { this.searchBar.setFocus(); }, 250);
    }
    initializeItems() {
        this.items = this.countries;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        let val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
    selectCountry(c) {
        let page = this.navParams.get('page');
        this.events.publish("countryChange", page, c);
        if (page == 'shipping') {
            this.shared.shippingCountryName = c.name;
            this.shared.shipping.country = c.value;
            this.shared.shipping.state = null;
            this.shared.shipping.city = null;
            this.shared.shipping.postcode = null;
            this.shared.shippingStateName = "";
        }
        else if (page == 'billing') {
            this.shared.billingCountryName = c.name;
            this.shared.billing.country = c.value;
            this.shared.billing.state = null;
            this.shared.billing.city = null;
            this.shared.billing.postcode = null;
            this.shared.billingStateName = "";
        }
        this.dismiss();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild('Searchbar', { static: false }),
    tslib_1.__metadata("design:type", IonSearchbar)
], SelectCountryPage.prototype, "searchBar", void 0);
SelectCountryPage = tslib_1.__decorate([
    Component({
        selector: 'app-select-country',
        templateUrl: './select-country.page.html',
        styleUrls: ['./select-country.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Events,
        ConfigService,
        ModalController,
        LoadingService,
        SharedDataService,
        NavParams,
        LocationDataService])
], SelectCountryPage);
export { SelectCountryPage };
//# sourceMappingURL=select-country.page.js.map