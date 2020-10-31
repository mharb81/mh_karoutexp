import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, ElementRef, Renderer2 } from "@angular/core";
let MenuComponentComponent = class MenuComponentComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
tslib_1.__decorate([
    ViewChild("expandWrapper", { read: ElementRef, static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], MenuComponentComponent.prototype, "expandWrapper", void 0);
tslib_1.__decorate([
    Input("expanded"),
    tslib_1.__metadata("design:type", Boolean)
], MenuComponentComponent.prototype, "expanded", void 0);
tslib_1.__decorate([
    Input("expandHeight"),
    tslib_1.__metadata("design:type", String)
], MenuComponentComponent.prototype, "expandHeight", void 0);
MenuComponentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-menu-component',
        templateUrl: './menu-component.component.html',
        styleUrls: ['./menu-component.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2])
], MenuComponentComponent);
export { MenuComponentComponent };
//# sourceMappingURL=menu-component.component.js.map