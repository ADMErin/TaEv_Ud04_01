"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_videos_videos_module_ts"],{

/***/ 6453:
/*!******************************************************!*\
  !*** ./src/app/components/mis-componentes.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisComponentesModule": () => (/* binding */ MisComponentesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.component */ 4831);





let MisComponentesModule = class MisComponentesModule {
};
MisComponentesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
    })
], MisComponentesModule);



/***/ }),

/***/ 4831:
/*!*****************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component.html?ngResource */ 6256);
/* harmony import */ var _page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss?ngResource */ 343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let PageHeaderComponent = class PageHeaderComponent {
    constructor() {
        this.titulo = "";
    }
    ngOnInit() { }
};
PageHeaderComponent.ctorParameters = () => [];
PageHeaderComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-header',
        template: _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageHeaderComponent);



/***/ }),

/***/ 9215:
/*!*******************************************************!*\
  !*** ./src/app/pages/videos/videos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageRoutingModule": () => (/* binding */ VideosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.page */ 58);




const routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_0__.VideosPage
    }
];
let VideosPageRoutingModule = class VideosPageRoutingModule {
};
VideosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideosPageRoutingModule);



/***/ }),

/***/ 9642:
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageModule": () => (/* binding */ VideosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos-routing.module */ 9215);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videos.page */ 58);








let VideosPageModule = class VideosPageModule {
};
VideosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _videos_routing_module__WEBPACK_IMPORTED_MODULE_1__.VideosPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__.MisComponentesModule
        ],
        declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_2__.VideosPage]
    })
], VideosPageModule);



/***/ }),

/***/ 58:
/*!*********************************************!*\
  !*** ./src/app/pages/videos/videos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPage": () => (/* binding */ VideosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _videos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.page.html?ngResource */ 3855);
/* harmony import */ var _videos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.page.scss?ngResource */ 1578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VideosPage = class VideosPage {
    constructor() { }
    ngOnInit() {
    }
};
VideosPage.ctorParameters = () => [];
VideosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-videos',
        template: _videos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_videos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideosPage);



/***/ }),

/***/ 343:
/*!******************************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 1578:
/*!**********************************************************!*\
  !*** ./src/app/pages/videos/videos.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6256:
/*!******************************************************************************!*\
  !*** ./src/app/components/page-header/page-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\\\" mode=\"ios\" text=\"Atrás\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-uppercase\">{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 3855:
/*!**********************************************************!*\
  !*** ./src/app/pages/videos/videos.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Vídeos\"></app-page-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <video width=\"80%\" controls>\r\n    <source src=\"assets/videos/video.mp4\" type=\"video/mp4\">\r\n</video>\r\n<iframe src=\"https://www.youtube.com/embed/sOnqjkJTMaA\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_videos_videos_module_ts.js.map