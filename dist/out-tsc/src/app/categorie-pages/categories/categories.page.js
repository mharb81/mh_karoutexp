import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
let CategoriesPage = class CategoriesPage {
    constructor(shared, config, router, activatedRoute) {
        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
    }
    ngOnInit() {
        this.parent = this.activatedRoute.snapshot.paramMap.get('parent');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        console.log(this.parent);
        console.log(this.name);
    }
    openProducts(id, name) {
        let count = 0;
        for (let val of this.shared.allCategories) {
            if (val.parent == id) {
                count++;
            }
        }
        if (count == 0) {
            this.router.navigateByUrl("/products/" + id + "/" + name + "/newest");
        }
        else {
            this.router.navigateByUrl("/categories/" + id + "/" + name);
        }
    }
    openParentProducts() {
        this.router.navigateByUrl("/products/" + this.parent + "/" + name + "/newest");
    }
};
CategoriesPage = tslib_1.__decorate([
    Component({
        selector: 'app-categories',
        templateUrl: './categories.page.html',
        styleUrls: ['./categories.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [SharedDataService,
        ConfigService,
        Router,
        ActivatedRoute])
], CategoriesPage);
export { CategoriesPage };
//# sourceMappingURL=categories.page.js.map