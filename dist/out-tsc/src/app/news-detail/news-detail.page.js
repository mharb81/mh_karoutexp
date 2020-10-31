import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
let NewsDetailPage = class NewsDetailPage {
    constructor(shared) {
        this.shared = shared;
    }
    ngOnInit() {
        this.post = this.shared.singlePostData;
    }
};
NewsDetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-news-detail',
        templateUrl: './news-detail.page.html',
        styleUrls: ['./news-detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService])
], NewsDetailPage);
export { NewsDetailPage };
//# sourceMappingURL=news-detail.page.js.map