import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(this.http, './assets/i18n/', '.json');
}
let TranslateService = class TranslateService {
    constructor() { }
};
TranslateService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TranslateService);
export { TranslateService };
//# sourceMappingURL=translate.service.js.map