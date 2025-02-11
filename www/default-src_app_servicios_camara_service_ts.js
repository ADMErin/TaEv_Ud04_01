"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_servicios_camara_service_ts"],{

/***/ 2532:
/*!*********************************************!*\
  !*** ./src/app/servicios/camara.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraService": () => (/* binding */ CamaraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _gestion_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestion-storage.service */ 5831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);







let CamaraService = class CamaraService {
    constructor(platform, usarStorage) {
        this.platform = platform;
        this.usarStorage = usarStorage;
        this.listaUrl = [];
        this.listaPath = [];
        this.loadSaved();
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Recupera los datos de Storage en formato string
            const photoList = yield this.usarStorage.getObject("rutas");
            // Lo parsea a un array de objetos IFoto y lo almacena en el atributo accesoFotos
            // Si no obtiene datos inicializará el array para poder empezar a almacenar fotos.
            this.listaPath = JSON.parse(photoList.value) || [];
            // Se obtiene una URL válida para visualizar cada foto guardada en el sistema de archivos
            // En los navegadores debemos cargar las imágenes en formato base64 para que se visualicen correctamente
            // En los dispositivos podemos obtener la URL a partir del path
            let webviewPath;
            for (let photo of this.listaPath) {
                if (!this.platform.is("hybrid")) {
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                        path: photo,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data
                    });
                    // La URL de la foto en base64 para que se pueda visualizar
                    webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
                else {
                    webviewPath = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.convertFileSrc(photo);
                }
                this.listaUrl.push(webviewPath);
            }
        });
    }
    getListaUrl() {
        return this.listaUrl;
    }
    sacarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Base64,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera
            });
            // Guardamosla URL para visualizar la imagen añadiendo la cabecera base64
            this.listaUrl.push("data:image/jpeg;base64," + image.base64String);
            this.savePicture(image);
        });
    }
    savePicture(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let base64Data = image.base64String;
            // Guarda el fichero
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data
            });
            // Si trabajamos con el navegador, guardamos solo el nombre del fichero. Lo necesitaremos para 
            // Con dispositivos móviles guardaremos la ruta que nos devuelve
            let ruta;
            if (this.platform.is('hybrid')) {
                ruta = savedFile.uri;
            }
            else {
                ruta = fileName;
            }
            this.listaPath.push(ruta);
            // Almacenamos los datos de las fotos en Storage para poder acceder a ellas
            this.usarStorage.setObject("rutas", this.listaPath);
        });
    }
};
CamaraService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _gestion_storage_service__WEBPACK_IMPORTED_MODULE_2__.GestionStorageService }
];
CamaraService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], CamaraService);



/***/ }),

/***/ 5831:
/*!******************************************************!*\
  !*** ./src/app/servicios/gestion-storage.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionStorageService": () => (/* binding */ GestionStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);



let GestionStorageService = class GestionStorageService {
    constructor() { }
    // Almacena una cadena de caracteres. Para cada string se necesita un identificador (key) y su valor (value)
    // Mediante await se indica que es un método asíncrono que devuelve una promesa
    setString(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key, value });
        });
    }
    // A partir de su clave identificadora (key) obtiene el valor de una cadena de caracteres almacenada en local
    getString(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key });
        });
    }
    // Almacena un objeto con formato JSON en local.
    // Por cada objeto, se necesita una clave (key) y el valor del objeto (value)
    setObject(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({ key, value: JSON.stringify(value) });
        });
    }
    // A partir de su clave obtiene un objeto almacenado en local
    // Antes de devolverlo, debe ser convertido de formato JSON a formato normal
    getObject(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const ret = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key });
            return ret;
        });
    }
    // Dada su clave, elimina un elemento almacenado en local independientemente de su tipo
    removeItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.remove({ key });
        });
    }
    // Vacía el almacenamiento local
    clear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.clear();
        });
    }
};
GestionStorageService.ctorParameters = () => [];
GestionStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GestionStorageService);



/***/ }),

/***/ 4830:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType),
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;

(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */

  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */

  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));

var CameraDirection;

(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));

var CameraResultType;

(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 4241:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Camera": () => (/* binding */ Camera),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4830);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1327)).then(m => new m.CameraWeb())
});



/***/ }),

/***/ 3568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;

(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */

  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */

  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */

  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));

var Encoding;

(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */


const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */

const FilesystemEncoding = Encoding;

/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 4970:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5191:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preferences": () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4970);

const Preferences = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7333)).then(m => new m.PreferencesWeb())
});



/***/ })

}]);
//# sourceMappingURL=default-src_app_servicios_camara_service_ts.js.map