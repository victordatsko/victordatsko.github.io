webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: #413838;\r\n}\r\nnav {\r\n    color: #fff;\r\n    background-color: #3e4746;\r\n}\r\n\r\n.material-icons {\r\n    display: inline-block;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n.nav-link {\r\n    margin-right: 30px;\r\n    margin-top: 0px;\r\n    display: block;\r\n    /* padding: .5em 1em; */\r\n}\r\nnav ul a {\r\n    /* transition: background-color .3s; */\r\n    font-size: 1.2rem;\r\n    color: #fff;\r\n    display: block;\r\n    padding: 0 30px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n  <div class=\"nav-wrapper black\">\n    \n      \n      <a href=\"/\"><i class=\"material-icons\">home</i></a> \n      \n      <a href=\"/\" class=\"brand-logo center\"></a>\n      \n      <a routerLink=\"register\" class=\"register\">Register</a> |  \n      <a routerLink=\"login\" class=\"login\">Login</a>    \n      \n      \n     \n  </div>        \n</nav> -->\n<nav>\n  <div class=\"nav-wrapper\">\n      <a href=\"/\"><i class=\"material-icons\">home</i></a>\n    <a href=\"#\" class=\"brand-logo\">Personal Organizer</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a href=\"/todo\">Task</a></li>\n      <li><a href=\"/books\">Books</a></li>\n      <li><a href=\"/idea\">Idea</a></li>\n    </ul>\n    \n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_idea_service__ = __webpack_require__("../../../../../src/app/services/idea.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_books_books_component__ = __webpack_require__("../../../../../src/app/components/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_idea_idea_component__ = __webpack_require__("../../../../../src/app/components/idea/idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_todo_add_todo_add_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/add-todo/add-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_books_add_book_add_book_component__ = __webpack_require__("../../../../../src/app/components/books/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_idea_add_idea_add_idea_component__ = __webpack_require__("../../../../../src/app/components/idea/add-idea/add-idea.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_14__components_todo_todo_component__["a" /* TodoComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_15__components_books_books_component__["a" /* BooksComponent */] },
    { path: 'idea', component: __WEBPACK_IMPORTED_MODULE_16__components_idea_idea_component__["a" /* IdeaComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_idea_idea_component__["a" /* IdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_todo_add_todo_add_todo_component__["a" /* AddTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_books_add_book_add_book_component__["a" /* AddBookComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_idea_add_idea_add_idea_component__["a" /* AddIdeaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_9__services_books_service__["a" /* BooksService */],
                __WEBPACK_IMPORTED_MODULE_10__services_idea_service__["a" /* IdeaService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/books/add-book/add-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    background-color: #8b5d5d;\r\n    border-radius: 10px;\r\n}\r\n.btn, .btn-large {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    background-color: #474645;\r\n    text-align: center;\r\n    letter-spacing: .5px;\r\n    transition: .2s ease-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn, .btn-large, .btn-flat {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n  <div class=\"card-content\">\n      <span class=\"card-title\">Add Book</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s12\">\n          <div class=\"row\">          \n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Author\" [(ngModel)]=\"books.author\" \n              name=\"author\">\n            </div>\n            <div class=\"input-field col s12\">\n                <input type=\"text\" placeholder=\"Book Title\" [(ngModel)]=\"books.title\" name=\"title\">\n            </div>\n            <div class=\"input-field col s12\">\n                <input type=\"text\" placeholder=\"Genre\" [(ngModel)]=\"books.genre\" name=\"genre\">\n            </div>        \n        </div>\n        <input type=\"submit\" value=\"Submit\" class=\"btn\">\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/books/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddBookComponent = (function () {
    function AddBookComponent(booksService) {
        this.booksService = booksService;
        this.books = {
            author: '',
            title: '',
            genre: ''
        };
    }
    AddBookComponent.prototype.ngOnInit = function () {
    };
    AddBookComponent.prototype.onSubmit = function () {
        if (this.books.author != '' && this.books.title != '' && this.books.genre != '') {
            this.booksService.addBooks(this.books);
            this.books.author = '';
            this.books.title = '';
            this.books.genre = '';
        }
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/components/books/add-book/add-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/books/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_books_service__["a" /* BooksService */]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collection .collection-item {\r\n    background-color: #454544   ;\r\n    color: #c7b9b9;\r\n    border-radius: 5px;\r\n    font-size: 1.2em;\r\n    line-height: 1.5rem;\r\n    padding: 10px 20px;\r\n    margin: 0;\r\n    border-bottom: 1px solid #e0e0e0;\r\n}\r\n.btn, .btn-large, .btn-flat {\r\n    border: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.update {\r\n    color: #5a5454;\r\n    background-color: #E2D04E;\r\n}\r\n.delete {\r\n    color: #c7b9b9;\r\n    background-color: #b24141;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-add-book></app-add-book>\n\n  <div *ngIf=\"books?.length > 0; else noBooks\">\n    <ul *ngFor=\"let book of books\" class=\"collection\">\n      <li class=\"collection-item\"> \n        <strong>{{book.author}}</strong> - {{book.title}} <em>( {{book.genre}} )</em> \n\n        <a class=\"secondary-content\">\n            <i (click)=\"editBook($event, book)\" class=\"fa fa-pencil\"></i>\n            <i *ngIf=\"editState && bookToEdit.id == book.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>\n        </a>\n        \n      <div *ngIf=\"editState && bookToEdit.id == book.id\">\n        <form (ngSubmit)=\"updateBook(book)\">\n          <div class=\"row\">           \n            <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Author\" [(ngModel)]=\"book.author\" \n              name=\"author\">\n            </div>\n          <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"book.title\" name=\"title\">\n          </div>\n          <div class=\"input-field col s12\">\n              <input type=\"text\" placeholder=\"Genre\" [(ngModel)]=\"book.genre\" name=\"genre\">\n          </div>\n          <input type=\"submit\" value=\"Update Book\" class=\"btn update\">\n          <button (click)=\"deleteBook($event, book)\" class=\"btn delete\">Delete Book</button>\n          </div>\n        </form>\n      </div>\n      </li>\n    </ul>\n  </div>\n\n  <ng-template #noBooks>\n    <hr>  \n    <h5>There are no books to list</h5>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/services/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(booksSrvice) {
        this.booksSrvice = booksSrvice;
        this.editState = false;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksSrvice.getBooks().subscribe(function (books) {
            _this.books = books;
        });
    };
    BooksComponent.prototype.deleteBook = function (event, books) {
        this.clearState();
        this.booksSrvice.deleteBook(books);
    };
    BooksComponent.prototype.editBook = function (event, books) {
        this.editState = true;
        this.bookToEdit = books;
    };
    BooksComponent.prototype.updateBook = function (books) {
        this.booksSrvice.updateBook(books);
        this.clearState();
    };
    BooksComponent.prototype.clearState = function () {
        this.editState = false;
        this.bookToEdit = null;
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/components/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/idea/add-idea/add-idea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    background: #857979;\r\n    color: #fff;\r\n    border-radius: 10px;\r\n    border: 1px solid #857979;\r\n}\r\n.btn, .btn-large {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    border: 1px solid #857979;\r\n    background-color: #3d3c3c;\r\n    text-align: center;\r\n    letter-spacing: .5px;\r\n    transition: .2s ease-out;\r\n    cursor: pointer;\r\n}\r\n.btn, .btn-large, .btn-flat {\r\n    border: none;\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/idea/add-idea/add-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-content\">\n        <span class=\"card-title\">Add Idea</span>\n      <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n            <div class=\"row\">          \n              <div class=\"input-field col s6\">\n                  <input type=\"text\" placeholder=\"Idea Title\" [(ngModel)]=\"ideas.title\" name=\"title\">\n              </div>\n              <div class=\"input-field col s6\">\n                  <input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"ideas.description\" name=\"description\">\n              </div>        \n          </div>\n          <input type=\"submit\" value=\"Submit\" class=\"btn\">\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/idea/add-idea/add-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_idea_service__ = __webpack_require__("../../../../../src/app/services/idea.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddIdeaComponent = (function () {
    function AddIdeaComponent(ideaService) {
        this.ideaService = ideaService;
        this.ideas = {
            title: '',
            description: ''
        };
    }
    AddIdeaComponent.prototype.ngOnInit = function () {
    };
    AddIdeaComponent.prototype.onSubmit = function () {
        if (this.ideas.title != '' && this.ideas.description != '') {
            this.ideaService.addIdea(this.ideas);
            this.ideas.title = '';
            this.ideas.description = '';
        }
    };
    AddIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-idea',
            template: __webpack_require__("../../../../../src/app/components/idea/add-idea/add-idea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/idea/add-idea/add-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_idea_service__["a" /* IdeaService */]])
    ], AddIdeaComponent);
    return AddIdeaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    background: #857979;\r\n    color: #fff;\r\n    border-radius: 10px;\r\n    border: 1px solid #857979;\r\n}\r\n\r\n.collection .collection-item {\r\n    background-color: #3d3c3c;\r\n    color: #fff;\r\n    border: 1px solid #857979;\r\n    border-radius: 5px;\r\n    line-height: 1.5rem;\r\n    padding: 10px 20px;\r\n    margin: 0;\r\n}\r\n.update {\r\n    color: #5a5454;\r\n    background-color: #E2D04E;\r\n}\r\n.delete {\r\n    color: #c7b9b9;\r\n    background-color: #b24141;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-add-idea></app-add-idea>\n\n  <div *ngIf=\"ideas?.length > 0; else noIdeas\">\n    <ul *ngFor=\"let idea of ideas\" class=\"collection\">\n        <li class=\"collection-item\">\n          {{idea.title}} : {{idea.description}}\n\n          <a class=\"secondary-content\">\n            <i (click)=\"editIdea($event, idea)\" class=\"fa fa-pencil\"></i>\n            <i *ngIf=\"editState && ideaToEdit.id == idea.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>\n        </a>\n        \n      <div *ngIf=\"editState && ideaToEdit.id == idea.id\">\n        <form (ngSubmit)=\"updateIdea(idea)\">\n          <div class=\"row\">           \n          <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"idea.title\" name=\"title\">\n          </div>\n          <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"idea.description\" name=\"description\">\n          </div>\n          <input type=\"submit\" value=\"Update Idea\" class=\"btn update\">\n          <button (click)=\"deleteIdea($event, idea)\" class=\"btn delete\">Delete Idea</button>\n          </div>\n        </form>\n      </div>\n\n        </li>\n    </ul>\n  </div>\n\n  <ng-template #noIdeas>\n    <hr>\n    <h5>There are no Ideas to list</h5>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/idea/idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_idea_service__ = __webpack_require__("../../../../../src/app/services/idea.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaComponent = (function () {
    function IdeaComponent(ideaService) {
        this.ideaService = ideaService;
        this.editState = false;
    }
    IdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ideaService.getIdea().subscribe(function (ideas) {
            _this.ideas = ideas;
        });
    };
    IdeaComponent.prototype.deleteIdea = function (event, ideas) {
        this.clearState();
        this.ideaService.deleteIdea(ideas);
    };
    IdeaComponent.prototype.editIdea = function (event, ideas) {
        this.editState = true;
        this.ideaToEdit = ideas;
    };
    IdeaComponent.prototype.updateIdea = function (ideas) {
        this.ideaService.updateIdea(ideas);
        this.clearState();
    };
    IdeaComponent.prototype.clearState = function () {
        this.editState = false;
        this.ideaToEdit = null;
    };
    IdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-idea',
            template: __webpack_require__("../../../../../src/app/components/idea/idea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/idea/idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_idea_service__["a" /* IdeaService */]])
    ], IdeaComponent);
    return IdeaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: #413838;\r\n}\r\n.btn, .btn-large {\r\n    border-radius: 4px;\r\n    width: 20em;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    background-color: #7b6e77;\r\n    text-align: center;\r\n    letter-spacing: 0\r\n}\r\n\r\n.login, .register {\r\n    margin-bottom: 5px;\r\n    width: 100px;\r\n    height: 30px;\r\n    color: #222;\r\n    background-color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <a class=\"waves-effect waves-light btn\" routerLink=\"todo\">Task</a>\n  <a class=\"waves-effect waves-light btn\" routerLink=\"books\">Books</a>\n  <a class=\"waves-effect waves-light btn\" routerLink=\"idea\">Idea</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo/add-todo/add-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    background: #857979;\r\n    color: #fff;\r\n    border-radius: 10px;\r\n}\r\n.btn, .btn-large {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    background-color: #3d3c3c;\r\n    text-align: center;\r\n    letter-spacing: .5px;\r\n    transition: .2s ease-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.update {\r\n    color: #5a5454;\r\n    background-color: #E2D04E;\r\n}\r\n.delete {\r\n    color: #c7b9b9;\r\n    background-color: #b24141;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/add-todo/add-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Add Task</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n      <div class=\"row\">           \n        <div class=\"input-field col s6\">\n          <input type=\"text\" placeholder=\"Task title\" [(ngModel)]=\"todo.title\" \n          name=\"title\">\n        </div>\n      <div class=\"input-field col s6\">\n          <input type=\"text\" placeholder=\"Task description\" [(ngModel)]=\"todo.description\" name=\"description\">\n      </div>\n      <input type=\"submit\" value=\"Submit\" class=\"btn\">\n    </div>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo/add-todo/add-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoComponent = (function () {
    function AddTodoComponent(todoService) {
        this.todoService = todoService;
        this.todo = {
            title: '',
            description: ''
        };
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.onSubmit = function () {
        if (this.todo.title != '' && this.todo.description != '') {
            this.todoService.addTodo(this.todo);
            this.todo.title = '';
            this.todo.description = '';
        }
    };
    AddTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-todo',
            template: __webpack_require__("../../../../../src/app/components/todo/add-todo/add-todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo/add-todo/add-todo.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_todo_service__["a" /* TodoService */]])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.collection .collection-item {\r\n    background-color: #3d3c3c;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    line-height: 1.5rem;\r\n    padding: 10px 20px;\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-add-todo></app-add-todo>\n  \n  <div *ngIf=\"todos?.length > 0; else noTodo\">\n    <ul *ngFor=\"let todo of todos\" class=\"collection\">\n      <li class=\"collection-item\"> <strong>{{todo.title}} :</strong> {{todo.description}}     \n        <a class=\"secondary-content\">\n            <i (click)=\"editTodo($event, todo)\" class=\"fa fa-pencil\"></i>\n            <i *ngIf=\"editState && taskToEdit.id == todo.id\" (click)=\"clearState()\" class=\"fa fa-compress\"></i>\n        </a>       \n      <div *ngIf=\"editState && taskToEdit.id == todo.id\">\n        <form (ngSubmit)=\"updateTask(todo)\">\n          <div class=\"row\">           \n            <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"Task title\" [(ngModel)]=\"todo.title\" \n              name=\"title\">\n            </div>\n          <div class=\"input-field col s6\">\n              <input type=\"text\" placeholder=\"Task description\" [(ngModel)]=\"todo.description\" name=\"description\">\n          </div>\n          <input type=\"submit\" value=\"Update Task\" class=\"btn update\">\n          <button (click)=\"deleteTodo($event, todo)\" class=\"btn delete\">Delete Task</button>\n          </div>\n        </form>\n      </div>\n      \n      </li>\n    </ul>\n  </div>\n\n  <ng-template #noTodo>\n    <hr>  \n    <h5>There are no todo to list</h5>\n  </ng-template>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
        this.editState = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodo().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoComponent.prototype.deleteTodo = function (event, todo) {
        this.clearState();
        this.todoService.deleteTodo(todo);
    };
    TodoComponent.prototype.editTodo = function (event, todo) {
        this.editState = true;
        this.taskToEdit = todo;
    };
    TodoComponent.prototype.updateTask = function (todo) {
        this.todoService.updateTask(todo);
        this.clearState();
    };
    TodoComponent.prototype.clearState = function () {
        this.editState = false;
        this.taskToEdit = null;
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo/todo.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksService = (function () {
    function BooksService(afs) {
        //this.books = this.afs.collection('books').valueChanges();
        this.afs = afs;
        this.booksCollection = this.afs.collection('books', function (ref) { return ref.orderBy('title', 'asc'); });
        this.books = this.booksCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    BooksService.prototype.getBooks = function () {
        return this.books;
    };
    BooksService.prototype.addBooks = function (books) {
        this.booksCollection.add(books);
    };
    BooksService.prototype.deleteBook = function (books) {
        this.bookDoc = this.afs.doc("books/" + books.id);
        this.bookDoc.delete();
    };
    BooksService.prototype.updateBook = function (books) {
        this.bookDoc = this.afs.doc("books/" + books.id);
        this.bookDoc.update(books);
    };
    BooksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "../../../../../src/app/services/idea.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaService = (function () {
    function IdeaService(afs) {
        //this.ideas = this.afs.collection('idea').valueChanges();
        this.afs = afs;
        this.ideaCollection = this.afs.collection('idea', function (ref) { return ref.orderBy('title', 'asc'); });
        this.ideas = this.ideaCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    IdeaService.prototype.getIdea = function () {
        return this.ideas;
    };
    IdeaService.prototype.addIdea = function (ideas) {
        this.ideaCollection.add(ideas);
    };
    IdeaService.prototype.deleteIdea = function (ideas) {
        this.ideaDoc = this.afs.doc("idea/" + ideas.id);
        this.ideaDoc.delete();
    };
    IdeaService.prototype.updateIdea = function (ideas) {
        this.ideaDoc = this.afs.doc("idea/" + ideas.id);
        this.ideaDoc.update(ideas);
    };
    IdeaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], IdeaService);
    return IdeaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = (function () {
    function TodoService(afs) {
        //this.todos = this.afs.collection('todo').valueChanges();
        this.afs = afs;
        this.todoCollection = this.afs.collection('todo', function (ref) { return ref.orderBy('title', 'asc'); });
        this.todos = this.todoCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    TodoService.prototype.getTodo = function () {
        return this.todos;
    };
    TodoService.prototype.addTodo = function (todo) {
        this.todoCollection.add(todo);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todoDoc = this.afs.doc("todo/" + todo.id);
        this.todoDoc.delete();
    };
    TodoService.prototype.updateTask = function (todo) {
        this.todoDoc = this.afs.doc("todo/" + todo.id);
        this.todoDoc.update(todo);
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDdH_V33YZHxHlTKQslOin7kJNUDML8nn0",
        authDomain: "todolist-2bb0d.firebaseapp.com",
        databaseURL: "https://todolist-2bb0d.firebaseio.com",
        projectId: "todolist-2bb0d",
        storageBucket: "todolist-2bb0d.appspot.com",
        messagingSenderId: "879447727390"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map