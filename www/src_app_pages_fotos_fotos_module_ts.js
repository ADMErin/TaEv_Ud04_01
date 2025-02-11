"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fotos_fotos_module_ts"],{

/***/ 4619:
/*!*****************************************************!*\
  !*** ./src/app/pages/fotos/fotos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPageRoutingModule": () => (/* binding */ FotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fotos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotos.page */ 9003);




const routes = [
    {
        path: '',
        component: _fotos_page__WEBPACK_IMPORTED_MODULE_0__.FotosPage
    }
];
let FotosPageRoutingModule = class FotosPageRoutingModule {
};
FotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FotosPageRoutingModule);



/***/ }),

/***/ 2916:
/*!*********************************************!*\
  !*** ./src/app/pages/fotos/fotos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPageModule": () => (/* binding */ FotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/mis-componentes.module */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _fotos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotos-routing.module */ 4619);
/* harmony import */ var _fotos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fotos.page */ 9003);








let FotosPageModule = class FotosPageModule {
};
FotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _fotos_routing_module__WEBPACK_IMPORTED_MODULE_1__.FotosPageRoutingModule,
            _components_mis_componentes_module__WEBPACK_IMPORTED_MODULE_0__.MisComponentesModule
        ],
        declarations: [_fotos_page__WEBPACK_IMPORTED_MODULE_2__.FotosPage]
    })
], FotosPageModule);



/***/ }),

/***/ 9003:
/*!*******************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosPage": () => (/* binding */ FotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fotos.page.html?ngResource */ 5272);
/* harmony import */ var _fotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fotos.page.scss?ngResource */ 4225);
/* harmony import */ var _servicios_fotos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../servicios/fotos.service */ 974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let FotosPage = class FotosPage {
    constructor(usarCamara) {
        this.usarCamara = usarCamara;
    }
    ngOnInit() {
    }
    takePicture() {
        this.usarCamara.sacarFoto();
    }
};
FotosPage.ctorParameters = () => [
    { type: _servicios_fotos_service__WEBPACK_IMPORTED_MODULE_2__.FotosService }
];
FotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fotos',
        template: _fotos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fotos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FotosPage);



/***/ }),

/***/ 974:
/*!********************************************!*\
  !*** ./src/app/servicios/fotos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FotosService": () => (/* binding */ FotosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gestion_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-storage.service */ 5831);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






let FotosService = class FotosService {
    // Carga las imágenes que tenemos almacenadas
    constructor(usarStorage, plataforma) {
        this.usarStorage = usarStorage;
        this.plataforma = plataforma;
        // Array para almacenar las rutas de cada foto
        this.accesoFotos = [];
        this.loadSaved();
    }
    // Devuelve el array para poderlo utilizar en un componente
    getFotos() {
        return this.accesoFotos;
    }
    // Recupera las imágenes que hay almacenadas en el disco duro
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Recupera los datos de Storage en formato string
            const photoList = yield this.usarStorage.getObject("fotos");
            // Lo parsea a un array de objetos IFoto y lo almacena en el atributo accesoFotos
            // Si no obtiene datos inicializará el array para poder empezar a almacenar fotos.
            this.accesoFotos = JSON.parse(photoList.value) || [];
            console.log(photoList);
            // En los navegadores debemos cargar las imágenes en formato base64 para que se visualicen correctamente
            if (!this.plataforma.is("hybrid")) {
                // Lee los datos de cada foto guardada en el sistema de archivos
                for (let photo of this.accesoFotos) {
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                    });
                    // Plataforma web solamente: Guardar la foto en base64 para que se pueda visualizar
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    // Define las características de la foto y la saca
    sacarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Definir características de la foto
            let caracteristicasFoto = {
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera,
                quality: 100
            };
            const foto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto(caracteristicasFoto);
            console.log(foto);
            // Se obtiene la URL y se añade al principio del array
            // let UrlFoto: string = foto.webPath;
            // this.urlFotos.unshift(UrlFoto);
            // En los dispositivos móviles las fotos se guardan por defecto y tenemos el path físico y el webpath para visualizar
            // En el navegador hay que guardar la imagen en un fichero y se almacena su path y su URL en el array
            let imagenGuardada;
            if (!this.plataforma.is("hybrid")) {
                imagenGuardada = yield this.savePicture(foto);
            }
            else {
                // Guarda las rutas de acceso a la foto
                imagenGuardada = {
                    filepath: foto.path,
                    webviewPath: foto.webPath
                };
            }
            this.accesoFotos.unshift(imagenGuardada);
            console.log(imagenGuardada);
            // Almacenamos los datos de las fotos en Storage
            this.usarStorage.setObject("fotos", this.accesoFotos);
        });
    }
    // Se almacena la imagen en el sistema de ficheros
    // Solo para el navegador
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // Convierte la foto al formato base64, exigido por la API del sistema de ficheros
            const base64Data = yield this.readAsBase64(cameraPhoto);
            // Guarda el fichero
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data // Los datos se borrarn al desinstalar la aplicación
            });
            console.log(savedFile);
            // Crea y devuelve un objeto IFoto
            return {
                filepath: fileName,
                webviewPath: cameraPhoto.webPath
            };
        });
    }
    // Devuelve la imagen en formato base64 para trabajar en los navegadores
    // Recupera la imagen como blob y la convierte a base64
    readAsBase64(foto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(foto.webPath);
            const blob = yield response.blob();
            const base64 = yield this.convertBlobToBase64(blob);
            return base64;
        });
    }
    // Conviete una imagen en formato blob a formato base 64
    convertBlobToBase64(blob) {
        let promesa = new Promise(function (resolve, reject) {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        return promesa;
    }
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.
    readFilePath() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
            });
            console.log('data:', contents);
        });
    }
    ;
};
FotosService.ctorParameters = () => [
    { type: _gestion_storage_service__WEBPACK_IMPORTED_MODULE_0__.GestionStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
FotosService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FotosService);



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



/***/ }),

/***/ 4225:
/*!********************************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5272:
/*!********************************************************!*\
  !*** ./src/app/pages/fotos/fotos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-page-header titulo=\"Fotos\"></app-page-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-button (click)=\"takePicture()\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        Sacar foto\r\n    </ion-button>\r\n\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col size=\"6\" *ngFor=\"let foto of usarCamara.getFotos()\">\r\n                <ion-img [src]=\"foto.webviewPath\"></ion-img>\r\n            </ion-col>\r\n\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fotos_fotos_module_ts.js.map