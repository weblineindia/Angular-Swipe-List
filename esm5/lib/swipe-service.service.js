/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ SwipeServiceService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SwipeServiceService_Factory() { return new SwipeServiceService(); }, token: SwipeServiceService, providedIn: "root" });
    return SwipeServiceService;
}());
export { SwipeServiceService };
if (false) {
    /** @type {?} */
    SwipeServiceService.prototype.swipeObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3dpcGUtYW5ndWxhci1saXN0LyIsInNvdXJjZXMiOlsibGliL3N3aXBlLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXZEO0lBTUU7UUFGQSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pELENBQUM7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFYRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs4QkFKRDtDQWNDLEFBWkQsSUFZQztTQVRZLG1CQUFtQjs7O0lBQzlCLDRDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVTZXJ2aWNlU2VydmljZSB7XG4gIHN3aXBlT2JzZXJ2ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgY2xvc2VBbGwoaWQpIHtcbiAgICB0aGlzLnN3aXBlT2JzZXJ2ZXIuZW1pdChpZCk7XG4gIH1cbn1cbiJdfQ==