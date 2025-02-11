"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_camara_camara_module_ts"],{

/***/ 9008:
/*!*******************************************************!*\
  !*** ./src/app/pages/camara/camara-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageRoutingModule": () => (/* binding */ CamaraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara.page */ 9330);




const routes = [
    {
        path: '',
        component: _camara_page__WEBPACK_IMPORTED_MODULE_0__.CamaraPage
    }
];
let CamaraPageRoutingModule = class CamaraPageRoutingModule {
};
CamaraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CamaraPageRoutingModule);



/***/ }),

/***/ 3122:
/*!***********************************************!*\
  !*** ./src/app/pages/camara/camara.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPageModule": () => (/* binding */ CamaraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara-routing.module */ 9008);
/* harmony import */ var _camara_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page */ 9330);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);








let CamaraPageModule = class CamaraPageModule {
};
CamaraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _camara_routing_module__WEBPACK_IMPORTED_MODULE_0__.CamaraPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__.MisComponentesModule
        ],
        declarations: [_camara_page__WEBPACK_IMPORTED_MODULE_1__.CamaraPage]
    })
], CamaraPageModule);



/***/ }),

/***/ 9330:
/*!*********************************************!*\
  !*** ./src/app/pages/camara/camara.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraPage": () => (/* binding */ CamaraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _camara_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camara.page.html?ngResource */ 9851);
/* harmony import */ var _camara_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camara.page.scss?ngResource */ 4094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_servicios_camara_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/camara.service */ 2532);






let CamaraPage = class CamaraPage {
    constructor(camaraFotos) {
        this.camaraFotos = camaraFotos;
        this.url = "";
    }
    ngOnInit() {
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 90,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera
            });
            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            this.url = image.webPath;
        });
    }
    ;
};
CamaraPage.ctorParameters = () => [
    { type: src_app_servicios_camara_service__WEBPACK_IMPORTED_MODULE_3__.CamaraService }
];
CamaraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-camara',
        template: _camara_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camara_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CamaraPage);



/***/ }),

/***/ 4094:
/*!**********************************************************!*\
  !*** ./src/app/pages/camara/camara.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1hcmEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9851:
/*!**********************************************************!*\
  !*** ./src/app/pages/camara/camara.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Cámara\"></app-page-header>\r\n\r\n<ion-content>\r\n    <!--  Ejemplo simple de la cámara \r\n    <ion-button (click)=\"takePicture()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Click me\r\n    </ion-button>\r\n    <ion-img [src]=\"url\"></ion-img>\r\n    -->\r\n\r\n    <ion-button (click)=\"camaraFotos.sacarFoto()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Click me\r\n    </ion-button>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let url of camaraFotos.getListaUrl()\">\r\n            <ion-img [src]=\"url\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_camara_camara_module_ts.js.map