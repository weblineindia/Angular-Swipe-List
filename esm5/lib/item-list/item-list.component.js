/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SwipeServiceService } from '../swipe-service.service';
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
                    var dataInside = tslib_1.__assign({}, _this.inside, { touch: _this.selfElement.id });
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
export { ItemListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N3aXBlLWFuZ3VsYXItbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUFFLGdCQUFnQixFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU3RDtJQXVFRSwyQkFBWSxLQUFpQixFQUFVLFNBQThCO1FBQXJFLGlCQVVDO1FBVnNDLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBakVyRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVFNLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQTBCcEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFxQzFCLFdBQU07OztRQUFHOztnQkFDVCxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDO1FBR0ssY0FBUzs7OztRQUFHLFVBQUMsR0FBTztZQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixLQUFJLENBQUMsTUFBTSxHQUFH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Qzs7SUFFbEMsOENBQ29DOztJQUVwQywrQ0FDcUM7O0lBRXJDLDhDQUNvQzs7SUFFcEMsZ0RBQ3NDOzs7OztJQXlCdEMsbUNBR0U7O0lBR0Ysc0NBS0M7O0lBRUQsc0NBQTZDOztJQUU3QyxtQ0FZRTs7SUFPRixtQ0FnRUM7Ozs7O0lBbEg4QixzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N3aXBlU2VydmljZVNlcnZpY2V9IGZyb20gJy4uL3N3aXBlLXNlcnZpY2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N3LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pdGVtLWxpc3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0ICB7XG4gIGFsaXZlID0gdHJ1ZTtcbiAgcmVzdWx0OiBib29sZWFuO1xuICBzZWxmRWxlbWVudCA9IG51bGw7XG4gIGlkRWxlbWVudCA9IG51bGw7XG4gIEBJbnB1dCgpIGluc2lkZToge1xuICAgIGlkLFxuICAgIHRpdGxlOiAnJyxcbiAgICBzdWJUaXRsZTogJycsXG4gICAgbWFyazogZmFsc2UsXG4gIH07XG5cbiAgQElucHV0KCdkaXNhYmxlLW1hcmsnKSBkaXNhYmxlZE1hcmsgPSBmYWxzZTtcblxuICBASW5wdXQoJ3Nob3ctbWFyaycpIHNob3dNYXJrID0gZmFsc2U7XG5cbiAgQElucHV0KCdpdGVtLWNsYXNzJykgaXRlbUNsYXNzID0gJyc7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0RWRpdCcpIGRlZmF1bHRFZGl0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBAdHMtaWdub3JlXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmFzaCcpIGRlZmF1bHRUcmFzaDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyBAdHMtaWdub3JlXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRNYXJrJykgZGVmYXVsdE1hcms6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdE5vdE1hcmsnKSBkZWZhdWx0Tm90TWFyazogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0Q3VzdG9tJykgZGVmYXVsdEN1c3RvbTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnY3VzdG9tVGVtcGxhdGUnKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2VkaXRUZW1wbGF0ZScpIGVkaXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3RyYXNoVGVtcGxhdGUnKSB0cmFzaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWFya1RlbXBsYXRlJykgbWFya1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbm90TWFya1RlbXBsYXRlJykgbm90TWFya1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBjYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKVxuICBzd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgndmlld0NvbnRhaW5lckVkaXQnLCB7c3RhdGljOiBmYWxzZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHZpZXdDb250YWluZXJFZGl0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJUcmFzaCcsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgdmlld0NvbnRhaW5lclRyYXNoOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJNYXJrJywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICB2aWV3Q29udGFpbmVyTWFyazogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyQ3VzdG9tJywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICB2aWV3Q29udGFpbmVyQ3VzdG9tOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tPdXQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2VsZkVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBzd1NlcnZpY2U6IFN3aXBlU2VydmljZVNlcnZpY2UpIHtcbiAgICB0aGlzLnNlbGZFbGVtZW50ID0gZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmlkRWxlbWVudCA9IGBsaXN0LXN3aXBlLSR7dGhpcy5yYW5kb20oKX1gO1xuICAgIHRoaXMuc2VsZkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGhpcy5pZEVsZW1lbnQpO1xuICAgIHRoaXMuc2VsZkVsZW1lbnQuaWQgPSB0aGlzLmlkRWxlbWVudDtcbiAgICB0aGlzLnN3U2VydmljZS5zd2lwZU9ic2VydmVyLnN1YnNjcmliZShhID0+IHtcbiAgICAgIGlmIChhICE9PSB0aGlzLnNlbGZFbGVtZW50LmlkKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBwcml2YXRlIHJhbmRvbSA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gZC5nZXRUaW1lKCk7XG4gIH07XG5cblxuICBwdWJsaWMgc3dpcGVsZWZ0ID0gKHJlczphbnkpID0+IHtcbiAgICB0aGlzLnN3U2VydmljZS5jbG9zZUFsbCh0aGlzLnNlbGZFbGVtZW50LmlkKTtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkTWFyaykge1xuICAgICAgICAgIHRoaXMucmVzdWx0ID0gKHJlcy5kZWx0YVggPCAwKTtcbiAgICAgICAgfVxuICB9XG5cbiAgY2xpY2tJdGVtID0gKGE6IGFueSkgPT4gdGhpcy5zd0NsaWNrLmVtaXQoYSk7XG5cbiAgYWN0aW9uID0gKG9wdCA9ICcnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5pbnNpZGU7XG4gICAgICBpZiAob3B0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHthY3Rpb246ICdlZGl0JywgdmFsdWU6IGlkfSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdCA9PT0gJ3RyYXNoJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmVtaXQoe2FjdGlvbjogJ3RyYXNoJywgdmFsdWU6IGlkfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRGViZXMgZGVmaW5pciBJRCBkZSBlZGl0LCB5IHRyYXNoJyk7XG4gICAgfVxuICB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lOSVQnKVxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIE1BUktcbiAgICAgKiovXG4gICAgaWYgKHRoaXMuc2hvd01hcmspIHtcbiAgICAgIGlmICh0aGlzLmluc2lkZS5tYXJrICYmICF0aGlzLm1hcmtUZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB2aWV3TWFyayA9IHRoaXMuZGVmYXVsdE1hcmsuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJNYXJrLmluc2VydCh2aWV3TWFyayk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zaWRlLm1hcmsgJiYgdGhpcy5tYXJrVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLm1hcmtUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lck1hcmsuaW5zZXJ0KHZpZXdNYXJrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmluc2lkZS5tYXJrICYmICF0aGlzLm5vdE1hcmtUZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB2aWV3TWFyayA9IHRoaXMuZGVmYXVsdE5vdE1hcmsuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJNYXJrLmluc2VydCh2aWV3TWFyayk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmluc2lkZS5tYXJrICYmIHRoaXMubm90TWFya1RlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5ub3RNYXJrVGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJNYXJrLmluc2VydCh2aWV3TWFyayk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIEVESVRcbiAgICAgKiovXG4gICAgaWYgKHRoaXMuZWRpdFRlbXBsYXRlKSB7XG4gICAgICBjb25zdCB2aWV3RWRpdCA9IHRoaXMuZWRpdFRlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXJFZGl0KSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lckVkaXQuaW5zZXJ0KHZpZXdFZGl0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZWRpdFRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2aWV3RWRpdCA9IHRoaXMuZGVmYXVsdEVkaXQuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyRWRpdC5pbnNlcnQodmlld0VkaXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIFRSQVNIXG4gICAgICoqL1xuXG4gICAgaWYgKHRoaXMudHJhc2hUZW1wbGF0ZSkge1xuICAgICAgY29uc3Qgdmlld1RyYXNoID0gdGhpcy50cmFzaFRlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXJUcmFzaCkge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJUcmFzaC5pbnNlcnQodmlld1RyYXNoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHJhc2hUZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgdmlld1RyYXNoID0gdGhpcy5kZWZhdWx0VHJhc2guY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyVHJhc2guaW5zZXJ0KHZpZXdUcmFzaCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXN0b21UZW1wbGF0ZSkgeyAvLyBTaSB0aWVuZVxuICAgICAgICBjb25zdCBkYXRhSW5zaWRlID0gey4uLnRoaXMuaW5zaWRlLCAuLi57dG91Y2g6IHRoaXMuc2VsZkVsZW1lbnQuaWR9fTtcbiAgICAgICAgY29uc3Qgdmlld0N1c3RvbVRlbXBsYXRlID0gdGhpcy5jdXN0b21UZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcoe1xuICAgICAgICAgIGl0ZW06IGRhdGFJbnNpZGUsXG4gICAgICAgICAgaWQ6IHRoaXMuc2VsZkVsZW1lbnQuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2aWV3Q3VzdG9tVGVtcGxhdGUpIHtcbiAgICAgICAgICB0aGlzLnZpZXdDb250YWluZXJDdXN0b20uaW5zZXJ0KHZpZXdDdXN0b21UZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpZXdDdXN0b21UZW1wbGF0ZSA9IHRoaXMuZGVmYXVsdEN1c3RvbS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lckN1c3RvbS5pbnNlcnQodmlld0N1c3RvbVRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxufVxuIl19