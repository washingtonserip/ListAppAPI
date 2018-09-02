(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<component-footer></component-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front-end';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configs/routes */ "./src/app/configs/routes.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts");
/* harmony import */ var _pages_panel_panel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/panel/panel.module */ "./src/app/pages/panel/panel.module.ts");
/* harmony import */ var _pages_list_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list/list.module */ "./src/app/pages/list/list.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_interceptor_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configs/interceptor.module */ "./src/app/configs/interceptor.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _pages_panel_panel_module__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
                _pages_list_list_module__WEBPACK_IMPORTED_MODULE_8__["ListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_configs_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"], { enableTracing: true }),
                _configs_interceptor_module__WEBPACK_IMPORTED_MODULE_10__["Interceptor"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('token');
                        }
                    }
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _page_wrapper_page_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-wrapper/page-wrapper.component */ "./src/app/components/page-wrapper/page-wrapper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _page_wrapper_page_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["PageWrapperComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _page_wrapper_page_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["PageWrapperComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"content has-text-centered\">\n    <p>\n      <strong>ListApp</strong> by <a target=\"_blank\" href=\"https://github.com/washingtonbr/ListApp\">Washington Pires</a>. Source code licensed <a target=\"_blank\" href=\"https://github.com/washingtonbr/ListApp/blob/master/LICENSE\">GNU GPL v3.0</a>.\n    </p>\n\n    <a target=\"_blank\" href=\"https://bulma.io\">\n      <img src=\"../../../assets/images/made-with-bulma.png\" alt=\"Made with Bulma\" width=\"110\">\n    </a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 1.5rem;\n  background: #ffffff;\n  border-top: 1px solid #fafafa;\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/page-wrapper/page-wrapper.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/page-wrapper/page-wrapper.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight\">\n  <div class=\"hero-head\" [ngClass]=\"{'is-hidden-mobile': !headerOnMobile}\">\n    <header class=\"navbar\">\n      <div class=\"container\">\n        <div class=\"navbar-brand\">\n          <a class=\"navbar-item is-active\">\n            <img src=\"../../../assets/images/logo-white.png\" alt=\"ListApp.me\">\n          </a>\n\n          <span class=\"navbar-burger burger\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </span>\n        </div>\n\n        <div class=\"navbar-menu\">\n          <div class=\"navbar-end\">\n            <span *ngFor=\"let menuItem of menu\" class=\"navbar-item\">\n              <a (click)=\"menuItem.onClick()\"\n                class=\"button is-info\"\n                [ngClass]=\"{'is-active': menuItem.isActive, 'is-inverted': menuItem.isInverted}\">\n                <span class=\"icon\">\n                  <fa-icon [icon]=\"menuItem.icon\"></fa-icon>\n                </span>\n                <span>{{menuItem.text}}</span>\n              </a>\n            </span>\n          </div>\n        </div>\n      </div>\n    </header>\n  </div>\n\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/page-wrapper/page-wrapper.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/page-wrapper/page-wrapper.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  background: url('bg.jpg') repeat center; }\n"

/***/ }),

/***/ "./src/app/components/page-wrapper/page-wrapper.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/page-wrapper/page-wrapper.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWrapperComponent", function() { return PageWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageWrapperComponent = /** @class */ (function () {
    function PageWrapperComponent() {
        this.headerOnMobile = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PageWrapperComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PageWrapperComponent.prototype, "headerOnMobile", void 0);
    PageWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-page-wrapper',
            template: __webpack_require__(/*! ./page-wrapper.component.html */ "./src/app/components/page-wrapper/page-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./page-wrapper.component.scss */ "./src/app/components/page-wrapper/page-wrapper.component.scss")]
        })
    ], PageWrapperComponent);
    return PageWrapperComponent;
}());



/***/ }),

/***/ "./src/app/configs/interceptor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/configs/interceptor.module.ts ***!
  \***********************************************/
/*! exports provided: HttpsRequestInterceptor, Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('token');
        var newReq = req.clone({
            headers: req.headers.set('x-access-token', token),
        });
        return next.handle(newReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

var Interceptor = /** @class */ (function () {
    function Interceptor() {
    }
    Interceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: HttpsRequestInterceptor,
                    multi: true,
                },
            ],
        })
    ], Interceptor);
    return Interceptor;
}());



