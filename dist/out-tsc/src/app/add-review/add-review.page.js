import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { TranslateService } from '@ngx-translate/core';
let AddReviewPage = class AddReviewPage {
    constructor(mdCtrl, config, translate) {
        this.mdCtrl = mdCtrl;
        this.config = config;
        this.translate = translate;
        // For Rating Star Icons
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.formData = { name: '', email: '', description: '' };
    }
    ngOnInit() {
    }
};
AddReviewPage = tslib_1.__decorate([
    Component({
        selector: 'app-add-review',
        templateUrl: './add-review.page.html',
        styleUrls: ['./add-review.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        ConfigService,
        TranslateService])
], AddReviewPage);
export { AddReviewPage };
//# sourceMappingURL=add-review.page.js.map