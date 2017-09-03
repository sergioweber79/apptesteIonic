webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rede_rede__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__rede_rede__["a" /* RedePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!-- home.html-->\n  <ion-tab [root]="tab1Root" tabTitle="Favoritos" tabIcon="star"></ion-tab>\n  <!-- about.html-->\n  <ion-tab [root]="tab2Root" tabTitle="Tabelas" tabIcon="grid"></ion-tab>\n  <!-- contact.html -->\n  <ion-tab [root]="tab3Root" tabTitle="Graficos" tabIcon="pie"></ion-tab>\n  <!-- rede.html-->\n  <ion-tab [root]="tab4Root" tabTitle="Rede" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabela_tabela__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.openTabela = function () {
        //this.navCtrl.setRoot(TabelaPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabela_tabela__["a" /* TabelaPage */]);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        IzaSefaz - Gestão Gerencial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n    <ion-card>\n        <ion-row (click)="openTabela()">\n          <ion-item>\n           \n            <h2>Arrecadação por tributo 2017</h2>\n            <p>Arrecadação</p>\n          </ion-item>\n        \n          <img src="assets/img/home/tabelas.jpg">\n        \n          <ion-card-content>\n            <p>Valor da Arrecadação por tributo no ano de 2017. Incluindo o valor original, juros, multa e correção.</p>\n          </ion-card-content>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>4 Commentários</div>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                </button>\n           </ion-col>\n\n          </ion-row>\n        \n    </ion-card>\n    <ion-card>\n        <ion-row (click)="openTabela()">\n          <ion-item>\n           \n            <h2>Arrecadação por Bairro 2017</h2>\n            <p>Arrecadação</p>\n          </ion-item>\n        \n          <img src="assets/img/home/tabelas.jpg">\n        \n          <ion-card-content>\n            <p>Valor da Arrecadação por bairro no ano de 2017. Incluindo o valor original, juros, multa e correção.</p>\n          </ion-card-content>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>2 Commentários</div>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                </button>\n           </ion-col>\n            \n        </ion-row>\n        \n    </ion-card>\n    <ion-card>\n        <ion-row (click)="openTabela()">\n          <ion-item>\n           \n            <h2>Autos de infração 2017</h2>\n            <p>Auditoria Fiscal</p>\n          </ion-item>\n        \n          <img src="assets/img/home/tabelas.jpg">\n        \n          <ion-card-content>\n            <p>Quantidade e Valor dos auto de infração 2017.</p>\n          </ion-card-content>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>0 Commentários</div>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                </button>\n           </ion-col>\n\n          </ion-row>\n        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-title>\n        IzaSefaz - Gestão Gerencial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n    <ion-card>\n        \n          <ion-item>\n          \n            <h2>Valor pago dos REFIS Homologados 2017</h2>\n            <p>Dívida Ativa</p>\n          </ion-item>\n        \n          <img src="assets/img/home/graficos.jpg">\n        \n          <ion-card-content>\n            <p>Valor pago dos parcelamentos realizados no REFIS 2017.</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>1 Commentário</div>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                </button>\n           </ion-col>\n\n          </ion-row>\n        \n    </ion-card>\n    <ion-card>\n        \n          <ion-item>\n          \n            <h2>IPTU Lancado X Arrecadado 2017</h2>\n            <p>Arrecadação</p>\n          </ion-item>\n        \n          <img src="assets/img/home/graficos.jpg">\n        \n          <ion-card-content>\n            <p>Valor lançado e pago dos IPTU 2017.</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>1 Commentário</div>\n              </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button color="primary" clear small icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                </button>\n           </ion-col>\n\n          </ion-row>\n        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedePage = (function () {
    function RedePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return RedePage;
}());
RedePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rede',template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/rede/rede.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        IzaSefaz - Gestão Gerencial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n      <ion-card>\n        \n          <ion-card-content>\n            Exibição dos gráficos compartilhados por outros usuários para você.\n\n            \n          </ion-card-content>\n          <ion-card-content>\n            Não possui gráficos compartilhados.\n          </ion-card-content>\n        </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/rede/rede.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], RedePage);

