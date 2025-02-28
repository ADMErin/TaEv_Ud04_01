"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_voz_voz_module_ts"],{

/***/ 4679:
/*!*************************************************!*\
  !*** ./src/app/pages/voz/voz-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VozPageRoutingModule": () => (/* binding */ VozPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _voz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voz.page */ 7804);




const routes = [
    {
        path: '',
        component: _voz_page__WEBPACK_IMPORTED_MODULE_0__.VozPage
    }
];
let VozPageRoutingModule = class VozPageRoutingModule {
};
VozPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VozPageRoutingModule);



/***/ }),

/***/ 8574:
/*!*****************************************!*\
  !*** ./src/app/pages/voz/voz.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VozPageModule": () => (/* binding */ VozPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _voz_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voz-routing.module */ 4679);
/* harmony import */ var _voz_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voz.page */ 7804);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/mis-componentes.module */ 6453);








let VozPageModule = class VozPageModule {
};
VozPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _voz_routing_module__WEBPACK_IMPORTED_MODULE_0__.VozPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_2__.MisComponentesModule
        ],
        declarations: [_voz_page__WEBPACK_IMPORTED_MODULE_1__.VozPage]
    })
], VozPageModule);



/***/ }),

/***/ 7804:
/*!***************************************!*\
  !*** ./src/app/pages/voz/voz.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VozPage": () => (/* binding */ VozPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voz.page.html?ngResource */ 5913);
/* harmony import */ var _voz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voz.page.scss?ngResource */ 2163);
/* harmony import */ var _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/camara.service */ 2532);
/* harmony import */ var _servicios_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../servicios/speech.service */ 7272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/speech-recognition */ 7350);







let VozPage = class VozPage {
    constructor(speechRecognition, camara) {
        this.speechRecognition = speechRecognition;
        this.camara = camara;
    }
    ngOnInit() {
    }
    escuchar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Boton pulsado");
            yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.available();
            console.log("Disponible");
            yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.requestPermissions();
            console.log("Permisos");
            try {
                yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.start({
                    prompt: "Hablar",
                    maxResults: 1,
                    partialResults: true,
                    language: 'es-ES',
                    popup: false
                });
                console.log("disponible");
                _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.addListener('partialResults', (result) => {
                    const transcripcion = result.matches[0];
                    console.log('Transcripcion:', transcripcion);
                    if (transcripcion.toLowerCase().includes("foto")) {
                        this.camara.sacarFoto();
                    }
                });
                //await SpeechRecognition.stop();
                //SpeechRecognition.removeAllListeners();
            }
            catch (error) {
                console.error('Error con el inicio de reconocimiento de voz', error);
            }
            console.log("Reconocimiento de voz finalizado");
        });
    }
    ;
};
VozPage.ctorParameters = () => [
    { type: _servicios_speech_service__WEBPACK_IMPORTED_MODULE_3__.SpeechService },
    { type: _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__.CamaraService }
];
VozPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-voz',
        template: _voz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VozPage);



/***/ }),

/***/ 7272:
/*!*********************************************!*\
  !*** ./src/app/servicios/speech.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechService": () => (/* binding */ SpeechService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-community/speech-recognition */ 7350);



let SpeechService = class SpeechService {
    constructor() { }
    stop() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_0__.SpeechRecognition.stop();
        });
    }
    start() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_0__.SpeechRecognition.start({
                    language: 'es-ES',
                    maxResults: 2,
                    prompt: "Di algo",
                    popup: false,
                    partialResults: true,
                });
                console.log("available");
            }
            catch (error) {
                console.error('Error al iniciar la reconocimiento de voz', error);
            }
        });
    }
    addEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
SpeechService.ctorParameters = () => [];
SpeechService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SpeechService);



/***/ }),

/***/ 1726:
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/speech-recognition/dist/esm/definitions.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7350:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/speech-recognition/dist/esm/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechRecognition": () => (/* binding */ SpeechRecognition)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1726);

const SpeechRecognition = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SpeechRecognition', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_speech-recognition_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2298)).then(m => new m.SpeechRecognitionWeb())
});



/***/ }),

/***/ 2163:
/*!****************************************************!*\
  !*** ./src/app/pages/voz/voz.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3oucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5913:
/*!****************************************************!*\
  !*** ./src/app/pages/voz/voz.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"voz\"></app-page-header>\n\n<ion-content>\n  <ion-button (click)=\"escuchar()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      Grabar voz\n  </ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_voz_voz_module_ts.js.map