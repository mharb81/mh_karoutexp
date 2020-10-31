import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//for home banner
import { BannerComponent } from '../banner/banner.component';
//for home footer segment
import { FooterComponent } from '../footer/footer.component';
// for product
import { ProductComponent } from '../product/product.component';
//for vendor list
import { VendorListComponent } from '../vendor-list/vendor-list.component';
//for sliding tab
import { SlidingTabsComponent } from '../sliding-tabs/sliding-tabs.component';
//for featrued product scrolling
import { ScrollingFeaturedProductsComponent } from '../scrolling-featured-products/scrolling-featured-products.component';
//for categories
import { CategoriesComponent } from '../categories/categories.component';
import { TranslateModule } from '@ngx-translate/core';
let ShareModule = class ShareModule {
};
ShareModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            BannerComponent,
            FooterComponent,
            ProductComponent,
            VendorListComponent,
            SlidingTabsComponent,
            ScrollingFeaturedProductsComponent,
            CategoriesComponent
        ],
        exports: [
            BannerComponent,
            FooterComponent,
            ProductComponent,
            VendorListComponent,
            SlidingTabsComponent,
            ScrollingFeaturedProductsComponent,
            CategoriesComponent
        ],
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            TranslateModule,
        ],
    })
], ShareModule);
export { ShareModule };
//# sourceMappingURL=share.module.js.map