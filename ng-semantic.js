"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var menu_1 = require("./src/menu/menu");
var message_1 = require("./src/message/message");
var tooltip_1 = require("./src/popup/tooltip");
var popup_1 = require("./src/popup/popup");
var modal_1 = require("./src/modal/modal");
var segment_1 = require("./src/segment/segment");
var list_1 = require("./src/list/list");
var button_1 = require("./src/button/button");
var item_1 = require("./src/item/item");
var visibility_1 = require("./src/visibility/visibility");
var dropdown_1 = require("./src/dropdown/dropdown");
var select_1 = require("./src/select/select");
var search_1 = require("./src/search/search");
var loader_1 = require("./src/loader/loader");
var card_1 = require("./src/card/card");
var input_1 = require("./src/input/input");
var sidebar_1 = require("./src/sidebar/sidebar");
var tab_1 = require("./src/tab/tab");
var flag_1 = require("./src/flag/flag");
var contextmenu_1 = require("./src/contextmenu/contextmenu");
var progress_1 = require("./src/progress/progress");
var dimmer_1 = require("./src/dimmer/dimmer");
var transition_1 = require("./src/transition/transition");
var shape_1 = require("./src/shape/shape");
var accordion_1 = require("./src/accordion/accordion");
var rating_1 = require("./src/rating/rating");
__export(require("./src/menu/menu"));
__export(require("./src/contextmenu/contextmenu"));
__export(require("./src/message/message"));
__export(require("./src/popup/tooltip"));
__export(require("./src/popup/popup"));
__export(require("./src/visibility/visibility"));
__export(require("./src/modal/modal"));
__export(require("./src/segment/segment"));
__export(require("./src/rating/rating"));
__export(require("./src/list/list"));
__export(require("./src/button/button"));
__export(require("./src/search/search"));
__export(require("./src/item/item"));
__export(require("./src/dropdown/dropdown"));
__export(require("./src/select/select"));
__export(require("./src/loader/loader"));
__export(require("./src/card/card"));
__export(require("./src/input/input"));
__export(require("./src/sidebar/sidebar"));
__export(require("./src/tab/tab"));
__export(require("./src/flag/flag"));
__export(require("./src/progress/progress"));
__export(require("./src/dimmer/dimmer"));
__export(require("./src/transition/transition"));
__export(require("./src/shape/shape"));
__export(require("./src/accordion/accordion"));
exports.SEMANTIC_COMPONENTS = [
    card_1.SemanticCardComponent,
    card_1.SemanticCardsComponent,
    contextmenu_1.SemanticContextMenuComponent,
    input_1.SemanticInputComponent,
    input_1.SemanticTextareaComponent,
    input_1.SemanticCheckboxComponent,
    menu_1.SemanticMenuComponent,
    message_1.SemanticMessageComponent,
    segment_1.SemanticSegmentComponent,
    dimmer_1.SemanticDimmerComponent,
    transition_1.SemanticTransitionComponent,
    shape_1.SemanticShapeComponent,
    popup_1.SemanticPopupComponent,
    dropdown_1.SemanticDropdownComponent,
    list_1.SemanticListComponent,
    select_1.SemanticSelectComponent,
    flag_1.SemanticFlagComponent,
    search_1.SemanticSearchComponent,
    item_1.SemanticItemComponent,
    sidebar_1.SemanticSidebarComponent,
    progress_1.SemanticProgressComponent,
    modal_1.SemanticModalComponent,
    tab_1.SemanticTabsComponent,
    tab_1.SemanticTabComponent,
    button_1.SemanticButtonComponent,
    loader_1.SemanticLoaderComponent,
    accordion_1.SemanticAccordionComponent,
    accordion_1.SemanticAccordionItemComponent,
    rating_1.SemanticRatingComponent
];
exports.SEMANTIC_DIRECTIVES = [
    tooltip_1.SMTooltipDirective,
    visibility_1.SMVisibilityDirective,
    visibility_1.SMDeviceVisibilityDirective,
    modal_1.SMModalTagsDirective,
];
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var NgSemanticModule = (function () {
    function NgSemanticModule() {
    }
    return NgSemanticModule;
}());
NgSemanticModule = __decorate([
    core_1.NgModule({
        declarations: [exports.SEMANTIC_DIRECTIVES, exports.SEMANTIC_COMPONENTS],
        exports: [exports.SEMANTIC_COMPONENTS, exports.SEMANTIC_DIRECTIVES],
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule]
    }),
    __metadata("design:paramtypes", [])
], NgSemanticModule);
exports.NgSemanticModule = NgSemanticModule;
