(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container col-12\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-0 col-sm-0 col-md-0 col-lg-3\"></div>\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6\">\r\n                <div id=\"wrapper\">\r\n                    <app-chat-history></app-chat-history>\r\n                    <app-chatbar (msgEvent)=\"recieveMsg($event)\"></app-chatbar>\r\n                </div>\r\n            </div>\r\n        <div class=\"col-xs-0 col-sm-0 col-md-0 col-lg-3\"></div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-history/chat-history.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-history/chat-history.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"menu\">\r\n    <p class=\"welcome\" >Welcome, <span [ngStyle]=\"colorLi\"><b>{{username}}</b></span></p>\r\n    <div style=\"clear:both\"></div>\r\n</div>\r\n\r\n<div id=\"chatbox\" #runter [scrollTop]=\"runter.scrollHeight\">\r\n    <ul class=\"list-group\">\r\n        <li *ngFor=\"let msg of messages; let i = index\" class=\"list-group-item\"><p [style.color]=\"msg.color\"><strong>{{msg.username}}:</strong></p> {{msg.content}} <span class=\"datetag\">{{msg.timestamp|date:\"d. MMMM yyyy HH:mm 'Uhr'\"}}</span></li>\r\n    </ul>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbar/chatbar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbar/chatbar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-12\">\r\n<form name=\"message\" action=\"\">\r\n    <div class=\"row\">\r\n        <div class=\"col-4 col-sm-4 col-lg-3\">\r\n    <label [hidden]=\"inputDisabled\" class=\"msgbefore\">Username:</label>\r\n        </div>\r\n        <div class=\"col-8 col-sm-8 col-lg-9\">\r\n    <input id=\"username\" class=\"form-control\" [hidden]=\"inputDisabled\"  name=\"username\" [(ngModel)]='username' maxlength=\"12\" minlength=\"3\" [disabled]=\"inputDisabled\"/>\r\n        </div>    \r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-8\">\r\n    <textarea name=\"chatMsg\" [(ngModel)]='chatMsg' (keyup.enter)=\"sendMsg()\" maxlength=\"1000\" minlength=\"1\" type=\"text\"\r\n        id=\"usermsg\" class=\"form-control\"  placeholder=\"Hier könnte deine Nachricht stehen.\" size=\"64\" (keyup.enter)=\"sendMessage()\"></textarea>\r\n        </div>\r\n        <div class=\"col-4\">\r\n    <input name=\"submitmsg\" class=\"btn btn-secondary\" [disabled]=\"!chatMsg || !username\" type=\"submit\" id=\"submitmsg\" value=\"Send\" (click)=\"sendMsg()\" />\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n    <div class=\"col-12\">\r\n        <br/>\r\n        <h6 class=\"easychat\">Created by ChatBots</h6>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container col-12\">\r\n<div class=\"row header\">\r\n    <div class=\"col-12 col-md-4\">\r\n            <img  class=\"logo\" src=\"assets/logo/easychat2.png\" />  \r\n    </div>\r\n    <div class=\"col-0 col-md-8 easychat typewriter\">\r\n            <h1>welcome to EASYCHAT</h1>\r\n    </div>\r\n</div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n#wrapper {\r\n    position: relative;\r\n    top: 4%;\r\n    bottom: 60%;\r\n    width: 100%;\r\n    padding-bottom:25px;\r\n    background:  #379A19;\r\n    border:1px solid white;\r\n    height: 100%; \r\n    border-radius: 10px;\r\n}\r\n\r\n.container {\r\n    height: 550px;\r\n    width: 100%;\r\n    margin: 0;\r\n    background-color:#c9e9c5;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDQlO1xyXG4gICAgYm90dG9tOiA2MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOjI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzM3OUExOTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOWU5YzU7XHJcbn1cclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "./src/app/chat-history/chat-history.component.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'easychat';
                }
                AppComponent.prototype.recieveMsg = function ($event) {
                    this.chatHistory.saveMsg($event);
                };
                return AppComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_2__["ChatHistoryComponent"], { static: false })
            ], AppComponent.prototype, "chatHistory", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _chatbar_chatbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatbar/chatbar.component */ "./src/app/chatbar/chatbar.component.ts");
            /* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "./src/app/chat-history/chat-history.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                        _chatbar_chatbar_component__WEBPACK_IMPORTED_MODULE_8__["ChatbarComponent"],
                        _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_9__["ChatHistoryComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/chat-history/chat-history.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/chat-history/chat-history.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n#wrapper {\r\n    position: relative;\r\n    top: 10%;\r\n    bottom: 60%;\r\n    width: 100%;\r\n    padding-bottom:25px;\r\n    background-color: #AAE197;\r\n    border:1px solid black;\r\n    height: 100%;\r\n    color: #AAE197;\r\n    border:1px solid black; \r\n    border-radius: 10px;\r\n}\r\n  \r\n#chatbox {\r\n    text-align:left;\r\n    margin:0 auto;\r\n    margin-bottom:20px;\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n    background:#fff;\r\n    height:260px;\r\n    widows: 100%;\r\n    border:1px solid black;\r\n    border-radius: 10px;\r\n    overflow:auto;\r\n    -o-hyphens: auto;\r\n    -webkit-hyphens: auto;\r\n    -ms-hyphens: auto;\r\n    hyphens: auto; \r\n}\r\n  \r\n.error { color: #ff0000; }\r\n  \r\n#menu { padding:12.5px 25px 12.5px 25px; }\r\n  \r\n.welcome { float:left; color: white; }\r\n  \r\n.logout { float:right; }\r\n  \r\n.msgln { margin:0 0 2px 0; }\r\n  \r\n.msgbefore{\r\n    margin-left: 35px;\r\n    margin-right: 35px;\r\n    height: 50px;\r\n}\r\n  \r\nul li:nth-child(odd)\r\n{\r\n    background-color: white;\r\n}\r\n  \r\n#textarea {\r\n    position: relative;\r\n\r\n}\r\n  \r\n.datetag{\r\n    font-size: 10px;\r\n    color: lightslategrey;\r\n}\r\n  \r\nli p{\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1oaXN0b3J5L2NoYXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUViLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBR0EsU0FBUyxjQUFjLEVBQUU7O0FBRXpCLFFBQVEsK0JBQStCLEVBQUU7O0FBRXpDLFdBQVcsVUFBVSxFQUFFLFlBQVksRUFBRTs7QUFFckMsVUFBVSxXQUFXLEVBQUU7O0FBRXZCLFNBQVMsZ0JBQWdCLEVBQUU7O0FBQzNCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1oaXN0b3J5L2NoYXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiN3cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgYm90dG9tOiA2MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOjI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFFMTk3O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiAjQUFFMTk3O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjazsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAgXHJcbiNjaGF0Ym94IHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGhlaWdodDoyNjBweDtcclxuICAgIHdpZG93czogMTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIC1tb3otaHlwaGVuczogYXV0bztcclxuICAgIC1vLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbXMtaHlwaGVuczogYXV0bztcclxuICAgIGh5cGhlbnM6IGF1dG87IFxyXG59XHJcbiAgXHJcbiAgXHJcbi5lcnJvciB7IGNvbG9yOiAjZmYwMDAwOyB9XHJcbiAgXHJcbiNtZW51IHsgcGFkZGluZzoxMi41cHggMjVweCAxMi41cHggMjVweDsgfVxyXG4gIFxyXG4ud2VsY29tZSB7IGZsb2F0OmxlZnQ7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gIFxyXG4ubG9nb3V0IHsgZmxvYXQ6cmlnaHQ7IH1cclxuICBcclxuLm1zZ2xuIHsgbWFyZ2luOjAgMCAycHggMDsgfVxyXG4ubXNnYmVmb3Jle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbnVsIGxpOm50aC1jaGlsZChvZGQpXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdGV4dGFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG4uZGF0ZXRhZ3tcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcclxufVxyXG5saSBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/chat-history/chat-history.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/chat-history/chat-history.component.ts ***!
          \********************************************************/
        /*! exports provided: ChatHistoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHistoryComponent", function () { return ChatHistoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
            /* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
            /* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
            var ChatHistoryComponent = /** @class */ (function () {
                function ChatHistoryComponent(pService, chatService) {
                    var _this = this;
                    this.pService = pService;
                    this.chatService = chatService;
                    this.username = "";
                    this.x = setInterval(function () {
                        _this.chatService.getHistory().subscribe(function (response) {
                            _this.messages = response;
                            if (_this.messages.length > 16) {
                                _this.messages.splice(0, _this.messages.length - 15);
                            }
                        });
                    }, 2000);
                }
                ChatHistoryComponent.prototype.ngOnInit = function () {
                };
                ChatHistoryComponent.prototype.saveMsg = function (value) {
                    this.username = this.pService.nickname;
                    if (this.pService.statusNickname == true) {
                        this.alert = "User " + this.pService.oldNickname + " hat seinen Namen in " + this.pService.nickname + " geändert.";
                        this.chatService.addToHistory(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.pService.nickname, this.alert, new Date(), this.pService.colorName)).subscribe(function (response) {
                            console.log('REST server gave back ' + response);
                        });
                        this.pService.statusNickname = false;
                    }
                    this.chatService.addToHistory(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.pService.nickname, value, new Date(), this.pService.colorName)).subscribe(function (response) {
                        console.log('REST server gave back ' + response);
                    });
                };
                return ChatHistoryComponent;
            }());
            ChatHistoryComponent.ctorParameters = function () { return [
                { type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] },
                { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
            ]; };
            ChatHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-history/chat-history.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-history.component.css */ "./src/app/chat-history/chat-history.component.css")).default]
                })
            ], ChatHistoryComponent);
            /***/ 
        }),
        /***/ "./src/app/chat.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/chat.service.ts ***!
          \*********************************/
        /*! exports provided: ChatService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function () { return ChatService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ChatService = /** @class */ (function () {
                function ChatService(http) {
                    this.http = http;
                    this.actionUrl = 'https://group4easychatapi.herokuapp.com/api/history';
                }
                ChatService.prototype.addToHistory = function (message) {
                    var options = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
                    };
                    return this.http.post(this.actionUrl, message, options);
                };
                ChatService.prototype.getHistory = function () {
                    return this.http.get(this.actionUrl);
                };
                return ChatService;
            }());
            ChatService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ChatService);
            /***/ 
        }),
        /***/ "./src/app/chatbar/chatbar.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/chatbar/chatbar.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form, p, span {\r\n    margin:0;\r\n    padding:0; }\r\n  \r\n#username { font:12px arial; \r\n    width: 40%;\r\n    height: 30px;\r\n    padding: 0px;\r\n}\r\n  \r\n#usermsg {\r\n    width: 100%;\r\n    margin-left: 15px;\r\n    border:1px solid black;\r\n}\r\n  \r\n#submitmsg {\r\n    height: 40px;\r\n    width: 100%;\r\n    border: 1px solid black;\r\n}\r\n  \r\n.msgbefore{\r\n    margin-left: 15px;\r\n    height: 30px;\r\n}\r\n  \r\nlabel.msgbefore {\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJhci9jaGF0YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUyxFQUFFOztBQUVmLFlBQVksZUFBZTtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJhci9jaGF0YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtLCBwLCBzcGFuIHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowOyB9XHJcbiAgXHJcbiN1c2VybmFtZSB7IGZvbnQ6MTJweCBhcmlhbDsgXHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiAgXHJcbiN1c2VybXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jc3VibWl0bXNnIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuICBcclxuXHJcbi5tc2diZWZvcmV7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5sYWJlbC5tc2diZWZvcmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/chatbar/chatbar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/chatbar/chatbar.component.ts ***!
          \**********************************************/
        /*! exports provided: ChatbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbarComponent", function () { return ChatbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
            /* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
            /* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message */ "./src/app/message.ts");
            var ChatbarComponent = /** @class */ (function () {
                function ChatbarComponent(pService, chatService) {
                    this.pService = pService;
                    this.chatService = chatService;
                    this.inputColor = false;
                    this.msgEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                ChatbarComponent.prototype.ngOnInit = function () {
                };
                ChatbarComponent.prototype.sendMsg = function () {
                    //"^([a-z]|[A-Z]|[ä,ö,ü,Ä,Ö,Ü,ç,è,é,à]|[0-9])#%&*$"
                    if (this.username.match("^[a-zA-Z0-9]{2,12}[._-|&|%|\S]{1,2}")) {
                        if (this.inputColor != true) {
                            this.pService.colorName = this.getRandomColor();
                            this.inputColor = true;
                        }
                        if (this.username != this.pService.nickname) {
                            if (this.pService.nickname != "") {
                                this.pService.oldNickname = this.pService.nickname;
                                this.pService.statusNickname = true;
                            }
                            else {
                                this.alert = "ist dem Chatroom beigetreten.";
                                this.chatService.addToHistory(new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](this.username, this.alert, new Date(), this.pService.colorName)).subscribe(function (response) {
                                    console.log('REST server gave back ' + response);
                                });
                            }
                            this.pService.nickname = this.username;
                        }
                        this.msgEvent.emit(this.chatMsg);
                        this.chatMsg = '';
                    }
                    else {
                        alert("Dieser Nutzername ist nicht erlaubt! Sonderzeichen bitte mit normalen Buchstaben ergänzen. Spaces sind im Nutzernamen sind nicht");
                    }
                };
                ChatbarComponent.prototype.getRandomColor = function () {
                    var color = Math.floor(0x1000000 * Math.random()).toString(16);
                    return '#' + ('000000' + color).slice(-6);
                };
                return ChatbarComponent;
            }());
            ChatbarComponent.ctorParameters = function () { return [
                { type: _person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] },
                { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ChatbarComponent.prototype, "msgEvent", void 0);
            ChatbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chatbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbar/chatbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatbar.component.css */ "./src/app/chatbar/chatbar.component.css")).default]
                })
            ], ChatbarComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer{\r\n    position: fixed;\r\n    bottom: 0%;\r\n    width: 100%;\r\n    min-height: 60px;\r\n    max-height: 60px;\r\n    background-color: #379a19;\r\n    text-align: center;\r\n    color: white;\r\n    border-top: 1px solid white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5YTE5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header{\r\n    max-height: 120px;\r\n    background-color: #379A19;\r\n}\r\n.logo{\r\n    position: relative;\r\n    height: 120px;\r\n    width: 300px;\r\n   \r\n}\r\n.easychat{\r\n   \r\n    text-align: right;\r\n}\r\n.easychat h1{\r\n    font-size: 30px;\r\n    font-family: 'Arial', monospace;\r\n    color: white;\r\n    position: relative;\r\n    top: 20%;\r\n    right: 5%;\r\n}\r\n.typewriter h1 {\r\n    overflow: hidden; /* Ensures the content is not revealed until the animation */\r\n    border-right: .15em solid orange; /* The typwriter cursor */\r\n    white-space: nowrap; /* Keeps the content on a single line */\r\n    margin: 0 auto; /* Gives that scrolling effect as the typing happens */\r\n    letter-spacing: .15em; /* Adjust as needed */\r\n    -webkit-animation: \r\n      typing 3.5s steps(40, end),\r\n      blink-caret .75s step-end infinite;\r\n            animation: \r\n      typing 3.5s steps(40, end),\r\n      blink-caret .75s step-end infinite;\r\n  }\r\n/* The typing effect */\r\n@-webkit-keyframes typing {\r\n    from { width: 0 }\r\n    to { width: 100% }\r\n  }\r\n@keyframes typing {\r\n    from { width: 0 }\r\n    to { width: 100% }\r\n  }\r\n/* The typewriter cursor effect */\r\n@-webkit-keyframes blink-caret {\r\n    from, to { border-color: transparent }\r\n    50% { border-color: orange; }\r\n  }\r\n@keyframes blink-caret {\r\n    from, to { border-color: transparent }\r\n    50% { border-color: orange; }\r\n  }\r\n.container {\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZOztBQUVoQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQixFQUFFLDREQUE0RDtJQUM5RSxnQ0FBZ0MsRUFBRSx5QkFBeUI7SUFDM0QsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVELGNBQWMsRUFBRSxzREFBc0Q7SUFDdEUscUJBQXFCLEVBQUUscUJBQXFCO0lBQzVDOzt3Q0FFb0M7WUFGcEM7O3dDQUVvQztFQUN0QztBQUVBLHNCQUFzQjtBQUN0QjtJQUNFLE9BQU8sU0FBUztJQUNoQixLQUFLLFlBQVk7RUFDbkI7QUFIQTtJQUNFLE9BQU8sU0FBUztJQUNoQixLQUFLLFlBQVk7RUFDbkI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDRSxXQUFXLDBCQUEwQjtJQUNyQyxNQUFNLG9CQUFvQixFQUFFO0VBQzlCO0FBSEE7SUFDRSxXQUFXLDBCQUEwQjtJQUNyQyxNQUFNLG9CQUFvQixFQUFFO0VBQzlCO0FBQ0Y7SUFDSSw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc5QTE5O1xyXG59XHJcbi5sb2dve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgXHJcbn1cclxuLmVhc3ljaGF0e1xyXG4gICBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5lYXN5Y2hhdCBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHJpZ2h0OiA1JTtcclxufVxyXG4udHlwZXdyaXRlciBoMSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXHJcbiAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIG9yYW5nZTsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjE1ZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICAgIGFuaW1hdGlvbjogXHJcbiAgICAgIHR5cGluZyAzLjVzIHN0ZXBzKDQwLCBlbmQpLFxyXG4gICAgICBibGluay1jYXJldCAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgdHlwaW5nIGVmZmVjdCAqL1xyXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICAgIGZyb20geyB3aWR0aDogMCB9XHJcbiAgICB0byB7IHdpZHRoOiAxMDAlIH1cclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG4gIEBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG4gICAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cclxuICAgIDUwJSB7IGJvcmRlci1jb2xvcjogb3JhbmdlOyB9XHJcbiAgfVxyXG4uY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/message.ts": 
        /*!****************************!*\
          !*** ./src/app/message.ts ***!
          \****************************/
        /*! exports provided: Message */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function () { return Message; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Message = /** @class */ (function () {
                function Message(username, content, timestamp, color) {
                    this.username = username;
                    this.content = content;
                    this.timestamp = timestamp;
                    this.color = color;
                }
                return Message;
            }());
            /***/ 
        }),
        /***/ "./src/app/person.service.ts": 
        /*!***********************************!*\
          !*** ./src/app/person.service.ts ***!
          \***********************************/
        /*! exports provided: PersonService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function () { return PersonService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PersonService = /** @class */ (function () {
                function PersonService() {
                    this.myNickname = '';
                    this.myOldNickname = '';
                    this.statusNicknameChange = false;
                    this.nicknameColor = '';
                    this.messages = [];
                }
                Object.defineProperty(PersonService.prototype, "nickname", {
                    get: function () {
                        return this.myNickname;
                    },
                    set: function (value) {
                        this.myNickname = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonService.prototype, "oldNickname", {
                    get: function () {
                        return this.myOldNickname;
                    },
                    set: function (value) {
                        this.myOldNickname = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonService.prototype, "statusNickname", {
                    get: function () {
                        return this.statusNicknameChange;
                    },
                    set: function (value) {
                        this.statusNicknameChange = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonService.prototype, "colorName", {
                    get: function () {
                        return this.nicknameColor;
                    },
                    set: function (value) {
                        this.nicknameColor = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonService.prototype, "messagesArray", {
                    get: function () {
                        return this.messages;
                    },
                    enumerable: true,
                    configurable: true
                });
                PersonService.prototype.createMessage = function (username, msg) {
                    this.messages.push({
                        "color": this.colorName,
                        "username": username,
                        "message": msg,
                        "date": Math.floor(Date.now())
                    });
                };
                return PersonService;
            }());
            PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PersonService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! c:\projects\easychat\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map