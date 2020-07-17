import { Injectable, ɵɵdefineInjectable, Component, EventEmitter, ElementRef, Input, ViewChild, Output, ViewContainerRef, HostListener, NgModule } from '@angular/core';
import { __assign, __extends } from 'tslib';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwipeAngularListService = /** @class */ (function () {
    function SwipeAngularListService() {
    }
    SwipeAngularListService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SwipeAngularListService.ctorParameters = function () { return []; };
    /** @nocollapse */ SwipeAngularListService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SwipeAngularListService_Factory() { return new SwipeAngularListService(); }, token: SwipeAngularListService, providedIn: "root" });
    return SwipeAngularListService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwipeAngularListComponent = /** @class */ (function () {
    function SwipeAngularListComponent() {
    }
    /**
     * @return {?}
     */
    SwipeAngularListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SwipeAngularListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sw-swipe-angular-list',
                    template: "\n    <p>\n      swipe-angular-list works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    SwipeAngularListComponent.ctorParameters = function () { return []; };
    return SwipeAngularListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwipeServiceService = /** @class */ (function () {
    function SwipeServiceService() {
        this.swipeObserver = new EventEmitter();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    SwipeServiceService.prototype.closeAll = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.swipeObserver.emit(id);
    };
    SwipeServiceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SwipeServiceService.ctorParameters = function () { return []; };
    /** @nocollapse */ SwipeServiceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SwipeServiceService_Factory() { return new SwipeServiceService(); }, token: SwipeServiceService, providedIn: "root" });
    return SwipeServiceService;
}());
if (false) {
    /** @type {?} */
    SwipeServiceService.prototype.swipeObserver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemListComponent = /** @class */ (function () {
    function ItemListComponent(elRef, swService) {
        var _this = this;
        this.swService = swService;
        this.alive = true;
        this.selfElement = null;
        this.idElement = null;
        this.disabledMark = false;
        this.showMark = false;
        this.itemClass = '';
        this.callback = new EventEmitter();
        this.swClick = new EventEmitter();
        this.random = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var d = new Date();
            return d.getTime();
        });
        this.swipeleft = (/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.swService.closeAll(_this.selfElement.id);
            if (!_this.disabledMark) {
                _this.result = (res.deltaX < 0);
            }
        });
        this.clickItem = (/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return _this.swClick.emit(a); });
        this.action = (/**
         * @param {?=} opt
         * @return {?}
         */
        function (opt) {
            if (opt === void 0) { opt = ''; }
            try {
                _this.result = false;
                var id = _this.inside.id;
                if (opt === 'edit') {
                    _this.callback.emit({ action: 'edit', value: id });
                }
                else if (opt === 'trash') {
                    _this.callback.emit({ action: 'trash', value: id });
                }
            }
            catch (e) {
                console.error('Debes definir ID de edit, y trash');
            }
        });
        this.render = (/**
         * @return {?}
         */
        function () {
            console.log('INIT');
            /**
             * Template MARK
             **/
            if (_this.showMark) {
                if (_this.inside.mark && !_this.markTemplate) {
                    /** @type {?} */
                    var viewMark = _this.defaultMark.createEmbeddedView(null);
                    _this.viewContainerMark.insert(viewMark);
                }
                else if (_this.inside.mark && _this.markTemplate) {
                    /** @type {?} */
                    var viewMark = _this.markTemplate.createEmbeddedView(null);
                    _this.viewContainerMark.insert(viewMark);
                }
                if (!_this.inside.mark && !_this.notMarkTemplate) {
                    /** @type {?} */
                    var viewMark = _this.defaultNotMark.createEmbeddedView(null);
                    _this.viewContainerMark.insert(viewMark);
                }
                else if (!_this.inside.mark && _this.notMarkTemplate) {
                    /** @type {?} */
                    var viewMark = _this.notMarkTemplate.createEmbeddedView(null);
                    _this.viewContainerMark.insert(viewMark);
                }
            }
            /**
             * Template EDIT
             **/
            if (_this.editTemplate) {
                /** @type {?} */
                var viewEdit = _this.editTemplate.createEmbeddedView(null);
                if (_this.viewContainerEdit) {
                    _this.viewContainerEdit.insert(viewEdit);
                }
            }
            else if (_this.editTemplate !== null) {
                /** @type {?} */
                var viewEdit = _this.defaultEdit.createEmbeddedView(null);
                _this.viewContainerEdit.insert(viewEdit);
            }
            /**
             * Template TRASH
             **/
            if (_this.trashTemplate) {
                /** @type {?} */
                var viewTrash = _this.trashTemplate.createEmbeddedView(null);
                if (_this.viewContainerTrash) {
                    _this.viewContainerTrash.insert(viewTrash);
                }
            }
            else if (_this.trashTemplate !== null) {
                /** @type {?} */
                var viewTrash = _this.defaultTrash.createEmbeddedView(null);
                _this.viewContainerTrash.insert(viewTrash);
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.customTemplate) { // Si tiene
                    // Si tiene
                    /** @type {?} */
                    var dataInside = __assign({}, _this.inside, { touch: _this.selfElement.id });
                    /** @type {?} */
                    var viewCustomTemplate = _this.customTemplate.createEmbeddedView({
                        item: dataInside,
                        id: _this.selfElement.id
                    });
                    if (viewCustomTemplate) {
                        _this.viewContainerCustom.insert(viewCustomTemplate);
                    }
                }
                else {
                    /** @type {?} */
                    var viewCustomTemplate = _this.defaultCustom.createEmbeddedView(null);
                    _this.viewContainerCustom.insert(viewCustomTemplate);
                }
            }), 10);
        });
        this.selfElement = elRef.nativeElement;
        this.idElement = "list-swipe-" + this.random();
        this.selfElement.setAttribute('data-id', this.idElement);
        this.selfElement.id = this.idElement;
        this.swService.swipeObserver.subscribe((/**
         * @param {?} a
         * @return {?}
         */
        function (a) {
            if (a !== _this.selfElement.id) {
                _this.result = false;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ItemListComponent.prototype.clickOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.selfElement.contains(event.target)) {
            this.result = false;
        }
    };
    /**
     * @return {?}
     */
    ItemListComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.render();
        // throw new Error("Method not implemented.");
    };
    /**
     * @return {?}
     */
    ItemListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sw-item-list',
                    template: "<div class=\"{{itemClass}}\" (swipeleft)=\"swipeleft($event)\" (swipe)=\"swipeleft($event)\" >\n  <ng-template #defaultEdit>\n    edit\n  </ng-template>\n  <ng-template #defaultTrash>\n    trash\n  </ng-template>\n  <ng-template #defaultMark>\n    <div class=\"yes-marker\"></div>\n  </ng-template>\n  <ng-template #defaultNotMark>\n    <div class=\"not-marker\"></div>\n  </ng-template>\n\n  <ng-template #defaultCustom>\n    <div data-id=\"{{idElement}}\" class=\"text truncate\">{{inside?.title}}</div>\n    <div data-id=\"{{idElement}}\" class=\"small truncate\">{{inside?.subTitle}}</div>\n  </ng-template>\n\n\n  <div [ngClass]=\"{'active':(result)}\" data-id=\"{{idElement}}\"\n       class=\" options-btn swipe-d-flex justify-content-between\">\n    <div (click)=\"action('edit')\" class=\"option-list\" *ngIf=\"editTemplate !== null\">\n      <ng-template let-show=\"show\" #viewContainerEdit></ng-template>\n    </div>\n    <div (click)=\"action('trash')\" class=\"option-list\" *ngIf=\"trashTemplate !== null\">\n      <ng-template let-show=\"show\" #viewContainerTrash></ng-template>\n    </div>\n  </div>\n  <div [ngClass]=\"{'left-swipe':(result)}\" data-id=\"{{idElement}}\" class=\"list-swipe swipe-d-flex\">\n\n    <div *ngIf=\"showMark\" class=\"swipe-w-10\">\n      <ng-container #viewContainerMark></ng-container>\n    </div>\n\n    <div (click)=\"clickItem($event)\" [ngClass]=\"{'swipe-w-90':showMark, 'swipe-w-100':!showMark}\">\n      <div *ngIf=\"customTemplate\" data-id=\"{{idElement}}\">\n        <ng-template #viewContainerCustom>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!customTemplate\">\n        <ng-template #viewContainerCustom></ng-template>\n      </div>\n\n    </div>\n    <div class=\"mark\"></div>\n  </div>\n</div>\n",
                    styles: [":host{display:block;font-family:Arial,serif}.not-marker{background:red;width:1rem;height:1rem;border-radius:3rem}.yes-marker{background:green;width:1rem;height:1rem;border-radius:3rem}.swipe-d-flex{display:flex}.swipe-w-10{width:10%}.swipe-w-100{width:100%}.swipe-w-90{width:90%}.options-btn.active{display:flex;transform:translate(66vw,0)}.list-swipe{box-shadow:0 5px 7px rgba(181,181,181,.18);border-radius:.25em;padding:.75em;font-weight:500;font-size:16px;line-height:19px;z-index:9;margin:.75rem 0;transition:50ms ease-out}.left-swipe{transform:translate(-29vw,0);transition:50ms ease-out;box-shadow:6px 0 7px rgba(181,181,181,.31)}.options-btn{position:absolute;display:none;transform:translate(100vw,0);padding:.5rem 0;width:28vw}.list-swipe .text{color:#313131}.list-swipe .small{font-weight:500;font-size:16px;line-height:19px;color:#9b9b9b;padding:1rem 0 0}.list-swipe .mark{background:#fff;height:2rem;margin-top:.75rem;margin-right:-.3rem;border-right:.175rem solid #f96060}.option-list{width:100%;min-height:3.75rem;line-height:3.75rem;border-right:1px solid rgba(0,0,0,.1);text-align:center}.option-list:last-child{border-right:0}.truncate{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]
                }] }
    ];
    /** @nocollapse */
    ItemListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SwipeServiceService }
    ]; };
    ItemListComponent.propDecorators = {
        inside: [{ type: Input }],
        disabledMark: [{ type: Input, args: ['disable-mark',] }],
        showMark: [{ type: Input, args: ['show-mark',] }],
        itemClass: [{ type: Input, args: ['item-class',] }],
        defaultEdit: [{ type: ViewChild, args: ['defaultEdit',] }],
        defaultTrash: [{ type: ViewChild, args: ['defaultTrash',] }],
        defaultMark: [{ type: ViewChild, args: ['defaultMark',] }],
        defaultNotMark: [{ type: ViewChild, args: ['defaultNotMark',] }],
        defaultCustom: [{ type: ViewChild, args: ['defaultCustom',] }],
        customTemplate: [{ type: Input, args: ['customTemplate',] }],
        editTemplate: [{ type: Input, args: ['editTemplate',] }],
        trashTemplate: [{ type: Input, args: ['trashTemplate',] }],
        markTemplate: [{ type: Input, args: ['markTemplate',] }],
        notMarkTemplate: [{ type: Input, args: ['notMarkTemplate',] }],
        callback: [{ type: Output }],
        swClick: [{ type: Output }],
        viewContainerEdit: [{ type: ViewChild, args: ['viewContainerEdit', { static: false, read: ViewContainerRef },] }],
        viewContainerTrash: [{ type: ViewChild, args: ['viewContainerTrash', { static: false, read: ViewContainerRef },] }],
        viewContainerMark: [{ type: ViewChild, args: ['viewContainerMark', { static: false, read: ViewContainerRef },] }],
        viewContainerCustom: [{ type: ViewChild, args: ['viewContainerCustom', { static: false, read: ViewContainerRef },] }],
        clickOut: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return ItemListComponent;
}());
if (false) {
    /** @type {?} */
    ItemListComponent.prototype.alive;
    /** @type {?} */
    ItemListComponent.prototype.result;
    /** @type {?} */
    ItemListComponent.prototype.selfElement;
    /** @type {?} */
    ItemListComponent.prototype.idElement;
    /** @type {?} */
    ItemListComponent.prototype.inside;
    /** @type {?} */
    ItemListComponent.prototype.disabledMark;
    /** @type {?} */
    ItemListComponent.prototype.showMark;
    /** @type {?} */
    ItemListComponent.prototype.itemClass;
    /** @type {?} */
    ItemListComponent.prototype.defaultEdit;
    /** @type {?} */
    ItemListComponent.prototype.defaultTrash;
    /** @type {?} */
    ItemListComponent.prototype.defaultMark;
    /** @type {?} */
    ItemListComponent.prototype.defaultNotMark;
    /** @type {?} */
    ItemListComponent.prototype.defaultCustom;
    /** @type {?} */
    ItemListComponent.prototype.customTemplate;
    /** @type {?} */
    ItemListComponent.prototype.editTemplate;
    /** @type {?} */
    ItemListComponent.prototype.trashTemplate;
    /** @type {?} */
    ItemListComponent.prototype.markTemplate;
    /** @type {?} */
    ItemListComponent.prototype.notMarkTemplate;
    /** @type {?} */
    ItemListComponent.prototype.callback;
    /** @type {?} */
    ItemListComponent.prototype.swClick;
    /** @type {?} */
    ItemListComponent.prototype.viewContainerEdit;
    /** @type {?} */
    ItemListComponent.prototype.viewContainerTrash;
    /** @type {?} */
    ItemListComponent.prototype.viewContainerMark;
    /** @type {?} */
    ItemListComponent.prototype.viewContainerCustom;
    /**
     * @type {?}
     * @private
     */
    ItemListComponent.prototype.random;
    /** @type {?} */
    ItemListComponent.prototype.swipeleft;
    /** @type {?} */
    ItemListComponent.prototype.clickItem;
    /** @type {?} */
    ItemListComponent.prototype.action;
    /** @type {?} */
    ItemListComponent.prototype.render;
    /**
     * @type {?}
     * @private
     */
    ItemListComponent.prototype.swService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HammerConfig = /** @class */ (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
        return _this;
    }
    return HammerConfig;
}(HammerGestureConfig));
if (false) {
    /** @type {?} */
    HammerConfig.prototype.overrides;
}
var SwipeAngularListModule = /** @class */ (function () {
    function SwipeAngularListModule() {
    }
    SwipeAngularListModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SwipeAngularListComponent, ItemListComponent],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        {
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: HammerConfig
                        }
                    ],
                    exports: [SwipeAngularListComponent, ItemListComponent]
                },] }
    ];
    return SwipeAngularListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HammerConfig, SwipeAngularListComponent, SwipeAngularListModule, SwipeAngularListService, ItemListComponent as ɵa, SwipeServiceService as ɵb };
//# sourceMappingURL=swipe-angular-list.js.map
