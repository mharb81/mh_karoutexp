// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/
import * as tslib_1 from "tslib";
import { Injectable, ApplicationRef } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Platform, Events } from '@ionic/angular';
import { AlertService } from '../alert/alert.service';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
if (localStorage.languageCode == undefined) {
    localStorage.languageCode = "en"; //default language code
    localStorage.languageDirection = "ltr"; //default language direction of app
    localStorage.currency = "&#36;"; //default currecny html code to show in app.
    // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/
    localStorage.currencyCode = "USD"; //default currency code
    localStorage.currencyPos = "left"; //default currency position
    localStorage.decimals = 2; //default currecny decimal
}
let ConfigService = class ConfigService {
    constructor(http, storage, platform, alrt, applicationRef, events, httpNative) {
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.alrt = alrt;
        this.applicationRef = applicationRef;
        this.events = events;
        this.httpNative = httpNative;
        // public url: string = 'http://tcshop.ionicecommerce.com';
        // public consumerKey: string = 'ck_ee23f4235c5a9c1eb04b96b85048a2a312dc3225';
        // public consumerSecret: string = 'cs_502ced0196a050298c91d4d9febee1004274564b';
        this.url = 'http://woodemo0.ionicecommerce.com';
        this.consumerKey = 'ck_e7f486f622aafd76463291494c81c5350ac47a79';
        this.consumerSecret = 'cs_609563b9569734e4d373588c2688f9782713728f';
        // public url: string = 'http://localhost/wordpress';
        // public consumerKey: string = 'ck_f7b2e491acaa25c94150e58e5b170ee393c5735f';
        // public consumerSecret: string = 'cs_4374ed2683ad3c63bf207b96a30740635f6af514';
        this.showIntroPage = 1; // show/hide intro page value 1 for show, 0 for hide
        this.appInProduction = false;
        this.productSlidesPerPage = 2.5;
        this.onesignalAppId = "10728890-4bb1-4e91-89c3-000f14a3b093";
        this.onesignalSenderId = "866752245266";
        this.googleMapId = "AIzaSyBCMLN-ZbmFDw7Rf_OLsCDrYzI4n-jcaX0";
        this.admob = 0; // show/hide ads on android value 1 for show, 0 for hide
        this.admobBannerid = '';
        this.admobIntid = '';
        this.admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide
        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.languageCode = localStorage.languageCode; //default language of app
        this.languageDirection = localStorage.languageDirection; //default direction of app
        this.appDirection = this.languageDirection; // application direction
        this.currency = localStorage.currency;
        this.productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode; //additional product arguments for query
        this.Woocommerce = WooCommerceAPI.WooCommerceAPI({
            url: this.url,
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
            wpAPI: true,
            queryStringAuth: true,
            version: 'wc/v3'
        });
        this.urlExt = this.url + "/wp-json/woo_app_connect/mobile/";
        this.langId = "1";
        this.loader = 'dots';
        this.newProductDuration = 20;
        this.cartButton = 1; //1 = show and 0 = hide
        this.currencyPos = localStorage.currencyPos;
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = 1;
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.notificationType = "";
        this.privacyPolicy = "";
        this.termServices = "";
        this.aboutUs = "";
        this.refundPolicy = "";
        this.filterMaxPrice = 1000;
        this.guestCheckOut = true;
        this.checkOutPage = 1;
        this.defaultIcons = false;
        this.orderCancelButton = false;
        this.addressPage = true;
        this.downloadPage = true;
        this.showVendorInfo = false; //for dokan plugin
        this.showWcVendorInfo = false;
        this.multiLanguage = false;
        this.multiCurrency = false;
        this.appSettings = {};
        this.enableGeoFencing = false;
        this.enableDeliveryTracking = false;
        this.enableWpPointReward = false;
        this.trackingUrl = "";
        this.currentSettings = 1;
        this.allSettings = {};
        this.saveDefaultCurrency();
        // this.wc.getAsync("products?on_sale=true&status=publish").then((data) => {
        //   let tab2 = JSON.parse(data.body);
        //   this.applicationRef.tick();
        //   console.log(tab2);
        // });
        //  console.log(WooCommerceAPI);
        // console.log(this.Woocommerce._request("get", "products"));
        // console.log(this.Woocommerce._normalizeQueryString("products"));
        // console.log(this.Woocommerce._getUrl("products"));
        // console.log(this.Woocommerce._getOAuth());
        // console.log(this.Woocommerce._request("get", "products").path);
        //  console.log(this.Woocommerce._request2("get", "products"));
        // var headers = new HttpHeaders();
        // headers.append("Accept", 'application/json');
        // headers.append('User-Agent', 'WooCommerce API Client-Node.js/1.4.2');
        // let h = {
        //   "Accept": 'application/json',
        //   'User-Agent': 'WooCommerce API Client-Node.js/1.4.2'
        // }
        // let request = this.getUrl("get", "products")
        // this.http.get(request.url, { headers: request.headers }
        // ).subscribe((data: any) => {
        //   alert("call is successfull");
        //   console.log("teser")
        //   console.log(data);
        // }, (err) => { alert(JSON.stringify(err)); });
        // console.log(this.getUrl("get", "products"));
        // this.httpNative.get(request.url, { headers: request.headers }, {})
        //   .then(data => {
        //     alert(JSON.stringify(data));
        //     console.log(data.status);
        //     console.log(data.data); // data received by server
        //     console.log(data.headers);
        //   })
        //   .catch(error => {
        //     alert(JSON.stringify(error)+"native error");
        //     console.log(error.status);
        //     console.log(error.error); // error message as string
        //     console.log(error.headers);
        //   });
    }
    getUrl(type, endpoint) {
        let r = this.Woocommerce._request2(type, endpoint);
        let s = r.url + "?oauth_consumer_key=" + r.qs.oauth_consumer_key;
        s = s + "&oauth_nonce=" + r.qs.oauth_nonce;
        s = s + "&oauth_signature=" + r.qs.oauth_signature;
        s = s + "&oauth_signature_method=" + r.qs.oauth_signature_method;
        s = s + "&oauth_timestamp=" + r.qs.oauth_timestamp;
        s = s + "&oauth_version=" + r.qs.oauth_version;
        return { url: s, headers: r.headers };
    }
    siteSetting() {
        return new Promise(resolve => {
            this.storage.get('appSettings').then((val) => {
                if (val == null) {
                    this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe((data) => {
                        this.appSettings = data;
                        this.storage.set("appSettings", this.appSettings);
                        this.defaultSettings();
                        this.events.publish('settingsLoaded');
                        resolve();
                    });
                }
                else {
                    this.appSettings = val;
                    this.defaultSettings();
                    this.events.publish('settingsLoaded');
                    resolve();
                }
            });
        });
    }
    defaultSettings() {
        this.homePage = parseInt(this.appSettings.home_style);
        this.categoryPage = parseInt(this.appSettings.category_style);
        this.introPage = parseInt(this.appSettings.intro_page);
        this.myOrdersPage = parseInt(this.appSettings.my_orders_page);
        this.newsPage = parseInt(this.appSettings.news_page);
        this.wishListPage = parseInt(this.appSettings.wish_list_page);
        this.shippingAddressPage = parseInt(this.appSettings.shipping_address_page);
        this.aboutUsPage = parseInt(this.appSettings.about_us_page);
        this.contactUsPage = this.appSettings.contact_us_page;
        this.editProfilePage = parseInt(this.appSettings.edit_profile_page);
        this.settingPage = parseInt(this.appSettings.setting_page);
        //this.currency = this.appSettings.currency_symbol;
        this.cartButton = parseInt(this.appSettings.cart_button);
        this.footerShowHide = parseInt(this.appSettings.footer_button);
        this.addressPage = (this.appSettings.bill_ship_info == "1") ? true : false;
        this.downloadPage = (this.appSettings.downloads == "1") ? true : false;
        this.multiLanguage = (this.appSettings.wpml_enabled == "1") ? true : false;
        this.multiCurrency = (this.appSettings.wp_multi_currency == "1") ? true : false;
        this.showVendorInfo = (this.appSettings.mvf_enabled == "1") ? true : false;
        this.showWcVendorInfo = (this.appSettings.mvf_enabled == "2") ? true : false;
        this.enableGeoFencing = (this.appSettings.geo_fencing == "1") ? true : false;
        this.enableDeliveryTracking = (this.appSettings.delivery_tracking == "1") ? true : false;
        this.enableWpPointReward = (this.appSettings.wp_point_reward == "1") ? true : false;
        this.rateApp = parseInt(this.appSettings.rate_app);
        this.shareApp = parseInt(this.appSettings.share_app);
        this.defaultIcons = (this.appSettings.sidebar_menu_icon == "1") ? false : true;
        this.currentSettings = this.appSettings.update_order;
        this.events.publish("openDeepLink");
        //this.initializeGeoFence();
    }
    checkingNewSettingsFromServer() {
        this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe((data) => {
            var settings = data;
            this.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
            this.email = settings.contact_us_email;
            this.latitude = settings.latitude;
            this.longitude = settings.longitude;
            this.phoneNo = settings.phone_no;
            this.newProductDuration = settings.new_product_duration;
            this.notifText = settings.notification_text;
            this.notifTitle = settings.notification_title;
            this.notifDuration = settings.notification_duration;
            this.packgeName = this.appSettings.package_name;
            this.appName = settings.app_name;
            this.fbButton = parseInt(settings.facebook_login);
            this.siteUrl = this.appSettings.site_url;
            this.filterMaxPrice = parseInt(settings.filter_max_price);
            this.guestCheckOut = (settings.checkout_process == "yes") ? true : false;
            this.checkOutPage = parseInt(settings.one_page_checkout);
            //this.checkOutPage = 2;
            this.orderCancelButton = (settings.cancel_order_button == "1") ? true : false;
            this.cancelOrderTime = parseInt(settings.cancel_order_hours);
            this.trackingUrl = settings.tracking_url;
            this.applicationRef.tick();
            this.reloadingWithNewSettings(settings);
        });
    }
    reloadingWithNewSettings(data) {
        //console.log(this.currentSettings + " setting cahnge " + data.update_order);
        if (this.currentSettings != data.update_order) {
            if (data.wp_multi_currency == "0")
                this.restoreDefaultCurrency();
            this.storage.set("appSettings", data);
        }
    }
    saveDefaultCurrency() {
        if (localStorage.appStartFirstTime == undefined) {
            localStorage.currencyDefault = localStorage.currency; //default currecny symbol to show in app
            localStorage.currencyCodeDefault = localStorage.currencyCode; //default currency code
            localStorage.currencyPosDefault = localStorage.currencyPos; //default currency position
            localStorage.decimalsDefault = localStorage.decimals; //default currecny decimal
            localStorage.appStartFirstTime = "started";
        }
    }
    restoreDefaultCurrency() {
        if (localStorage.appStartFirstTime == "started") {
            localStorage.currency = localStorage.currencyDefault; //default currecny symbol to show in app
            localStorage.currencyCode = localStorage.currencyCodeDefault; //default currency code
            localStorage.currencyPos = localStorage.currencyPosDefault; //default currency position
            localStorage.decimals = localStorage.decimalsDefault; //default currecny decimal
        }
    }
};
ConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        Storage,
        Platform,
        AlertService,
        ApplicationRef,
        Events,
        HTTP])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map