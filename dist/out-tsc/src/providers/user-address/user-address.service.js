import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ConfigService } from '../config/config.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
let UserAddressService = class UserAddressService {
    constructor(config, geolocation, nativeGeocoder) {
        this.config = config;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        console.log('Hello UserAddressProvider Provider');
    }
    getCordinates() {
        return new Promise(resolve => {
            this.geolocation.getCurrentPosition().then((resp) => {
                // resp.coords.latitude
                // resp.coords.longitude
                console.log(resp);
                resolve({ "lat": resp.coords.latitude, "long": resp.coords.longitude });
            }).catch((error) => {
                console.log('Error getting location', error);
                resolve("error");
            });
        });
    }
    getAddress() {
        return new Promise(resolve => {
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.getCordinates().then((value) => {
                this.nativeGeocoder.reverseGeocode(value.lat, value.long, options)
                    .then((result) => {
                    resolve(result[0]);
                    console.log(result[0]);
                })
                    .catch((error) => {
                    console.log(error);
                    resolve("error");
                });
            });
        });
    }
};
UserAddressService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigService,
        Geolocation,
        NativeGeocoder])
], UserAddressService);
export { UserAddressService };
//# sourceMappingURL=user-address.service.js.map