/***/ }),

/***/ "./src/app/configs/routes.ts":
/*!***********************************!*\
  !*** ./src/app/configs/routes.ts ***!
  \***********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/panel/panel.component */ "./src/app/pages/panel/panel.component.ts");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/list/list.component */ "./src/app/pages/list/list.component.ts");





var appRoutes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'auth',
        component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
    },
    {
        path: 'panel',
        component: _pages_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: 'list/:id',
        component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    },
    {
        path: 'new-list',
        component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]]
    }
];


/***/ }),

/***/ "./src/app/pages/auth/auth.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<component-page-wrapper\n  [menu]=\"menu\"\n  [headerOnMobile]=\"false\">\n  <div class=\"has-text-centered\">\n    <img class=\"logo is-hidden-tablet\" src=\"../../../assets/images/logo-white.png\" alt=\"ListApp.me\">\n\n    <h1 class=\"title is-size-4 is-size-3-desktop\">\n      Get organized now!\n    </h1>\n  </div>\n\n  <div class=\"columns\">\n    <div class=\"column is-half is-offset-one-quarter\">\n      <div *ngIf=\"error\" class=\"notification is-danger\">\n        <button (click)=\"error = ''\" class=\"delete\"></button>\n        {{error}}\n      </div>\n\n      <div *ngIf=\"success\" class=\"notification is-primary\">\n        <button (click)=\"success = ''\" class=\"delete\"></button>\n        {{success}}\n      </div>\n\n      <div class=\"box\">\n        <div class=\"field\">\n          <label class=\"label\">Email</label>\n          <div class=\"control\">\n            <input\n              type=\"email\"\n              class=\"input\"\n              placeholder=\"Your email\"\n              [(ngModel)]=\"email\"\n            />\n          </div>\n          <p *ngIf=\"emailError\" class=\"help is-danger\">{{emailError}}</p>\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Password</label>\n          <div class=\"control\">\n              <input\n                type=\"password\"\n                class=\"input\"\n                placeholder=\"Your password\"\n                [(ngModel)]=\"password\"\n              />\n          </div>\n          <p *ngIf=\"passwordError\" class=\"help is-danger\">{{passwordError}}</p>\n        </div>\n\n        <div class=\"buttons\">\n          <button (click)=\"validateForm(signUp.bind(this))\" class=\"button is-info\">\n            <span class=\"icon is-small\">\n              <fa-icon [icon]=\"faUserPlus\"></fa-icon>\n            </span>\n            <span>Sign Up</span>\n          </button>\n\n          <div class=\"label-or\">or</div>\n\n          <button (click)=\"validateForm(signIn.bind(this))\" class=\"button\">\n            <span class=\"icon is-small\">\n              <fa-icon [icon]=\"faSignInAlt\"></fa-icon>\n            </span>\n            <span>Sign In</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</component-page-wrapper>\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 15px; }\n\n.label-or {\n  margin-right: 0.5rem;\n  height: 36px; }\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.menu = [
            {
                text: 'Back',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"],
                onClick: function () { return _this.router.navigate(['/']); },
                isInverted: true
            }
        ];
        this.email = '';
        this.password = '';
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSignInAlt"];
        this.faUserPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserPlus"];
    }
    AuthComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    AuthComponent.prototype.validateForm = function (callback) {
        var user = {
            email: this.email,
            password: this.password,
        };
        var errorCount = 0;
        this.emailError = '';
        this.passwordError = '';
        if (!this.email) {
            this.emailError = 'Can\'t be blank';
            errorCount++;
        }
        else if (!this.validateEmail(this.email)) {
            this.emailError = 'Email is invalid';
            this.email = '';
            errorCount++;
        }
        if (!this.password) {
            this.passwordError = 'Can\'t be blank';
            errorCount++;
        }
        else if (this.password.length < 6) {
            this.passwordError = 'Password is too short (minimum is 6 characters)';
            this.password = '';
            errorCount++;
        }
        this.success = '';
        this.error = '';
        if (errorCount === 0) {
            this.email = '';
            this.password = '';
            return callback(user);
        }
    };
    AuthComponent.prototype.signUp = function (user) {
        var _this = this;
        this.userService.create(user)
            .subscribe(function () { _this.success = 'Account created successfully. Please login.'; }, function (response) {
            var error = response.error;
            if (error && error.message) {
                _this.error = error.message;
            }
            else {
                _this.error = 'An error has occurred. Try again.';
            }
        });
    };
    AuthComponent.prototype.signIn = function (user) {
        var _this = this;
        this.userService.login(user)
            .subscribe(function (response) {
            localStorage.setItem('token', response.token);
            _this.router.navigate(['/panel']);
        }, function () { _this.error = 'An error has occurred. Try again.'; });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/pages/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]],
            exports: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<component-page-wrapper\n  [menu]=\"menu\"\n  [headerOnMobile]=\"false\">\n  <div class=\"has-text-centered\">\n    <img class=\"logo is-hidden-tablet\" src=\"../../../assets/images/logo-white.png\" alt=\"Logo\">\n    <h1 class=\"title is-size-1-desktop\">\n      <span>Your tasks.</span> Your lists.\n    </h1>\n    <h2 class=\"subtitle is-size-4-desktop\">\n      <fa-icon [icon]=\"faCheck\" class=\"is-size-7\"></fa-icon>\n      Try a simple way to organize your day.\n    </h2>\n\n    <div class=\"is-hidden-tablet\">\n      <a (click)=\"goAuth()\" class=\"button is-info is-inverted\">\n        <span class=\"icon\">\n          <fa-icon [icon]=\"faSignInAlt\"></fa-icon>\n        </span>\n        <span>Sign in or Sign up</span>\n      </a>\n    </div>\n  </div>\n</component-page-wrapper>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2 {\n  color: #ffffff; }\n\n.title {\n  padding: 0 15px 15px; }\n\n@media screen and (max-width: 768px) {\n    .title span {\n      display: block;\n      line-height: 40px; } }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        this.menu = [
            {
                text: 'Sign in or Sign up',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"],
                onClick: function () { return _this.router.navigate(['/auth']); },
                isInverted: true
            }
        ];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<component-page-wrapper\n  [menu]=\"menu\">\n  <h1 class=\"title has-text-centered\">Your list</h1>\n\n  <div class=\"columns\">\n    <div class=\"column is-half is-offset-one-quarter\">\n      <div *ngFor=\"let erroItem of error; let i = index\" class=\"notification is-danger\">\n        <button (click)=\"error.splice(i, 1)\" class=\"delete\"></button>\n        {{erroItem}}\n      </div>\n\n      <div *ngIf=\"success\" class=\"notification is-primary\">\n        <button (click)=\"success = ''\" class=\"delete\"></button>\n        {{success}}\n      </div>\n\n      <div class=\"card\">\n        <header class=\"card-header\">\n          <p class=\"card-header-title\">\n            <input\n              [(ngModel)]=\"theList.title\"\n              placeholder=\"Enter a title\"\n              class=\"input-edit\"\n              type=\"text\"\n            />\n          </p>\n        </header>\n\n        <div class=\"card-content\">\n          <div class=\"content\">\n            <p>\n              <textarea\n                [(ngModel)]=\"theList.text\"\n                placeholder=\"Enter a description\"\n                class=\"input-edit\">\n              </textarea>\n            </p>\n\n            <div *ngFor=\"let item of theList.list; let i = index\" class=\"field\">\n              <input\n                class=\"is-checkradio is-info\"\n                type=\"checkbox\"\n                [checked]=\"item.isCheck\"\n                [(ngModel)]=\"item.isCheck\"\n                [id]=\"'checklist-item-' + i\"\n              />\n\n              <label [for]=\"'checklist-item-' + i\">\n                <input\n                  [(ngModel)]=\"item.text\"\n                  placeholder=\"New item\"\n                  class=\"input-edit\"\n                  type=\"text\"\n                />\n              </label>\n            </div>\n          </div>\n        </div>\n\n        <footer class=\"card-footer\">\n          <input\n            (keyup.enter)=\"addItem()\"\n            [(ngModel)]=\"newItem\"\n            class=\"input\"\n            type=\"text\"\n            placeholder=\"New item\"\n          />\n\n          <button\n            (click)=\"addItem()\"\n            class=\"button\">\n            Add\n          </button>\n        </footer>\n      </div>\n\n      <div class=\"has-text-centered m-t-20\">\n        <button\n          (click)=\"validateList() && saveOrUpdate()\"\n          class=\"button is-link is-inverted\">\n          Save list\n        </button>\n\n        <button\n          *ngIf=\"listId\"\n          (click)=\"toggleModalDeleteRequest()\"\n          class=\"button is-danger is-inverted is-outlined m-l-10\">\n          Delete list\n        </button>\n      </div>\n    </div>\n  </div>\n</component-page-wrapper>\n\n<div class=\"modal\" [ngClass]=\"{'is-active': deleteRequest}\">\n  <div class=\"modal-background\"></div>\n  <div class=\"modal-content\">\n    <div class=\"box has-text-centered\">\n      <h5 class=\"title is-5\">Are you sure you want to delete?</h5>\n      <button\n        (click)=\"deleteList()\"\n        class=\"button is-danger\">\n        Delete\n      </button>\n\n      <button\n        (click)=\"toggleModalDeleteRequest()\"\n        class=\"button is-link is-outlined m-l-10\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/list/list.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer input,\n.card-footer .button {\n  border-radius: 0; }\n\n.tag {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  cursor: pointer; }\n\n.input-edit {\n  border: 0;\n  background-color: transparent;\n  width: 92%; }\n\ntextarea.input-edit {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_list_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/list/list.service */ "./src/app/services/list/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(router, activatedRoute, listService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.listService = listService;
        this.menu = [
            {
                text: 'My lists',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListOl"],
                onClick: function () { return _this.router.navigate(['/panel']); },
            },
            {
                text: 'New list',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"],
                onClick: function () { return _this.goToNewList(); },
                isInverted: true
            }
        ];
        this.error = [];
        this.faPen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getList();
    };
    ListComponent.prototype.goToNewList = function () {
        if (this.listId) {
            this.router.navigate(['/new-list']);
        }
        else {
            this.newItem = undefined;
            this.listId = undefined;
            this.setListDefault();
        }
    };
    ListComponent.prototype.getParams = function () {
        this.listId = this.activatedRoute.snapshot.params.id;
    };
    ListComponent.prototype.getList = function () {
        var _this = this;
        if (this.listId) {
            this.listService.read(this.listId)
                .subscribe(function (response) {
                _this.theList = response;
            }, function (error) { _this.error.push('An error has occurred. Try again.'); });
        }
        else {
            this.setListDefault();
        }
    };
    ListComponent.prototype.setListDefault = function () {
        this.theList = {
            _id: '',
            _user: '',
            title: '',
            text: '',
            list: [
                {
                    text: '',
                    isCheck: false
                }
            ]
        };
    };
    ListComponent.prototype.addItem = function () {
        if (this.newItem) {
            this.theList.list.push({
                isCheck: false,
                text: this.newItem
            });
            this.newItem = '';
        }
    };
    ListComponent.prototype.validateList = function () {
        this.error = [];
        if (!this.theList.title) {
            this.error.push('The title is required.');
        }
        if (this.theList.list.length === 1 && this.theList.list[0].text === '') {
            this.error.push('Please enter at least one item.');
        }
        return !this.error.length;
    };
    ListComponent.prototype.saveOrUpdate = function () {
        if (!this.listId) {
            this.createList();
        }
        else {
            this.saveList();
        }
    };
    ListComponent.prototype.createList = function () {
        var _this = this;
        this.listService.create(this.theList)
            .subscribe(function (response) {
            _this.success = 'List created successfully.';
            _this.theList = response;
            _this.listId = response._id;
        }, function (error) { _this.error.push('An error has occurred. Try again.'); });
    };
    ListComponent.prototype.saveList = function () {
        var _this = this;
        this.listService.update(this.listId, this.theList)
            .subscribe(function (response) {
            _this.success = 'List edited successfully.';
            _this.theList = response;
        }, function (error) { _this.error.push('An error has occurred. Try again.'); });
    };
    ListComponent.prototype.toggleModalDeleteRequest = function () {
        this.deleteRequest = !this.deleteRequest;
    };
    ListComponent.prototype.deleteList = function () {
        var _this = this;
        this.listService.delete(this.listId)
            .subscribe(function (response) { _this.router.navigate(['/panel']); }, function (error) { _this.error.push('An error has occurred. Try again.'); });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_list_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.component */ "./src/app/pages/list/list.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/pages/panel/panel.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/panel/panel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<component-page-wrapper\n  [menu]=\"menu\">\n  <h1 class=\"title has-text-centered\">Your lists</h1>\n\n  <div *ngIf=\"error\" class=\"notification is-danger\">\n    <button (click)=\"error = ''\" class=\"delete\"></button>\n    {{error}}\n  </div>\n\n  <div class=\"columns is-multiline\">\n    <div *ngFor=\"let item of lists\" class=\"column is-4\">\n      <div class=\"card\">\n        <header class=\"card-header\">\n          <p class=\"card-header-title\">\n            {{item.title}}\n          </p>\n          <a class=\"card-header-icon\" aria-label=\"more options\">\n            <span class=\"icon\">\n              <fa-icon [icon]=\"faClock\"></fa-icon>\n            </span>\n          </a>\n        </header>\n\n        <div class=\"card-content\">\n          <div class=\"content\">\n            <div *ngIf=\"item.list.length\">\n              <div *ngFor=\"let subItem of item.list\" class=\"field\">\n                <input\n                  disabled=\"disabled\"\n                  [checked]=\"subItem.isCheck\"\n                  class=\"is-checkradio is-info\"type=\"checkbox\"\n                />\n                <label>{{subItem.text}}</label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <footer class=\"card-footer\">\n          <a (click)=\"openList(item._id)\" class=\"card-footer-item\">View more</a>\n          <a (click)=\"openList(item._id)\" class=\"card-footer-item\">Edit</a>\n        </footer>\n      </div>\n    </div>\n  </div>\n</component-page-wrapper>\n"

/***/ }),