//# sourceMappingURL=rede.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rede_rede__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabela_tabela__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_rede_rede__["a" /* RedePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabela_tabela__["a" /* TabelaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_rede_rede__["a" /* RedePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabela_tabela__["a" /* TabelaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabelaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabelaPage = (function () {
    function TabelaPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pageBack = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    TabelaPage.prototype.voltar = function () {
        //this.navCtrl.setRoot(this.pageBack);
        this.navCtrl.pop();
    };
    return TabelaPage;
}());
TabelaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabela',template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/tabela/tabela.html"*/'<ion-header>\n  <ion-navbar>\n     <!-- <button ion-button color="light" icon-start (click)="voltar()">\n          <ion-icon name=\'arrow-back\'></ion-icon>\n      </button>-->\n        \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n      <ion-card>\n          <ion-item>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <div>IPTU:</div>\n                    </ion-col>\n                    <ion-col>\n                      <div> R$ 1.000.000,00</div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>    \n          <ion-item>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <div>ISS:</div>\n                    </ion-col>\n                    <ion-col>\n                      <div> R$ 1.000.000,00</div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>    \n          <ion-item>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <div>TFF:</div>\n                    </ion-col>\n                    <ion-col>\n                      <div> R$ 1.000.000,00</div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>    \n          <ion-item>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <div>ITIV:</div>\n                    </ion-col>\n                    <ion-col>\n                      <div> R$ 1.000.000,00</div>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-item>    \n\n      </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/tabela/tabela.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TabelaPage);

//# sourceMappingURL=tabela.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabela_tabela__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, platform, actionsheetCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    HomePage.prototype.openMenuConfig = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: '',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Perfil',
                    icon: !this.platform.is('ios') ? 'person' : null,
                    handler: function () {
                        console.log('Perfil clicked');
                    }
                },
                {
                    text: 'Configurações',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'cube' : null,
                    handler: function () {
                        console.log('Config clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.openTabela = function () {
        //this.navCtrl.setRoot(TabelaPage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabela_tabela__["a" /* TabelaPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-toolbar>\n        <ion-buttons start>\n        </ion-buttons>\n        <ion-title>IzaSefaz - Gestão Gerencial</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only (click)="openMenuConfig()">\n            <ion-icon name="settings"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n    <ion-card >\n        \n          <ion-item (click)="openTabela()">\n            <ion-avatar item-start>\n                <ion-icon name=\'grid\'></ion-icon>\n            </ion-avatar>\n            <h2>Arrecadação por tributo 2017</h2>\n            <p>Arrecadação</p>\n          </ion-item>\n        \n          <img src="assets/img/home/tabelas.jpg" (click)="openTabela()">\n        \n          <ion-card-content (click)="openTabela()">\n            <p>Valor da Arrecadação por tributo no ano de 2017. Incluindo o valor original, juros, multa e correção.</p>\n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>4 Commentários</div>\n              </button>\n            </ion-col>\n         </ion-row>\n        \n    </ion-card>\n  \n    <ion-card>\n        <ion-row (click)="openTabela()">\n          <ion-item>\n              <ion-avatar item-start>\n                  <ion-icon name=\'pie\'></ion-icon>\n              </ion-avatar>\n            <h2>Valor pagos dos REFIS Homologados 2017</h2>\n            <p>Dívida Ativa</p>\n          </ion-item>\n        \n          <img src="assets/img/home/graficos.jpg">\n        \n          <ion-card-content>\n            <p>Valor pago dos parcelamentos realizados no REFIS 2017.</p>\n          </ion-card-content>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>1 Commentário</div>\n              </button>\n            </ion-col>\n  \n          </ion-row>\n        \n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/sergioweber/Desenvolvimento/Ionic/appteste/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map