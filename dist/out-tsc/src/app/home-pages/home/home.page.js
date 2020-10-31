import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Events, IonSlides } from '@ionic/angular';
import { NavController, IonContent } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { Router } from '@angular/router';
let HomePage = class HomePage {
    constructor(nav, config, events, router, shared) {
        this.nav = nav;
        this.config = config;
        this.events = events;
        this.router = router;
        this.shared = shared;
        this.segments = "topSeller"; //first segment by default 
        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
        events.subscribe('recentDeleted', () => {
            console.log("clicked recent");
            this.slider.update();
            //this.recentSlider.resize();
            this.slider.slidePrev();
        });
        setTimeout(() => {
            this.nav.navigateForward("/addresses");
        }, 1000);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    // For FAB Scroll
    onScroll(e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    }
    // For Scroll To Top Content
    scrollToTop() {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    }
    openProducts(value) {
        let navigationExtras = { queryParams: { type: value } };
        this.nav.navigateForward("products", navigationExtras);
        this.router.navigateByUrl("/products/0/0" + value);
    }
    ngAfterContentChecked() {
        //this.content.resize();
    }
};
tslib_1.__decorate([
    ViewChild(IonContent, { static: false }),
    tslib_1.__metadata("design:type", IonContent)
], HomePage.prototype, "content", void 0);
tslib_1.__decorate([
    ViewChild('recentSlider', { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], HomePage.prototype, "slider", void 0);
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        ConfigService,
        Events,
        Router,
        SharedDataService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map