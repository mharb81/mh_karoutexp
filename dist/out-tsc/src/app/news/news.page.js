import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInfiniteScroll, NavController, Events } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let NewsPage = class NewsPage {
    constructor(navCtrl, http, config, loading, shared, events) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.loading = loading;
        this.shared = shared;
        this.events = events;
        this.featuredPosts = new Array;
        this.segments = 'newest';
        //WordPress intergation
        this.categories = new Array;
        //page varible
        this.page = 1;
        //WordPress intergation
        this.posts = new Array;
        //page varible
        this.page2 = 1;
        this.loadingServerDataPosts = true;
        //========================================= tab newest categories ===============================================================================
        this.getCategories = function () {
            var data = {};
            data.language_id = this.config.langId;
            data.page_number = this.page2;
            this.http.get(this.config.url + '/wp-json/wp/v2/categories/?page=' + this.page2 + "&" + this.config.productsArguments).subscribe((data) => {
                if (this.page2 == 1) {
                    this.categories = [];
                }
                this.page2++;
                data.forEach((value, index) => {
                    this.categories.push(Object.assign(value, { image: '' }));
                });
                // console.log(data.data.length);
                if (data.length == 0) { // if we get less than 10 products then infinite scroll will de disabled
                    //this.shared.toast("All Categories Loaded!");
                    this.getRandomImage();
                }
                else
                    this.getCategories();
            }, function (response) {
                // console.log("Error while loading categories from the server");
                // console.log(response);
            });
        };
        var dat = {};
        dat.language_id = this.config.langId;
        dat.is_feature = 1;
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2 + "&" + this.config.productsArguments).subscribe((data) => {
            data.forEach((value, index) => {
                this.getImagePost(value);
            });
            this.featuredPosts = data;
        });
        this.getPosts();
    }
    ionViewDidEnter() {
        this.events.publish('footerChange', 'NewsPage');
    }
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
            this.loadingServerDataPosts = false;
        }
        this.http.get(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&" + this.config.productsArguments).subscribe((data) => {
            this.infinite.complete(); //stopping infinite scroll loader
            if (this.page == 1) {
                this.posts = [];
                this.infinite.disabled = false;
                this.loading.hide();
                this.getCategories();
            }
            this.page++;
            data.forEach((value, index) => {
                this.getImagePost(value);
                this.posts.push(value);
            });
            this.posts.concat(data);
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                this.infinite.disabled = true; //disabling infinite scroll
                if (this.posts.length != 0) {
                    //this.shared.toast("All Posts Loaded!");
                }
            }
            this.loadingServerDataPosts = true;
        }, err => {
            this.infinite.disabled = true;
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    }
    ;
    //============================================================================================  
    //getting list of sub categories from the server
    showPostDetail(post) {
        this.shared.singlePostData = post;
        this.navCtrl.navigateForward("/news-detail");
    }
    ;
    openPostsPage(name, id) {
        this.navCtrl.navigateForward("/news-list/" + id + "/" + name);
    }
    ionViewWillEnter() {
        if (this.config.admob == 1)
            this.shared.showAd();
    }
    // <!-- 2.0 updates -->
    getRandomImage() {
        try {
            this.categories.forEach((value, index) => {
                value.image = "assets/placeholder.png";
                let rand = this.getRandomPost();
                if (rand._links["wp:featuredmedia"])
                    this.http.get(rand._links["wp:featuredmedia"][0].href).subscribe((data) => {
                        value.image = data.source_url;
                        console.log(value.image);
                    });
            });
        }
        catch (error) {
        }
    }
    getRandomPost() {
        let rand = this.posts[Math.floor(Math.random() * this.posts.length)];
        if (rand.sticky == false)
            return rand;
        else
            this.getRandomPost();
    }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, { static: false }),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], NewsPage.prototype, "infinite", void 0);
NewsPage = tslib_1.__decorate([
    Component({
        selector: 'app-news',
        encapsulation: ViewEncapsulation.None,
        templateUrl: './news.page.html',
        styleUrls: ['./news.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        HttpClient,
        ConfigService,
        LoadingService,
        SharedDataService,
        Events])
], NewsPage);
export { NewsPage };
//# sourceMappingURL=news.page.js.map