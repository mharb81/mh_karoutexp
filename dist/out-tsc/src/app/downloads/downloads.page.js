import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { NavController, Events } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
let DownloadsPage = class DownloadsPage {
    constructor(navCtrl, loading, shared, config, events, themeableBrowser) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.events = events;
        this.themeableBrowser = themeableBrowser;
        this.downloads = [
            {
                "download_id": "91447fd1849316bbc89dfb7e986a6006",
                "download_url": "https://example.com/?download_file=87&order=wc_order_58d17c18352&email=joao.silva%40example.com&key=91447fd1849316bbc89dfb7e986a6006",
                "product_id": 87,
                "product_name": "Woo Album #2",
                "download_name": "Woo Album #2 &ndash; Song 2",
                "order_id": 723,
                "order_key": "wc_order_58d17c18352",
                "downloads_remaining": "3",
                "access_expires": "never",
                "access_expires_gmt": "never",
                "file": {
                    "name": "Song 2",
                    "file": "http://example.com/wp-content/uploads/woocommerce_uploads/2013/06/Song.mp3"
                },
                "_links": {
                    "collection": [
                        {
                            "href": "https://example.com/wp-json/wc/v3/customers/26/downloads"
                        }
                    ],
                    "product": [
                        {
                            "href": "https://example.com/wp-json/wc/v3/products/87"
                        }
                    ],
                    "order": [
                        {
                            "href": "https://example.com/wp-json/wc/v3/orders/723"
                        }
                    ]
                }
            }
        ];
        this.httpLoading = true;
        this.getDownloads();
    }
    getDownloads() {
        this.httpLoading = true;
        this.loading.show();
        this.config.Woocommerce.getAsync("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then((data) => {
            this.httpLoading = false;
            this.loading.hide();
            let dat = JSON.parse(data.body);
            //this.downloads = dat;
            console.log(dat);
        });
    }
    downloadFile(value) {
        let options = {};
        this.themeableBrowser.create(value.download_url, '_system', options);
        this.loading.autoHide(1000);
        this.events.publish("openHomePage");
    }
    refreshPage() {
        this.getDownloads();
    }
    ngOnInit() {
    }
};
DownloadsPage = tslib_1.__decorate([
    Component({
        selector: 'app-downloads',
        templateUrl: './downloads.page.html',
        styleUrls: ['./downloads.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        LoadingService,
        SharedDataService,
        ConfigService,
        Events,
        ThemeableBrowser])
], DownloadsPage);
export { DownloadsPage };
//# sourceMappingURL=downloads.page.js.map