/***/ "./src/app/pages/panel/panel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/panel/panel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  background: url('bg.jpg') repeat center; }\n"

/***/ }),

/***/ "./src/app/pages/panel/panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/panel/panel.component.ts ***!
  \************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_list_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/list/list.service */ "./src/app/services/list/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PanelComponent = /** @class */ (function () {
    function PanelComponent(router, listService) {
        var _this = this;
        this.router = router;
        this.listService = listService;
        this.menu = [
            {
                text: 'My lists',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListOl"],
                onClick: function () { return _this.getLists(); },
            },
            {
                text: 'New list',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPen"],
                onClick: function () { return _this.router.navigate(['/new-list']); },
                isInverted: true
            }
        ];
        this.faListOl = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faListOl"];
        this.faClock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.getLists();
    };
    PanelComponent.prototype.getLists = function () {
        var _this = this;
        this.listService.getAll()
            .subscribe(function (response) { _this.lists = response; }, function (error) { _this.error = 'An error has occurred. Try again.'; });
    };
    PanelComponent.prototype.openList = function (listId) {
        this.router.navigate(['/list', listId]);
    };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'component-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/pages/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/pages/panel/panel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_list_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/pages/panel/panel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/panel/panel.module.ts ***!
  \*********************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel.component */ "./src/app/pages/panel/panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PanelModule = /** @class */ (function () {
    function PanelModule() {
    }
    PanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
            ],
            declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"]]
        })
    ], PanelModule);
    return PanelModule;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/list/list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/list/list.service.ts ***!
  \***********************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl;
    }
    ListService.prototype.getAll = function () {
        var urlRequest = this.serverUrl + "/list";
        return this.httpClient.get(urlRequest);
    };
    ListService.prototype.create = function (theList) {
        var urlRequest = this.serverUrl + "/list";
        return this.httpClient.post(urlRequest, theList);
    };
    ListService.prototype.read = function (listId) {
        var urlRequest = this.serverUrl + "/list/" + listId;
        return this.httpClient.get(urlRequest);
    };
    ListService.prototype.update = function (listId, theList) {
        var urlRequest = this.serverUrl + "/list/" + listId;
        return this.httpClient.put(urlRequest, theList);
    };
    ListService.prototype.delete = function (listId) {
        var urlRequest = this.serverUrl + "/list/" + listId;
        return this.httpClient.delete(urlRequest);
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverUrl;
    }
    UserService.prototype.create = function (user) {
        var urlRequest = this.serverUrl + "/user";
        return this.httpClient.post(urlRequest, user);
    };
    UserService.prototype.login = function (user) {
        var urlRequest = this.serverUrl + "/user/login";
        return this.httpClient.post(urlRequest, user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    serverUrl: 'http://localhost:3000'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eu/Projects/ListApp/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map