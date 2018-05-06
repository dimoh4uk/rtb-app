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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<div class=\"form\">\n  <form action=\"\">\n    <div class=\"form-content\">\n      <div class=\"form-title\">Share <b>Board name</b> with other</div>\n      <app-emails-editor [(emails)]=\"emails\" (changes)=\"emailsOnChange($event)\"></app-emails-editor>\n    </div>\n    <div class=\"form-footer\">\n      <div class=\"button-group\">\n        <button class=\"button\" type=\"button\" (click)=\"addRandomEmail()\">Add random email</button>\n        <button class=\"button\" type=\"button\" (click)=\"alertEmailCount()\">Get email count</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  font-size: 20px;\n  margin: 30px 0; }\n\n.form-content {\n  padding: 0 40px;\n  background: whitesmoke;\n  overflow: hidden; }\n\n.form-footer {\n  margin: 30px 0;\n  padding: 0 40px; }\n"

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
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/functions */ "./src/helpers/functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.emails = [];
        this.title = 'app';
    }
    AppComponent.prototype.emailsOnChange = function (event) {
        console.log('email on change !!', event);
    };
    AppComponent.prototype.addRandomEmail = function () {
        if (this.emails.length) {
            var index = _helpers_functions__WEBPACK_IMPORTED_MODULE_1__["functions"].randomInteger(0, this.emails.length - 1);
            this.emails.push(this.emails[index]);
        }
    };
    AppComponent.prototype.alertEmailCount = function () {
        alert("emails count = " + this.emails.length);
    };
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emails-editor/emails-editor.component */ "./src/app/emails-editor/emails-editor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _email_item_email_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-item/email-item.component */ "./src/app/email-item/email-item.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _emails_editor_emails_editor_component__WEBPACK_IMPORTED_MODULE_3__["EmailsEditorComponent"],
                _email_item_email_item_component__WEBPACK_IMPORTED_MODULE_5__["EmailItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/email-item/email-item.component.html":
/*!******************************************************!*\
  !*** ./src/app/email-item/email-item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-item\" [ngClass]=\"{'error': !valid}\">\n  <div class=\"email\">{{ email }}</div>\n  <button type=\"button\" class=\"action\" (click)=\"remove.emit(email)\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/email-item/email-item.component.scss":
/*!******************************************************!*\
  !*** ./src/app/email-item/email-item.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-item {\n  padding: 2px 30px 4px 10px;\n  position: relative;\n  background: #d4e4ff;\n  border-radius: 12px; }\n  .email-item.error {\n    background: none; }\n  .email-item.error:after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      border-bottom: 1px dotted #d14836; }\n  .email-item .action {\n    position: absolute;\n    background: none;\n    border: none;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 25px; }\n  .email-item .action:before {\n      content: ' \\00d7 ';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      margin-top: -1px; }\n"

/***/ }),

/***/ "./src/app/email-item/email-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/email-item/email-item.component.ts ***!
  \****************************************************/
/*! exports provided: EMAIL_PATTERN, EmailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function() { return EMAIL_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailItemComponent", function() { return EmailItemComponent; });
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

var EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
var EmailItemComponent = /** @class */ (function () {
    function EmailItemComponent() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmailItemComponent.prototype.ngOnInit = function () {
        this.valid = this.hasValid(this.email);
    };
    EmailItemComponent.prototype.hasValid = function (email) {
        return EMAIL_PATTERN.test(email);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EmailItemComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EmailItemComponent.prototype, "remove", void 0);
    EmailItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-item',
            template: __webpack_require__(/*! ./email-item.component.html */ "./src/app/email-item/email-item.component.html"),
            styles: [__webpack_require__(/*! ./email-item.component.scss */ "./src/app/email-item/email-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailItemComponent);
    return EmailItemComponent;
}());



/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.html":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-editor-body\" (click)=\"setFocus($event, input)\">\n  <div class=\"scroll-block\">\n    <div class=\"item\" *ngFor=\"let email of emails\">\n      <app-email-item [email]=\"email\" (remove)=\"remove(email)\"></app-email-item>\n    </div>\n    <div class=\"input\">\n      <input #input\n             [(ngModel)]=\"currentEmail\"\n             (keyup)=\"keyUp($event)\"\n             (blur)=\"pushEmail()\"\n             (paste)=\"pasteEmail()\"\n             type=\"text\" placeholder=\"add more people...\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.scss":
/*!************************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-editor-body {\n  height: 102px;\n  background: #fff;\n  margin: 30px 0;\n  overflow-y: auto; }\n\n.item {\n  float: left;\n  margin: 5px; }\n\n.input {\n  overflow: hidden;\n  min-width: 200px; }\n\n.input input {\n    border: none;\n    box-shadow: none;\n    width: 100%;\n    padding: 8px; }\n"

/***/ }),

/***/ "./src/app/emails-editor/emails-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/emails-editor/emails-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailsEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditorComponent", function() { return EmailsEditorComponent; });
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

var EmailsEditorComponent = /** @class */ (function () {
    function EmailsEditorComponent() {
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isPossibleRemove = true;
    }
    EmailsEditorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EmailsEditorComponent.prototype, "currentEmail", {
        get: function () {
            return this._currentEmail;
        },
        set: function (value) {
            var char = value && value.charCodeAt(value.length - 1);
            this.isPossibleRemove = false;
            if (value.length && char === 44) {
                this.addEmail();
                return;
            }
            this._currentEmail = value.replace(/\s/g, '');
        },
        enumerable: true,
        configurable: true
    });
    EmailsEditorComponent.prototype.remove = function (email) {
        var index = this.emails.indexOf(email);
        index >= 0 && this.emails.splice(index, 1);
    };
    EmailsEditorComponent.prototype.keyUp = function (event) {
        if (event.keyCode === 13) {
            this.addEmail();
            return;
        }
        if (event.keyCode === 8 && this.isPossibleRemove) {
            !this.currentEmail.length && this.emails.pop();
        }
        else {
            this.isPossibleRemove = true;
        }
    };
    EmailsEditorComponent.prototype.pasteEmail = function () {
        var _this = this;
        setTimeout(function () { return _this.addEmail(); }, 0);
    };
    EmailsEditorComponent.prototype.pushEmail = function () {
        this.addEmail();
    };
    EmailsEditorComponent.prototype.addEmail = function () {
        this.currentEmail && this.emails.push(this.replaceEmail()) && (this.isPossibleRemove = true);
    };
    EmailsEditorComponent.prototype.replaceEmail = function () {
        var tmp = this._currentEmail;
        this._currentEmail = '';
        return tmp;
    };
    EmailsEditorComponent.prototype.setFocus = function (event, input) {
        var target = event.target;
        if (target.classList.contains('scroll-block') || target.classList.contains('email-editor-body')) {
            input.focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EmailsEditorComponent.prototype, "emails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EmailsEditorComponent.prototype, "changes", void 0);
    EmailsEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emails-editor',
            template: __webpack_require__(/*! ./emails-editor.component.html */ "./src/app/emails-editor/emails-editor.component.html"),
            styles: [__webpack_require__(/*! ./emails-editor.component.scss */ "./src/app/emails-editor/emails-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailsEditorComponent);
    return EmailsEditorComponent;
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
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/functions.ts":
/*!**********************************!*\
  !*** ./src/helpers/functions.ts ***!
  \**********************************/
/*! exports provided: functions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return functions; });
var functions;
(function (functions) {
    function randomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    functions.randomInteger = randomInteger;
})(functions || (functions = {}));


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

module.exports = __webpack_require__(/*! /Users/dmitriy_fokin/projects/my/rtb-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map