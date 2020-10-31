import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    show() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                duration: 20000
            });
            this.loading.present();
        });
    }
    hide() {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    }
    autoHide(time) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                duration: time
            });
            this.loading.present();
        });
    }
};
LoadingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController])
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map