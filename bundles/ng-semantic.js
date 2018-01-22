System.registerDynamic("src/menu/menu", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticMenuComponent = function () {
        function SemanticMenuComponent() {
            this.logoClass = "logo";
        }
        SemanticMenuComponent.prototype.ngAfterViewInit = function () {
            Array.from(this.innerElement.nativeElement.childNodes).filter(function (element) {
                return element.nodeName === "SM-MENU";
            }).map(function (element) {
                return element.firstElementChild.classList.remove("ui");
            });
        };
        return SemanticMenuComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMenuComponent.prototype, "logo", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMenuComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMenuComponent.prototype, "logoClass", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMenuComponent.prototype, "title", void 0);
    __decorate([core_1.ViewChild("innerElement"), __metadata("design:type", core_1.ElementRef)], SemanticMenuComponent.prototype, "innerElement", void 0);
    SemanticMenuComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-menu",
        template: "<div class=\"ui menu {{class}}\" #innerElement>\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"{{logoClass}}\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<a href=\"#/\" *ngIf=\"title && !logo\" class=\"header item\">\n    {{title}}\n</a>\n\n<ng-content></ng-content>\n</div>\n"
    }), __metadata("design:paramtypes", [])], SemanticMenuComponent);
    exports.SemanticMenuComponent = SemanticMenuComponent;
    return module.exports;
});
System.registerDynamic("src/message/message", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticMessageComponent = function () {
        function SemanticMessageComponent(renderer) {
            this.renderer = renderer;
        }
        SemanticMessageComponent.prototype.close = function () {
            this.renderer.detachView([this.message.nativeElement]);
        };
        return SemanticMessageComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMessageComponent.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticMessageComponent.prototype, "class", void 0);
    __decorate([core_1.ViewChild("message"), __metadata("design:type", core_1.ElementRef)], SemanticMessageComponent.prototype, "message", void 0);
    SemanticMessageComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
        selector: "sm-message",
        styles: ["sm-message { display: block; margin: 1em 0; } message-header {display: block}"],
        template: "<div class=\"ui message {{class}}\" [ngClass]=\"{'icon': icon}\" #message>\n<i class=\"close icon\" (click)=\"close()\"></i>\n<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      <ng-content select=\"message-header\"></ng-content>\n    </div>\n    <ng-content select=\"message-content\"></ng-content>\n  </div>\n</div>"
    }), __metadata("design:paramtypes", [core_1.Renderer])], SemanticMessageComponent);
    exports.SemanticMessageComponent = SemanticMessageComponent;
    return module.exports;
});
System.registerDynamic("src/popup/tooltip", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SMTooltipDirective = function () {
        function SMTooltipDirective(element) {
            this.element = element;
        }
        SMTooltipDirective.prototype.ngOnInit = function () {
            this.element.element.nativeElement.setAttribute("data-position", this.smDirPosition || "top center");
            this.element.element.nativeElement.setAttribute("data-tooltip", this.smDirTooltip);
        };
        return SMTooltipDirective;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SMTooltipDirective.prototype, "smDirTooltip", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SMTooltipDirective.prototype, "smDirPosition", void 0);
    SMTooltipDirective = __decorate([core_1.Directive({
        selector: "[smDirTooltip]"
    }), __metadata("design:paramtypes", [core_1.ViewContainerRef])], SMTooltipDirective);
    exports.SMTooltipDirective = SMTooltipDirective;
    return module.exports;
});
System.registerDynamic("src/popup/popup", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticPopupComponent = function () {
        function SemanticPopupComponent() {
            this.visible = false;
        }
        SemanticPopupComponent.prototype.show = function (element, data) {
            var _this = this;
            if (data === void 0) {
                data = {};
            }
            if (!this.visible) {
                this.visible = true;
                this.element = element.target;
                var options = Object.assign({
                    closable: true,
                    exclusive: true,
                    lastResort: true,
                    on: "click",
                    onHide: function () {
                        return _this.hide();
                    },
                    popup: this.popup.nativeElement,
                    position: "bottom center",
                    preserve: true
                }, data);
                jQuery(this.element).popup(options).popup("show");
            }
        };
        SemanticPopupComponent.prototype.hide = function () {
            if (this.visible && this.element) {
                this.visible = false;
                jQuery(this.element).popup("hide");
            }
        };
        return SemanticPopupComponent;
    }();
    __decorate([core_1.ViewChild("popup"), __metadata("design:type", core_1.ElementRef)], SemanticPopupComponent.prototype, "popup", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticPopupComponent.prototype, "class", void 0);
    SemanticPopupComponent = __decorate([core_1.Component({
        selector: "sm-popup",
        template: "<div class=\"ui popup very wide {{class}}\" #popup>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticPopupComponent);
    exports.SemanticPopupComponent = SemanticPopupComponent;
    return module.exports;
});
System.registerDynamic("src/modal/modal", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticModalComponent = function () {
        function SemanticModalComponent() {}
        SemanticModalComponent.prototype.show = function (data) {
            jQuery(this.modal.nativeElement).modal(data || {}).modal("toggle");
        };
        SemanticModalComponent.prototype.hide = function () {
            jQuery(this.modal.nativeElement).modal("hide");
        };
        return SemanticModalComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticModalComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticModalComponent.prototype, "title", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticModalComponent.prototype, "icon", void 0);
    __decorate([core_1.ViewChild("modal"), __metadata("design:type", core_1.ElementRef)], SemanticModalComponent.prototype, "modal", void 0);
    SemanticModalComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-modal",
        template: "<div class=\"ui modal {{class}}\" #modal>\n    <i class=\"close icon\"></i>\n    <div [ngClass]=\"{'icon': icon}\" class=\"ui header\">\n        <i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n        {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"modal-content\"></ng-content>\n    </div>\n    <div class=\"actions\">\n        <ng-content select=\"modal-actions\"></ng-content>\n    </div>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticModalComponent);
    exports.SemanticModalComponent = SemanticModalComponent;
    var SMModalTagsDirective = function () {
        function SMModalTagsDirective() {}
        return SMModalTagsDirective;
    }();
    SMModalTagsDirective = __decorate([core_1.Directive({ selector: 'modal-content, modal-actions' }), __metadata("design:paramtypes", [])], SMModalTagsDirective);
    exports.SMModalTagsDirective = SMModalTagsDirective;
    return module.exports;
});
System.registerDynamic("src/segment/segment", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticSegmentComponent = function () {
        function SemanticSegmentComponent() {}
        return SemanticSegmentComponent;
    }();
    __decorate([core_1.Input("class"), __metadata("design:type", String)], SemanticSegmentComponent.prototype, "class", void 0);
    SemanticSegmentComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-segment",
        template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticSegmentComponent);
    exports.SemanticSegmentComponent = SemanticSegmentComponent;
    return module.exports;
});
System.registerDynamic("src/list/list", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticListComponent = function () {
        function SemanticListComponent() {}
        SemanticListComponent.prototype.ngAfterViewInit = function () {
            Array.from(this.innerElement.nativeElement.childNodes).filter(function (element) {
                return element.nodeName === "SM-LIST";
            }).map(function (element) {
                return element.firstElementChild.classList.remove("ui");
            });
        };
        return SemanticListComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticListComponent.prototype, "class", void 0);
    __decorate([core_1.ViewChild("innerElement"), __metadata("design:type", core_1.ElementRef)], SemanticListComponent.prototype, "innerElement", void 0);
    SemanticListComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-list",
        template: "\n<div class=\"ui list {{class}}\" #innerElement>\n<ng-content></ng-content>\n</div>\n"
    }), __metadata("design:paramtypes", [])], SemanticListComponent);
    exports.SemanticListComponent = SemanticListComponent;
    return module.exports;
});
System.registerDynamic("src/button/button", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticButtonComponent = function () {
        function SemanticButtonComponent() {
            this.disabled = false;
        }
        return SemanticButtonComponent;
    }();
    __decorate([core_1.Input("class"), __metadata("design:type", String)], SemanticButtonComponent.prototype, "class", void 0);
    __decorate([core_1.Input("icon"), __metadata("design:type", String)], SemanticButtonComponent.prototype, "icon", void 0);
    __decorate([core_1.Input("disabled"), __metadata("design:type", Boolean)], SemanticButtonComponent.prototype, "disabled", void 0);
    SemanticButtonComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-button",
        template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
    }), __metadata("design:paramtypes", [])], SemanticButtonComponent);
    exports.SemanticButtonComponent = SemanticButtonComponent;
    return module.exports;
});
System.registerDynamic("src/item/item", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticItemComponent = function () {
        function SemanticItemComponent() {}
        SemanticItemComponent.prototype.ngAfterViewInit = function () {
            this.innerItemElement.nativeElement.parentElement.classList.add("item");
        };
        return SemanticItemComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticItemComponent.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticItemComponent.prototype, "header", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticItemComponent.prototype, "image", void 0);
    __decorate([core_1.ViewChild("innerItemElement"), __metadata("design:type", core_1.ElementRef)], SemanticItemComponent.prototype, "innerItemElement", void 0);
    SemanticItemComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "a[sm-item], sm-item",
        template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\" #innerItemElement>\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticItemComponent);
    exports.SemanticItemComponent = SemanticItemComponent;
    return module.exports;
});
System.registerDynamic("src/visibility/visibility", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SMVisibilityDirective = function () {
        function SMVisibilityDirective(element) {
            this.element = element;
            this.onTopVisible = new core_1.EventEmitter();
            this.onTopPassed = new core_1.EventEmitter();
            this.onUpdate = new core_1.EventEmitter();
        }
        SMVisibilityDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (this.element.element.nativeElement) {
                jQuery(this.element.element.nativeElement).visibility({
                    onTopPassed: function (calculations) {
                        return _this.onTopPassed.emit(calculations);
                    },
                    onTopVisible: function (calculations) {
                        return _this.onTopVisible.emit(calculations);
                    },
                    onUpdate: function (calculations) {
                        return _this.onUpdate.emit(calculations);
                    }
                });
            }
        };
        return SMVisibilityDirective;
    }();
    __decorate([core_1.Input(), __metadata("design:type", Object)], SMVisibilityDirective.prototype, "smDirVisibility", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SMVisibilityDirective.prototype, "onTopVisible", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SMVisibilityDirective.prototype, "onTopPassed", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SMVisibilityDirective.prototype, "onUpdate", void 0);
    SMVisibilityDirective = __decorate([core_1.Directive({
        selector: "[smDirVisibility]"
    }), __metadata("design:paramtypes", [core_1.ViewContainerRef])], SMVisibilityDirective);
    exports.SMVisibilityDirective = SMVisibilityDirective;
    var SMDeviceVisibilityDirective = function () {
        function SMDeviceVisibilityDirective(element) {
            this.element = element;
        }
        SMDeviceVisibilityDirective.prototype.ngOnInit = function () {
            (_a = this.element.element.nativeElement.classList).add.apply(_a, this.smDeviceVisibility.split(" "));
            var _a;
        };
        return SMDeviceVisibilityDirective;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SMDeviceVisibilityDirective.prototype, "smDeviceVisibility", void 0);
    SMDeviceVisibilityDirective = __decorate([core_1.Directive({
        selector: "[smDeviceVisibility]"
    }), __metadata("design:paramtypes", [core_1.ViewContainerRef])], SMDeviceVisibilityDirective);
    exports.SMDeviceVisibilityDirective = SMDeviceVisibilityDirective;
    return module.exports;
});
System.registerDynamic("src/dropdown/dropdown", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticDropdownComponent = function () {
        function SemanticDropdownComponent() {
            this.options = {};
            this.onChange = new core_1.EventEmitter();
        }
        SemanticDropdownComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var options = Object.assign({
                onChange: function (value, a, b) {
                    if (b != null && b.length) {
                        _this.onChange.emit(b[0].innerText);
                    }
                }
            }, this.options);
            jQuery(this.dropdown.nativeElement).dropdown(options);
        };
        return SemanticDropdownComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticDropdownComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticDropdownComponent.prototype, "title", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticDropdownComponent.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Array)], SemanticDropdownComponent.prototype, "items", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Object)], SemanticDropdownComponent.prototype, "options", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticDropdownComponent.prototype, "onChange", void 0);
    __decorate([core_1.ViewChild("dropdown"), __metadata("design:type", core_1.ElementRef)], SemanticDropdownComponent.prototype, "dropdown", void 0);
    SemanticDropdownComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-dropdown",
        template: "\n    <div class=\"ui {{class}} dropdown item\" #dropdown>\n        <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n        <div *ngIf=\"title\" class=\"text\">{{title}}</div>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n"
    }), __metadata("design:paramtypes", [])], SemanticDropdownComponent);
    exports.SemanticDropdownComponent = SemanticDropdownComponent;
    return module.exports;
});
System.registerDynamic("src/select/select", ["@angular/core", "@angular/forms"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var SemanticSelectComponent = function () {
        function SemanticSelectComponent() {
            this.control = new forms_1.FormControl();
            this.options = {};
            this.modelChange = new core_1.EventEmitter();
            this.onChange = new core_1.EventEmitter();
            this.multiple = false;
        }
        Object.defineProperty(SemanticSelectComponent.prototype, "disabled", {
            set: function (data) {
                var _this = this;
                setTimeout(function () {
                    if (data) {
                        jQuery(_this.select.nativeElement.parentNode).addClass("disabled");
                    } else {
                        jQuery(_this.select.nativeElement.parentNode).removeClass("disabled");
                    }
                }, 1);
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(SemanticSelectComponent.prototype, "model", {
            set: function (data) {
                var _this = this;
                if (data) {
                    setTimeout(function () {
                        jQuery(_this.select.nativeElement).dropdown("set selected", data);
                    }, 1);
                }
            },
            enumerable: true,
            configurable: true
        });
        SemanticSelectComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
                this.select.nativeElement.setAttribute("multiple", true);
            }
            var options = Object.assign({
                onChange: function (value) {
                    _this.modelChange.emit(value);
                    _this.onChange.emit(value);
                },
                onHide: function () {
                    return _this.control.markAsTouched();
                }
            }, this.options);
            jQuery(this.select.nativeElement).dropdown(options);
        };
        return SemanticSelectComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], SemanticSelectComponent.prototype, "control", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSelectComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSelectComponent.prototype, "label", void 0);
    __decorate([core_1.Input("disabled"), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SemanticSelectComponent.prototype, "disabled", null);
    __decorate([core_1.Input(), __metadata("design:type", Object)], SemanticSelectComponent.prototype, "options", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSelectComponent.prototype, "placeholder", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticSelectComponent.prototype, "modelChange", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticSelectComponent.prototype, "onChange", void 0);
    __decorate([core_1.ViewChild("select"), __metadata("design:type", core_1.ElementRef)], SemanticSelectComponent.prototype, "select", void 0);
    __decorate([core_1.Input("model"), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], SemanticSelectComponent.prototype, "model", null);
    SemanticSelectComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-select",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control?.valid && control?.touched) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n<select [formControl]=\"control\" class=\"ui {{class}} dropdown\"  #select>\n    <option value=\"\">{{placeholder}}</option>\n    <ng-content></ng-content>\n</select>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticSelectComponent);
    exports.SemanticSelectComponent = SemanticSelectComponent;
    return module.exports;
});
System.registerDynamic("node_modules/rxjs/scheduler/Action", ["../Subscription"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require("../Subscription");
    /**
     * A unit of work to be executed in a {@link Scheduler}. An action is typically
     * created from within a Scheduler and an RxJS user does not need to concern
     * themselves about creating and manipulating an Action.
     *
     * ```ts
     * class Action<T> extends Subscription {
     *   new (scheduler: Scheduler, work: (state?: T) => void);
     *   schedule(state?: T, delay: number = 0): Subscription;
     * }
     * ```
     *
     * @class Action<T>
     */
    var Action = function (_super) {
        __extends(Action, _super);
        function Action(scheduler, work) {
            _super.call(this);
        }
        /**
         * Schedules this action on its parent Scheduler for execution. May be passed
         * some context object, `state`. May happen at some point in the future,
         * according to the `delay` parameter, if specified.
         * @param {T} [state] Some contextual data that the `work` function uses when
         * called by the Scheduler.
         * @param {number} [delay] Time to wait before executing the work, where the
         * time unit is implicit and defined by the Scheduler.
         * @return {void}
         */
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return this;
        };
        return Action;
    }(Subscription_1.Subscription);
    exports.Action = Action;
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/scheduler/AsyncAction', ['../util/root', './Action'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1 = $__require('../util/root');
    var Action_1 = $__require('./Action');
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var AsyncAction = function (_super) {
        __extends(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            _super.call(this, scheduler, work);
            this.scheduler = scheduler;
            this.work = work;
            this.pending = false;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            if (this.closed) {
                return this;
            }
            // Always replace the current state with the new state.
            this.state = state;
            // Set the pending flag indicating that this action has been scheduled, or
            // has recursively rescheduled itself.
            this.pending = true;
            var id = this.id;
            var scheduler = this.scheduler;
            //
            // Important implementation note:
            //
            // Actions only execute once by default, unless rescheduled from within the
            // scheduled callback. This allows us to implement single and repeat
            // actions via the same code path, without adding API surface area, as well
            // as mimic traditional recursion but across asynchronous boundaries.
            //
            // However, JS runtimes and timers distinguish between intervals achieved by
            // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
            // serial `setTimeout` calls can be individually delayed, which delays
            // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
            // guarantee the interval callback will be invoked more precisely to the
            // interval period, regardless of load.
            //
            // Therefore, we use `setInterval` to schedule single and repeat actions.
            // If the action reschedules itself with the same delay, the interval is not
            // canceled. If the action doesn't reschedule, or reschedules with a
            // different delay, the interval will be canceled after scheduled callback
            // execution.
            //
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.delay = delay;
            // If this action has already an async Id, don't request a new one.
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            // If this action is rescheduled with the same delay time, don't clear the interval id.
            if (delay !== null && this.delay === delay) {
                return id;
            }
            // Otherwise, if the action's delay time is different from the current delay,
            // clear the interval id
            return root_1.root.clearInterval(id) && undefined || undefined;
        };
        /**
         * Immediately executes this action and the `work` it contains.
         * @return {any}
         */
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            } else if (this.pending === false && this.id != null) {
                // Dequeue if the action didn't reschedule itself. Don't call
                // unsubscribe(), because the action could reschedule later.
                // For example:
                // ```
                // scheduler.schedule(function doWork(counter) {
                //   /* ... I'm a busy worker bee ... */
                //   var originalAction = this;
                //   /* wait 100ms before rescheduling the action */
                //   setTimeout(function () {
                //     originalAction.schedule(counter + 1);
                //   }, 100);
                // }, 1000);
                // ```
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            } catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.delay = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
        };
        return AsyncAction;
    }(Action_1.Action);
    exports.AsyncAction = AsyncAction;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/Scheduler", [], true, function ($__require, exports, module) {
    "use strict";
    /**
     * An execution context and a data structure to order tasks and schedule their
     * execution. Provides a notion of (potentially virtual) time, through the
     * `now()` getter method.
     *
     * Each unit of work in a Scheduler is called an {@link Action}.
     *
     * ```ts
     * class Scheduler {
     *   now(): number;
     *   schedule(work, delay?, state?): Subscription;
     * }
     * ```
     *
     * @class Scheduler
     */

    var define,
        global = this || self,
        GLOBAL = global;
    var Scheduler = function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) {
                now = Scheduler.now;
            }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        /**
         * Schedules a function, `work`, for execution. May happen at some point in
         * the future, according to the `delay` parameter, if specified. May be passed
         * some context object, `state`, which will be passed to the `work` function.
         *
         * The given arguments will be processed an stored as an Action object in a
         * queue of actions.
         *
         * @param {function(state: ?T): ?Subscription} work A function representing a
         * task, or some unit of work to be executed by the Scheduler.
         * @param {number} [delay] Time to wait before executing the work, where the
         * time unit is implicit and defined by the Scheduler itself.
         * @param {T} [state] Some contextual data that the `work` function uses when
         * called by the Scheduler.
         * @return {Subscription} A subscription in order to be able to unsubscribe
         * the scheduled work.
         */
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) {
                delay = 0;
            }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = Date.now ? Date.now : function () {
            return +new Date();
        };
        return Scheduler;
    }();
    exports.Scheduler = Scheduler;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/scheduler/AsyncScheduler", ["../Scheduler"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Scheduler_1 = $__require("../Scheduler");
    var AsyncScheduler = function (_super) {
        __extends(AsyncScheduler, _super);
        function AsyncScheduler() {
            _super.apply(this, arguments);
            this.actions = [];
            /**
             * A flag to indicate whether the Scheduler is currently executing a batch of
             * queued actions.
             * @type {boolean}
             */
            this.active = false;
            /**
             * An internal ID used to track the latest asynchronous task such as those
             * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
             * others.
             * @type {any}
             */
            this.scheduled = undefined;
        }
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift()); // exhaust the scheduler queue
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler_1.Scheduler);
    exports.AsyncScheduler = AsyncScheduler;
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/scheduler/async', ['./AsyncAction', './AsyncScheduler'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var AsyncAction_1 = $__require('./AsyncAction');
  var AsyncScheduler_1 = $__require('./AsyncScheduler');
  exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
  

  return module.exports;
});
System.registerDynamic('node_modules/rxjs/operator/debounceTime', ['../Subscriber', '../scheduler/async'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('../Subscriber');
    var async_1 = $__require('../scheduler/async');
    /**
     * Emits a value from the source Observable only after a particular time span
     * has passed without another source emission.
     *
     * <span class="informal">It's like {@link delay}, but passes only the most
     * recent value from each burst of emissions.</span>
     *
     * <img src="./img/debounceTime.png" width="100%">
     *
     * `debounceTime` delays values emitted by the source Observable, but drops
     * previous pending delayed emissions if a new value arrives on the source
     * Observable. This operator keeps track of the most recent value from the
     * source Observable, and emits that only when `dueTime` enough time has passed
     * without any other value appearing on the source Observable. If a new value
     * appears before `dueTime` silence occurs, the previous value will be dropped
     * and will not be emitted on the output Observable.
     *
     * This is a rate-limiting operator, because it is impossible for more than one
     * value to be emitted in any time window of duration `dueTime`, but it is also
     * a delay-like operator since output emissions do not occur at the same time as
     * they did on the source Observable. Optionally takes a {@link Scheduler} for
     * managing timers.
     *
     * @example <caption>Emit the most recent click after a burst of clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.debounceTime(1000);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link auditTime}
     * @see {@link debounce}
     * @see {@link delay}
     * @see {@link sampleTime}
     * @see {@link throttleTime}
     *
     * @param {number} dueTime The timeout duration in milliseconds (or the time
     * unit determined internally by the optional `scheduler`) for the window of
     * time required to wait for emission silence before emitting the most recent
     * source value.
     * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
     * managing the timers that handle the timeout for each value.
     * @return {Observable} An Observable that delays the emissions of the source
     * Observable by the specified `dueTime`, and may drop some values if they occur
     * too frequently.
     * @method debounceTime
     * @owner Observable
     */
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) {
            scheduler = async_1.async;
        }
        return this.lift(new DebounceTimeOperator(dueTime, scheduler));
    }
    exports.debounceTime = debounceTime;
    var DebounceTimeOperator = function () {
        function DebounceTimeOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceTimeOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
        };
        return DebounceTimeOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DebounceTimeSubscriber = function (_super) {
        __extends(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            _super.call(this, destination);
            this.dueTime = dueTime;
            this.scheduler = scheduler;
            this.debouncedSubscription = null;
            this.lastValue = null;
            this.hasValue = false;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                this.destination.next(this.lastValue);
                this.lastValue = null;
                this.hasValue = false;
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber_1.Subscriber);
    function dispatchNext(subscriber) {
        subscriber.debouncedNext();
    }
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/add/operator/debounceTime', ['../../Observable', '../../operator/debounceTime'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var debounceTime_1 = $__require('../../operator/debounceTime');
  Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
  

  return module.exports;
});
System.registerDynamic('node_modules/rxjs/util/toSubscriber', ['../Subscriber', '../symbol/rxSubscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var Subscriber_1 = $__require('../Subscriber');
    var rxSubscriber_1 = $__require('../symbol/rxSubscriber');
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1.Subscriber();
        }
        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }
    exports.toSubscriber = toSubscriber;
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/symbol/observable', ['../util/root'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('../util/root');
    function getSymbolObservable(context) {
        var $$observable;
        var Symbol = context.Symbol;
        if (typeof Symbol === 'function') {
            if (Symbol.observable) {
                $$observable = Symbol.observable;
            } else {
                $$observable = Symbol('observable');
                Symbol.observable = $$observable;
            }
        } else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.$$observable = getSymbolObservable(root_1.root);
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/Observable', ['./util/root', './util/toSubscriber', './symbol/observable'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('./util/root');
    var toSubscriber_1 = $__require('./util/toSubscriber');
    var observable_1 = $__require('./symbol/observable');
    /**
     * A representation of any set of values over any amount of time. This the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is  called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        /**
         * Registers handlers for handling emitted values, error and completions from the observable, and
         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
         * @method subscribe
         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled
         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this);
            } else {
                sink.add(this._subscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                    PromiseCtor = root_1.root.Rx.config.Promise;
                } else if (root_1.root.Promise) {
                    PromiseCtor = root_1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    } else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable_1.$$observable] = function () {
            return this;
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }();
    exports.Observable = Observable;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/isArray", [], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports.isArray = Array.isArray || function (x) {
    return x && typeof x.length === 'number';
  };
  

  return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/isObject", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    exports.isObject = isObject;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/isFunction", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function isFunction(x) {
        return typeof x === 'function';
    }
    exports.isFunction = isFunction;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/UnsubscriptionError", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
                return i + 1 + ") " + err.toString();
            }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error);
    exports.UnsubscriptionError = UnsubscriptionError;
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/Subscription', ['./util/isArray', './util/isObject', './util/isFunction', './util/tryCatch', './util/errorObject', './util/UnsubscriptionError'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var isArray_1 = $__require('./util/isArray');
    var isObject_1 = $__require('./util/isObject');
    var isFunction_1 = $__require('./util/isFunction');
    var tryCatch_1 = $__require('./util/tryCatch');
    var errorObject_1 = $__require('./util/errorObject');
    var UnsubscriptionError_1 = $__require('./util/UnsubscriptionError');
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.closed = false;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            this.closed = true;
            var _a = this,
                _unsubscribe = _a._unsubscribe,
                _subscriptions = _a._subscriptions;
            this._subscriptions = null;
            if (isFunction_1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1.errorObject) {
                    hasErrors = true;
                    (errors = errors || []).push(errorObject_1.errorObject.e);
                }
            }
            if (isArray_1.isArray(_subscriptions)) {
                var index = -1;
                var len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1.isObject(sub)) {
                        var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = errors.concat(err.errors);
                            } else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `closed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || teardown === Subscription.EMPTY) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var sub = teardown;
            switch (typeof teardown) {
                case 'function':
                    sub = new Subscription(teardown);
                case 'object':
                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
                        break;
                    } else if (this.closed) {
                        sub.unsubscribe();
                    } else {
                        (this._subscriptions || (this._subscriptions = [])).push(sub);
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            return sub;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            // HACK: This might be redundant because of the logic in `add()`
            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
                return;
            }
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.EMPTY = function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription());
        return Subscription;
    }();
    exports.Subscription = Subscription;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/Observer", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    exports.empty = {
        closed: true,
        next: function (value) {},
        error: function (err) {
            throw err;
        },
        complete: function () {}
    };
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/util/root', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    exports.root = objectTypes[typeof self] && self || objectTypes[typeof window] && window;
    var freeGlobal = objectTypes[typeof global] && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
        exports.root = freeGlobal;
    }
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/symbol/rxSubscriber', ['../util/root'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var root_1 = $__require('../util/root');
    var Symbol = root_1.root.Symbol;
    exports.$$rxSubscriber = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/Subscriber', ['./util/isFunction', './Subscription', './Observer', './symbol/rxSubscriber'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isFunction_1 = $__require('./util/isFunction');
    var Subscription_1 = $__require('./Subscription');
    var Observer_1 = $__require('./Observer');
    var rxSubscriber_1 = $__require('./symbol/rxSubscriber');
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = function (_super) {
        __extends(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        } else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
            return this;
        };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        return Subscriber;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);
        function SafeSubscriber(_parent, observerOrNext, error, complete) {
            _super.call(this);
            this._parent = _parent;
            var next;
            var context = this;
            if (isFunction_1.isFunction(observerOrNext)) {
                next = observerOrNext;
            } else if (observerOrNext) {
                context = observerOrNext;
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parent = this._parent;
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                } else if (this.__tryOrSetError(_parent, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._error) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._error, err);
                        this.unsubscribe();
                    }
                } else if (!_parent.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                } else {
                    _parent.syncErrorValue = err;
                    _parent.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            if (!this.isStopped) {
                var _parent = this._parent;
                if (this._complete) {
                    if (!_parent.syncErrorThrowable) {
                        this.__tryOrUnsub(this._complete);
                        this.unsubscribe();
                    } else {
                        this.__tryOrSetError(_parent, this._complete);
                        this.unsubscribe();
                    }
                } else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            } catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parent = this._parent;
            this._context = null;
            this._parent = null;
            _parent.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber);
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/tryCatch", ["./errorObject"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var errorObject_1 = $__require("./errorObject");
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        } catch (e) {
            errorObject_1.errorObject.e = e;
            return errorObject_1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    exports.tryCatch = tryCatch;
    ;
    

    return module.exports;
});
System.registerDynamic("node_modules/rxjs/util/errorObject", [], true, function ($__require, exports, module) {
  "use strict";
  // typeof any so that it we don't have to cast when comparing a result to the error object

  var define,
      global = this || self,
      GLOBAL = global;
  exports.errorObject = { e: {} };
  

  return module.exports;
});
System.registerDynamic('node_modules/rxjs/operator/distinctUntilChanged', ['../Subscriber', '../util/tryCatch', '../util/errorObject'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('../Subscriber');
    var tryCatch_1 = $__require('../util/tryCatch');
    var errorObject_1 = $__require('../util/errorObject');
    /**
     * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
     * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
     * If a comparator function is not provided, an equality check is used by default.
     * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
     * @return {Observable} an Observable that emits items from the source Observable with distinct values.
     * @method distinctUntilChanged
     * @owner Observable
     */
    function distinctUntilChanged(compare, keySelector) {
        return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
    }
    exports.distinctUntilChanged = distinctUntilChanged;
    var DistinctUntilChangedOperator = function () {
        function DistinctUntilChangedOperator(compare, keySelector) {
            this.compare = compare;
            this.keySelector = keySelector;
        }
        DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
            return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
        };
        return DistinctUntilChangedOperator;
    }();
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DistinctUntilChangedSubscriber = function (_super) {
        __extends(DistinctUntilChangedSubscriber, _super);
        function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
            _super.call(this, destination);
            this.keySelector = keySelector;
            this.hasKey = false;
            if (typeof compare === 'function') {
                this.compare = compare;
            }
        }
        DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
            return x === y;
        };
        DistinctUntilChangedSubscriber.prototype._next = function (value) {
            var keySelector = this.keySelector;
            var key = value;
            if (keySelector) {
                key = tryCatch_1.tryCatch(this.keySelector)(value);
                if (key === errorObject_1.errorObject) {
                    return this.destination.error(errorObject_1.errorObject.e);
                }
            }
            var result = false;
            if (this.hasKey) {
                result = tryCatch_1.tryCatch(this.compare)(this.key, key);
                if (result === errorObject_1.errorObject) {
                    return this.destination.error(errorObject_1.errorObject.e);
                }
            } else {
                this.hasKey = true;
            }
            if (Boolean(result) === false) {
                this.key = key;
                this.destination.next(value);
            }
        };
        return DistinctUntilChangedSubscriber;
    }(Subscriber_1.Subscriber);
    

    return module.exports;
});
System.registerDynamic('node_modules/rxjs/add/operator/distinctUntilChanged', ['../../Observable', '../../operator/distinctUntilChanged'], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var Observable_1 = $__require('../../Observable');
  var distinctUntilChanged_1 = $__require('../../operator/distinctUntilChanged');
  Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
  

  return module.exports;
});
System.registerDynamic("src/search/search", ["@angular/core", "@angular/forms", "rxjs/add/operator/debounceTime", "rxjs/add/operator/distinctUntilChanged"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    $__require("rxjs/add/operator/debounceTime");
    $__require("rxjs/add/operator/distinctUntilChanged");
    var SemanticSearchComponent = function () {
        function SemanticSearchComponent() {
            this.debounce = 0;
            this.onSearch = new core_1.EventEmitter();
            this.searchControl = new forms_1.FormControl();
        }
        SemanticSearchComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.searchControl.valueChanges.distinctUntilChanged().debounceTime(this.debounce).subscribe(function (data) {
                return _this.onSearch.emit(data);
            });
        };
        return SemanticSearchComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSearchComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Boolean)], SemanticSearchComponent.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Boolean)], SemanticSearchComponent.prototype, "loading", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Number)], SemanticSearchComponent.prototype, "debounce", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSearchComponent.prototype, "placeholder", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticSearchComponent.prototype, "onSearch", void 0);
    SemanticSearchComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-search",
        template: "<div class=\"ui search\" [ngClass]=\"{'loading': loading}\">\n <div class=\"ui icon input {{class}} \">\n  <input class=\"prompt\" [formControl]=\"searchControl\" type=\"text\" [attr.placeholder]=\"placeholder\">\n  <i *ngIf=\"icon\" class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticSearchComponent);
    exports.SemanticSearchComponent = SemanticSearchComponent;
    return module.exports;
});
System.registerDynamic("src/loader/loader", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticLoaderComponent = function () {
        function SemanticLoaderComponent() {
            this.complete = false;
        }
        return SemanticLoaderComponent;
    }();
    __decorate([core_1.Input("class"), __metadata("design:type", String)], SemanticLoaderComponent.prototype, "class", void 0);
    __decorate([core_1.Input("text"), __metadata("design:type", String)], SemanticLoaderComponent.prototype, "text", void 0);
    __decorate([core_1.Input("complete"), __metadata("design:type", Boolean)], SemanticLoaderComponent.prototype, "complete", void 0);
    SemanticLoaderComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-loader",
        template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
    }), __metadata("design:paramtypes", [])], SemanticLoaderComponent);
    exports.SemanticLoaderComponent = SemanticLoaderComponent;
    return module.exports;
});
System.registerDynamic("src/card/card", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticCardComponent = function () {
        function SemanticCardComponent() {}
        return SemanticCardComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticCardComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticCardComponent.prototype, "image", void 0);
    SemanticCardComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-card",
        template: "<div class=\"ui {{class}}\">\n<div class=\"image\" *ngIf=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <ng-content select=\"card-title\"></ng-content>\n    <div class=\"meta\">\n      <ng-content select=\"card-subtitle\"></ng-content>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"card-content\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"card-extra\"></ng-content>\n  </div>\n  <ng-content></ng-content>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticCardComponent);
    exports.SemanticCardComponent = SemanticCardComponent;
    var SemanticCardsComponent = function () {
        function SemanticCardsComponent() {}
        return SemanticCardsComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticCardsComponent.prototype, "class", void 0);
    SemanticCardsComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-cards",
        template: "<div class=\"ui cards {{class}}\"><ng-content></ng-content></div>"
    }), __metadata("design:paramtypes", [])], SemanticCardsComponent);
    exports.SemanticCardsComponent = SemanticCardsComponent;
    return module.exports;
});
System.registerDynamic("src/input/input", ["@angular/core", "@angular/forms"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var SemanticInputComponent = function () {
        function SemanticInputComponent(viewRef) {
            this.viewRef = viewRef;
            this.type = "text";
            this.control = new forms_1.FormControl();
            this.modelChange = new core_1.EventEmitter();
            this.isInsideForm = false;
        }
        SemanticInputComponent.prototype.ngOnInit = function () {
            if (this.inForm(this.viewRef.element.nativeElement, "form")) {
                this.isInsideForm = true;
            }
        };
        SemanticInputComponent.prototype.inForm = function (el, classname) {
            if (el.parentNode) {
                if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
                    return !!el.parentNode;
                } else {
                    return this.inForm(el.parentNode, classname);
                }
            } else {
                return false;
            }
        };
        return SemanticInputComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticInputComponent.prototype, "label", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticInputComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticInputComponent.prototype, "icon", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticInputComponent.prototype, "type", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticInputComponent.prototype, "placeholder", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Object)], SemanticInputComponent.prototype, "model", void 0);
    __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], SemanticInputComponent.prototype, "control", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticInputComponent.prototype, "modelChange", void 0);
    SemanticInputComponent = __decorate([core_1.Component({
        selector: "sm-input",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty && isInsideForm) }\">\n  <label *ngIf=\"label && isInsideForm\">{{label}}</label>\n  <div class=\"ui input {{class}}\" [ngClass]=\"{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}\">\n  <label *ngIf=\"label && !isInsideForm\" class=\"ui label\">{{label}}</label>\n  <input [type]=\"type\" [formControl]=\"control\" [value]=\"model\" (keyup)=\"modelChange.emit(input.value)\" #input placeholder=\"{{placeholder}}\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n</div>\n</div>"
    }), __metadata("design:paramtypes", [core_1.ViewContainerRef])], SemanticInputComponent);
    exports.SemanticInputComponent = SemanticInputComponent;
    var SemanticCheckboxComponent = function () {
        function SemanticCheckboxComponent() {
            this.control = new forms_1.FormControl();
            this.inputType = "checkbox";
            this.classType = "checkbox";
        }
        Object.defineProperty(SemanticCheckboxComponent.prototype, "type", {
            set: function (data) {
                if (data && data !== "checkbox") {
                    this.classType = data;
                    if (data === "radio") {
                        this.inputType = data;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        return SemanticCheckboxComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], SemanticCheckboxComponent.prototype, "control", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticCheckboxComponent.prototype, "label", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Boolean)], SemanticCheckboxComponent.prototype, "disabled", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Object)], SemanticCheckboxComponent.prototype, "value", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticCheckboxComponent.prototype, "name", void 0);
    __decorate([core_1.Input("type"), __metadata("design:type", String), __metadata("design:paramtypes", [String])], SemanticCheckboxComponent.prototype, "type", null);
    SemanticCheckboxComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-checkbox",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.value && control?.validator) }\">\n    <div class=\"ui {{classType}} checkbox\">\n      <input type=\"checkbox\" \n      [attr.value]=\"value\"\n      [attr.type]=\"inputType\" tabindex=\"0\" [attr.name]=\"name\" [formControl]=\"control\" [attr.disabled]=\"disabled\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
    }), __metadata("design:paramtypes", [])], SemanticCheckboxComponent);
    exports.SemanticCheckboxComponent = SemanticCheckboxComponent;
    var SemanticTextareaComponent = function () {
        function SemanticTextareaComponent() {
            this.control = new forms_1.FormControl();
        }
        return SemanticTextareaComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", forms_1.FormControl)], SemanticTextareaComponent.prototype, "control", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticTextareaComponent.prototype, "label", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticTextareaComponent.prototype, "rows", void 0);
    SemanticTextareaComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-textarea",
        template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [formControl]=\"control\"></textarea>\n  </div>"
    }), __metadata("design:paramtypes", [])], SemanticTextareaComponent);
    exports.SemanticTextareaComponent = SemanticTextareaComponent;
    return module.exports;
});
System.registerDynamic("src/sidebar/sidebar", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    jQuery.fn.fixSidebar = function () {
        var allModules = jQuery(this);
        allModules.each(function () {
            var selector = { pusher: ".pusher" },
                module = jQuery(this),
                context = jQuery("body");
            if (module.nextAll(selector.pusher).length === 0) {
                module.detach().prependTo(context);
            }
        });
        return this;
    };
    var SemanticSidebarComponent = function () {
        function SemanticSidebarComponent(renderer) {
            this.renderer = renderer;
        }
        SemanticSidebarComponent.prototype.show = function (options) {
            jQuery(this.sidebar.nativeElement).sidebar(options || {}).sidebar("toggle");
        };
        SemanticSidebarComponent.prototype.hide = function () {
            jQuery(this.sidebar.nativeElement).sidebar("hide");
        };
        SemanticSidebarComponent.prototype.ngOnInit = function () {
            jQuery(this.sidebar.nativeElement).fixSidebar();
        };
        SemanticSidebarComponent.prototype.ngOnDestroy = function () {
            this.renderer.detachView([this.sidebar.nativeElement]);
        };
        return SemanticSidebarComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticSidebarComponent.prototype, "class", void 0);
    __decorate([core_1.ViewChild("sidebar"), __metadata("design:type", core_1.ElementRef)], SemanticSidebarComponent.prototype, "sidebar", void 0);
    SemanticSidebarComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-sidebar",
        template: "<div class=\"ui sidebar {{class}}\" #sidebar>\n<ng-content></ng-content>\n</div>"
    }), __metadata("design:paramtypes", [core_1.Renderer])], SemanticSidebarComponent);
    exports.SemanticSidebarComponent = SemanticSidebarComponent;
    return module.exports;
});
System.registerDynamic("src/tab/tab", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticTabComponent = function () {
        function SemanticTabComponent() {}
        SemanticTabComponent.prototype.ngAfterViewInit = function () {
            this.tabEl.nativeElement.parentElement.classList.add("ui", "tab", "bottom", "attached", "segment");
            if (this.active) {
                this.tabEl.nativeElement.parentElement.classList.add("active");
            }
        };
        return SemanticTabComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", Number)], SemanticTabComponent.prototype, "tab", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticTabComponent.prototype, "title", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Boolean)], SemanticTabComponent.prototype, "active", void 0);
    __decorate([core_1.ViewChild("tab"), __metadata("design:type", core_1.ElementRef)], SemanticTabComponent.prototype, "tabEl", void 0);
    SemanticTabComponent = __decorate([core_1.Component({
        selector: "sm-tab",
        template: "\n<div #tab>\n    <ng-content></ng-content>\n</div>  "
    }), __metadata("design:paramtypes", [])], SemanticTabComponent);
    exports.SemanticTabComponent = SemanticTabComponent;
    var SemanticTabsComponent = function () {
        function SemanticTabsComponent(elementRef) {
            this.elementRef = elementRef;
            this.options = {};
        }
        SemanticTabsComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.initItemsIndices();
            this.initTabs();
            this.updateTabContentIndices();
            this.tabs.changes.debounceTime(100).subscribe(function () {
                _this.initItemsIndices();
                _this.updateTabContentIndices();
            });
        };
        SemanticTabsComponent.prototype.initItemsIndices = function () {
            Array.from(this.menu.nativeElement.getElementsByClassName("item")).map(function (element, index) {
                element.setAttribute("data-tab", "tab-" + index);
                jQuery(element).data("tab", "tab-" + index);
            });
        };
        SemanticTabsComponent.prototype.updateTabContentIndices = function () {
            this.tabs.map(function (cmp, index) {
                cmp.tabEl.nativeElement.parentElement.setAttribute("data-tab", "tab-" + index.toString());
            });
            this.initTabs();
        };
        SemanticTabsComponent.prototype.initTabs = function () {
            this.options = Object.assign({
                childrenOnly: true,
                context: this.elementRef.nativeElement
            }, this.options);
            var tab = jQuery(this.menu.nativeElement.getElementsByClassName("item")).tab(this.options);
            if (!this.menu.nativeElement.getElementsByClassName("item active").length) {
                tab.tab("change tab", "tab-0");
            }
        };
        return SemanticTabsComponent;
    }();
    __decorate([core_1.ContentChildren(SemanticTabComponent), __metadata("design:type", core_1.QueryList)], SemanticTabsComponent.prototype, "tabs", void 0);
    __decorate([core_1.ViewChild("menu"), __metadata("design:type", core_1.ElementRef)], SemanticTabsComponent.prototype, "menu", void 0);
    __decorate([core_1.Input("options"), __metadata("design:type", Object)], SemanticTabsComponent.prototype, "options", void 0);
    SemanticTabsComponent = __decorate([core_1.Component({
        selector: "sm-tabs",
        template: "<div class=\"ui top attached tabular menu\" #menu>\n  <a class=\"item\" [ngClass]=\"{'active': tab.active}\" *ngFor=\"let tab of tabs\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
    }), __metadata("design:paramtypes", [core_1.ElementRef])], SemanticTabsComponent);
    exports.SemanticTabsComponent = SemanticTabsComponent;
    return module.exports;
});
System.registerDynamic("src/flag/flag", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticFlagComponent = function () {
        function SemanticFlagComponent() {}
        return SemanticFlagComponent;
    }();
    __decorate([core_1.Input("flag"), __metadata("design:type", String)], SemanticFlagComponent.prototype, "flag", void 0);
    SemanticFlagComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-flag",
        template: "<i class=\"{{flag}} flag\"></i>"
    }), __metadata("design:paramtypes", [])], SemanticFlagComponent);
    exports.SemanticFlagComponent = SemanticFlagComponent;
    return module.exports;
});
System.registerDynamic("src/contextmenu/contextmenu", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticContextMenuComponent = function () {
        function SemanticContextMenuComponent() {
            this._position = { x: 0, y: 0 };
            this.show = false;
        }
        Object.defineProperty(SemanticContextMenuComponent.prototype, "position", {
            set: function (data) {
                if (data) {
                    this._position = data;
                    this.show = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        SemanticContextMenuComponent.prototype.clickedOutside = function () {
            this.show = false;
        };
        return SemanticContextMenuComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", Array)], SemanticContextMenuComponent.prototype, "items", void 0);
    __decorate([core_1.Input("position"), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], SemanticContextMenuComponent.prototype, "position", null);
    __decorate([core_1.HostListener("document:click"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], SemanticContextMenuComponent.prototype, "clickedOutside", null);
    SemanticContextMenuComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-contextmenu",
        styles: [".sm-contextmenu { position: fixed; z-index: 1000; }"],
        template: "<div \n[style.left.px]=\"_position?.x\" [style.top.px]=\"_position?.y\"\n[ngClass]=\"{'active visible': show}\" class=\"ui dropdown sm-contextmenu\">\n <div \n [ngClass]=\"{'visible animating slide down in': show, 'hidden': !show}\"  class=\"ui menu transition\">\n <a (click)=\"menu.action()\" *ngFor=\"let menu of items\" class=\"item\">\n <i class=\"{{menu.icon}} icon\"></i>\n {{menu.title}}\n </a>\n </div>\n </div>\n"
    }), __metadata("design:paramtypes", [])], SemanticContextMenuComponent);
    exports.SemanticContextMenuComponent = SemanticContextMenuComponent;
    return module.exports;
});
System.registerDynamic("src/progress/progress", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticProgressComponent = function () {
        function SemanticProgressComponent() {
            this._progress = 0;
        }
        Object.defineProperty(SemanticProgressComponent.prototype, "progress", {
            set: function (value) {
                this._progress = value >= 100 ? 100 : value;
            },
            enumerable: true,
            configurable: true
        });
        return SemanticProgressComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticProgressComponent.prototype, "label", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticProgressComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], SemanticProgressComponent.prototype, "progress", null);
    SemanticProgressComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-progress",
        template: "<div [ngClass]=\"{'success': _progress === 100}\" class=\"ui {{class}} progress\" [attr.data-percent]=\"_progress\">\n  <div class=\"bar\" [ngStyle]=\"{'width': _progress + '%'}\">\n    <div class=\"progress\">{{_progress}}%</div>\n  </div>\n  <div class=\"label\" *ngIf=\"label\">{{label}}</div>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticProgressComponent);
    exports.SemanticProgressComponent = SemanticProgressComponent;
    return module.exports;
});
System.registerDynamic("src/dimmer/dimmer", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticDimmerComponent = function () {
        function SemanticDimmerComponent() {}
        SemanticDimmerComponent.prototype.show = function (options) {
            jQuery(this.dimmer.nativeElement).dimmer(options || {}).dimmer("toggle");
        };
        return SemanticDimmerComponent;
    }();
    __decorate([core_1.ViewChild("dimmer"), __metadata("design:type", core_1.ElementRef)], SemanticDimmerComponent.prototype, "dimmer", void 0);
    SemanticDimmerComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-dimmer",
        template: "<div class=\"ui page dimmer\" #dimmer>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>"
    }), __metadata("design:paramtypes", [])], SemanticDimmerComponent);
    exports.SemanticDimmerComponent = SemanticDimmerComponent;
    return module.exports;
});
System.registerDynamic("src/transition/transition", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticTransitionComponent = function () {
        function SemanticTransitionComponent() {}
        SemanticTransitionComponent.prototype.show = function (animation) {
            jQuery(this.transition.nativeElement).transition(animation || "fade out");
        };
        return SemanticTransitionComponent;
    }();
    __decorate([core_1.ViewChild("transition"), __metadata("design:type", core_1.ElementRef)], SemanticTransitionComponent.prototype, "transition", void 0);
    SemanticTransitionComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-transition",
        template: "\n    <div #transition>\n        <ng-content></ng-content>\n    </div>\n    "
    }), __metadata("design:paramtypes", [])], SemanticTransitionComponent);
    exports.SemanticTransitionComponent = SemanticTransitionComponent;
    return module.exports;
});
System.registerDynamic("src/shape/shape", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticShapeComponent = function () {
        function SemanticShapeComponent() {
            this.options = {};
            this.beforeChange = new core_1.EventEmitter();
            this.onChange = new core_1.EventEmitter();
        }
        SemanticShapeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.options = Object.assign({
                beforeChange: function () {
                    return _this.beforeChange.emit(true);
                },
                onChange: function () {
                    return _this.onChange.emit(true);
                }
            }, this.options);
        };
        SemanticShapeComponent.prototype.show = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            jQuery(this.shape.nativeElement).shape(this.options).shape(args.join(","));
        };
        return SemanticShapeComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticShapeComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Object)], SemanticShapeComponent.prototype, "options", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticShapeComponent.prototype, "beforeChange", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticShapeComponent.prototype, "onChange", void 0);
    __decorate([core_1.ViewChild("shape"), __metadata("design:type", core_1.ElementRef)], SemanticShapeComponent.prototype, "shape", void 0);
    SemanticShapeComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-shape",
        template: "\n    <div #shape class=\"ui shape {{class}}\">\n        <ng-content></ng-content>\n    </div>\n    "
    }), __metadata("design:paramtypes", [])], SemanticShapeComponent);
    exports.SemanticShapeComponent = SemanticShapeComponent;
    return module.exports;
});
System.registerDynamic("src/accordion/accordion", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticAccordionComponent = function () {
        function SemanticAccordionComponent() {}
        SemanticAccordionComponent.prototype.ngAfterViewInit = function () {
            var inAccordion = this.inAccordion(this.accordion.nativeElement, "accordion");
            if (inAccordion) {
                this.accordion.nativeElement.classList.remove("ui");
                jQuery(inAccordion).accordion(this.options || {});
            } else {
                jQuery(this.accordion.nativeElement).accordion(this.options || {});
            }
        };
        SemanticAccordionComponent.prototype.inAccordion = function (el, className) {
            if (el.parentNode) {
                if (el.parentNode.classList && el.parentNode.classList.contains(className)) {
                    return el.parentNode;
                } else {
                    return this.inAccordion(el.parentNode, className);
                }
            } else {
                return false;
            }
        };
        return SemanticAccordionComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticAccordionComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticAccordionComponent.prototype, "options", void 0);
    __decorate([core_1.ViewChild("accordion"), __metadata("design:type", core_1.ElementRef)], SemanticAccordionComponent.prototype, "accordion", void 0);
    SemanticAccordionComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-accordion",
        styles: ["sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }"],
        template: "\n<div class=\"ui accordion {{class}}\" #accordion>\n    <ng-content></ng-content>\n</div>\n"
    }), __metadata("design:paramtypes", [])], SemanticAccordionComponent);
    exports.SemanticAccordionComponent = SemanticAccordionComponent;
    var SemanticAccordionItemComponent = function () {
        function SemanticAccordionItemComponent() {}
        return SemanticAccordionItemComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticAccordionItemComponent.prototype, "class", void 0);
    SemanticAccordionItemComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-accordion-item",
        template: "\n<div class=\"{{class}} title\">\n    <i class=\"dropdown icon\"></i>\n    <ng-content select=\"accordion-title\"></ng-content>\n</div>\n<div class=\"{{class}} content\">\n    <ng-content select=\"accordion-content\"></ng-content>\n</div>\n"
    }), __metadata("design:paramtypes", [])], SemanticAccordionItemComponent);
    exports.SemanticAccordionItemComponent = SemanticAccordionItemComponent;
    return module.exports;
});
System.registerDynamic("src/rating/rating", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SemanticRatingComponent = function () {
        function SemanticRatingComponent() {
            this.onRate = new core_1.EventEmitter();
        }
        SemanticRatingComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            jQuery(this.rating.nativeElement).rating({
                initialRating: this.initialRating || 0,
                maxRating: this.maxRating || 5,
                onRate: function (value) {
                    _this.onRate.emit(value);
                }
            });
        };
        SemanticRatingComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            jQuery(this.rating.nativeElement).rating({
                initialRating: changes["initialRating"].currentValue,
                maxRating: this.maxRating || 5,
                onRate: function (value) {
                    _this.onRate.emit(value);
                }
            });
        };
        return SemanticRatingComponent;
    }();
    __decorate([core_1.Input(), __metadata("design:type", String)], SemanticRatingComponent.prototype, "class", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Number)], SemanticRatingComponent.prototype, "initialRating", void 0);
    __decorate([core_1.Input(), __metadata("design:type", Number)], SemanticRatingComponent.prototype, "maxRating", void 0);
    __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SemanticRatingComponent.prototype, "onRate", void 0);
    __decorate([core_1.ViewChild("rating"), __metadata("design:type", core_1.ElementRef)], SemanticRatingComponent.prototype, "rating", void 0);
    SemanticRatingComponent = __decorate([core_1.Component({
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        selector: "sm-rating",
        template: "<div class=\"ui {{class}} rating\" #rating></div>"
    }), __metadata("design:paramtypes", [])], SemanticRatingComponent);
    exports.SemanticRatingComponent = SemanticRatingComponent;
    return module.exports;
});
System.registerDynamic("ng-semantic", ["./src/menu/menu", "./src/message/message", "./src/popup/tooltip", "./src/popup/popup", "./src/modal/modal", "./src/segment/segment", "./src/list/list", "./src/button/button", "./src/item/item", "./src/visibility/visibility", "./src/dropdown/dropdown", "./src/select/select", "./src/search/search", "./src/loader/loader", "./src/card/card", "./src/input/input", "./src/sidebar/sidebar", "./src/tab/tab", "./src/flag/flag", "./src/contextmenu/contextmenu", "./src/progress/progress", "./src/dimmer/dimmer", "./src/transition/transition", "./src/shape/shape", "./src/accordion/accordion", "./src/rating/rating", "@angular/core", "@angular/common", "@angular/forms"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var menu_1 = $__require("./src/menu/menu");
    var message_1 = $__require("./src/message/message");
    var tooltip_1 = $__require("./src/popup/tooltip");
    var popup_1 = $__require("./src/popup/popup");
    var modal_1 = $__require("./src/modal/modal");
    var segment_1 = $__require("./src/segment/segment");
    var list_1 = $__require("./src/list/list");
    var button_1 = $__require("./src/button/button");
    var item_1 = $__require("./src/item/item");
    var visibility_1 = $__require("./src/visibility/visibility");
    var dropdown_1 = $__require("./src/dropdown/dropdown");
    var select_1 = $__require("./src/select/select");
    var search_1 = $__require("./src/search/search");
    var loader_1 = $__require("./src/loader/loader");
    var card_1 = $__require("./src/card/card");
    var input_1 = $__require("./src/input/input");
    var sidebar_1 = $__require("./src/sidebar/sidebar");
    var tab_1 = $__require("./src/tab/tab");
    var flag_1 = $__require("./src/flag/flag");
    var contextmenu_1 = $__require("./src/contextmenu/contextmenu");
    var progress_1 = $__require("./src/progress/progress");
    var dimmer_1 = $__require("./src/dimmer/dimmer");
    var transition_1 = $__require("./src/transition/transition");
    var shape_1 = $__require("./src/shape/shape");
    var accordion_1 = $__require("./src/accordion/accordion");
    var rating_1 = $__require("./src/rating/rating");
    __export($__require("./src/menu/menu"));
    __export($__require("./src/contextmenu/contextmenu"));
    __export($__require("./src/message/message"));
    __export($__require("./src/popup/tooltip"));
    __export($__require("./src/popup/popup"));
    __export($__require("./src/visibility/visibility"));
    __export($__require("./src/modal/modal"));
    __export($__require("./src/segment/segment"));
    __export($__require("./src/rating/rating"));
    __export($__require("./src/list/list"));
    __export($__require("./src/button/button"));
    __export($__require("./src/search/search"));
    __export($__require("./src/item/item"));
    __export($__require("./src/dropdown/dropdown"));
    __export($__require("./src/select/select"));
    __export($__require("./src/loader/loader"));
    __export($__require("./src/card/card"));
    __export($__require("./src/input/input"));
    __export($__require("./src/sidebar/sidebar"));
    __export($__require("./src/tab/tab"));
    __export($__require("./src/flag/flag"));
    __export($__require("./src/progress/progress"));
    __export($__require("./src/dimmer/dimmer"));
    __export($__require("./src/transition/transition"));
    __export($__require("./src/shape/shape"));
    __export($__require("./src/accordion/accordion"));
    exports.SEMANTIC_COMPONENTS = [card_1.SemanticCardComponent, card_1.SemanticCardsComponent, contextmenu_1.SemanticContextMenuComponent, input_1.SemanticInputComponent, input_1.SemanticTextareaComponent, input_1.SemanticCheckboxComponent, menu_1.SemanticMenuComponent, message_1.SemanticMessageComponent, segment_1.SemanticSegmentComponent, dimmer_1.SemanticDimmerComponent, transition_1.SemanticTransitionComponent, shape_1.SemanticShapeComponent, popup_1.SemanticPopupComponent, dropdown_1.SemanticDropdownComponent, list_1.SemanticListComponent, select_1.SemanticSelectComponent, flag_1.SemanticFlagComponent, search_1.SemanticSearchComponent, item_1.SemanticItemComponent, sidebar_1.SemanticSidebarComponent, progress_1.SemanticProgressComponent, modal_1.SemanticModalComponent, tab_1.SemanticTabsComponent, tab_1.SemanticTabComponent, button_1.SemanticButtonComponent, loader_1.SemanticLoaderComponent, accordion_1.SemanticAccordionComponent, accordion_1.SemanticAccordionItemComponent, rating_1.SemanticRatingComponent];
    exports.SEMANTIC_DIRECTIVES = [tooltip_1.SMTooltipDirective, visibility_1.SMVisibilityDirective, visibility_1.SMDeviceVisibilityDirective, modal_1.SMModalTagsDirective];
    var core_1 = $__require("@angular/core");
    var common_1 = $__require("@angular/common");
    var forms_1 = $__require("@angular/forms");
    var NgSemanticModule = function () {
        function NgSemanticModule() {}
        return NgSemanticModule;
    }();
    NgSemanticModule = __decorate([core_1.NgModule({
        declarations: [exports.SEMANTIC_DIRECTIVES, exports.SEMANTIC_COMPONENTS],
        exports: [exports.SEMANTIC_COMPONENTS, exports.SEMANTIC_DIRECTIVES],
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
    }), __metadata("design:paramtypes", [])], NgSemanticModule);
    exports.NgSemanticModule = NgSemanticModule;
    return module.exports;
});
//# sourceMappingURL=ng-semantic.js.map