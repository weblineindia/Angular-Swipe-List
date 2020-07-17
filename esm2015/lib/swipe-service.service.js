/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SwipeServiceService {
    constructor() {
        this.swipeObserver = new EventEmitter();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeAll(id) {
        this.swipeObserver.emit(id);
    }
}
SwipeServiceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SwipeServiceService.ctorParameters = () => [];
/** @nocollapse */ SwipeServiceService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SwipeServiceService_Factory() { return new SwipeServiceService(); }, token: SwipeServiceService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SwipeServiceService.prototype.swipeObserver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3dpcGUtYW5ndWxhci1saXN0LyIsInNvdXJjZXMiOlsibGliL3N3aXBlLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFHOUI7UUFGQSxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEVBQUU7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7SUFFQyw0Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlU2VydmljZVNlcnZpY2Uge1xuICBzd2lwZU9ic2VydmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNsb3NlQWxsKGlkKSB7XG4gICAgdGhpcy5zd2lwZU9ic2VydmVyLmVtaXQoaWQpO1xuICB9XG59XG4iXX0=