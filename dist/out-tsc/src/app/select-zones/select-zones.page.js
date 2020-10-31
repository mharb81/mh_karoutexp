import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams, NavController, Events } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
let SelectZonesPage = class SelectZonesPage {
    constructor(navCtrl, navParams, http, events, config, modalCtrl, loading, shared, location) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.items = [];
        this.zones = [];
        let page = this.navParams.get('page');
        let id = this.navParams.get('id');
        if (page == 'shipping') {
            this.items = this.zones = this.location.data.states[this.shared.shipping.country];
        }
        else {
            this.items = this.zones = this.location.data.states[this.shared.billing.country];
        }
        if (page == 'shippingUpdate' || page == 'billingUpdate') {
            console.log(id);
            this.items = this.zones = this.location.data.states[id];
            if (this.items == undefined)
                this.items = this.zones = [];
            console.log(this.items);
        }
    }
    initializeItems() {
        this.items = this.zones;
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
    selectZone(c) {
        let page = this.navParams.get('page');
        this.events.publish("stateChange", page, c);
        if (page == 'shipping') {
            if (c == 'other') {
                this.shared.shipping.state = 'other';
                this.shared.shippingStateName = "other";
            }
            else {
                this.shared.shipping.state = c.value;
                this.shared.shippingStateName = c.name;
                // this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
        }
        else {
            if (c == 'other') {
                this.shared.billing.state = 'other';
                this.shared.billingStateName = "other";
            }
            else {
                this.shared.billing.state = c.value;
                this.shared.billingStateName = c.name;
            }
        }
        this.dismiss();
    }
    hideOther() {
        if (this.zones == undefined)
            this.zones = [];
        if (this.zones.length == 0)
            return true;
        else
            return false;
    }
    ngOnInit() {
    }
};
SelectZonesPage = tslib_1.__decorate([
    Component({
        selector: 'app-select-zones',
        templateUrl: './select-zones.page.html',
        styleUrls: ['./select-zones.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        NavParams,
        HttpClient,
        Events,
        ConfigService,
        ModalController,
        LoadingService,
        SharedDataService,
        LocationDataService])
], SelectZonesPage);
export { SelectZonesPage };
//# sourceMappingURL=select-zones.page.js.map