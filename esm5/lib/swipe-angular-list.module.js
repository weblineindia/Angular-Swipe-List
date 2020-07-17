/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { SwipeAngularListComponent } from './swipe-angular-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
var HammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(HammerConfig, _super);
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
export { HammerConfig };
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
export { SwipeAngularListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtYW5ndWxhci1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N3aXBlLWFuZ3VsYXItbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zd2lwZS1hbmd1bGFyLWxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFckY7SUFBa0Msd0NBQW1CO0lBQXJEO1FBQUEscUVBS0M7UUFKQyxlQUFTLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBQ3RCLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7U0FDeEIsQ0FBQzs7SUFDSixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0MsbUJBQW1CLEdBS3BEOzs7O0lBSkMsaUNBR0U7O0FBR0o7SUFBQTtJQWNBLENBQUM7O2dCQWRBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDNUQsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxZQUFZO3lCQUN2QjtxQkFDRjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQztpQkFDeEQ7O0lBRUQsNkJBQUM7Q0FBQSxBQWRELElBY0M7U0FEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3dpcGVBbmd1bGFyTGlzdENvbXBvbmVudH0gZnJvbSAnLi9zd2lwZS1hbmd1bGFyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7SXRlbUxpc3RDb21wb25lbnR9IGZyb20gJy4vaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0hBTU1FUl9HRVNUVVJFX0NPTkZJRywgSGFtbWVyR2VzdHVyZUNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgb3ZlcnJpZGVzID0ge1xuICAgIHBpbmNoOiB7ZW5hYmxlOiBmYWxzZX0sXG4gICAgcm90YXRlOiB7ZW5hYmxlOiBmYWxzZX1cbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3dpcGVBbmd1bGFyTGlzdENvbXBvbmVudCwgSXRlbUxpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAgIHVzZUNsYXNzOiBIYW1tZXJDb25maWdcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtTd2lwZUFuZ3VsYXJMaXN0Q29tcG9uZW50LCBJdGVtTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVBbmd1bGFyTGlzdE1vZHVsZSB7XG59XG4iXX0=