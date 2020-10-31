import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ActivatedRoute } from '@angular/router';
let NewsListPage = class NewsListPage {
    constructor(navCtrl, http, shared, config, loading, activatedRoute) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.posts = new Array;
        this.loadingServerData = true;
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPosts();
    }
    showPostDetail(post) {
        this.shared.singlePostData = post;
        this.navCtrl.navigateForward("/news-detail");
    }
    ;
    getImagePost(post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.http.get(post._links["wp:featuredmedia"][0].href).subscribe((data) => {
                post.image = data.source_url;
            });
    }
    //============================================================================================  
    //getting list of posts
    getPosts() {
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerData = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id + "&" + this.config.productsArguments).subscribe((data) => {
            this.infinite.complete(); //stopping infinite scroll loader
            if (this.page == 1) {
                this.posts = [];
                this.infinite.disabled = false;
                this.loading.hide();
            }
            this.page++;
            data.forEach((value, index) => {
                this.getImagePost(value);
                this.posts.push(value);
            });
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                this.infinite.disabled = true; //disabling infinite scroll
                if (this.posts.length != 0) {
                    // this.shared.toast("All Posts Loaded!");
                }
            }
            this.loadingServerData = true;
        }, err => {
            this.infinite.disabled = true;
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    }
    ;
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], NewsListPage.prototype, "infinite", void 0);
NewsListPage = tslib_1.__decorate([
    Component({
        selector: 'app-news-list',
        encapsulation: ViewEncapsulation.None,
        templateUrl: './news-list.page.html',
        styleUrls: ['./news-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        HttpClient,
        SharedDataService,
        ConfigService,
        LoadingService,
        ActivatedRoute])
], NewsListPage);
export { NewsListPage };
//# sourceMappingURL=news-list.page.js.map