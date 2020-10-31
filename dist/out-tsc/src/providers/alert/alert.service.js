import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
let AlertService = class AlertService {
    constructor(alertCtrl, translate) {
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.okText = "ok";
        this.alertText = "Alert";
    }
    show(text) {
        this.translate.get([text, "ok", "Alert"]).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: res["Alert"],
                message: res[text],
                buttons: [res["ok"]]
            });
            yield alert.present();
        }));
    }
    showWithTitle(text, title) {
        this.translate.get([text, "ok", title]).subscribe((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: res[title],
                message: res[text],
                buttons: [res["ok"]]
            });
            yield alert.present();
        }));
    }
};
AlertService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController,
        TranslateService])
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map