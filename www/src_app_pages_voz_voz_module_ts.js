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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voz.page.html?ngResource */ 5913);
/* harmony import */ var _voz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voz.page.scss?ngResource */ 2163);
/* harmony import */ var _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/camara.service */ 2532);
/* harmony import */ var _servicios_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../servicios/speech.service */ 7272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/speech-recognition */ 7350);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/share */ 8921);








let VozPage = class VozPage {
    constructor(speechRecognition, camara) {
        this.speechRecognition = speechRecognition;
        this.camara = camara;
        this.recording = false;
        this.photo = null;
        _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.requestPermissions();
    }
    ngOnInit() {
    }
    startRecognition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const { available } = yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.available();
            if (available) {
                this.recording = true;
                _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.start({
                    popup: false,
                    partialResults: true,
                    language: 'en-US',
                });
                _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.addListener('partialResults', (data) => {
                    var _a, _b;
                    console.log('partialResults was fired', data.matches);
                    console.log('Posición 0: ', data.matches[0]);
                    if (((_a = data.matches[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'foto' || ((_b = data.matches[0]) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'photo') {
                        this.camara.sacarFoto();
                    }
                });
            }
        });
    }
    stopRecognition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.recording = false;
            yield _capacitor_community_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.SpeechRecognition.stop();
        });
    }
    sharePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.photo) {
                try {
                    yield _capacitor_share__WEBPACK_IMPORTED_MODULE_5__.Share.share({
                        title: 'Mira esta foto',
                        text: 'Te comparto una foto que tomé',
                        url: this.photo,
                        dialogTitle: 'Compartir Foto',
                    });
                }
                catch (error) {
                    console.error('Error al compartir la foto:', error);
                }
            }
            else {
                console.warn('No hay foto para compartir');
            }
        });
    }
};
VozPage.ctorParameters = () => [
    { type: _servicios_speech_service__WEBPACK_IMPORTED_MODULE_3__.SpeechService },
    { type: _servicios_camara_service__WEBPACK_IMPORTED_MODULE_2__.CamaraService }
];
VozPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

/***/ 8470:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8921:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 8470);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3656)).then(m => new m.ShareWeb())
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

module.exports = "<app-page-header titulo=\"Voz\"></app-page-header>\n\n<ion-content class=\"content\">\n\n  <div class=\"control-buttons\">\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"startRecognition()\" *ngIf=\"!recording\">\n      Iniciar Reconocimiento de Voz\n    </ion-button>\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"stopRecognition()\" *ngIf=\"recording\">\n      Parar Reconocimiento de Voz\n    </ion-button>\n  </div>\n\n  <!-- Mostrar la foto capturada -->\n  <div *ngIf=\"photo\" class=\"photo-container\">\n    <div class=\"photo-wrapper\">\n      <img [src]=\"photo\" alt=\"Foto capturada\" />\n    </div>\n    <ion-button expand=\"full\" color=\"tertiary\" (click)=\"sharePhoto()\">Compartir Foto</ion-button>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_voz_voz_module_ts.js.map