import * as tslib_1 from "tslib";
// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Injectable, ApplicationRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { LoadingService } from '../loading/loading.service';
import { Platform, ToastController, Events } from '@ionic/angular';
import { AlertService } from '../alert/alert.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
let SharedDataService = class SharedDataService {
    constructor(http, config, storage, loading, events, platform, spinnerDialog, //updates
    oneSignal, alert, toastCtrl, translate, themeableBrowser, appVersion, applicationRef) {
        this.http = http;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.platform = platform;
        this.spinnerDialog = spinnerDialog;
        this.oneSignal = oneSignal;
        this.alert = alert;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.themeableBrowser = themeableBrowser;
        this.appVersion = appVersion;
        this.applicationRef = applicationRef;
        this.banners = [];
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.allCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.subCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.cartquantity = "2";
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.cartTempProducts = [];
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
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        this.headerHexColor = "#51688F";
        //Function calcualte the total items of cart
        this.cartTotalItems = function () {
            this.events.publish('cartChange');
            let total = 0;
            for (let value of this.cartProducts) {
                total += parseInt(value.quantity);
            }
            this.cartquantity = total;
            // console.log("updated");
            return total;
        };
        events.subscribe('settingsLoaded', () => {
            this.onStart();
        });
        //getting translation of the 
        this.translate.get(this.checkOutPageText).subscribe((res) => { this.checkOutPageText = res; });
        //update settings before calling
        //getting recent viewed items from local storage
        storage.get('customerData').then((val) => {
            if (val != null || val != undefined)
                this.customerData = val;
        });
        //getting recent viewed items from local storage
        storage.get('recentViewedProducts').then((val) => {
            if (val != null)
                this.recentViewedProducts = val;
        });
        //getting cart from local storage
        storage.get('cartProducts').then((val) => {
            if (val != null)
                this.cartProducts = val;
            this.cartTotalItems();
        });
        this.cartTotalItems();
        //getting wishList items from local storage
        storage.get('wishListProducts').then((val) => {
            if (val != null)
                this.wishListProducts = val;
            // console.log(val);
        });
        //---------------- end -----------------
    }
    onStart() {
        //banners
        this.http.get(this.config.url + '/api/appsettings/get_all_banners/?insecure=cool').subscribe((data) => {
            this.banners = data.data;
        });
        // //getting tab 1 products?status=publish
        this.config.Woocommerce.getAsync("products?status=publish" + "&" + this.config.productsArguments).then((data) => {
            this.tab1 = JSON.parse(data.body);
            this.applicationRef.tick();
        });
        //getting tab 2
        this.config.Woocommerce.getAsync("products?on_sale=true&status=publish" + "&" + this.config.productsArguments).then((data) => {
            this.tab2 = JSON.parse(data.body);
            this.applicationRef.tick();
        });
        //getting tab 3
        this.config.Woocommerce.getAsync("products?featured=true&status=publish" + "&" + this.config.productsArguments).then((data) => {
            this.tab3 = JSON.parse(data.body);
            this.applicationRef.tick();
        });
        let ids = this.config.appSettings.about_page_id + "," + this.config.appSettings.refund_page_id + "," + this.config.appSettings.terms_page_id + "," + this.config.appSettings.privacy_page_id;
        //content pages
        this.http.get(this.config.url + '/wp-json/wp/v2/pages/?include=' + ids).subscribe((data) => {
            let d = data;
            for (let value of d) {
                if (this.config.appSettings.about_page_id == value.id) {
                    this.config.aboutUs = value.content.rendered;
                }
                if (this.config.appSettings.refund_page_id == value.id)
                    this.config.refundPolicy = value.content.rendered;
                if (this.config.appSettings.terms_page_id == value.id)
                    this.config.termServices = value.content.rendered;
                if (this.config.appSettings.privacy_page_id == value.id)
                    this.config.privacyPolicy = value.content.rendered;
            }
        });
        //getting all allCategories
        this.getAllCategories(1);
    }
    getVendorList() {
        if (this.config.showVendorInfo) {
            this.http.get(this.config.url + "/api/appsettings/get_featured_dokan_vendors_list/?insecure=cool").subscribe((data) => {
                if (this.vendors[0] == 1)
                    this.vendors = [];
                for (let d of data.data) {
                    if (d.banner == false)
                        d.banner = "assets/placeholder-v.png"; //;
                    if (d.meta[0].store_name != '')
                        d.name = d.meta[0].store_name;
                    else
                        d.name = d.first_name + " " + d.last_name;
                    //console.log(d.name);
                    this.vendors.push(d);
                }
                this.applicationRef.tick();
            });
            console.log("dokan is enabled");
        }
        else if (this.config.showWcVendorInfo) {
            this.http.get(this.config.url + "/api/appsettings/get_featured_wcvendors_list/?insecure=cool").subscribe((data) => {
                if (this.vendors[0] == 1)
                    this.vendors = [];
                //console.log(data.data)
                for (let d of data.data) {
                    if (d.banner == false)
                        d.banner = "assets/placeholder-wc.png"; //;
                    if (d.meta.pv_shop_name != '')
                        d.name = d.meta.pv_shop_name;
                    else
                        d.name = d.first_name + " " + d.last_name;
                    // console.log(d.name);
                    this.vendors.push(d);
                }
                this.applicationRef.tick();
            });
        }
    }
    getAllCategories(page) {
        //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
        this.config.Woocommerce.getAsync("products/categories?per_page=50&page=" + page + "&" + this.config.productsArguments).then((data) => {
            let dat = JSON.parse(data.body);
            if (this.allCategories[0] == 1) {
                this.allCategories = [];
                this.categories = [];
                this.subCategories = [];
            }
            for (let value of dat) {
                if (value.count != 0) {
                    value.name = this.removeHtmlEntites(value.name);
                    this.allCategories.push(value);
                    if (value.parent == 0)
                        this.categories.push(value);
                    else
                        this.subCategories.push(value);
                }
            }
            if (dat.length != 0) {
                this.getAllCategories(page + 1);
            }
            if (dat.length == 0) {
                this.events.publish("openDeepLink", "openCategoryInShop");
            }
            this.applicationRef.tick();
        });
    }
    removeHtmlEntites(value) {
        var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '¢',
            '&pound;': '£',
            '&yen;': '¥',
            '&euro;': '€',
            '&copy;': '©',
            '&reg;': '®',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '¢',
            '&#163;': '£',
            '&#165;': '¥',
            '&#8364;': '€',
            '&#169;': '©',
            '&#174;': '®',
        };
        for (var char in multiple) {
            var before = char;
            var after = multiple[char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
        }
        return value;
    }
    //adding into recent array products
    addToRecent(p) {
        console.log(p);
        let found = false;
        for (let value of this.recentViewedProducts) {
            if (value.id == p.id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    }
    //removing from recent array products
    removeRecent(p) {
        this.recentViewedProducts.forEach((value, index) => {
            if (value.id == p.id) {
                this.recentViewedProducts.splice(index, 1);
                this.storage.set('recentViewedProducts', this.recentViewedProducts);
            }
        });
        this.events.publish('recentDeleted');
    }
    //adding into cart array products
    addToCart(product, variation, quantity, metaData) {
        if (!this.checkCart(product, quantity))
            return 0;
        if (this.alreadyInCart(product, variation, quantity))
            return 0;
        var p = {};
        p.product_id = product.id;
        p.name = product.name;
        if (quantity == null)
            p.quantity = 1;
        else
            p.quantity = quantity;
        var seconds = new Date().getTime();
        p.cart_id = product.id + seconds;
        p.image = product.images[0].src;
        //console.log(p.image)
        p.stock_quantity = product.stock_quantity;
        p.tax_class = product.tax_class;
        p.tax_status = product.tax_status;
        p.price = product.price;
        p.price_html = product.price_html;
        p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
        p.total = parseFloat(product.price) * parseInt(p.quantity);
        p.on_sale = product.on_sale;
        p.categories = product.categories;
        if (metaData != null)
            p.meta_data = metaData;
        p.sold_individually = product.sold_individually;
        if (product.type == 'variable' && variation != null) {
            p.variation_id = variation.id;
            p.price = parseFloat(variation.price) * parseInt(p.quantity);
            p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
            p.total = parseFloat(variation.price) * parseInt(p.quantity);
            p.name = variation.name;
            p.stock_quantity = variation.stock_quantity;
            p.tax_status = variation.tax_status;
            if (variation.images[0].src.indexOf('placeholder') == -1) {
                p.image = variation.images[0].src;
                //console.log(variation.images[0].src)
            }
        }
        console.log(p);
        this.cartProducts.push(p);
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        // console.log(this.cartProducts);
        //console.log(this.cartProducts);
        this.toast("Added To Cart!");
    }
    checkCart(p, quantity) {
        let name = null;
        let onlyOneAllowed = true;
        let quantityCheck = true;
        //check for only one item is allowed
        for (let value of this.cartProducts) {
            if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
            }
        }
        if (onlyOneAllowed == false)
            this.alert.showWithTitle(name, "Only One Item Allowed");
        //check for product quantity
        if (quantity == null)
            quantity = 1;
        if (p.stock_quantity == null || p.stock_quantity > quantity)
            quantityCheck = true;
        else if (p.stock_quantity < quantity) {
            quantityCheck = false;
            this.alert.show("Product Quantity is Limited!");
        }
        if (onlyOneAllowed && quantityCheck)
            return true;
        else
            return false;
    }
    alreadyInCart(p, vId, quantity) {
        let count = 0;
        for (let value of this.cartProducts) {
            //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
            if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
            }
            else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
            }
        }
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
        if (count != 0)
            return true;
        else
            return false;
    }
    //removing from recent array products
    removeCart(p) {
        //console.log(value);
        this.cartProducts = p;
        this.storage.set('cartProducts', this.cartProducts);
        // this.storage.get('cartProducts').then((val) => {
        //   //console.log(val);
        // });
        this.cartTotalItems();
    }
    emptyCart() {
        this.cartProducts = [];
        this.storage.set('cartProducts', this.cartProducts);
        this.cartTotalItems();
    }
    emptyRecentViewed() {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    }
    productsTotal() {
        let total = 0;
        for (let value of this.cartProducts) {
            total = total + parseFloat(value.total);
        }
        return total;
    }
    removeWishList(p) {
        this.wishListProducts.forEach((value, index) => {
            if (value.id == p.id) {
                this.wishListProducts.splice(index, 1);
                this.storage.set('wishListProducts', this.wishListProducts);
            }
        });
        this.events.publish('wishListUpdate', p.id, 0);
        this.toast("Removed From Wish List!");
        this.applicationRef.tick();
    }
    addWishList(p) {
        this.wishListProducts.push(p);
        this.storage.set('wishListProducts', this.wishListProducts);
        this.events.publish('wishListUpdate', p.id, 1);
        this.toast("Added To Wish List!");
        this.applicationRef.tick();
    }
    login(data) {
        console.log(data);
        this.customerData = data;
        this.storage.set('customerData', this.customerData);
        this.subscribePush();
        this.events.publish("updateSideMenu");
    }
    logOut() {
        this.loading.autoHide(500);
        this.customerData = {};
        this.storage.set('customerData', this.customerData);
        this.resetData();
        this.events.publish("updateSideMenu");
        // this.fb.logout();
    }
    //============================================================================================
    //getting token and passing to server
    subscribePush() {
        if (this.platform.is('cordova') && this.config.onesignalAppId != "") {
            this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then((data) => {
                // alert("registration" + data.userId);
                // console.log(data.userId);
                //this.storage.set('registrationId', token);
            });
        }
    }
    showAd() {
        if (this.platform.is('cordova')) {
            this.events.publish('showAd');
        }
    }
    orderComplete() {
        this.cartProducts = [];
        this.couponArray = [];
        this.storage.set('cartProducts', []);
        this.shipping_lines = [];
        this.cartTotalItems();
    }
    // <!-- 2.0 updates -->
    onePageCheckOut() {
        let customer_id = 0;
        let token = null;
        let biling = this.billing;
        let shiping = this.shipping;
        if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
        }
        let onePage = this.config.checkOutPage;
        var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            one_page: onePage,
            platform: this.device,
        };
        console.log(data);
        this.openCheckoutWebview(data);
    }
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    getProducts() {
        var data = [];
        for (let v of this.cartProducts) {
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
            data.push(obj);
        }
        return data;
    }
    //=================================================================================================================================
    //Object.assign(c, JSON.parse(data.body)
    // <!-- 2.0 updates -->
    getCoupons() {
        var data = [];
        for (let v of this.couponArray) {
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    //=================================================================================================================================
    // <!-- 2.0 updates -->
    getShippingLines() {
        var data = [];
        for (let v of this.shipping_lines) {
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    resetData() {
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
    }
    toast(msg) {
        this.translate.get(msg).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: res,
                duration: 2500,
                position: 'bottom'
            });
            toast.present();
        }));
    }
    uploadDataToServer(data) {
        this.loading.show();
        // var uri = encodeURIComponent(JSON.stringify(data));
        // let d = { "order_link": data };
        return new Promise(resolve => {
            this.http.post(this.config.url + '/api/appsettings/ionic_data_link/?insecure=cool', data).subscribe(dat => {
                console.log(dat);
                resolve(dat);
                this.loading.hide();
            });
        });
    }
    //=================================================================================================================================
    openCheckoutWebview(data) {
        let options = {
            statusbar: {
                color: this.headerHexColor
            },
            toolbar: {
                height: 44,
                color: this.headerHexColor
            },
            title: {
                color: '#ffffff',
                staticText: this.checkOutPageText,
                showPageTitle: false
            },
            closeButton: {
                wwwImage: 'assets/close.png',
                align: 'right',
                event: 'closePressed'
            },
            backButton: {
                wwwImage: 'assets/back.png',
                align: 'left'
                //event: 'closePressed'
            },
            backButtonCanClose: true,
        };
        this.uploadDataToServer(data).then((id) => {
            console.log("id from data = " + id);
            const b = this.themeableBrowser.create(this.config.url + "/mobile-checkout/?order_id=" + id, '_blank', options);
            let orderPlaced = false;
            b.on('loadstart').subscribe(res => {
                this.translate.get('Loading').subscribe((res) => {
                    this.spinnerDialog.show("", res, true, { overlayOpacity: 1.00 });
                    setTimeout(() => {
                        this.spinnerDialog.hide();
                    }, 5000);
                });
                if (res.url.indexOf('order-received') != -1) {
                    console.log(res.url);
                    orderPlaced = true;
                    b.close();
                    this.events.publish('openThankYouPage');
                }
                else if (res.url.indexOf('cancel_order=true') != -1) {
                    b.close();
                }
            });
            b.on('closePressed').subscribe(res => {
                b.close();
            });
            b.on('loadstop').subscribe(res => {
                console.log('loadstop');
            });
            b.on('exit').subscribe(res => {
                if (orderPlaced)
                    this.events.publish('openThankYouPage');
            });
        });
    }
    checkAvatar() {
        let result = "";
        if (this.customerData.id != null) {
            if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') != -1) {
                result = "avatar";
            }
            else if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') == -1) {
                result = "image";
            }
        }
        else
            result = "false";
        return result;
    }
    getNameFirstLetter() {
        return this.customerData.first_name.charAt(0);
    }
    //categories page
    getCategoriesPageItems(parent) {
        let c = [];
        if (parent == undefined)
            c = this.categories;
        else {
            for (let v of this.allCategories) {
                if (v.parent == parent) {
                    c.push(v);
                }
            }
        }
        return c;
    }
};
SharedDataService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        ConfigService,
        Storage,
        LoadingService,
        Events,
        Platform,
        SpinnerDialog,
        OneSignal,
        AlertService,
        ToastController,
        TranslateService,
        ThemeableBrowser,
        AppVersion,
        ApplicationRef])
], SharedDataService);
export { SharedDataService };
//# sourceMappingURL=shared-data.service.js.map