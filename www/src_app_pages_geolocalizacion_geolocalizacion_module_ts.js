"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_geolocalizacion_geolocalizacion_module_ts"],{

/***/ 4443:
/*!*************************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPageRoutingModule": () => (/* binding */ GeolocalizacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocalizacion.page */ 8520);




const routes = [
    {
        path: '',
        component: _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_0__.GeolocalizacionPage
    }
];
let GeolocalizacionPageRoutingModule = class GeolocalizacionPageRoutingModule {
};
GeolocalizacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeolocalizacionPageRoutingModule);



/***/ }),

/***/ 9395:
/*!*****************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPageModule": () => (/* binding */ GeolocalizacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _geolocalizacion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocalizacion-routing.module */ 4443);
/* harmony import */ var _geolocalizacion_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocalizacion.page */ 8520);








let GeolocalizacionPageModule = class GeolocalizacionPageModule {
};
GeolocalizacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _geolocalizacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.GeolocalizacionPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__.MisComponentesModule
        ],
        declarations: [_geolocalizacion_page__WEBPACK_IMPORTED_MODULE_2__.GeolocalizacionPage]
    })
], GeolocalizacionPageModule);



/***/ }),

/***/ 8520:
/*!***************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocalizacionPage": () => (/* binding */ GeolocalizacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _geolocalizacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocalizacion.page.html?ngResource */ 2854);
/* harmony import */ var _geolocalizacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocalizacion.page.scss?ngResource */ 1769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);





let GeolocalizacionPage = class GeolocalizacionPage {
    constructor() {
        this.map = {};
    }
    ngOnInit() {
        this.initMap();
    }
    obtenerPosicion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition();
            return coordinates;
        });
    }
    ;
    onClick() {
        this.obtenerPosicion();
    }
    initMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let coordenadas;
            coordenadas = yield this.obtenerPosicion();
            console.log("Posición acctual:", coordenadas);
            // Obtenemos la latitud y la longitud
            const posicion = {
                lat: coordenadas.coords.latitude,
                lng: coordenadas.coords.longitude
            };
            // Mostramos el mapa centrado en la posición almacenada
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: posicion,
            });
            // Mostramos el marcador en la misma posición
            const marker = new google.maps.Marker({
                position: posicion,
                map: map,
            });
            // Creamos el objeto geocoder para convertir coordenadas en direcciones y viceversa
            const geocoder = new google.maps.Geocoder();
            // Creamos el objeto infowindow para mostrar la dirección sobre el marcador del mapa
            const infowindow = new google.maps.InfoWindow();
            // Ejecutamos el método geocode
            // Le pasamos la latitud y longitud, y una función de callback con el código que queremos que se ejecute una vez obtenida la dirección
            // Se mostrará sobre el mapa
            geocoder.geocode({ location: posicion }, function (results, status) {
                if (results[0]) {
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                }
                else {
                    window.alert("No results found");
                }
            });
            // Le pasamos la dirección y la función de callback para que cree otro marcado y
            // lo posicione en las coordenadas de esa dirección
            geocoder.geocode({ address: "Bilbao" }, function (results, status) {
                if (results[0]) {
                    const marker2 = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                    });
                    const infowindow2 = new google.maps.InfoWindow();
                    infowindow2.setContent(results[0].formatted_address);
                    infowindow2.open(map, marker2);
                }
                else {
                    window.alert("No results found");
                }
            });
        });
    }
};
GeolocalizacionPage.ctorParameters = () => [];
GeolocalizacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-geolocalizacion',
        template: _geolocalizacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_geolocalizacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeolocalizacionPage);



/***/ }),

/***/ 591:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7621:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 591);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8391)).then(m => new m.GeolocationWeb())
});



/***/ }),

/***/ 1769:
/*!****************************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2FsaXphY2lvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nJTIwTXVsdGltZWRpYSUyMHklMjBEaXNwJTIwTW92aWxlc1xcVGFyZWFzXFxVRDA0XFxUYUV2X1VkMDRfMDFcXHBtZG0wMy1lamVtcGxvMjAyMlxcc3JjXFxhcHBcXHBhZ2VzXFxnZW9sb2NhbGl6YWNpb25cXGdlb2xvY2FsaXphY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoiZ2VvbG9jYWxpemFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0iLCIjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 2854:
/*!****************************************************************************!*\
  !*** ./src/app/pages/geolocalizacion/geolocalizacion.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Geolocalización\"></app-page-header>\r\n\r\n<ion-content>\r\n    <ion-button (click)=\"onClick()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Click me\r\n    </ion-button>\r\n    <div id=\"map\"></div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_geolocalizacion_geolocalizacion_module_ts.js.map