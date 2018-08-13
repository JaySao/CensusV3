webpackJsonp([1,4],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Poll; });
var Poll = (function () {
    function Poll() {
    }
    return Poll;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/poll.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(677),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_make_make_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_poll_poll_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_results_results_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_success_success_component__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'make', component: __WEBPACK_IMPORTED_MODULE_7__components_make_make_component__["a" /* MakeComponent */] },
    { path: 'results/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_results_results_component__["a" /* ResultsComponent */] },
    { path: 'poll/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_poll_poll_component__["a" /* PollComponent */] },
    { path: 'success/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_success_success_component__["a" /* SuccessComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_make_make_component__["a" /* MakeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_poll_poll_component__["a" /* PollComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_success_success_component__["a" /* SuccessComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(678),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_poll__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeComponent = (function () {
    function MakeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.poll = new __WEBPACK_IMPORTED_MODULE_1__classes_poll__["a" /* Poll */];
        this.idCounter = 1;
        this.answers = [{
                body: "",
                id: 0
            }];
    }
    MakeComponent.prototype.ngOnInit = function () {
        this.makeField();
    };
    MakeComponent.prototype.makeField = function () {
        if (this.idCounter > 9) {
        }
        else {
            console.log("Making field");
            this.answers.push({
                body: "",
                id: this.idCounter
            });
            console.log(this.answers);
            this.idCounter++;
        }
    };
    MakeComponent.prototype.setAnswers = function () {
        for (var i = 0; i < this.answers.length; i++) {
            // this.poll.choices[i] = this.answers[i]['body']
            this.answers[i]['body'] = document.getElementById("" + i).value;
        }
        this.poll['choices'] = [];
        for (var i = 0; i < this.answers.length; i++) {
            this.poll['choices'].push(this.answers[i]['body']);
        }
    };
    MakeComponent.prototype.makePoll = function () {
        console.log("Making Poll");
        this.setAnswers();
        var questionVal = document.getElementById("question").value;
        this.poll.question = questionVal;
        console.log(this.poll);
        console.log(this.answers);
        if (true) {
            this.submitPoll(this.poll);
        }
    };
    MakeComponent.prototype.submitPoll = function (body) {
        var _this = this;
        console.log("Sending request");
        console.log("http://142.93.192.228");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://142.93.192.228:3000/make', body, { headers: headers }).toPromise().then(function (res) {
            console.log("We got a response");
            console.log(res['_body']);
            var jsonBody = res['_body'];
            var data = JSON.parse(jsonBody);
            console.log(data);
            var id = data['newPoll']['_id'];
            console.log(id);
            _this.goToSuccess(id);
        }, function (err) {
            console.log(err);
        });
    };
    MakeComponent.prototype.goToSuccess = function (id) {
        this.router.navigate(['/success', id]);
    };
    MakeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-make',
            template: __webpack_require__(679),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], MakeComponent);
    return MakeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/make.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(680),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_poll__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PollComponent = (function () {
    function PollComponent(activatedRoute, http, router) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.poll = new __WEBPACK_IMPORTED_MODULE_1__classes_poll__["a" /* Poll */];
        this.id = this.activatedRoute.params['_value'].id;
        this.answers = new Array;
    }
    PollComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://142.93.192.228:3000/poll/' + this.id, { headers: headers }).toPromise().then(function (res) {
            var jsonBody = res['_body'];
            var data = JSON.parse(jsonBody);
            console.log(data);
            _this.poll = data['poll'];
            console.log(_this.poll.question);
            for (var i = 0; i < _this.poll.choices.length; i++) {
                _this.answers.push({ choice: _this.poll.choices[i], id: i });
            }
            console.log(_this.answers);
        }, function (err) {
            console.log(err);
        });
    };
    PollComponent.prototype.chooseChoice = function (id) {
        console.log("Choose me " + id);
        this.choice = id;
    };
    PollComponent.prototype.submitButton = function () {
        var _this = this;
        if (this.choice == null) {
            alert("Please choose an answer");
        }
        else {
            var selected = document.getElementById("myForm");
            var headers = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["b" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var body = { choice: this.choice - 1 };
            console.log(body);
            return this.http.post('http://142.93.192.228:3000/poll/' + this.id, body, { headers: headers }).toPromise().then(function (res) {
                console.log(res);
                _this.router.navigate(['/results/', _this.id]);
            }, function (err) {
                console.log(err);
            });
        }
    };
    PollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-poll',
            template: __webpack_require__(681),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["c" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], PollComponent);
    return PollComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/poll.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_poll__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as $ from 'jquery';
