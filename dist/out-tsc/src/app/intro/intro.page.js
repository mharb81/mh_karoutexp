import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
let IntroPage = class IntroPage {
    constructor(navCtrl, shared, config, events) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.events = events;
        this.slides = [
            { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/2.gif", title: "Category Page", icon: "cart", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/4.gif", title: "Cart Page", icon: "md-list-box", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
            { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
        ];
    }
    openHomePage() {
        this.events.publish("openHomePage");
        this.config.checkingNewSettingsFromServer();
    }
    ngOnInit() {
    }
};
IntroPage = tslib_1.__decorate([
    Component({
        selector: 'app-intro',
        templateUrl: './intro.page.html',
        styleUrls: ['./intro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        SharedDataService,
        ConfigService,
        Events])
], IntroPage);
export { IntroPage };
//# sourceMappingURL=intro.page.js.map