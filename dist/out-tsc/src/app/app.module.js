import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { HTTP } from '@ionic-native/http/ngx';
// Providers Import
import { ConfigService } from '../providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// For Translation
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// For Modals
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.page';
import { TermServicesPage } from './term-services/term-services.page';
import { RefundPolicyPage } from './refund-policy/refund-policy.page';
import { SelectCountryPage } from './select-country/select-country.page';
import { SelectZonesPage } from './select-zones/select-zones.page';
//for side menu expandable
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';
import { LoginPage } from './login/login.page';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { SignUpPage } from './sign-up/sign-up.page';
//for animation
// For Translation
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            LoginPage,
            ForgotPasswordPage,
            SignUpPage,
            AppComponent,
            PrivacyPolicyPage,
            TermServicesPage,
            RefundPolicyPage,
            SelectCountryPage,
            SelectZonesPage,
            MenuComponentComponent
        ],
        entryComponents: [
            LoginPage,
            ForgotPasswordPage,
            SignUpPage,
            PrivacyPolicyPage,
            TermServicesPage,
            RefundPolicyPage,
            SelectCountryPage,
            SelectZonesPage
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot({
                mode: 'md'
            }),
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }),
            FormsModule,
        ],
        providers: [
            StatusBar,
            ConfigService,
            LocationDataService,
            SharedDataService,
            SplashScreen,
            AppVersion,
            SpinnerDialog,
            OneSignal,
            ThemeableBrowser,
            Geolocation,
            NativeGeocoder,
            SocialSharing,
            InAppBrowser,
            AdMobFree,
            Network,
            Deeplinks,
            HTTP,
            Facebook,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map