var ResultsComponent = (function () {
    function ResultsComponent(activatedRoute, router, http) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
        this.poll = new __WEBPACK_IMPORTED_MODULE_2__classes_poll__["a" /* Poll */];
        this.id = this.activatedRoute.params['_value'].id;
        this.answers = new Array;
        this.total = 0;
        this.myLength = 0;
        // myVar = document.getElementById("0bar").style.width = "100%";
        this.url = window.location.href;
        this.pollLink = this.url.replace("results/", "poll/");
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://142.93.192.228:3000/poll/' + this.id, { headers: headers }).toPromise().then(function (res) {
            var jsonBody = res['_body'];
            var data = JSON.parse(jsonBody);
            console.log(data);
            _this.poll = data['poll'];
            for (var i = 0; i < _this.poll.choices.length; i++) {
                _this.answers.push({ choice: _this.poll.choices[i], score: _this.poll.results[i], id: i });
            }
            _this.myLength = _this.poll.choices.length;
            console.log(_this.myLength);
            _this.calcTotal();
            setTimeout(_this.setWidths(), 200);
            // for(let i=0; i<this.poll.choices.length; i++){
            //   $("0").css("style","width:100%")
            // }
        }, function (err) {
            console.log(err);
        });
    };
    ResultsComponent.prototype.calcTotal = function () {
        for (var i = 0; i < this.answers.length; i++) {
            this.total += parseInt(this.answers[i]['score']);
        }
        // document.getElementById("0bar").style.width = "100%";
    };
    ResultsComponent.prototype.setWidths = function () {
        var _this = this;
        // document.getElementById("0bar").style.width = "100%";
        // document.getElementById("0bar").style.width = "100%";
        setTimeout(function () {
            console.log(_this.total);
            for (var i = 0; i < _this.myLength; i++) {
                console.log("setting widths");
                var barLength = 0;
                barLength = _this.answers[i]['score'];
                console.log(barLength);
                document.getElementById([i] + "bar").style.width = (barLength / _this.total) * 100 + "%";
            }
        }, 200);
    };
    ResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-results',
            template: __webpack_require__(682),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_http__["c" /* Http */]) === 'function' && _c) || Object])
    ], ResultsComponent);
    return ResultsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/results.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = (function () {
    function SuccessComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.id = this.activatedRoute.params['_value'].id;
        this.pollLink = "poll/" + this.id;
        this.pollResults = "results/" + this.id;
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__node_modules_angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], SuccessComponent);
    return SuccessComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/success.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Jeremy/Desktop/censusv3/angular-src/src/environment.js.map

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-bottom:5rem; \r\n}"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1>Welcome to CensusV3!</h1>\n      <p>Create simple, anonymous polls instantly with no sign up required!</p>\n      <form method=\"get\" [routerLink]=\"['/make']\">\n        <button class=\"btn-primary\" type=\"submit\">Get Started</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1></h1>\n    <form method=\"POST\" action=\"/make\" name=\"form1\">\n        <div id=\"form-group\">\n          <label>Question:</label>\n          <input class=\"form-control\" id=\"question\" type=\"text\" required=\"required\" />\n        </div>\n\n        <!-- <div id=\"form-group\">\n          <label>Answer1:</label>\n          <input class=\"form-control\" name=\"answer0\" type=\"text\" required=\"required\" />\n        </div>\n        <div id=\"form-group\"><label>Answer2:</label><input class=\"form-control\" name=\"answer1\" type=\"text\" required=\"required\" /></div>\n        <div id=\"form-group\"><label>Answer3:</label><input class=\"form-control\" name=\"answer2\" type=\"text\" required=\"required\" /></div>\n        <div id=\"form-group\"><label>Answer4:</label><input class=\"form-control\" name=\"answer3\" type=\"text\" required=\"required\" /></div>\n        <br/> -->\n\n        <div class=\"form-group\" *ngFor=\"let answer of answers\">\n          <label>Answer Choice:</label>\n          <input class=\"form-control\" type=\"text\" required=\"required\" attr.id=\"{{answer.id}}\"/>\n        </div>\n        <input class=\"btn btn-info\" (click)=\"makeField()\" value=\"Add Field\" type=\"button\">\n\n        <input class=\"btn btn-primary float-right\" type=\"submit\" value=\"Create!\" (click)=\"makePoll()\"/>\n      </form>\n</div>"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n    <a class=\"navbar-brand\" href=\"#\">Census</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/make']\">Make</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{poll.question}}</h1>\n  <form action=\"\" id=\"myForm\">\n    <div class=\"answerChoices\" *ngFor=\"let answer of answers\">\n        <input class=\"myButton\" name=\"choice\" type=\"radio\" attr.id=\"{{answer.id}}\" (click)=\"chooseChoice(answer.choice)\">\n        <span>{{answer.choice}}</span>\n      </div>\n  </form>\n  <input type=\"button\" class=\"btn-primary\" value=\"submit\" (click)=\"submitButton()\">\n</div>\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (load)=\"setWidths()\">\n  <h1>Results</h1>\n  <h3>{{poll.question}}</h3>\n  <div class=\"container\" *ngFor=\"let answer of answers\">\n    <h4>{{answer.choice}}</h4>\n    <h5>Votes:{{answer.score}}</h5>\n    <div class=\"progress\">\n      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" [attr.id]=\"answer.id + 'bar'\"></div>\n    </div>\n  </div>\n\n  <div class=\"container mt-5\">\n      <p>Copy and paste this link to share your poll:</p>\n      <input id=\"urlHolder\" type=\"text\" [value]=\"pollLink\" class=\"form-control\">\n  </div>\n</div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Your poll has been created!</h1>\n  <span>You can access your poll and share it by using the link:</span>\n  <br>\n  <a [href]=\"pollLink\">Here</a>\n  <br>\n  <span>Or you can view the results here:</span>\n  <br>\n  <a [href]=\"pollResults\">Results</a>\n</div>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[716]);
//# sourceMappingURL=main.bundle.map