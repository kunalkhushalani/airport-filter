(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\home-assignment\src\main.ts */"zUnb");


/***/ }),

/***/ "0Xxr":
/*!*****************************************!*\
  !*** ./src/app/core/airport.service.ts ***!
  \*****************************************/
/*! exports provided: AirportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportService", function() { return AirportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AirportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Gets airports
     */
    getAirports() {
        return this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].airPortApi)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((airports) => this.mapAirportData(airports)));
    }
    /**
     * Maps airports null data to empty string
     * @param airPorts airports
     */
    mapAirportData(airPorts) {
        airPorts.map((airPort) => {
            if (airPort.iata === null) {
                airPort.iata = '';
            }
            if (airPort.icao === null) {
                airPort.icao = '';
            }
            if (airPort.elevation === null) {
                airPort.elevation = 0;
            }
            if (airPort.name === null) {
                airPort.name = '';
            }
            if (airPort.latitude === null) {
                airPort.latitude = 0;
            }
            if (airPort.longitude === null) {
                airPort.longitude = 0;
            }
        });
        return airPorts;
    }
}
AirportService.ɵfac = function AirportService_Factory(t) { return new (t || AirportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AirportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AirportService, factory: AirportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    airPortApi: 'assets/data/airports.json',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KYYH":
/*!************************************************************!*\
  !*** ./src/app/airport-filter/airport-filter.component.ts ***!
  \************************************************************/
/*! exports provided: AirportFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportFilterComponent", function() { return AirportFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ "33Jv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_airport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/airport.service */ "0Xxr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slice_airports_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slice-airports.pipe */ "VCRI");








const _c0 = ["searchFilter"];
function AirportFilterComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const airport_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.icao);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.iata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.elevation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.latitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.longitude);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](airport_r3.type);
} }
function AirportFilterComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No rows to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AirportFilterComponent {
    constructor(airportService) {
        this.airportService = airportService;
        this.airports = [];
        this.airportsToShow = [];
        this.dataChunk = 5;
        this.filteredAirports = [];
        this.filters = [];
        this.searchQuery = '';
        this.startPageIndex = 0;
        this.endPageIndex = this.dataChunk;
        this._sink = new subsink__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
    }
    /**
     * Triggers when component is initialized
     */
    ngOnInit() {
        this._sink.add(this.airportService.getAirports().subscribe((airports) => {
            this.airports = airports;
            const filters = JSON.parse(localStorage.getItem('filters'));
            if (filters) {
                this.filters = filters;
            }
            this.filterAirports();
            if (this.filteredAirports.length === 0) {
                this.airportsToShow = [...this.airports];
                this.filteredAirports = [...this.airports];
            }
        }));
    }
    /**
     * Triggers when view is initialized
     */
    ngAfterViewInit() {
        const search = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchFilter.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000));
        this._sink.add(search.subscribe((searchQuery) => {
            this.searchQuery = searchQuery;
            this.applySearchFilter(searchQuery);
        }));
    }
    /**
     * Adds/removes a filter from filters array and applies filter
     * and sets filters in local storage
     * @param filter filter to be added/removed
     */
    applyFilters(filter) {
        const index = this.findTypeIndexinFilterArray(filter);
        if (index === -1) {
            this.filters.push(filter.toUpperCase());
        }
        else {
            this.filters.splice(index, 1);
        }
        localStorage.setItem('filters', JSON.stringify(this.filters));
        this.filterAirports();
    }
    /**
     * Filters airports
     * Checkbox filteration will be done from airPorts array(having all the airports) and set to filteredAirports array
     * and search filteration will be done from the filteredAirports array
     */
    filterAirports() {
        const filteredAirports = this.airports.filter((airport) => {
            if (this.findTypeIndexinFilterArray(airport.type) !== -1) {
                return true;
            }
            return false;
        });
        this.filteredAirports = filteredAirports;
        // if no filters set
        if (this.filters.length === 0 && this.filteredAirports.length === 0) {
            this.filteredAirports = [...this.airports];
        }
        this.applySearchFilter(this.searchQuery);
    }
    /**
     * Applies search filter
     * @param searchQuery search query
     */
    applySearchFilter(searchQuery) {
        searchQuery = searchQuery.toUpperCase();
        this.airportsToShow = this.filteredAirports.filter((airport) => {
            return (airport.name.toUpperCase().includes(searchQuery) ||
                airport.icao.toUpperCase().includes(searchQuery) ||
                airport.iata.toUpperCase().includes(searchQuery) ||
                airport.elevation.toString().toUpperCase().includes(searchQuery) ||
                airport.latitude.toString().toUpperCase().includes(searchQuery) ||
                airport.longitude.toString().toUpperCase().includes(searchQuery));
        });
        this.resetPageIndexes();
    }
    /**
     * Resets page indexes
     */
    resetPageIndexes() {
        if (this.airportsToShow.length > 0) {
            this.startPageIndex = 0;
            if (this.airportsToShow[this.dataChunk]) {
                this.endPageIndex = this.dataChunk;
            }
            else {
                // if airportsToShow length is less than data chunk
                this.endPageIndex = this.airportsToShow.length;
            }
        }
        else {
            // set start and end index as 0
            this.startPageIndex = -1;
            this.endPageIndex = 0;
        }
    }
    /**
     * Navigates to next page of table
     */
    navigateToNextPage() {
        if (!(this.endPageIndex === this.airportsToShow.length)) {
            this.startPageIndex += this.dataChunk;
            if (this.airportsToShow[this.endPageIndex + this.dataChunk]) {
                this.endPageIndex += this.dataChunk;
            }
            else {
                this.endPageIndex = this.airportsToShow.length;
            }
        }
    }
    /**
     * Navigates to previous page of table
     */
    navigateToPreviousPage() {
        if (!(this.startPageIndex <= 0)) {
            if (this.airportsToShow.length % this.dataChunk !== 0 &&
                this.endPageIndex === this.airportsToShow.length) {
                this.endPageIndex -= this.airportsToShow.length % this.dataChunk;
            }
            else {
                if (this.endPageIndex - this.dataChunk !== 0) {
                    this.endPageIndex -= this.dataChunk;
                }
            }
            if (this.airportsToShow[this.startPageIndex - this.dataChunk]) {
                this.startPageIndex = this.startPageIndex - this.dataChunk;
            }
            else {
                this.startPageIndex = 0;
            }
        }
    }
    /**
     * Finds airport type in filters array
     * @param type airport type
     */
    findTypeIndexinFilterArray(type) {
        const index = this.filters.indexOf(type.toUpperCase());
        return index;
    }
    /**
     * Unsubscribing subscriptions
     */
    ngOnDestroy() {
        this._sink.unsubscribe();
    }
}
AirportFilterComponent.ɵfac = function AirportFilterComponent_Factory(t) { return new (t || AirportFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_airport_service__WEBPACK_IMPORTED_MODULE_4__["AirportService"])); };
AirportFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AirportFilterComponent, selectors: [["app-airport-filter"]], viewQuery: function AirportFilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchFilter = _t.first);
    } }, decls: 79, vars: 19, consts: [[1, "w-100", "p-2"], [1, "p-3", "airports-filter-outer-container", "w-100"], [1, "p-4", "w-100", "airports-filter-inner-container"], [1, "mb-4"], [1, "row", "m-0", "mb-3"], [1, "col-7", "p-0"], [1, "checkbox-filter"], ["type", "checkbox", "id", "small", 3, "checked", "change"], ["for", "small", 1, "ml-1", "mr-2"], ["type", "checkbox", "id", "medium", 3, "checked", "change"], ["for", "medium", 1, "ml-1", "mr-2"], ["type", "checkbox", "id", "large", 3, "checked", "change"], ["for", "large", 1, "ml-1", "mr-2"], ["type", "checkbox", "id", "heliport", 3, "checked", "change"], ["for", "heliport", 1, "ml-1", "mr-2"], ["type", "checkbox", "id", "closed", 3, "checked", "change"], ["for", "closed", 1, "ml-1", "mr-2"], ["type", "checkbox", "id", "favorites", 3, "checked", "change"], ["for", "favorites", 1, "ml-1", "mr-2"], [1, "col-5", "p-0"], ["type", "text", 1, "w-100", "p-0", "search-filter"], ["searchFilter", ""], [1, "airport-table-container", "w-100", "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "text-center w-100", 4, "ngIf"], [1, "w-100"], [1, "row", "m-0"], [1, "col-1", "p-0", "text-left"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left", 3, "click"], [1, "col-10", "text-center"], [1, "col-1", "p-0", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right", 3, "click"], [1, "text-center", "w-100"], ["colspan", "7"]], template: function AirportFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "airports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_12_listener() { return ctx.applyFilters("small"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_16_listener() { return ctx.applyFilters("medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_20_listener() { return ctx.applyFilters("large"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_24_listener() { return ctx.applyFilters("heliport"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Heliport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_28_listener() { return ctx.applyFilters("closed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AirportFilterComponent_Template_input_change_32_listener() { return ctx.applyFilters("favorites"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "In your favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Filter by search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "ICAO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Elev.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Long.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AirportFilterComponent_tr_59_Template, 15, 7, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "sliceAirports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AirportFilterComponent_tr_61_Template, 3, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportFilterComponent_Template_i_click_65_listener() { return ctx.navigateToPreviousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Showing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AirportFilterComponent_Template_i_click_78_listener() { return ctx.navigateToNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("SMALL") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("MEDIUM") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("LARGE") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("HELIPORT") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("CLOSED") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.findTypeIndexinFilterArray("FAVORITES") !== -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](60, 15, ctx.airportsToShow, ctx.startPageIndex, ctx.endPageIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.airportsToShow.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navigation-disabled", ctx.startPageIndex <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.startPageIndex + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.endPageIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.airportsToShow.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("navigation-disabled", ctx.endPageIndex === ctx.airportsToShow.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_slice_airports_pipe__WEBPACK_IMPORTED_MODULE_6__["SliceAirportsPipe"]], styles: ["@charset \"UTF-8\";\n\n.search-filter[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  outline: none;\n}\n\n.airports-filter-outer-container[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n}\n\n.airports-filter-inner-container[_ngcontent-%COMP%] {\n  background: white;\n  font-weight: revert;\n}\n\nthead[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f4f4f4;\n}\nspan[_ngcontent-%COMP%] {\n  color: #e0e0e0;\n}\n\n.fa[_ngcontent-%COMP%] {\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.navigation-disabled[_ngcontent-%COMP%] {\n  color: grey;\n  cursor: not-allowed;\n}\n\n.checkbox-filter[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: -13px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  border: 2px solid black;\n  content: \"\u00A0\";\n  display: inline-block;\n  font: 12px/1em sans-serif;\n  height: 16px;\n  margin-right: 5px;\n  margin-top: 5px;\n  padding: 0;\n  vertical-align: top;\n  width: 16px;\n  border-radius: 3px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  background: black;\n  color: white;\n  content: \"\u2713\";\n  text-align: center;\n}\nh5[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\n  font-weight: revert;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFpcnBvcnQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix5QkFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFFRjtBQUNBLDBDQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBQ0EsMENBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUNBLHdCQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBQ0Esd0NBQUE7QUFDQTtFQUNFLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGNBQUE7QUFFRjtBQUNBLDZCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUVGO0FBQ0EsK0JBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0EsMkJBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBLGdDQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQ0Esb0JBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQSx3Q0FBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTs7RUFFRSxtQkFBQTtBQUVGIiwiZmlsZSI6ImFpcnBvcnQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqIFNlYXJjaCBmaWx0ZXIgc3R5bGVzKi9cbi5zZWFyY2gtZmlsdGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qKiBBaXJwb3J0IGZpbHRlciBvdXRlciBjb250YWluZXIgc3R5bGVzKi9cbi5haXJwb3J0cy1maWx0ZXItb3V0ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuLyoqIEFpcnBvcnQgZmlsdGVyIGlubmVyIGNvbnRhaW5lciBzdHlsZXMqL1xuLmFpcnBvcnRzLWZpbHRlci1pbm5lci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IHJldmVydDtcbn1cblxuLyoqIFRhYmxlIGhlYWRlciBzdHlsZXMqL1xudGhlYWQge1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuXG4vKiogU3R5bGVzIGZvciBhbHRlcm5hdGUgcm93IGJhY2tncm91bmQqL1xudGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNlMGUwZTA7XG59XG5cbi8qKiBQYWdpbmF0aW9uIGFycm93cyBzdHlsZXMqL1xuLmZhIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKiBQYWdpbmF0aW9uIGRpc2FibGVkIHN0eWxlcyovXG4ubmF2aWdhdGlvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmV5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiogQ2hlY2tib3ggZmlsdGVyIHN0eWxlcyovXG4uY2hlY2tib3gtZmlsdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogLTEzcHg7XG59XG5cbi8qKiBIaWRpbmcgdGhlIGRlZmF1bHQgY2hlY2tib3gqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qKiBDdXN0b20gY2hlY2tib3gqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY29udGVudDogXCLCoFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IDEycHgvMWVtIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyoqIEN1c3RvbSBjaGVja2JveCBzdHlsZXMgd2hlbiBjaGVja2VkKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIuKck1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg1LFxuYiB7XG4gIGZvbnQtd2VpZ2h0OiByZXZlcnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AirportFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-airport-filter',
                templateUrl: './airport-filter.component.html',
                styleUrls: ['./airport-filter.component.scss'],
            }]
    }], function () { return [{ type: _core_airport_service__WEBPACK_IMPORTED_MODULE_4__["AirportService"] }]; }, { searchFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchFilter']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _airport_filter_airport_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airport-filter/airport-filter.component */ "KYYH");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-airport-filter");
    } }, directives: [_airport_filter_airport_filter_component__WEBPACK_IMPORTED_MODULE_1__["AirportFilterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "VCRI":
/*!****************************************!*\
  !*** ./src/app/slice-airports.pipe.ts ***!
  \****************************************/
/*! exports provided: SliceAirportsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceAirportsPipe", function() { return SliceAirportsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SliceAirportsPipe {
    transform(airPorts, startIndex, endIndex) {
        if (airPorts[startIndex] && airPorts[endIndex - 1]) {
            return airPorts.slice(startIndex, endIndex);
        }
        return airPorts;
    }
}
SliceAirportsPipe.ɵfac = function SliceAirportsPipe_Factory(t) { return new (t || SliceAirportsPipe)(); };
SliceAirportsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sliceAirports", type: SliceAirportsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliceAirportsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sliceAirports',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _airport_filter_airport_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./airport-filter/airport-filter.component */ "KYYH");
/* harmony import */ var _slice_airports_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slice-airports.pipe */ "VCRI");
/* harmony import */ var _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/cache.interceptor */ "d/16");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_7__["CacheInterceptor"], multi: true },
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _airport_filter_airport_filter_component__WEBPACK_IMPORTED_MODULE_5__["AirportFilterComponent"], _slice_airports_pipe__WEBPACK_IMPORTED_MODULE_6__["SliceAirportsPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _airport_filter_airport_filter_component__WEBPACK_IMPORTED_MODULE_5__["AirportFilterComponent"], _slice_airports_pipe__WEBPACK_IMPORTED_MODULE_6__["SliceAirportsPipe"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_7__["CacheInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "d/16":
/*!*******************************************!*\
  !*** ./src/app/core/cache.interceptor.ts ***!
  \*******************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class CacheInterceptor {
    constructor() {
        this.cache = [];
    }
    intercept(req, next) {
        if (req.method !== 'GET') {
            return next.handle(req);
        }
        const cachedResponse = this.cache.find((cache) => cache.url === req.url);
        if (cachedResponse) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: cachedResponse.data }));
        }
        else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((stateEvent) => {
                if (stateEvent instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                    const index = this.cache.findIndex((cache) => cache.url === req.urlWithParams);
                    if (index === -1) {
                        this.cache.push({
                            url: req.urlWithParams,
                            data: stateEvent.body,
                        });
                    }
                    else {
                        this.cache[index].data = stateEvent.body;
                    }
                }
            }));
        }
    }
}
CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(); };
CacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CacheInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map