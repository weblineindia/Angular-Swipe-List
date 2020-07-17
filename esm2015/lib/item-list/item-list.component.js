/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SwipeServiceService } from '../swipe-service.service';
export class ItemListComponent {
    /**
     * @param {?} elRef
     * @param {?} swService
     */
    constructor(elRef, swService) {
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
        () => {
            /** @type {?} */
            const d = new Date();
            return d.getTime();
        });
        this.swipeleft = (/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.swService.closeAll(this.selfElement.id);
            if (!this.disabledMark) {
                this.result = (res.deltaX < 0);
            }
        });
        this.clickItem = (/**
         * @param {?} a
         * @return {?}
         */
        (a) => this.swClick.emit(a));
        this.action = (/**
         * @param {?=} opt
         * @return {?}
         */
        (opt = '') => {
            try {
                this.result = false;
                const { id } = this.inside;
                if (opt === 'edit') {
                    this.callback.emit({ action: 'edit', value: id });
                }
                else if (opt === 'trash') {
                    this.callback.emit({ action: 'trash', value: id });
                }
            }
            catch (e) {
                console.error('Debes definir ID de edit, y trash');
            }
        });
        this.render = (/**
         * @return {?}
         */
        () => {
            console.log('INIT');
            /**
             * Template MARK
             **/
            if (this.showMark) {
                if (this.inside.mark && !this.markTemplate) {
                    /** @type {?} */
                    const viewMark = this.defaultMark.createEmbeddedView(null);
                    this.viewContainerMark.insert(viewMark);
                }
                else if (this.inside.mark && this.markTemplate) {
                    /** @type {?} */
                    const viewMark = this.markTemplate.createEmbeddedView(null);
                    this.viewContainerMark.insert(viewMark);
                }
                if (!this.inside.mark && !this.notMarkTemplate) {
                    /** @type {?} */
                    const viewMark = this.defaultNotMark.createEmbeddedView(null);
                    this.viewContainerMark.insert(viewMark);
                }
                else if (!this.inside.mark && this.notMarkTemplate) {
                    /** @type {?} */
                    const viewMark = this.notMarkTemplate.createEmbeddedView(null);
                    this.viewContainerMark.insert(viewMark);
                }
            }
            /**
             * Template EDIT
             **/
            if (this.editTemplate) {
                /** @type {?} */
                const viewEdit = this.editTemplate.createEmbeddedView(null);
                if (this.viewContainerEdit) {
                    this.viewContainerEdit.insert(viewEdit);
                }
            }
            else if (this.editTemplate !== null) {
                /** @type {?} */
                const viewEdit = this.defaultEdit.createEmbeddedView(null);
                this.viewContainerEdit.insert(viewEdit);
            }
            /**
             * Template TRASH
             **/
            if (this.trashTemplate) {
                /** @type {?} */
                const viewTrash = this.trashTemplate.createEmbeddedView(null);
                if (this.viewContainerTrash) {
                    this.viewContainerTrash.insert(viewTrash);
                }
            }
            else if (this.trashTemplate !== null) {
                /** @type {?} */
                const viewTrash = this.defaultTrash.createEmbeddedView(null);
                this.viewContainerTrash.insert(viewTrash);
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.customTemplate) { // Si tiene
                    // Si tiene
                    /** @type {?} */
                    const dataInside = Object.assign({}, this.inside, { touch: this.selfElement.id });
                    /** @type {?} */
                    const viewCustomTemplate = this.customTemplate.createEmbeddedView({
                        item: dataInside,
                        id: this.selfElement.id
                    });
                    if (viewCustomTemplate) {
                        this.viewContainerCustom.insert(viewCustomTemplate);
                    }
                }
                else {
                    /** @type {?} */
                    const viewCustomTemplate = this.defaultCustom.createEmbeddedView(null);
                    this.viewContainerCustom.insert(viewCustomTemplate);
                }
            }), 10);
        });
        this.selfElement = elRef.nativeElement;
        this.idElement = `list-swipe-${this.random()}`;
        this.selfElement.setAttribute('data-id', this.idElement);
        this.selfElement.id = this.idElement;
        this.swService.swipeObserver.subscribe((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (a !== this.selfElement.id) {
                this.result = false;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOut(event) {
        if (!this.selfElement.contains(event.target)) {
            this.result = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.render();
        // throw new Error("Method not implemented.");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sw-item-list',
                template: "<div class=\"{{itemClass}}\" (swipeleft)=\"swipeleft($event)\" (swipe)=\"swipeleft($event)\" >\n  <ng-template #defaultEdit>\n    edit\n  </ng-template>\n  <ng-template #defaultTrash>\n    trash\n  </ng-template>\n  <ng-template #defaultMark>\n    <div class=\"yes-marker\"></div>\n  </ng-template>\n  <ng-template #defaultNotMark>\n    <div class=\"not-marker\"></div>\n  </ng-template>\n\n  <ng-template #defaultCustom>\n    <div data-id=\"{{idElement}}\" class=\"text truncate\">{{inside?.title}}</div>\n    <div data-id=\"{{idElement}}\" class=\"small truncate\">{{inside?.subTitle}}</div>\n  </ng-template>\n\n\n  <div [ngClass]=\"{'active':(result)}\" data-id=\"{{idElement}}\"\n       class=\" options-btn swipe-d-flex justify-content-between\">\n    <div (click)=\"action('edit')\" class=\"option-list\" *ngIf=\"editTemplate !== null\">\n      <ng-template let-show=\"show\" #viewContainerEdit></ng-template>\n    </div>\n    <div (click)=\"action('trash')\" class=\"option-list\" *ngIf=\"trashTemplate !== null\">\n      <ng-template let-show=\"show\" #viewContainerTrash></ng-template>\n    </div>\n  </div>\n  <div [ngClass]=\"{'left-swipe':(result)}\" data-id=\"{{idElement}}\" class=\"list-swipe swipe-d-flex\">\n\n    <div *ngIf=\"showMark\" class=\"swipe-w-10\">\n      <ng-container #viewContainerMark></ng-container>\n    </div>\n\n    <div (click)=\"clickItem($event)\" [ngClass]=\"{'swipe-w-90':showMark, 'swipe-w-100':!showMark}\">\n      <div *ngIf=\"customTemplate\" data-id=\"{{idElement}}\">\n        <ng-template #viewContainerCustom>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!customTemplate\">\n        <ng-template #viewContainerCustom></ng-template>\n      </div>\n\n    </div>\n    <div class=\"mark\"></div>\n  </div>\n</div>\n",
                styles: [":host{display:block;font-family:Arial,serif}.not-marker{background:red;width:1rem;height:1rem;border-radius:3rem}.yes-marker{background:green;width:1rem;height:1rem;border-radius:3rem}.swipe-d-flex{display:flex}.swipe-w-10{width:10%}.swipe-w-100{width:100%}.swipe-w-90{width:90%}.options-btn.active{display:flex;transform:translate(66vw,0)}.list-swipe{box-shadow:0 5px 7px rgba(181,181,181,.18);border-radius:.25em;padding:.75em;font-weight:500;font-size:16px;line-height:19px;z-index:9;margin:.75rem 0;transition:50ms ease-out}.left-swipe{transform:translate(-29vw,0);transition:50ms ease-out;box-shadow:6px 0 7px rgba(181,181,181,.31)}.options-btn{position:absolute;display:none;transform:translate(100vw,0);padding:.5rem 0;width:28vw}.list-swipe .text{color:#313131}.list-swipe .small{font-weight:500;font-size:16px;line-height:19px;color:#9b9b9b;padding:1rem 0 0}.list-swipe .mark{background:#fff;height:2rem;margin-top:.75rem;margin-right:-.3rem;border-right:.175rem solid #f96060}.option-list{width:100%;min-height:3.75rem;line-height:3.75rem;border-right:1px solid rgba(0,0,0,.1);text-align:center}.option-list:last-child{border-right:0}.truncate{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]
            }] }
];
/** @nocollapse */
ItemListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SwipeServiceService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N3aXBlLWFuZ3VsYXItbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQUUsZ0JBQWdCLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTzdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBa0U1QixZQUFZLEtBQWlCLEVBQVUsU0FBOEI7UUFBOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFqRXJFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFFYixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBUU0saUJBQVksR0FBRyxLQUFLLENBQUM7UUFFeEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBMEJwQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUduQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXFDMUIsV0FBTTs7O1FBQUcsR0FBRyxFQUFFOztrQkFDZCxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFDO1FBR0ssY0FBUzs7OztRQUFHLENBQUMsR0FBTyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFB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Q0FDa0M7O0lBRWxDLDhDQUNvQzs7SUFFcEMsK0NBQ3FDOztJQUVyQyw4Q0FDb0M7O0lBRXBDLGdEQUNzQzs7Ozs7SUF5QnRDLG1DQUdFOztJQUdGLHNDQUtDOztJQUVELHNDQUE2Qzs7SUFFN0MsbUNBWUU7O0lBT0YsbUNBZ0VDOzs7OztJQWxIOEIsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTd2lwZVNlcnZpY2VTZXJ2aWNlfSBmcm9tICcuLi9zd2lwZS1zZXJ2aWNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdy1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaXRlbS1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCAge1xuICBhbGl2ZSA9IHRydWU7XG4gIHJlc3VsdDogYm9vbGVhbjtcbiAgc2VsZkVsZW1lbnQgPSBudWxsO1xuICBpZEVsZW1lbnQgPSBudWxsO1xuICBASW5wdXQoKSBpbnNpZGU6IHtcbiAgICBpZCxcbiAgICB0aXRsZTogJycsXG4gICAgc3ViVGl0bGU6ICcnLFxuICAgIG1hcms6IGZhbHNlLFxuICB9O1xuXG4gIEBJbnB1dCgnZGlzYWJsZS1tYXJrJykgZGlzYWJsZWRNYXJrID0gZmFsc2U7XG5cbiAgQElucHV0KCdzaG93LW1hcmsnKSBzaG93TWFyayA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnaXRlbS1jbGFzcycpIGl0ZW1DbGFzcyA9ICcnO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEVkaXQnKSBkZWZhdWx0RWRpdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJhc2gnKSBkZWZhdWx0VHJhc2g6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBAVmlld0NoaWxkKCdkZWZhdWx0TWFyaycpIGRlZmF1bHRNYXJrOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBAdHMtaWdub3JlXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHROb3RNYXJrJykgZGVmYXVsdE5vdE1hcms6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIEB0cy1pZ25vcmVcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdEN1c3RvbScpIGRlZmF1bHRDdXN0b206IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2N1c3RvbVRlbXBsYXRlJykgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdlZGl0VGVtcGxhdGUnKSBlZGl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCd0cmFzaFRlbXBsYXRlJykgdHJhc2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21hcmtUZW1wbGF0ZScpIG1hcmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ25vdE1hcmtUZW1wbGF0ZScpIG5vdE1hcmtUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KClcbiAgc3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZpZXdDb250YWluZXJFZGl0Jywge3N0YXRpYzogZmFsc2UsIHJlYWQ6IFZpZXdDb250YWluZXJSZWZ9KVxuICB2aWV3Q29udGFpbmVyRWRpdDogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyVHJhc2gnLCB7c3RhdGljOiBmYWxzZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZn0pXG4gIHZpZXdDb250YWluZXJUcmFzaDogVmlld0NvbnRhaW5lclJlZjtcblxuICBAVmlld0NoaWxkKCd2aWV3Q29udGFpbmVyTWFyaycsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgdmlld0NvbnRhaW5lck1hcms6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQFZpZXdDaGlsZCgndmlld0NvbnRhaW5lckN1c3RvbScsIHtzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmfSlcbiAgdmlld0NvbnRhaW5lckN1c3RvbTogVmlld0NvbnRhaW5lclJlZjtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrT3V0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNlbGZFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3dTZXJ2aWNlOiBTd2lwZVNlcnZpY2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5zZWxmRWxlbWVudCA9IGVsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pZEVsZW1lbnQgPSBgbGlzdC1zd2lwZS0ke3RoaXMucmFuZG9tKCl9YDtcbiAgICB0aGlzLnNlbGZFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRoaXMuaWRFbGVtZW50KTtcbiAgICB0aGlzLnNlbGZFbGVtZW50LmlkID0gdGhpcy5pZEVsZW1lbnQ7XG4gICAgdGhpcy5zd1NlcnZpY2Uuc3dpcGVPYnNlcnZlci5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICBpZiAoYSAhPT0gdGhpcy5zZWxmRWxlbWVudC5pZCkge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSByYW5kb20gPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGQuZ2V0VGltZSgpO1xuICB9O1xuXG5cbiAgcHVibGljIHN3aXBlbGVmdCA9IChyZXM6YW55KSA9PiB7XG4gICAgdGhpcy5zd1NlcnZpY2UuY2xvc2VBbGwodGhpcy5zZWxmRWxlbWVudC5pZCk7XG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZE1hcmspIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IChyZXMuZGVsdGFYIDwgMCk7XG4gICAgICAgIH1cbiAgfVxuXG4gIGNsaWNrSXRlbSA9IChhOiBhbnkpID0+IHRoaXMuc3dDbGljay5lbWl0KGEpO1xuXG4gIGFjdGlvbiA9IChvcHQgPSAnJykgPT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xuICAgICAgY29uc3Qge2lkfSA9IHRoaXMuaW5zaWRlO1xuICAgICAgaWYgKG9wdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suZW1pdCh7YWN0aW9uOiAnZWRpdCcsIHZhbHVlOiBpZH0pO1xuICAgICAgfSBlbHNlIGlmIChvcHQgPT09ICd0cmFzaCcpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KHthY3Rpb246ICd0cmFzaCcsIHZhbHVlOiBpZH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RlYmVzIGRlZmluaXIgSUQgZGUgZWRpdCwgeSB0cmFzaCcpO1xuICAgIH1cbiAgfTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJTklUJylcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBNQVJLXG4gICAgICoqL1xuICAgIGlmICh0aGlzLnNob3dNYXJrKSB7XG4gICAgICBpZiAodGhpcy5pbnNpZGUubWFyayAmJiAhdGhpcy5tYXJrVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLmRlZmF1bHRNYXJrLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluc2lkZS5tYXJrICYmIHRoaXMubWFya1RlbXBsYXRlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNYXJrID0gdGhpcy5tYXJrVGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJNYXJrLmluc2VydCh2aWV3TWFyayk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5pbnNpZGUubWFyayAmJiAhdGhpcy5ub3RNYXJrVGVtcGxhdGUpIHtcbiAgICAgICAgY29uc3Qgdmlld01hcmsgPSB0aGlzLmRlZmF1bHROb3RNYXJrLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pbnNpZGUubWFyayAmJiB0aGlzLm5vdE1hcmtUZW1wbGF0ZSkge1xuICAgICAgICBjb25zdCB2aWV3TWFyayA9IHRoaXMubm90TWFya1RlbXBsYXRlLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyTWFyay5pbnNlcnQodmlld01hcmspO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBFRElUXG4gICAgICoqL1xuICAgIGlmICh0aGlzLmVkaXRUZW1wbGF0ZSkge1xuICAgICAgY29uc3Qgdmlld0VkaXQgPSB0aGlzLmVkaXRUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyRWRpdCkge1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJFZGl0Lmluc2VydCh2aWV3RWRpdCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmVkaXRUZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgdmlld0VkaXQgPSB0aGlzLmRlZmF1bHRFZGl0LmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lckVkaXQuaW5zZXJ0KHZpZXdFZGl0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBUUkFTSFxuICAgICAqKi9cblxuICAgIGlmICh0aGlzLnRyYXNoVGVtcGxhdGUpIHtcbiAgICAgIGNvbnN0IHZpZXdUcmFzaCA9IHRoaXMudHJhc2hUZW1wbGF0ZS5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyVHJhc2gpIHtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyVHJhc2guaW5zZXJ0KHZpZXdUcmFzaCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYXNoVGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZpZXdUcmFzaCA9IHRoaXMuZGVmYXVsdFRyYXNoLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclRyYXNoLmluc2VydCh2aWV3VHJhc2gpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tVGVtcGxhdGUpIHsgLy8gU2kgdGllbmVcbiAgICAgICAgY29uc3QgZGF0YUluc2lkZSA9IHsuLi50aGlzLmluc2lkZSwgLi4ue3RvdWNoOiB0aGlzLnNlbGZFbGVtZW50LmlkfX07XG4gICAgICAgIGNvbnN0IHZpZXdDdXN0b21UZW1wbGF0ZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KHtcbiAgICAgICAgICBpdGVtOiBkYXRhSW5zaWRlLFxuICAgICAgICAgIGlkOiB0aGlzLnNlbGZFbGVtZW50LmlkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmlld0N1c3RvbVRlbXBsYXRlKSB7XG4gICAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyQ3VzdG9tLmluc2VydCh2aWV3Q3VzdG9tVGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2aWV3Q3VzdG9tVGVtcGxhdGUgPSB0aGlzLmRlZmF1bHRDdXN0b20uY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJDdXN0b20uaW5zZXJ0KHZpZXdDdXN0b21UZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbn1cbiJdfQ==