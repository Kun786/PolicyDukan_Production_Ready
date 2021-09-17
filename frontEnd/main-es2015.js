(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n\n</div>\n<app-footer2></app-footer2>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"header\">\n        <h2 class=\"text-center\">Registration Form</h2><br><br>\n    </div>\n    <form #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n        <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"name\" required class=\"form-control ng-pristine\" id=\"name\"\n                    aria-describedby=\"name\" ngModel>\n                <small id=\"name\" class=\"form-text text-muted\">First Name</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"fname\" required class=\"form-control ng-pristine\" id=\"name\"\n                    aria-describedby=\"fname\" ngModel>\n                <small id=\"fname\" class=\"form-text text-muted\">Last Name</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email & Mobile</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"email\" required class=\"form-control ng-pristine\" id=\"email\"\n                    aria-describedby=\"email\" ngModel>\n                <small id=\"email\" class=\"form-text text-muted\">Your Email</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"mobileno\" required class=\"form-control ng-pristine\" id=\"email\"\n                    aria-describedby=\"mobile\" ngModel>\n                <small id=\"mobile\" class=\"form-text text-muted\">Your Mobile Number</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">D.O.B, Pic & Gender</label>\n            <div class=\"col-sm-3\">\n                <input type=\"date\" name=\"dob\" required class=\"form-control\" id=\"dob\" aria-describedby=\"dob\" ngModel>\n                <small id=\"dob\" class=\"form-text text-muted\">Your Date of Birth</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"file\" name=\"pic\" required class=\"form-control\" id=\"pic\" aria-describedby=\"pic\" ngModel>\n                <small id=\"pic\" class=\"form-text text-muted\">Your Profile Photo</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <select name=\"gender\" required class=\"form-control\" id=\"gender\" aria-describedby=\"gender\" ngModel>\n                    <option>Male</option>\n                    <option>Female</option>\n                </select>\n                <small id=\"gender\" class=\"form-text text-muted\">Gender</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Password & CNIC</label>\n            <div class=\"col-sm-3\">\n                <input type=\"password\" name=\"password\" required class=\"form-control\" id=\"password\"\n                    aria-describedby=\"password\" ngModel>\n                <small id=\"password\" class=\"form-text text-muted\">Your Password (at least 6 characters)</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"password\" name=\"cpass\" required class=\"form-control\" id=\"cpass\" aria-describedby=\"cpass\"\n                    ngModel>\n                <small id=\"cpass\" class=\"form-text text-muted\">Confirm Password</small>\n            </div>\n            <div class=\"col-sm-4\">\n                <input type=\"text\" name=\"cnic\" required class=\"form-control\" id=\"cnic\" aria-describedby=\"cnic\" ngModel>\n                <small id=\"cnic\" class=\"form-text text-muted\">Your CNIC</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" name=\"address\" required class=\"form-control\" id=\"address\" aria-describedby=\"address\"\n                    ngModel>\n                <small id=\"address\" class=\"form-text text-muted\">Your Address</small>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4 text-center\"><button [hidden]=\"fullform.form.invalid\"\n                    class=\"btn btn-primary btn-block\">Register</button></div>\n            <div class=\"col-sm-4\"></div>\n        </div>\n    </form>\n</div><br>\n<div class=\"alert alert-success\" *ngIf=\"register\">{{message}}</div>\n<div class=\"form-group text-center\">\n    <span class=\"text-secondary\">if already registerd!</span>\n    <a [routerLink]=\"['/adminLogin']\"><b>Login</b></a>\n</div>\n<br><br>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-footer/admin-footer.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-footer/admin-footer.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-divider></mat-divider>\n<footer>\n  <mat-icon>copyright</mat-icon> 2020 All Rights Reserved by PolicyDukaan | Developed by ScriptOne\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-header/admin-header.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-header/admin-header.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"bg-light text-dark\">\n  <mat-toolbar-row>\n    <button mat-icon-button (click)=\"toggleSideBar()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>PolicyDukaan</span>\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n      <ul fxLayout=\"row\" fxLayoutGap=\"1px\">\n        <li>\n          <button mat-icon-button>\n            <mat-icon routerLink=\"./settings\">settings</mat-icon>\n          </button>\n        </li>\n        <li>\n          <button mat-button [matMenuTriggerFor]=\"menu\">\n            <img src=\"../../../../assets/imgs/usr.png\">\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <li mat-menu-item><mat-icon>exit_to_app</mat-icon>Logout</li>\n          </mat-menu>\n        </li>\n      </ul>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n  <div class=\"profile-card\">\n    <img src=\"../../../../assets/imgs/usr.png\" alt=\"User Image\">\n    <div class=\"header\">\n      <h3>Admin</h3>\n      <h5>example@gmail.com</h5>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <h2 matSubheader>Pages</h2>\n  <a mat-list-item [routerLink]=\"['./']\" routerLinkActive=\"list-item-active\"><mat-icon>dashboard</mat-icon> Dashboard</a>\n  <a mat-list-item [routerLink]=\"['./allusers']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-users\"></i></mat-icon> All Users</a>\n  <a mat-list-item [routerLink]=\"['./companies']\" routerLinkActive=\"list-item-active\"><mat-icon>business</mat-icon> Companies</a>\n  <a mat-list-item [routerLink]=\"['./homeIU']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-home\"></i></mat-icon> Home Insurance Users</a>\n  <a mat-list-item [routerLink]=\"['./lifeIU']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-heartbeat\"></i></mat-icon> Life Insurance Users</a>\n  <a mat-list-item [routerLink]=\"['./healthIU']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fas fa-user-injured\"></i></mat-icon> Health Insurance Users</a>\n  <a mat-list-item [routerLink]=\"['./investmentIU']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-money\"></i></mat-icon> Investment Insurance Users</a>\n  <mat-divider></mat-divider>\n  <h2 matSubheader>Policies Requests</h2>\n  <a mat-list-item [routerLink]=\"['./homeIR']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-home\"></i></mat-icon> Home Insurance Requests</a>\n  <a mat-list-item [routerLink]=\"['./lifeIR']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-heartbeat\"></i></mat-icon> Life Insurance Requests</a>\n  <a mat-list-item [routerLink]=\"['./healthIR']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fas fa-user-injured\"></i></mat-icon> Health Insurance Requests</a>\n  <a mat-list-item [routerLink]=\"['./investmentIR']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-money\"></i></mat-icon> Investment Insurance Requests</a>\n  <a mat-list-item [routerLink]=\"['./claimR']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-user-plus\"></i></mat-icon> Claim Requests</a>\n  <mat-divider></mat-divider>\n  <a mat-list-item [routerLink]=\"['./messages']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fas fa-comment-alt\"></i></mat-icon> Messages</a>\n  <a mat-list-item [routerLink]=\"['./aProfile']\" routerLinkActive=\"list-item-active\"><mat-icon>assignment_ind</mat-icon> Profile</a>\n  <a mat-list-item [routerLink]=\"['./settings']\" routerLinkActive=\"list-item-active\"><mat-icon>settings</mat-icon> Settings</a>\n  <a mat-list-item [routerLink]=\"['./']\" routerLinkActive=\"list-item-active\"><mat-icon><i class=\"fa fa-sign-out\"></i></mat-icon> Logout</a>\n</mat-nav-list>\n<mat-divider></mat-divider>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/users-chart/users-chart.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/users-chart/users-chart.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n  [Highcharts]=\"Highcharts\"\n  [options]=\"chartOptions\"\n  style=\"width: 100%; height: 400px; display: block;\"\n></highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"container\">\n    <div class=\"header\">\n        <h2 class=\"text-center\">Update Form</h2><br><br>\n    </div>\n    <form #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n        <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"name\" required class=\"form-control ng-pristine\" id=\"name\"\n                    aria-describedby=\"name\" [(ngModel)]=\"userData.name\">\n                <small id=\"name\" class=\"form-text text-muted\">First Name</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"fname\" required class=\"form-control ng-pristine\" id=\"name\"\n                    aria-describedby=\"fname\" [(ngModel)]=\"userData.fname\">\n                <small id=\"fname\" class=\"form-text text-muted\">Last Name</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email & Mobile</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"email\" required class=\"form-control ng-pristine\" id=\"email\"\n                    aria-describedby=\"email\" [(ngModel)]=\"userData.email\">\n                <small id=\"email\" class=\"form-text text-muted\">Your Email</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"mobileno\" required class=\"form-control ng-pristine\" id=\"email\"\n                    aria-describedby=\"mobile\" [(ngModel)]=\"userData.mobileno\">\n                <small id=\"mobile\" class=\"form-text text-muted\">Your Mobile Number</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Comp, D.O.B & Gender</label>\n            <div class=\"col-sm-4\">\n                <select name=\"company\" required class=\"form-control\" id=\"company\" aria-describedby=\"company\"\n                    [(ngModel)]=\"userData.company\">\n                    <option>UBL Insurance</option>\n                    <option>EFU Insurance</option>\n                    <option>Adamjee Insurance</option>\n                    <option>UIC Insurance</option>\n                    <option>Jubilee Insurance</option>\n                    <option>TPL Insurance</option>\n                    <option>Askari Insurance</option>\n                    <option>Asia Insurance</option>\n                    <option>Habib Insurance</option>\n                    <option>Shaheen Insurance</option>\n                    <option>Sindh Insurance</option>\n                </select>\n                <small id=\"company\" class=\"form-text text-muted\">Select Company</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"date\" name=\"dob\" required class=\"form-control\" id=\"dob\" aria-describedby=\"dob\"\n                    [(ngModel)]=\"userData.dob\">\n                <small id=\"dob\" class=\"form-text text-muted\">Your Date of Birth</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <select name=\"gender\" required class=\"form-control\" id=\"gender\" aria-describedby=\"gender\"\n                    [(ngModel)]=\"userData.gender\">\n                    <option>Male</option>\n                    <option>Female</option>\n                </select>\n                <small id=\"gender\" class=\"form-text text-muted\">Gender</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Plan, Purpose</label>\n            <div class=\"col-sm-5\">\n                <select name=\"plan\" required class=\"form-control\" id=\"plan\" aria-describedby=\"plan\"\n                    [(ngModel)]=\"userData.plan\">\n                    <option>Life Insurance</option>\n                    <option>Investment</option>\n                    <option>Home Insurance</option>\n                    <option>Health Insurance</option>\n                </select>\n                <small id=\"plan\" class=\"form-text text-muted\">Select Your Plan</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <select name=\"for\" required class=\"form-control\" id=\"purpose\" [(ngModel)]=\"userData.for\">\n                    <option>Self</option>\n                    <option>Wife</option>\n                    <option>Son</option>\n                    <option>Daughter</option>\n                </select>\n                <small id=\"purpose\" class=\"form-text text-muted\">For</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">CNIC</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" name=\"cnic\" required class=\"form-control\" id=\"cnic\" aria-describedby=\"cnic\"\n                    [(ngModel)]=\"userData.cnic\">\n                <small id=\"cnic\" class=\"form-text text-muted\">Your CNIC</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" name=\"address\" required class=\"form-control\" id=\"address\" aria-describedby=\"address\"\n                    [(ngModel)]=\"userData.address\">\n                <small id=\"address\" class=\"form-text text-muted\">Your Address</small>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4 text-center\"><button [hidden]=\"fullform.form.invalid\"\n                    class=\"btn btn-primary btn-block\">Update</button></div>\n            <div class=\"col-sm-4\"></div>\n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Gender</th>\n          <th>Age</th>\n          <th>Mobile#</th>\n          <th>For</th>\n          <th>City</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.gender}}</td>\n          <td>{{user.age}}</td>\n          <td>{{user.for}}</td>\n          <td>{{user.mobile}}</td>\n          <td>{{user.city}}</td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Users not found!</h4>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/investment-request/investment-request.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/investment-request/investment-request.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Mobile#</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.mobile}}</td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Mobile#</th>\n          <th>DOB</th>\n          <th>Gender</th>\n          <th>Country</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.dob}}</td>\n          <td>{{user.gender}}</td>\n          <td>{{user.country}}</td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/admin-profile/admin-profile.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/admin-profile/admin-profile.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n<div class=\"container\">\n  <div class=\"outerBox\">\n      <div class=\"row\">\n          <div class=\"col box\">\n              <h3 class=\"text-center\"><img src=\"../../../../assets/imgs/usr.png\" class=\"img-fluid\"></h3><br>\n              <strong>Profile</strong>\n              <table class=\"table\">\n                  <tr>\n                      <th>Email</th>\n                      <td>policydukaan@gmail.com</td>\n                  </tr>\n                  <tr>\n                      <th>Mobile#</th>\n                      <td>+923212345678</td>\n                  </tr>\n                  <tr>\n                      <th>Address</th>\n                      <td>Lahore</td>\n                  </tr>\n              </table>\n          </div>\n          <div class=\"col\">\n              <div class=\"row box mb-2\">\n                  <div class=\"col\">\n                      <ul>\n                          <li>\n                              <h4>PolicyDukaan</h4>\n                          </li>\n                          <li>Cnic : <b>31098-7654321324-5</b></li>\n                          <li>Gmail : <b>policydukaan@gmail.com</b></li>\n                          <li>Skype : <b>policydukaan</b></li>\n                          <li>Facebook : <b>policydukaan@facebook.com</b></li>\n                          <li>Whatsapp : <b>+921234567895</b></li>\n                          <li>Instagram : <b>policy-dukaan</b></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"row box mb-2\">\n                  <div class=\"col\">\n                      <strong>Qualification</strong><br>\n                      <span>MSc (Computer Science) Islamia University Bahawalpur</span><br>\n                      <span>Full Stack Web Development <small>from</small> PNY Traings</span>\n                  </div>\n              </div>\n              <div class=\"row box\">\n                  <div class=\"col\">\n                      <strong>About</strong>\n                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur, repellendus\n                          neque aspernatur dignissimos rerum illum esse nisi a voluptate sit veniam commodi hic\n                          doloribus, velit assumenda expedita culpa? Magni? Lorem ipsum dolor, sit amet consectetur\n                          adipisicing elit. Illo molestias dolores atque corrupti culpa laborum necessitatibus\n                          aspernatur tempora velit quos! Aut a illum atque qui molestias recusandae eligendi, eius\n                          vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ad, eveniet minus enim\n                          deleniti minima non molestias quisquam quidem harum quis rem hic explicabo autem corrupti\n                          nostrum rerum repellat reiciendis?\n                      </p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/all-users/all-users.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/all-users/all-users.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table text-center table-bordered\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>User Id</th>\n          <th>Name</th>\n          <th>Father Name</th>\n          <th>Email</th>\n          <th>Plan</th>\n          <th>Mobile#</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user._id}}</td>\n          <td>{{user.name}}</td>\n          <td>{{user.fname}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.plan}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.address}}</td>\n          <td><a  [routerLink]=\"['/editUser', user._id]\" class=\"btn btn-light btn-sm\">Edit</a></td>\n          <td><button (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/claim-requests/claim-requests.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/claim-requests/claim-requests.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Mobile#</th>\n          <th>Plan</th>\n          <th>Reason</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let req of request\">\n          <td>{{req.name}}</td>\n          <td>{{req.email}}</td>\n          <td>{{req.mobileno}}</td>\n          <td>{{req.plan}}</td>\n          <td>{{req.reason}}</td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/companies/companies.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/companies/companies.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table text-center table-bordered\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Company Phone</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let comp of companies\">\n          <td>{{comp._id}}</td>\n          <td>{{comp.cname}}</td>\n          <td>{{comp.cemail}}</td>\n          <td>{{comp.cphone}}</td>\n          <td>{{comp.address}}</td>\n          <td><button class=\"btn btn-light btn-sm\" data-toggle=\"modal\"\n                  data-target=\"#exampleModalCenter\">View</button></td>\n          <td><button class=\"btn btn-danger btn-sm\" (click)=\"delete(comp._id)\">Delete</button></td>\n          <!-- model start -->\n          <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\n              aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                  <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">{{comp.cname}} info</h5>\n                      </div>\n                      <div class=\"modal-body\">\n                          <table class=\"table table-bordered text-center table-striped\">\n                              <tr>\n                                  <th>User Name</th>\n                                  <td>{{comp.uname}}</td>\n                              </tr>\n                              <tr>\n                                  <th>User Cnic</th>\n                                  <td>{{comp.cnic}}</td>\n                              </tr>\n                              <tr>\n                                  <th>User Mobile</th>\n                                  <td>{{comp.umobile}}</td>\n                              </tr>\n                              <tr>\n                                  <th>User Role</th>\n                                  <td>{{comp.role}}</td>\n                              </tr>\n                              <tr>\n                                  <th>Company Licence</th>\n                                  <td>{{comp.licence}}</td>\n                              </tr>\n                          </table>\n                      </div>\n                      <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <!-- model end -->\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/dashboard/dashboard.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/dashboard/dashboard.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12 col-lg-3 text-center\">\n            <div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\">\n                <div class=\"card-header text-primary\"><h2>{{totalUser}}</h2></div>\n                <div class=\"card-body text-primary\">\n                  <h5 class=\"card-title\">Total Users</h5>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 col-lg-3 text-center\">\n          <div class=\"card border-success mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header text-success\"><h2>{{totalCompanies}}</h2></div>\n            <div class=\"card-body text-success\">\n              <h5 class=\"card-title\">Total Companies</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 col-lg-3 text-center\">\n          <div class=\"card border-danger mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header text-danger\"><h2>{{totalClaimRequests}}</h2></div>\n            <div class=\"card-body text-danger\">\n              <h5 class=\"card-title\">Claim Requests</h5>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12 col-lg-3 text-center\">\n          <div class=\"card border-warning mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header\">Messages</div>\n            <div class=\"card-body text-warning\">\n              <h5 class=\"card-title\">{{ totalMessages }}</h5>\n            </div>\n          </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Father Name</th>\n          <th>Email</th>\n          <th>Plan</th>\n          <th>Insurance For</th>\n          <th>Mobile#</th>\n          <th>Cnic</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.fname}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.plan}}</td>\n          <td>{{user.for}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.cnic}}</td>\n          <td>{{user.address}}</td>\n          <td><button [routerLink]=\"[ '/editUser',user._id ]\" class=\"btn btn-light btn-sm\">Edit</button></td>\n          <td><button (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Father Name</th>\n          <th>Email</th>\n          <th>Plan</th>\n          <th>Insurance For</th>\n          <th>Mobile#</th>\n          <th>Cnic</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.fname}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.plan}}</td>\n          <td>{{user.for}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.cnic}}</td>\n          <td>{{user.address}}</td>\n          <td><button [routerLink]=\"[ '/editUser',user._id ]\" class=\"btn btn-light btn-sm\">Edit</button></td>\n          <td><button (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/investment-users/investment-users.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/investment-users/investment-users.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Father Name</th>\n          <th>Email</th>\n          <th>Plan</th>\n          <th>Investment For</th>\n          <th>Mobile#</th>\n          <th>Cnic</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.fname}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.plan}}</td>\n          <td>{{user.for}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.cnic}}</td>\n          <td>{{user.address}}</td>\n          <td><button [routerLink]=\"[ '/editUser',user._id ]\" class=\"btn btn-light btn-sm\">Edit</button></td>\n          <td><button (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table  class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Father Name</th>\n          <th>Email</th>\n          <th>Plan</th>\n          <th>Insurance For</th>\n          <th>Mobile#</th>\n          <th>Cnic</th>\n          <th>Address</th>\n          <th colspan=\"2\">Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let user of users\">\n          <td>{{user.name}}</td>\n          <td>{{user.fname}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.plan}}</td>\n          <td>{{user.for}}</td>\n          <td>{{user.mobileno}}</td>\n          <td>{{user.cnic}}</td>\n          <td>{{user.address}}</td>\n          <td><button [routerLink]=\"[ '/editUser',user._id ]\" class=\"btn btn-light btn-sm\">Edit</button></td>\n          <td><button (click)=\"deleteUser(user._id)\" class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/messages/messages.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/messages/messages.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered text-center\">\n  <thead class=\"bg-light text-dark\">\n      <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Message</th>\n          <th>Action</th>\n      </tr>\n  </thead>\n  <tbody class=\"text-light\">\n      <tr *ngFor=\"let msg of messages\">\n          <td>{{msg.name}}</td>\n          <td>{{msg.email}}</td>\n          <td>{{msg.message}}</td>\n          <td><button class=\"btn btn-danger btn-sm\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/settings/settings.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/settings/settings.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/default/default.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/default/default.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-admin-header (toggleSideBarOnClick)=\"sideBarToggler($event)\"></app-admin-header>\n<mat-drawer-container>\n  <mat-drawer mode=\"side\" [opened]='sidebarOpen'>\n    <app-admin-sidebar></app-admin-sidebar>\n  </mat-drawer>\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n<app-admin-footer></app-admin-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header *ngIf=\"showHead\"></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"showFoot\"></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/claim/claim.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/claim/claim.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n    <div class=\"container\">\n        <div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n            {{text}}\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"box\">\n            <div class=\"jumbotron\">\n                <h1 class=\"text-center\">CLAIM ASSISTANCE</h1>\n            </div>\n            <div class=\"form\">\n                <form #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n                    <div class=\"form-row\">\n                        <div class=\"col\">\n                            <label for=\"name\">Your Name</label>\n                            <input type=\"text\" name=\"name\" required class=\"form-control\" ngModel>\n                        </div>\n                        <div class=\"col\">\n                            <label for=\"plan\"><sup>*</sup>What is the claim for?</label>\n                            <select name=\"plan\" required class=\"form-control\" ngModel>\n                                <option selected>Select your plan</option>\n                                <option>Investment</option>\n                                <option>Health Insurance</option>\n                                <option>Home Insurance</option>\n                                <option>Life Insurance</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col\">\n                            <label for=\"mobile\"><sup>*</sup>Registered Mobile Number</label>\n                            <input type=\"text\" name=\"mobileno\" required class=\"form-control\" ngModel>\n                        </div>\n                        <div class=\"col\">\n                            <label for=\"email\"><sup>*</sup>Your Email Id</label>\n                            <input type=\"email\" name=\"email\" required class=\"form-control\" ngModel>\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"col\">\n                            <label for=\"reason\">Tell us a little about what happend?</label>\n                            <textarea name=\"reason\" required class=\"form-control\" rows=\"5\" cols=\"50\" ngModel></textarea>\n                        </div>\n                    </div><br>\n                    <div class=\"form-row text-center\">\n                        <div class=\"col\"></div>\n                        <div class=\"col\">\n                            <button [disabled]=\"fullform.form.invalid\" class=\"btn btn-primary\">Request Claim Assistance</button>\n                        </div>\n                        <div class=\"col\"></div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <hr>\n    <h2 class=\"text-center\">Help us spread the Word</h2>\n    <h4 class=\"text-muted text-center\">Follow, like, tweet or post. We Would love to intrect with you.</h4>\n    <ul>\n        <li id=\"fb\"><a><i class=\"fab fa-facebook-square fa-3x\"></i></a></li>\n        <li id=\"tw\"><a><i class=\"fab fa-twitter-square fa-3x\"></i></a></li>\n        <li id=\"insta\"><a><i class=\"fab fa-instagram fa-3x\"></i></a></li>\n        <li id=\"linkedin\"><a><i class=\"fab fa-linkedin-square fa-3x\"></i></a></li>\n        <li id=\"youtube\"><a><i class=\"fab fa-youtube fa-3x\"></i></a></li>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/companyregister/companylogin.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/companyregister/companylogin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container register\">\n    <div class=\"row\">\n        <div class=\"col-md-3 register-left\">\n            <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" alt=\"\" />\n            <h3>Welcome To PolicyDukan</h3>\n            <p>You are just one step away from being a part of Pakistan's largest policy home!</p>\n            <a class=\"btn btn-light\" [routerLink]=\"['/compLogin']\">Login</a><br />\n        </div>\n        <div class=\"col-md-9 register-right\">\n\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                    <h3 class=\"register-heading\">Create Account as a Company</h3>\n                    <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n                        <div class=\"row register-form\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"cname\" required\n                                        placeholder=\"Company Name *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"uname\" required\n                                        placeholder=\"Your Name *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" class=\"form-control\" minlength=\"6\" name=\"password\" required\n                                        placeholder=\"Password *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"cnic\" required\n                                        placeholder=\"Your CNIC *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"licence\" required\n                                        placeholder=\"Licence No *\" ngModel>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\" name=\"cemail\" required\n                                        placeholder=\"Company Email *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" minlength=\"10\" class=\"form-control\" name=\"cphone\" required\n                                        placeholder=\"Company Phone *\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" name=\"umobile\" minlength=\"10\" required placeholder=\"Your Mobile *\"\n                                        class=\"form-control\" ngModel>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"form-group\">\n                                        <select name=\"role\" class=\"form-control\" ngModel>\n                                            <option>Owner</option>\n                                            <option>Manager</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"text\" class=\"form-control\" name=\"address\" required placeholder=\"Address *\" ngModel>\n                                </div>\n                                <button class=\"btnRegister btn btn-primary\" [disabled]=\"fullform.form.invalid\">Register</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/complogin/complogin.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complogin/complogin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-5 col-lg-5\">\n            <div class=\"left\">\n                <h1 class=\"text-center\"><i class=\"fa fa-user-circle-o\"></i></h1>\n                <h4 class=\"text-center\">My Account</h4>\n                <h5 class=\"text-center\">Your own online Personal Assistant</h5>\n                <h6 class=\"text-center\">View & Manage Policy Details</h6>\n                <h6 class=\"text-center\">Raise Queries</h6>\n                <h6 class=\"text-center\">See your clients</h6>\n                <h6 class=\"text-center\">Check Details</h6>\n                <h6 class=\"text-center\">Customer Care</h6>\n                <h6 class=\"text-center\">Reviews & Feedback</h6>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-7 col-lg-7\">\n            <div class=\"right\">\n                <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"loginform(fullform)\">\n                    <div class=\"form-group\">\n                        <div class=\"col-auto\">\n                            <label class=\"sr-only\" for=\"inlineFormInputGroup\">Email</label>\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope fa-2x\"></i></div>\n                                </div>\n                                <input type=\"text\" name=\"email\" required class=\"form-control form-control-lg\"\n                                    id=\"inlineFormInputGroupUsername2\" placeholder=\"abc@gmail.com\" ngModel>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-auto\">\n                            <label class=\"sr-only\" for=\"inlineFormInputGroup\">Password</label>\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-lock fa-2x\"></i></div>\n                                </div>\n                                <input type=\"password\" name=\"password\" required class=\"form-control form-control-lg\"\n                                    id=\"inlineFormInputGroupUsername2\" placeholder=\"Password\" ngModel>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <h1 class=\"text-center\">\n                            <button class=\"btn btn-lg btn-primary\" [disabled]=\"fullform.form.invalid\">Proceed <i class=\"fa fa-paper-plane\"></i></button>\n                        </h1>\n                    </div>\n                    <div class=\"form-group text-center\">\n                        <span class=\"text-secondary\">if not register!</span>\n                        <a [routerLink]=\"['/companyRegister']\"><b>Register</b></a>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\"><h1 class=\"text-center\">Contact Us</h1></div>\n<div class=\"container\">\n    <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n        <div class=\"form-row\">\n            <div class=\"col\">\n                <label>Your Name</label>\n                <input type=\"text\" name=\"name\" required placeholder=\"your name\" class=\"form-control\" ngModel>\n            </div>\n            <div class=\"col\">\n                <label>Your Email</label>\n                <input type=\"text\" name=\"email\" required class=\"form-control\" placeholder=\"your email\" ngModel>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Your Message</label>\n            <textarea cols=\"50\" rows=\"5\" required placeholder=\"write your message here...\" class=\"form-control\" name=\"message\" ngModel></textarea>\n        </div>\n        <br>\n        <button class=\"btn btn-block btn-primary\" [disabled]=\"fullform.form.invalid\">Send</button>\n    </form><br>\n    <div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n            {{text}}\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n</div>\n<hr>\n<h2 class=\"text-center\">Help us spread the Word</h2>\n    <h4 class=\"text-muted text-center\">Follow, like, tweet or post. We Would love to intrect with you.</h4>\n    <ul>\n        <li id=\"fb\"><a><i class=\"fab fa-facebook-square fa-3x\"></i></a></li>\n        <li id=\"tw\"><a><i class=\"fab fa-twitter-square fa-3x\"></i></a></li>\n        <li id=\"insta\"><a><i class=\"fab fa-instagram fa-3x\"></i></a></li>\n        <li id=\"linkedin\"><a><i class=\"fab fa-linkedin-square fa-3x\"></i></a></li>\n        <li id=\"youtube\"><a><i class=\"fab fa-youtube fa-3x\"></i></a></li>\n    </ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col\">\n                PolicyDukaan Copyright 2019 | Designed by ScriptOne\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer2/footer2.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer2/footer2.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"container-fluid\">\n        <div class=\"row text-center\">\n            <div class=\"col\">\n                <ul class=\"text-center links\">\n                    <li class=\"link\"><a routerLink=\"/aboutus\">About us</a></li>\n                    <li class=\"link\"><a routerLink=\"/contactus\">Contact us</a></li>            \n                    <li id=\"fb\"><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                    <li id=\"tw\"><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n                    <li id=\"insta\"><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n                    <li id=\"you\"><a href=\"#\"><i class=\"fab fa-youtube\"></i></a></li>\n                    <li id=\"linked\"><a href=\"#\"><i class=\"fab fa-linkedin\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar sticky-top navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">PolicyDukaan</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/aboutus\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contactus\">Contact Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/claim\">Claim</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Sales 123-321-112</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Claims 123-321-123</a>\n          </li>\n      </ul>\n    </div>\n  </nav>\n<div class=\"secondNav navbar-expand-lg\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/lifeinsurance\">Life Insurance</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/investmentplan\">Investment Plans</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/healthinsurance\">Health Insurance</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/homeinsurance\">Home Insurance</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\"><i class=\"fa fa-user\"></i> My Account</a>\n          </li>\n        </ul>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health-insurance/health-insurance.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health-insurance/health-insurance.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n    <div class=\"box row\">\n        <div class=\"form col-md-5\">\n            <h4 class=\"text-center\">\n                <b>Free quotes</b> from top insurers with <b>lower premiums</b>\n            </h4>\n            <form #fullform=\"ngForm\" (ngSubmit)=\"healthform(fullform)\">\n                <label>Tell us about you</label>\n                <div class=\"form-row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"mobile\" required class=\"form-control\" placeholder=\"Your Mobile #\" ngModel>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" name=\"gender\" required ngModel>\n                                <option>Select Gender</option>\n                                <option>Male</option>\n                                <option>Female</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"name\" required class=\"form-control\" placeholder=\"Your Name\" ngModel>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" required name=\"city\" ngModel>\n                                <option>Select City</option>\n                                <option>Lahore</option>\n                                <option>Islamabad</option>\n                                <option>Karachi</option>\n                                <option>Fasilabad</option>\n                                <option>Bahawalpur</option>\n                                <option>Bahawalnagar</option>\n                                <option>Quetta</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" required ngModel name=\"for\">\n                                <option>Select Insurance For</option>\n                                <option>Self</option>\n                                <option>Spouse</option>\n                                <option>Daughter</option>\n                                <option>Son</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" required name=\"age\" placeholder=\"Your age in years\" class=\"form-control\" ngModel>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"col\">\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-block\" [disabled]=\"fullform.form.invalid\">Get Free Quotes <i\n                                    class=\"fa fa-arrow-right\"></i></button>\n                        </div>\n                    </div>\n                    <small>By clicking \"<b>Get Free Quotes</b>\" you, agreed to our <b>Privacy\n                            Policy</b> and Terms of use</small>\n\n                </div>\n            </form>\n        </div>\n    </div>\n    \n<div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n    {{text}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col content3\">\n            <ul>\n                <li id=\"active\">ABOUT HEALTH INSURANCE</li>\n                <li id=\"nonActive\">FAQ</li>\n            </ul>\n            <hr id=\"hr\">\n            <h3>Health Insurance</h3>\n            <p>Health insurance is a medical insurance policy that offers financial\n                coverage for medical expenses when the policyholder is hospitalised. Health Insurance Companies cover\n                the insured with the facility of cashless hospitalization at a network hospital or provide a\n                reimbursement for the incurred expenses.</p>\n            <img src=\"../../assets/imgs/health_insurance.jpg\" class=\"img-fluid float-right\">\n            <p>The health insurance plan ensures cashless treatment,\n                reimbursement of medical expenses &amp; day-care hospitalisation along with comprehensive coverage for\n                pre &amp; post hospitalisation expenses etc. Furthermore, health insurance cost is subsidized to the\n                insured in the form of tax exemption under section 80D of Income Tax Act, 1961.</p>\n            <p><strong>Individual Plans Cashless\n                    Hospitalization:</strong> Medical expenses are sky-rocketing! Get health insurance policies for your\n                medical outlay. With cashless facility, stay tension-free. Approved by IRDAI, PolicyBazaar helps you\n                compare and find the best health plan.</p>\n            <ul>\n                <li>Individual Health Insurance Plan from Top Insurers</li>\n                <li>Lowest Premium On Medical Insurance</li>\n                <li>Compare Policies Instantly</li>\n            </ul>\n            <h3>Top 5 Health Insurance Plans</h3>\n            <div>\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>Insurer Name</th>\n                            <th>Plan Name</th>\n                            <th>Sum Insured</th>\n                            <th>Network Hospitals</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>Apollo Munich Health Insurance</td>\n                            <td>Optima Restore</td>\n                            <td>Rs. 3 Lakh to Rs. 50 Lakh</td>\n                            <td>5000+</td>\n                        </tr>\n                        <tr>\n                            <td>Max Bupa Health Insurance</td>\n                            <td>Health Companion</td>\n                            <td>Rs. 3 Lakh to Rs. 1 Crore</td>\n                            <td>3500+</td>\n                        </tr>\n                        <tr>\n                            <td>Star Health Insurance</td>\n                            <td>Health Optima</td>\n                            <td>Rs. 1 Lakh to Rs. 25 Lakh</td>\n                            <td>7950+</td>\n                        </tr>\n                        <tr>\n                            <td>HDFC ERGO Health Insurance</td>\n                            <td>Health Suraksha Plus – Silver</td>\n                            <td>Rs. 3 Lakh to Rs. 10 Lakh</td>\n                            <td>9000+</td>\n                        </tr>\n                        <tr>\n                            <td>Royal Sundaram Health Insurance</td>\n                            <td>Lifeline Supreme</td>\n                            <td>Rs. 5 Lakh to Rs. 50 Lakh</td>\n                            <td>3000+</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h3>Importance of Health Insurance in Pakistan</h3>\n                <p>Health insurance in Pakistan is one of the fastest growing industries. However, this wide scope for\n                    growth indicates the limited penetration of health insurance among the Pakistann populace. As per\n                    the\n                    latest report released by National Sample Survey Organization (NSSO) titled “Key Indicators of\n                    Social Consumption in Pakistan: Health”, only 20 percent of the Pakistann population had health\n                    insurance\n                    coverage. Additionally, only 18 percent of the total population residing in urban areas and 14\n                    percent of the total population residing in rural areas had any form of health insurance coverage.\n                </p>\n                <p>Thus, there is no debating the importance of having insurance in a country like Pakistan where\n                    medical\n                    expenses are sky-rocketing. Everyone must buy a good health insurance policy that includes medical\n                    costs, hospitalisation costs, medication and laboratory test costs, including critical illness.\n                    Don’t get confused with questions like – Which health policy to buy? Does it cover every\n                    eventuality? What illnesses are excluded from this cover? PolicyBazaar is here to resolve all such\n                    confusions.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-insurance/home-insurance.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-insurance/home-insurance.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n    <div class=\"row container-fluid\">\n        <div class=\"col left\">\n            <h3>Home Insurance</h3>\n            <small>\n                <p>Choose the best home insurance policy at<br>PolicyBazaar and safeguard your house from<br> natural\n                    and man made disaster.</p>\n            </small>\n        </div>\n        <div class=\"col\"><img src=\"../../assets/imgs/home_insurance.jpg\" class=\"img-fluid\"></div>\n        <div class=\"col right\">\n            <ul>\n                <li>Compare Home Insurance from Top Insurers</li>\n                <li>Lowest Premium on Home Insurance</li>\n                <li>Instant Home Insurance Online</li>\n            </ul>\n            <button class=\"btn btn-primary\">New Quotes</button>\n        </div>\n    </div>\n</div>\n<div class=\"vid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <video autoplay muted loop id=\"bgVideo\">\n                <source src=\"../../assets/videos/bg_video.mp4\" type=\"video/mp4\">\n            </video>\n            <h2 class=\"text-center\">Home Insurance</h2>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col content\">\n            <ul>\n                <li id=\"active\">ABOUT LIFE INSURANCE</li>\n                <li id=\"nonActive\">FAQ</li>\n            </ul>\n            <hr id=\"hr\"><br>\n            <h3><i class=\"fa fa-home\"></i>Home Insurance: A Shield Against Loss/Damage</h3>\n            <p>Home Insurance: Choose the best home insurance policy at PolicyBazaar and safeguard your house from\n                natural and man-made disasters.</p>\n            <ul>\n                <li>Compare Home Insurance from Top Insurers</li>\n                <li>Lowest Premium on Home Insurance</li>\n                <li>Instant Home Insurance Online</li>\n            </ul>\n            <p><em>“<strong>A house is made of walls and beams; a home is made with love and dreams.”</strong></em></p>\n            <p>There is no such place like home in the entire Universe. After all, it is a place where you and your\n                loved ones can rejoice, weave thousands of memories that last for a lifetime. While we put our life’s\n                savings into buying or constructing a home but we rarely realize that our home needs a protection in the\n                form of insurance too. By investing in a good home insurance policy, also referred as home owners\n                insurance, you can protect your home from threats. Situations like burglary, fire, earthquake or\n                destruction of house due to riots are quite common in India.</p>\n            <p>Don’t wait for a calamity to remind you the need of buying a home insurance, opt for it beforehand!</p>\n            <p> </p>\n            <h3><i class=\"fa fa-check\"></i>Top 5 Benefits of Home Insurance</h3>\n            <p>There is no denying of the fact that house insurance is a must, however, there are other benefits and\n                riders to buying such a policy that will add convince you totally. Have a look below:<span\n                    style=\"font-size: 12.1599998474121px; line-height: 1.3em;\"> </span></p>\n            <ul>\n                <li>Get comprehensive coverage to both content and structure of your home.</li>\n                <li>Secure your assets from any mis-happening.</li>\n                <li>Buy home insurance policy at comparatively lower premium rates than other insurance policies.</li>\n                <li>Reduce stress and tension level for you’ll have a home insurance to fall back to, in case of\n                    unforeseen circumstances.</li>\n                <li>Timely insurance payouts allow families to go through rebuilding process quickly, helping them to\n                    move on and get back to their normal daily lives.</li>\n            </ul>\n            <p> </p>\n        </div>\n    </div>\n</div>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n    <div class=\"main_box container\">\n        <div class=\"box\"><i class=\"fa fa-money fa-3x\"></i><br><small>Investment Plan</small></div>\n        <div class=\"box\"><i class=\"fa fa-heartbeat fa-3x\"></i><br><small>Life Insurance</small></div>\n        <div class=\"box\"><i class=\"fa fa-umbrella fa-3x\"></i><br><small>Health Insurance</small></div>\n    </div>\n</div>\n<div class=\"container text-center second_box\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <hr>\n                </div>\n                <div class=\"col\"><span class=\"badge badge-secondary\">Life</span></div>\n                <div class=\"col\">\n                    <hr>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\"><i class=\"fa fa-leaf fa-3x\"></i><br><small>Term Plan</small></div>\n                <div class=\"col\"><i class=\"fa fa-umbrella fa-3x\"></i><br><small>Spouse Plan</small></div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <hr>\n                </div>\n                <div class=\"col\"><span class=\"badge badge-secondary\">Health</span></div>\n                <div class=\"col\">\n                    <hr>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\"><i class=\"fa fa-heartbeat fa-3x\"></i><br><small>Health Plan</small></div>\n                <div class=\"col\"><i class=\"fa fa-users fa-3x\"></i><br><small>Family Mediclaim</small></div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <hr>\n                </div>\n                <div class=\"col\"><span class=\"badge badge-secondary\">Investment</span></div>\n                <div class=\"col\">\n                    <hr>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\"><i class=\"fa fa-child fa-3x\"></i><br><small>Child Plan</small></div>\n                <div class=\"col\"><i class=\"fa fa-user fa-3x\"></i><br><small>Retirement Plan</small></div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <hr>\n                </div>\n                <div class=\"col\"><span class=\"badge badge-secondary\">Other</span></div>\n                <div class=\"col\">\n                    <hr>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\"><i class=\"fa fa-home fa-3x\"></i><br><small>Home Insurance</small></div>\n                <div class=\"col\"><i class=\"fa fa-car fa-3x\"></i><br><small>Car Insurance</small></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"content1\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-md-5\">\n            <h4>Insurance made simpler and faster</h4>\n            <h5 class=\"text-muted\">All insurance solutions in one place</h5>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"box\">\n                        <i class=\"fa fa-balance-scale fa-2x\"></i>\n                        <h5>Compare 250+ Plans</h5><small class=\"text-muted\">To save upto 30%</small>\n                    </div>\n                    <div class=\"box\">\n                        <i class=\"fa fa-bar-chart fa-2x\"></i>\n                        <h5>Over 10L crore</h5><small class=\"text-muted\">Cover provided</small>\n                    </div>\n                    <div class=\"box\">\n                        <i class=\"fa fa-users fa-2x\"></i>\n                        <h5>200,000 people </h5><small class=\"text-muted\">Currently comparing online</small>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"box\">\n                        <i class=\"fa fa-phone fa-2x\"></i>\n                        <h5>Always at your service</h5><small class=\"text-muted\">+923212345512</small>\n                    </div>\n                    <div class=\"box\">\n                        <i class=\"fa fa-close fa-2x\"></i>\n                        <h5>Cancellation support</h5><small class=\"text-muted\">Full support for cancellations and\n                            endorsments</small>\n                    </div>\n                    <div class=\"box\">\n                        <i class=\"fa fa-diamond fa-2x\"></i>\n                        <h5>50+ awards </h5><small class=\"text-muted\">Currently comparing online</small>\n                    </div>\n                </div>\n            </div><br>\n            <h3 class=\"text-center\"><button class=\"btn btn-lg btn-primary\">Know More</button></h3>\n        </div>\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n    </div>\n</div>\n<div class=\"registerBox\">\n    <div class=\"container registerBox2 text-center\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"box1\">\n                    <img src=\"../../assets/imgs/user.jpg\" class=\"img-fluid\">\n                    <h5>Register as a <br>\n                        <h4>Client</h4>\n                    </h5><br>\n                    <button class=\"btn btn-primary\"><a [routerLink]=\"[ '/register']\">Sign Up</a></button>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"box2\">\n                    <img src=\"../../assets/imgs/company.png\" class=\"img-fluid\">\n                    <h5>Register as a<br>\n                        <h4>Company</h4>\n                    </h5><br>\n                    <button class=\"btn btn-light\"><a [routerLink]=\"['/companyRegister']\">Sign Up</a></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"content2\">\n    <h2 class=\"text-center\">Our Parterns</h2>\n    <h4 class=\"text-center text-muted\">Leading insurers for your financial freedom</h4><br>\n    <div class=\"container\">\n        <ul>\n            <li>UBL Insurance</li>\n            <li>EFU Insurance</li>\n            <li>Adamjee Insur</li>\n            <li>UIC Insurance</li>\n            <li>Jubilee Insurance</li>\n            <li>TPL Insurance</li>\n        </ul>\n        <ul>\n            <li>Askari Insurance</li>\n            <li>Asia Insurance</li>\n            <li>Habib Insurance</li>\n            <li>Shaheen Insur</li>\n            <li>Sindh Insurance</li>\n            <li>IGI Insurance</li>\n        </ul>\n    </div>\n</div>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/investmentplan/investmentplan.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/investmentplan/investmentplan.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"top\">\n        <div class=\"row\">\n            <div class=\"col-md-5 left text-center\">\n                <i id=\"arrow\" class=\"fa fa-arrow-circle-o-left fa-2x\"></i>\n                <div class=\"box\">\n                    <strong class=\"text-muted\">Compare Now To Earn High Returns From Your Investments</strong><br><br>\n                    <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n                        <div class=\"form-group\">\n                            <div class=\"col-auto\">\n                                <label class=\"sr-only\" for=\"inlineFormInputGroup\">Name</label>\n                                <div class=\"input-group mb-2\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text\"><i class=\"fa fa-user fa-2x\"></i></div>\n                                        <div class=\"input-group-text\">Name</div>\n                                    </div>\n                                    <input type=\"text\" name=\"name\" class=\"form-control form-control-lg\"\n                                        id=\"inlineFormInputGroupUsername2\" placeholder=\"Your Name\" required ngModel>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-auto\">\n                                <label class=\"sr-only\" for=\"inlineFormInputGroup\">Mobile</label>\n                                <div class=\"input-group mb-2\">\n                                    <div class=\"input-group-prepend\">\n                                        <div class=\"input-group-text\"><i class=\"fa fa-mobile-phone fa-2x\"></i></div>\n                                        <div class=\"input-group-text\">Mobile</div>\n                                    </div>\n                                    <input type=\"text\" name=\"mobile\" class=\"form-control form-control-lg\"\n                                        id=\"inlineFormInputGroupUsername2\" placeholder=\"Your Mobile #\" required ngModel>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <p>If you invest <b><i class=\"fa fa-dollar\"></i> 5 K</b> per month and get <b><i\n                                        class=\"fa fa-dollar\"></i> 51.9 L</b> tax free on maturity</p>\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"fullform.form.invalid\">View Plans <i\n                                    class=\"fa fa-arrow-right\"></i></button>\n                        </div>\n                        <small>By clicking on \"View Plans\" you, agreed to our <a>Privacy Policy</a> and <a>Terms of\n                                use</a></small>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-3 text_box\">\n                <h5>Growth Plans</h5>\n                <h6>Invest 5K per month & Get Rs 50 Lac return</h6>\n                <ul>\n                    <li>Zero Capital Gains tax unlike 10% in Mutual Funds.</li>\n                    <li>Save upto Rs 50,0000 in tex under section 80 C.</li>\n                </ul>\n            </div>\n            <div class=\"col right\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n\n    <div class=\"row container-fluid\">\n\n        <hr id=\"hr\">\n        <div class=\"col-md-12 content\">\n            <ul>\n                <li id=\"active\">ABOUT LIFE INSURANCE</li>\n                <li id=\"nonActive\">FAQ</li>\n            </ul>\n            <hr id=\"hr\">\n            <h3>Investment Plans</h3>\n            <p>While talking about investment plans and the world of investing, three words come to mind - intimidating,\n                overwhelming, and scary. For a ‘regular Joe’ this question seems perpetual.</p>\n            <p>One of the Founding Fathers, Benjamin Franklin quoted, “An investment in knowledge pays the best\n                interest.” Here he means that when it comes to investing; always educate yourself to earn better\n                returns. This means, being an investor, one must do all the necessary research, analysis, and study\n                before s/he coming to any investment decision.</p>\n            <p>For different stages of life one needs funds. One has to build the financial corpus - be it child’s\n                marriage or education, or his/her retirement savings. While seeking different ways to build this\n                financial corpus, one often tends to look out better investment options and higher returns from them.\n                Due to a number of investment options, there’s no simple and easy solution to it. However, the ease of\n                different investment plans offered by various life insurance providers is one of the reasonable options\n                available.</p>\n            <h5>What is an Investment Plan?</h5>\n            <p>An investment plan is a financial product that provides the opportunity to create wealth for the future.\n                Life Insurance products are often used as investment instruments. The advantage of investing through a\n                life insurance plan is that it not only allows you to create wealth for the future but also offers\n                comprehensive life coverage at the same time.</p>\n            <h5>Overview of Investment Plans</h5>\n            <p>These plans are basically of two types, Unit Linked Insurance Plans or ULIPs that provide returns based\n                on market performance, and traditional endowment plans that offer a lump sum or annuity pay-out at the\n                end of the policy term when the <a href=\"\">life insurance\n                    policy</a> matures. These types of saving schemes or investments offer life coverage and returns but\n                differ in their construct.</p>\n            <p>A sound investment plan with life coverage and returns invests the premium paid by policyholder in the\n                market instruments and give market returns. These returns are comparatively volatile as they depend on\n                the performance of the stock markets.</p>\n            <p>Whereas, an endowment plan offers lower but safer returns. However, a customer does not get to know where\n                they are saving money or it is being further used due to the opaque construct of endowment plans, unlike\n                ULIPs where they know where their fund is being put. ULIPs offer customers the option to check the\n                status of their investments through a figure called the Net Asset Value (NAV), among others.</p>\n            <p>Nonetheless, endowment plans have their own benefits. Where ULIPs give the policyholder a lot more\n                flexibility and transparency, endowment plans act as a guaranteed return investment plans option as they\n                offer definite profits.</p>\n            <h5>Best Investment Plans in Pakistan 2019</h5>\n            <p>There are a plethora of <a href=\"\">investment options available in the market</a>. Here is a\n                list of the best investment plans in Pakistan to invest in 2019. However, this list is not in any\n                particular order: </p>\n            <table class=\"table table-bordered text-center\">\n                <thead>\n                    <tr>\n                        <th>Investment Plans</th>\n                        <th>Plan Type</th>\n                        <th>Entry Age</th>\n                        <th>Maximum Maturity Age</th>\n                        <th>Policy Term</th>\n                        <th>Fund Options</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>HDFC Life Click2invest</td>\n                        <td>ULIP</td>\n                        <td>30 days - 65 years</td>\n                        <td>75 years</td>\n                        <td>5 - 20 years</td>\n                        <td>8</td>\n                    </tr>\n                    <tr>\n                        <td>SBI eWealth</td>\n                        <td>ULIP</td>\n                        <td>18 - 50 years</td>\n                        <td>60 years</td>\n                        <td>10 - 30 years (both inclusive)</td>\n                        <td>4</td>\n                    </tr>\n                    <tr>\n                        <td>ICICI Pru Smart Life</td>\n                        <td>ULIP</td>\n                        <td>20-54 years</td>\n                        <td>20-64 years</td>\n                        <td>10 - 25 years</td>\n                        <td>8</td>\n                    </tr>\n                    <tr>\n                        <td> Future Gain</td>\n                        <td>ULIP</td>\n                        <td>1 - 60 years</td>\n                        <td>70 years</td>\n                        <td>10 - 25 years</td>\n                        <td>7</td>\n                    </tr>\n                    <tr>\n                        <td>\n                            Aegon iInvest\n                        </td>\n                        <td>ULIP</td>\n                        <td>7 - 55 years</td>\n                        <td>70 years</td>\n                        <td>10/ 15/ 20/ 25 years</td>\n                        <td>5</td>\n                    </tr>\n                    <tr>\n                        <td> AXA eFuture Invest</td>\n                        <td>ULIP</td>\n                        <td>18 - 60 years</td>\n                        <td>70 years</td>\n                        <td>10 years</td>\n                        <td>6</td>\n                    </tr>\n                    <tr>\n                        <td>SBI Life- Smart Scholar</td>\n                        <td>Unit-linked child plan18-57 years (for proposer) 0- 17 years (for child)</td>\n                        <td>65 years</td>\n                        <td>8-25 years minus child's age at entry</td>\n                        <td>7</td>\n                    </tr>\n                    <tr>\n                        <td> Allianz Fortune Gain</td>\n                        <td>ULIP</td>\n                        <td>1 - 63 years</td>\n                        <td>70 years</td>\n                        <td>7 - 30 years</td>\n                        <td>7</td>\n                    </tr>\n                    <tr>\n                        <td>Future Generali Easy Invest Online Plan</td>\n                        <td>ULIP</td>\n                        <td>0-60 years </td>\n                        <td>18-70 year</td>\n                        <td>10-20 years</td>\n                        <td>5</td>\n                    </tr>\n                    <tr>\n                        <td>HDFC SL YoungStar Super Premium</td>\n                        <td>Unit-Linked child plan</td>\n                        <td>18 - 55/65 years</td>\n                        <td>65/75 years</td>\n                        <td>10 - 20 years</td>\n                        <td>4</td>\n                    </tr>\n                    <tr>\n                        <td> iGrowth</td>\n                        <td>Unit-Linked life Insurance plan</td>\n                        <td>18- 50 years</td>\n                        <td>60 years</td>\n                        <td>10, 15, or 20 years</td>\n                        <td>3</td>\n                    </tr>\n                    <tr>\n                        <td> Allianz Retire Rich</td>\n                        <td>Unit-Linked pension plan</td>\n                        <td>30 - 73 years</td>\n                        <td>80 years</td>\n                        <td>7 - 30 years</td>\n                        <td>3</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<app-footer2></app-footer2>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lifeinsurance/lifeinsurance.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lifeinsurance/lifeinsurance.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <img src=\"../../assets/imgs/life_insurance.png\" class=\"img-fluid\">\n        </div>\n        <div class=\"col\">\n            <h3>Get Rs 1 Cr. life cover at Rs 490/month*</h3>\n            <h6>Protection against all forms of death, disease & disability</h6>\n            <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n                <div class=\"form-row text-center\">\n                    <div class=\"col text-left\"><label>Select Gender</label></div>\n                    <div class=\"col\">\n                        <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" value=\"male\" class=\"custom-control-input\" id=\"customControlValidation1\"\n                                name=\"gender\" required ngModel>\n                            <label class=\"custom-control-label\" for=\"customControlValidation1\"><i\n                                    class=\"fa fa-male fa-2x\"></i></label>\n                        </div>\n                    </div>\n                    <div class=\"col\">\n                        <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" value=\"female\" class=\"custom-control-input\"\n                                id=\"customControlValidation2\" name=\"gender\" required ngModel>\n                            <label class=\"custom-control-label\" for=\"customControlValidation2\"><i\n                                    class=\"fa fa-female fa-2x\"></i></label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Your Name</label>\n                    <input type=\"text\" name=\"name\" required class=\"form-control\" placeholder=\"Your name\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label>Data of Birth</label>\n                    <input type=\"date\" name=\"dob\" required class=\"form-control\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                    <label>Select Country</label>\n                    <select name=\"country\" required class=\"form-control\" ngModel>\n                        <option>Pakistan</option>\n                        <option>Saudia Arabia</option>\n                        <option>China</option>\n                        <option>UAE</option>\n                        <option>USA</option>\n                        <option>UK</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label>Mobile Number</label>\n                    <input type=\"text\" required name=\"mobileno\" class=\"form-control\" placeholder=\"your mobile no\"\n                        ngModel>\n                </div>\n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-primary btn-block\" [disabled]=\"fullform.form.invalid\">Submit</button>\n                    <small>By clicking on \"Submit\" you, agreed to our <span>Privacy Policy</span> and <span>Terms of\n                            use.</span></small>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div *ngIf=\"message\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        {{text}}\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n</div>\n<br>\n<div class=\"container\">\n    <div class=\"row text-center boxs\">\n        <div class=\"col\">\n            <div class=\"box\">\n                <i class=\"fa fa-th-list fa-2x\"></i>\n                <p>Choose From<b><br> 20+ Insurers</b></p>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"box\">\n                <i class=\"fa fa-dollar fa-2x\"></i>\n                <p>Plans Starting at<b><br><i class=\"fa fa-dollar\"></i> 200/month</b></p>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"box\">\n                <i class=\"fa fa-tag fa-2x\"></i>\n                <p>Policies Sold<b><br>123,456</b></p>\n            </div>\n        </div>\n    </div>\n</div><br><br>\n<div class=\"content container\">\n    <ul>\n        <li id=\"active\">ABOUT LIFE INSURANCE</li>\n        <li id=\"nonActive\">FAQ</li>\n    </ul>\n    <hr id=\"hr\">\n    <div class=\"content2\">\n        <div class=\"row\"><br><br>\n            <div class=\"col\">\n                <h4>Life Insurance</h4>\n                <hr>\n                <p>For an individual, life insurance is the most-safest and securest way to protect their family/\n                    dependents against financel contingencies that may arise post their untimely demise.</p>\n                <br>\n                <h5>What is Life Insurance Policy?</h5>\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <p>A life insurance policy is an agreement between an insurance company & a policyholdeer, that\n                            offers financial coverage under which the insurer guarantees to pay a certain amount to the\n                            nominated beneficiary in th unfortunate event of th insured person demise during the term of\n                            life insurance plans. In exchange, the policyholder agrees to pay a predefined amount of\n                            money as premium either on a regular basis or as a single premium. If covered by the policy,\n                            coverage wil be provided for critical illness as well.<br>Since it provide enhanced\n                            insurance coverage, it attracts an enhanced insurance premium.</p>\n                    </div>\n                    <div class=\"col\"><img src=\"../../assets/imgs/life_insurance4.jpg\" class=\"img-fluid\"></div>\n                </div>\n                <h5>Online Life Insurance Plans</h5>\n                <p>True to its name, online life insurance plans are available exclusively online. An online life\n                    insurance plan also offers death benefit in the form of a high sum assured at a low premium.\n                    Moreover, online life insurance plans also offer several tax benefits unser Section 80C of th income\n                    Tax Act, 1961.</p>\n                <h5>Who Determione Life Insurance Premium?</h5>\n                <p>The insurance company determines the premium payable by the policyholder to the insurance company.\n                    Having said that, the insurance buyer gets to select the term of the policy and the sum\n                    assured.<br>In order to calculate the sum assured of a <em><i>life insurance policy</i></em>, the\n                    insurer takes various factors such as your lifestyle, occupation, number of dependents, finances,\n                    sum assured etc. into consideration.<br>\n                    <strong>Note-</strong>There is no premium calculator that can calculate the worth of human life.\n                </p>\n                <h5>Best Life Insurance Plans in Pakistan 2019</h5>\n                <p>Listed below are the best planes:</p>\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th>Insurance Plan</th>\n                            <th>Entry Age\n                                (Minimum/Maximum)</th>\n                            <th>Policy Term\n                                (Minimum/Maximum)</th>\n                            <th>Sum Assured\n                                (Minimum/Maximum)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th>Aegon Life iTerm Plan</th>\n                            <td>18/75 years</td>\n                            <td>5/40 years</td>\n                            <td>10 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>Aviva I-Life Plan</th>\n                            <td>18/55 years</td>\n                            <td>10/35 years</td>\n                            <td>25 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>Bajaj Allianz i-Secure</th>\n                            <td>18/70 years</td>\n                            <td>10/30 years</td>\n                            <td>20 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>AXA e-Protect Term Plan</th>\n                            <td>18/75 years</td>\n                            <td>10/30 years</td>\n                            <td>25 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>HDFC Click2Protect Plus</th>\n                            <td>18 /65 years</td>\n                            <td>10/30 years</td>\n                            <td>10 Lakh/10 Crores</td>\n                        </tr>\n                        <tr>\n                            <th>HDFC Life Sanchay</th>\n                            <td>30/45 years</td>\n                            <td>15/25 years</td>\n                            <td>1,05,673/NA</td>\n                        </tr>\n                        <tr>\n                            <th>HDFC SL Crest</th>\n                            <td>14/55 years</td>\n                            <td>10/10 years</td>\n                            <td>(7 or 10) x Annual Premium/20 x Annual Premium\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>ICICI Pru iProtect</th>\n                            <td>20/75 years</td>\n                            <td>10/30 years</td>\n                            <td>3 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>Kotak Life Preferred e-Term</th>\n                            <td>18/75 years</td>\n                            <td>10/40 years</td>\n                            <td>25 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>LIC Amulya Jeevan</th>\n                            <td>18/60 years</td>\n                            <td>5/35 years</td>\n                            <td>25 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>LIC New Jeevan Anand</th>\n                            <td>18/50 years</td>\n                            <td>15/50 years</td>\n                            <td>1 Lakh /NA</td>\n                        </tr>\n                        <tr>\n                            <th>LIC Term Plan</th>\n                            <td>18/75 years</td>\n                            <td>10/35 years</td>\n                            <td>50 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>Max Life Online Term Plan</th>\n                            <td>18/70 years</td>\n                            <td>10/35 years</td>\n                            <td>25 Lakh/100 Crores</td>\n                        </tr>\n                        <tr>\n                            <th>SBI eShield Plan</th>\n                            <td>18/70 years</td>\n                            <td>5/30 years</td>\n                            <td>20 Lakh/NA</td>\n                        </tr>\n                        <tr>\n                            <th>SBI Shubh Nivesh Plan</th>\n                            <td>18/60 years</td>\n                            <td>5/30 years</td>\n                            <td>75000/NA</td>\n                        </tr>\n                    </tbody>\n                </table>\n                <h5>Why it is Important to Buy Life insurance policy?</h5>\n                <p>A life insurance policy acts as a financial net in case of eventuality linked with human life, such\n                    as disability, accident, death, etc.</p>\n                <p>In case of sudden demise of the primary breadwinner of a family, apart from the emotional trauma,\n                    his/her family will be at the risk of a financial crunch due to loss of income.</p>\n                <p>In order to make sure that one's family doesn't have to make any compromises due to financial crunch,\n                    one should buy a suitable life coverage plan. It will help his/her family to sail through the tough\n                    times with dignity.</p>\n                <p>Here is why it is important to buy a life insurance policy:</p>\n                <ul>\n                    <li>\n                        <p><strong>Hedge against Unpredictability- </strong>Life is unpredictable; one can't predict\n                            when\n                            his/her life will come to an end. If it were up to people, nobody would want to leave\n                            without\n                            ensuring the financial security of his/her family. Sadly, it's not up to them. In order to\n                            take\n                            care of their family’s financial future, one must buy a life policy and be a step ahead.\n                            Doing\n                            so will ensure that the financial goals set for his/her family can be accomplished even when\n                            he/she isn't around.</p>\n                    </li>\n                    <li>\n                        <p><strong>Financial Cushion- </strong>It provides much-needed financial support to the\n                            insured's\n                            family by compensating for the loss of income.</p>\n                    </li>\n                    <li>\n                        <p><strong>Debt-Proof Future- </strong>The sudden demise of a breadwinner is nothing short of a\n                            catastrophe for their family. While it is an emotional crisis initially, it can get\n                            converted\n                            into a financial crisis in no time. With the help of life coverage, any outstanding debt\n                            such as\n                            a motor loan, personal loan, home loan, etc. can be taken care of.</p>\n                    </li>\n                    <li>\n                        <p><strong>Accomplishment of Retirement Goals- </strong>A life policy is a perfect option to\n                            accomplish long-term goals including retirement goals. Some life insurance plans offer\n                            diverse\n                            investment opportunities and some insurance plans offer performance-based dividends.</p>\n                    </li>\n                    <li>\n                        <p><strong>Mental Peace- </strong>Life policy offers much-needed peace of mind to the\n                            policyholder\n                            by assuring the financial future of their family. Even a basic life coverage plan helps to\n                            generate corpus to take care of the future financial needs of the insured's family.</p>\n                    </li>\n                    <li>\n                        <p><strong>Savings Tool-</strong>In case a policyholder opts for a unit-linked plan, they will\n                            have\n                            to pay an enhanced insurance premium. This extra amount of money is invested in the\n                            insured's\n                            preferred fund and consequently acts as a savings tool.</p>\n                    </li>\n                    <li>\n                        <p><strong>Children's Future Expenses- </strong>A life policy takes care of all the future\n                            expenses\n                            of a policyholder's children such as education and wedding expenses. These days, the cost of\n                            raising a child is sky-high. Not just that, even getting admission in a reputed college\n                            costs a\n                            bomb. The life insurance policy ensures that the policyholder's children don't have to make\n                            any\n                            compromises for their education and personal needs.</p>\n                    </li>\n                    <li>\n                        <p><strong>Business Security- </strong>While some life insurance plans fulfill the financial\n                            needs\n                            of the insured and his/her family, there are some insurance plans available in the market\n                            that\n                            offer support to the insured's business. Such plans also enable a business partner to buy\n                            the\n                            share of the deceased business partner.</p>\n                    </li>\n                </ul>\n                <p>Once the insurance buyer knows what they want, the next step is to shop around and compare\n                    <em><i>life insurance plans</i></em> that fulfill their insurance requirement. The <em><i>best\n                            insurance policy</i></em> is the one that fulfills the needs of the insurance buyer.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"registerBox\">\n    <div class=\"container registerBox2 text-center\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"box1\">\n                    <img src=\"../../assets/imgs/user.jpg\" class=\"img-fluid\">\n                    <h5>SignIn as a <br>\n                        <h4>Client</h4>\n                    </h5><br>\n                    <button class=\"btn btn-primary\"><a [routerLink]=\"[ '/userLogin']\">Sign In</a></button>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"box2\">\n                    <img src=\"../../assets/imgs/company.png\" class=\"img-fluid\">\n                    <h5>SignIn as a<br>\n                        <h4>Company</h4>\n                    </h5><br>\n                    <button class=\"btn btn-light\"><a [routerLink]=\"['/compLogin']\">Sign In</a></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<br><div class=\"container\">\n    <div class=\"header\">\n        <h2 class=\"text-center\">Registration Form</h2><br><br>\n    </div>\n    <form #fullform=\"ngForm\" (ngSubmit)=\"myform(fullform)\">\n        <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"name\" required class=\"form-control ng-pristine\" id=\"name\" aria-describedby=\"name\" ngModel>\n                <small id=\"name\" class=\"form-text text-muted\">First Name</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"fname\" required class=\"form-control ng-pristine\" id=\"name\" aria-describedby=\"fname\" ngModel>\n                <small id=\"fname\" class=\"form-text text-muted\">Last Name</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email & Mobile</label>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"email\" required class=\"form-control ng-pristine\" id=\"email\" aria-describedby=\"email\" ngModel>\n                <small id=\"email\" class=\"form-text text-muted\">Your Email</small>\n            </div>\n            <div class=\"col-sm-5\">\n                <input type=\"text\" name=\"mobileno\" required class=\"form-control ng-pristine\" id=\"email\" aria-describedby=\"mobile\" ngModel>\n                <small id=\"mobile\" class=\"form-text text-muted\">Your Mobile Number</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Comp, D.O.B & Gender</label>\n            <div class=\"col-sm-4\">\n                <select name=\"company\" required class=\"form-control\" id=\"company\" aria-describedby=\"company\" ngModel>\n                    <option>UBL Insurance</option>\n                    <option>EFU Insurance</option>\n                    <option>Adamjee Insurance</option>\n                    <option>UIC Insurance</option>\n                    <option>Jubilee Insurance</option>\n                    <option>TPL Insurance</option>\n                    <option>Askari Insurance</option>\n                    <option>Asia Insurance</option>\n                    <option>Habib Insurance</option>\n                    <option>Shaheen Insurance</option>\n                    <option>Sindh Insurance</option>\n                </select>\n                <small id=\"company\" class=\"form-text text-muted\">Select Company</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"date\" name=\"dob\" required class=\"form-control\" id=\"dob\" aria-describedby=\"dob\" ngModel>\n                <small id=\"dob\" class=\"form-text text-muted\">Your Date of Birth</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <select name=\"gender\" required class=\"form-control\" id=\"gender\" aria-describedby=\"gender\" ngModel>\n                    <option>Male</option>\n                    <option>Female</option>\n                </select>\n                <small id=\"gender\" class=\"form-text text-muted\">Gender</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Plan, Purpose & Pic</label>\n            <div class=\"col-sm-3\">\n                <select name=\"plan\" required class=\"form-control\" id=\"plan\" aria-describedby=\"plan\" ngModel>\n                    <option>Life Insurance</option>\n                    <option>Investment</option>\n                    <option>Home Insurance</option>\n                    <option>Health Insurance</option>\n                </select>\n                <small id=\"plan\" class=\"form-text text-muted\">Select Your Plan</small>\n            </div>\n            <div class=\"col-sm-4\">\n                <select name=\"for\" required class=\"form-control\" id=\"purpose\" ngModel>\n                    <option>Self</option>\n                    <option>Wife</option>\n                    <option>Son</option>\n                    <option>Daughter</option>\n                </select>\n                <small id=\"purpose\" class=\"form-text text-muted\">For</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"file\" name=\"pic\" required class=\"form-control\" id=\"pic\" aria-describedby=\"pic\" ngModel>\n                <small id=\"pic\" class=\"form-text text-muted\">Your Profile Photo</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Password & CNIC</label>\n            <div class=\"col-sm-3\">\n                <input type=\"password\" name=\"password\" required class=\"form-control\" id=\"password\" aria-describedby=\"password\" ngModel>\n                <small id=\"password\" class=\"form-text text-muted\">Your Password (at least 6 characters)</small>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"password\" name=\"cpass\" required class=\"form-control\" id=\"cpass\" aria-describedby=\"cpass\" ngModel>\n                <small id=\"cpass\" class=\"form-text text-muted\">Confirm Password</small>\n            </div>\n            <div class=\"col-sm-4\">\n                <input type=\"text\" name=\"cnic\" required class=\"form-control\" id=\"cnic\" aria-describedby=\"cnic\" ngModel>\n                <small id=\"cnic\" class=\"form-text text-muted\">Your CNIC</small>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n                <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"text\" name=\"address\" required class=\"form-control\" id=\"address\" aria-describedby=\"address\" ngModel>\n                    <small id=\"address\" class=\"form-text text-muted\">Your Address</small>\n                </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4 text-center\"><button [hidden]=\"fullform.form.invalid\" class=\"btn btn-primary btn-block\">Register</button></div>\n            <div class=\"col-sm-4\"></div>\n        </div>\n    </form>\n</div><br>\n<div class=\"alert alert-success\" *ngIf=\"register\">{{message}}</div>\n<div class=\"form-group text-center\">\n        <span class=\"text-secondary\">if already registerd!</span>\n        <a [routerLink]=\"['/userLogin']\"><b>Login</b></a>\n    </div>\n<br><br>\n<app-footer2></app-footer2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usrlogin/usrlogin.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usrlogin/usrlogin.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-5 col-lg-5\">\n            <div class=\"left\">\n                <h1 class=\"text-center\"><i class=\"fa fa-user-circle-o\"></i></h1>\n                <h4 class=\"text-center\">My Account</h4>\n                <h5 class=\"text-center\">Your own online Personal Assistant</h5>\n                <h6 class=\"text-center\">View Policy Details</h6>\n                <h6 class=\"text-center\">Raise Queries</h6>\n                <h6 class=\"text-center\">See your recent searches</h6>\n                <h6 class=\"text-center\">Upload Documents</h6>\n                <h6 class=\"text-center\">Customer Care</h6>\n                <h6 class=\"text-center\">Reviews & Feedback</h6>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-7 col-lg-7\">\n            <div class=\"right\">\n                <form class=\"form\" #fullform=\"ngForm\" (ngSubmit)=\"loginform(fullform)\">\n                    <div class=\"form-group\">\n                        <div class=\"col-auto\">\n                            <label class=\"sr-only\" for=\"inlineFormInputGroup\">Email</label>\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-envelope fa-2x\"></i></div>\n                                </div>\n                                <input type=\"text\" name=\"email\" required class=\"form-control form-control-lg\"\n                                    id=\"inlineFormInputGroupUsername2\" placeholder=\"abc@gmail.com\" ngModel>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-auto\">\n                            <label class=\"sr-only\" for=\"inlineFormInputGroup\">Password</label>\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-lock fa-2x\"></i></div>\n                                </div>\n                                <input type=\"password\" name=\"password\" required class=\"form-control form-control-lg\"\n                                    id=\"inlineFormInputGroupUsername2\" placeholder=\"Password\" ngModel>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <h1 class=\"text-center\">\n                            <button class=\"btn btn-lg btn-primary\" [disabled]=\"fullform.form.invalid\">Proceed</button>\n                        </h1>\n                    </div>\n                    <div class=\"form-group text-center\">\n                            <span class=\"text-secondary\">if not register!</span>\n                            <a [routerLink]=\"['/register']\"><b>Register</b></a>\n                        </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\n    width: 100%;\n    height: 80vh;\n    background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('about.jpg');\n    background-size: cover;\n    background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlGQUFtRztJQUNuRyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwuNSkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2Fib3V0LmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutusComponent = class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")).default]
    })
], AboutusComponent);



/***/ }),

/***/ "./src/app/admin-login/admin-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-login/admin-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-login/admin-login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminLoginComponent = class AdminLoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin-login/admin-login.component.css")).default]
    })
], AdminLoginComponent);



/***/ }),

/***/ "./src/app/admin-register/admin-register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-register/admin-register.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXJlZ2lzdGVyL2FkbWluLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-register/admin-register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-register/admin-register.component.ts ***!
  \************************************************************/
/*! exports provided: AdminRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisterComponent", function() { return AdminRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let AdminRegisterComponent = class AdminRegisterComponent {
    constructor(service) {
        this.service = service;
        this.message = 'Your are Registered Successfully!';
        this.register = false;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        this.service.registerAdmin(fullform.value).subscribe(data => { console.log(data); });
        this.register = true;
    }
};
AdminRegisterComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
AdminRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-register/admin-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-register.component.css */ "./src/app/admin-register/admin-register.component.css")).default]
    })
], AdminRegisterComponent);



/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-footer/admin-footer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-footer/admin-footer.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\n  padding: 20px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5QYW5lbC9TaGFyZWQvYWRtaW4tZm9vdGVyL2FkbWluLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvU2hhcmVkL2FkbWluLWZvb3Rlci9hZG1pbi1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-footer/admin-footer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-footer/admin-footer.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminFooterComponent = class AdminFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-footer/admin-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-footer.component.css */ "./src/app/adminPanel/Shared/admin-footer/admin-footer.component.css")).default]
    })
], AdminFooterComponent);



/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-header/admin-header.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-header/admin-header.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li button {\n  margin-top: 15px;\n}\nul li{\n  list-style: none;\n}\nimg{\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5QYW5lbC9TaGFyZWQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5QYW5lbC9TaGFyZWQvYWRtaW4taGVhZGVyL2FkbWluLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbnVsIGxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuaW1ne1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-header/admin-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-header/admin-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminHeaderComponent = class AdminHeaderComponent {
    constructor() {
        this.toggleSideBarOnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleSideBar() {
        this.toggleSideBarOnClick.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdminHeaderComponent.prototype, "toggleSideBarOnClick", void 0);
AdminHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-header/admin-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-header.component.css */ "./src/app/adminPanel/Shared/admin-header/admin-header.component.css")).default]
    })
], AdminHeaderComponent);



/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon{\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.profile-card{\ntext-align: center;\npadding:0 20px 20px 20px;\n}\n.profile-card img{\nwidth: 100px;\nheight: 100px;\n-o-object-fit: cover;\n   object-fit: cover;\nborder-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5QYW5lbC9TaGFyZWQvYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLG9CQUFpQjtHQUFqQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5QYW5lbC9TaGFyZWQvYWRtaW4tc2lkZWJhci9hZG1pbi1zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbntcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnByb2ZpbGUtY2FyZHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBhZGRpbmc6MCAyMHB4IDIwcHggMjBweDtcbn1cbi5wcm9maWxlLWNhcmQgaW1ne1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiAxMDBweDtcbm9iamVjdC1maXQ6IGNvdmVyO1xuYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminSidebarComponent = class AdminSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.css")).default]
    })
], AdminSidebarComponent);



/***/ }),

/***/ "./src/app/adminPanel/Shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/adminPanel/Shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-header/admin-header.component */ "./src/app/adminPanel/Shared/admin-header/admin-header.component.ts");
/* harmony import */ var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-sidebar/admin-sidebar.component */ "./src/app/adminPanel/Shared/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-footer/admin-footer.component */ "./src/app/adminPanel/Shared/admin-footer/admin-footer.component.ts");
/* harmony import */ var _users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-chart/users-chart.component */ "./src/app/adminPanel/Shared/users-chart/users-chart.component.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"],
            _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["AdminSidebarComponent"],
            _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_9__["AdminFooterComponent"],
            _users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_10__["UsersChartComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"]
        ],
        exports: [
            _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_7__["AdminHeaderComponent"],
            _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["AdminSidebarComponent"],
            _admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_9__["AdminFooterComponent"],
            _users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_10__["UsersChartComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/adminPanel/Shared/users-chart/users-chart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/users-chart/users-chart.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvU2hhcmVkL3VzZXJzLWNoYXJ0L3VzZXJzLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/Shared/users-chart/users-chart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminPanel/Shared/users-chart/users-chart.component.ts ***!
  \************************************************************************/
/*! exports provided: UsersChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersChartComponent", function() { return UsersChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



let UsersChartComponent = class UsersChartComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            title: {
                text: 'Users Growth by Sector, 2020'
            },
            subtitle: {
                text: 'www.policydukaan.com'
            },
            credits: {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 1
                }
            },
            series: this.data,
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
            }
        };
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UsersChartComponent.prototype, "data", void 0);
UsersChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/Shared/users-chart/users-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-chart.component.css */ "./src/app/adminPanel/Shared/users-chart/users-chart.component.css")).default]
    })
], UsersChartComponent);



/***/ }),

/***/ "./src/app/adminPanel/admin.service.ts":
/*!*********************************************!*\
  !*** ./src/app/adminPanel/admin.service.ts ***!
  \*********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.usrModel = [];
        this.companyModel = [];
        this.contactMessageModel = [];
        this.claimModel = [];
        this.combineModel = [];
        this.getUsersUrl = 'http://localhost:7000/admin/allUsers';
        this.userDeleteUrl = 'http://localhost:7000/admin/delete/';
        this.userEditUrl = 'http://localhost:7000/admin/editUser/';
        this.companyUrl = 'http://localhost:7000/admin/company';
        this.messageUrl = 'http://localhost:7000/admin/contact';
        this.totalUsersUrl = 'http://localhost:7000/admin/countAll';
        this.totalCompaniesUrl = 'http://localhost:7000/admin/allCompanies';
        this.totalClaimRequestsUrl = 'http://localhost:7000/admin/tClaimRequests';
        this.delCompanyUrl = 'http://localhost:7000/admin/delCompany/';
        this.lifeInsuranceUsersUrl = 'http://localhost:7000/admin/lifeInsuranceUsers';
        this.investmentUsersUrl = 'http://localhost:7000/admin/investmentUsers';
        this.homeInsuranceUrl = 'http://localhost:7000/admin/homeInsurUsers';
        this.healthInsuranceUrl = 'http://localhost:7000/admin/healthInsurUsers';
        this.claimRequestUrl = 'http://localhost:7000/admin/claim';
        this.updateUserUrl = 'http://localhost:7000/admin/updateUser/';
        this.getLifeInsurenceRequestsUrl = 'http://localhost:7000/users//lifeRGet';
        this.getHealthInsurenceRequestsUrl = 'http://localhost:7000/users//healthRGet';
        this.investPlanUrl = 'http://localhost:7000/users/investRGet';
    }
    getUsers() {
        return this.http.get(this.getUsersUrl);
    }
    deleteUser(id) {
        console.log('user id in class : ' + id);
        return this.http.delete(this.userDeleteUrl + id);
    }
    getOneUser(usrid) {
        return this.http.get(this.userEditUrl + usrid);
    }
    updateUser(id, data) {
        console.log(data);
        return this.http.put(this.updateUserUrl + id, data);
    }
    allCompanies() {
        return this.http.get(this.companyUrl);
    }
    delCompany(id) {
        return this.http.delete(this.delCompanyUrl + id);
    }
    contactMessages() {
        return this.http.get(this.messageUrl);
    }
    totalUsers() {
        return this.http.get(this.totalUsersUrl);
    }
    totalCompanies() {
        return this.http.get(this.totalCompaniesUrl);
    }
    totalClaimRequests() {
        return this.http.get(this.totalClaimRequestsUrl);
    }
    lifeInsurance() {
        return this.http.get(this.lifeInsuranceUsersUrl);
    }
    homeInsurance() {
        return this.http.get(this.homeInsuranceUrl);
    }
    healthInsurance() {
        return this.http.get(this.healthInsuranceUrl);
    }
    investment() {
        return this.http.get(this.investmentUsersUrl);
    }
    claimRequest() {
        return this.http.get(this.claimRequestUrl);
    }
    lifeIRequets() {
        return this.http.get(this.getLifeInsurenceRequestsUrl);
    }
    investIRequests() {
        return this.http.get(this.investPlanUrl);
    }
    healthIRequests() {
        return this.http.get(this.getHealthInsurenceRequestsUrl);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/adminPanel/chart.service.ts":
/*!*********************************************!*\
  !*** ./src/app/adminPanel/chart.service.ts ***!
  \*********************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ChartService = class ChartService {
    constructor(http) {
        this.http = http;
        this.totalUsersUrl = 'http://localhost:7000/admin/countAll';
        this.totalCompaniesUrl = 'http://localhost:7000/admin/allCompanies';
        this.totalClaimRequestsUrl = 'http://localhost:7000/admin/tClaimRequests';
        this.totalMessagesUrl = 'http://localhost:7000/admin/tMessages';
    }
    totalUsers() {
        return this.http.get(this.totalUsersUrl);
    }
    totalCompanies() {
        return this.http.get(this.totalCompaniesUrl);
    }
    totalClaimRequests() {
        return this.http.get(this.totalClaimRequestsUrl);
    }
    totalMessages() {
        return this.http.get(this.totalMessagesUrl);
    }
};
ChartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChartService);



/***/ }),

/***/ "./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9FZGl0Rm9ybXMvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_adminPanel_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/adminPanel/admin.service */ "./src/app/adminPanel/admin.service.ts");




let EditUserComponent = class EditUserComponent {
    constructor(router, activeRoute, service) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.service = service;
        this.userData = [];
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(data => {
            this.service.getOneUser(data['id']).subscribe(data => {
                this.userData = data;
            });
        });
    }
    myform(fullform) {
        console.log(fullform.value);
        this.id = this.activeRoute.snapshot.params.id;
        this.service.updateUser(this.id, fullform.value).subscribe(data => {
            this.router.navigate(['/admin']);
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_adminPanel_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user.component.css */ "./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.css")).default]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.css ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9Qb2xpY2llcy9oZWFsdGgtaW5zdXJhbmNlLXJlcXVlc3QvaGVhbHRoLWluc3VyYW5jZS1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HealthInsuranceRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsuranceRequestComponent", function() { return HealthInsuranceRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/adminPanel/admin.service.ts");



let HealthInsuranceRequestComponent = class HealthInsuranceRequestComponent {
    constructor(service) {
        this.service = service;
        this.users = [];
    }
    ngOnInit() {
        this.service.healthIRequests().subscribe(data => console.log(this.users = data));
    }
};
HealthInsuranceRequestComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
HealthInsuranceRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-insurance-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./health-insurance-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./health-insurance-request.component.css */ "./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.css")).default]
    })
], HealthInsuranceRequestComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9Qb2xpY2llcy9ob21lLWluc3VyYW5jZS1yZXF1ZXN0L2hvbWUtaW5zdXJhbmNlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HomeInsuranceRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInsuranceRequestComponent", function() { return HomeInsuranceRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeInsuranceRequestComponent = class HomeInsuranceRequestComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeInsuranceRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-insurance-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-insurance-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-insurance-request.component.css */ "./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.css")).default]
    })
], HomeInsuranceRequestComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/Policies/investment-request/investment-request.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/investment-request/investment-request.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9Qb2xpY2llcy9pbnZlc3RtZW50LXJlcXVlc3QvaW52ZXN0bWVudC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/components/Policies/investment-request/investment-request.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/investment-request/investment-request.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InvestmentRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentRequestComponent", function() { return InvestmentRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/adminPanel/admin.service.ts");



let InvestmentRequestComponent = class InvestmentRequestComponent {
    constructor(service) {
        this.service = service;
        this.users = [];
    }
    ngOnInit() {
        this.service.investIRequests().subscribe(data => console.log(this.users = data));
    }
};
InvestmentRequestComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
InvestmentRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-investment-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./investment-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/investment-request/investment-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./investment-request.component.css */ "./src/app/adminPanel/components/Policies/investment-request/investment-request.component.css")).default]
    })
], InvestmentRequestComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9Qb2xpY2llcy9saWZlLWluc3VyYW5jZS1yZXF1ZXN0L2xpZmUtaW5zdXJhbmNlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LifeInsuranceRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceRequestComponent", function() { return LifeInsuranceRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/adminPanel/admin.service.ts");



let LifeInsuranceRequestComponent = class LifeInsuranceRequestComponent {
    constructor(service) {
        this.service = service;
        this.users = [];
    }
    ngOnInit() {
        this.service.lifeIRequets().subscribe(data => console.log(this.users = data));
    }
};
LifeInsuranceRequestComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
LifeInsuranceRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-life-insurance-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./life-insurance-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./life-insurance-request.component.css */ "./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.css")).default]
    })
], LifeInsuranceRequestComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/admin-profile/admin-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/adminPanel/components/admin-profile/admin-profile.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\n  padding-bottom: 20px;\n  background-position: center;\n  background-size: cover;\n}\n.outerBox{\n  padding: 25px;\n  border-radius: 10px;\n  background: #d7d7d8;\n  color: black;\n}\n.box{\n  border-radius: 10px;\n  box-shadow: 5px 4px 10px 3px #828385;\n  background: white;\n  color: black;\n}\n.box img{\n  border-radius: 10px 10px 0px 0px;\n}\n.box table{\n  border: none !important;\n}\n.col{\n  margin: 5px;\n}\nul{\n  list-style: none;\n}\np{\n  text-align: justify;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5QYW5lbC9jb21wb25lbnRzL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pblBhbmVsL2NvbXBvbmVudHMvYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5vdXRlckJveHtcbiAgcGFkZGluZzogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkODtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJveHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDRweCAxMHB4IDNweCAjODI4Mzg1O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJveCBpbWd7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuLmJveCB0YWJsZXtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29se1xuICBtYXJnaW46IDVweDtcbn1cbnVse1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxucHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/adminPanel/components/admin-profile/admin-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/adminPanel/components/admin-profile/admin-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminProfileComponent = class AdminProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/admin-profile/admin-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-profile.component.css */ "./src/app/adminPanel/components/admin-profile/admin-profile.component.css")).default]
    })
], AdminProfileComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/all-users/all-users.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminPanel/components/all-users/all-users.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9hbGwtdXNlcnMvYWxsLXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/components/all-users/all-users.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminPanel/components/all-users/all-users.component.ts ***!
  \************************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");




let AllUsersComponent = class AllUsersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.service.getUsers().subscribe(data => console.log(this.users = data));
    }
    deleteUser(id) {
        console.log('user id in service : ' + id);
        this.service.deleteUser(id).subscribe(data => {
            this.router.navigate(['/admin']);
        });
    }
};
AllUsersComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AllUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/all-users/all-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-users.component.css */ "./src/app/adminPanel/components/all-users/all-users.component.css")).default]
    })
], AllUsersComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/claim-requests/claim-requests.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/adminPanel/components/claim-requests/claim-requests.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9jbGFpbS1yZXF1ZXN0cy9jbGFpbS1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/claim-requests/claim-requests.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/adminPanel/components/claim-requests/claim-requests.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClaimRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimRequestsComponent", function() { return ClaimRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");



let ClaimRequestsComponent = class ClaimRequestsComponent {
    constructor(service) {
        this.service = service;
        this.request = [];
    }
    ngOnInit() {
        this.service.claimRequest().subscribe(data => console.log(this.request = data));
    }
};
ClaimRequestsComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
ClaimRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./claim-requests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/claim-requests/claim-requests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./claim-requests.component.css */ "./src/app/adminPanel/components/claim-requests/claim-requests.component.css")).default]
    })
], ClaimRequestsComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/companies/companies.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminPanel/components/companies/companies.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9jb21wYW5pZXMvY29tcGFuaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/components/companies/companies.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminPanel/components/companies/companies.component.ts ***!
  \************************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");




let CompaniesComponent = class CompaniesComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.companies = [];
    }
    ngOnInit() {
        this.service.allCompanies().subscribe(data => console.log(this.companies = data));
    }
    delete(id) {
        this.service.delCompany(id).subscribe(data => {
            this.router.navigate(['./']);
        });
    }
};
CompaniesComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/companies/companies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companies.component.css */ "./src/app/adminPanel/components/companies/companies.component.css")).default]
    })
], CompaniesComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/dashboard/dashboard.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/adminPanel/components/dashboard/dashboard.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/adminPanel/components/dashboard/dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/adminPanel/components/dashboard/dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chart.service */ "./src/app/adminPanel/chart.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(service) {
        this.service = service;
        this.totalUser = [];
        this.totalCompanies = [];
        this.totalClaimRequests = [];
        this.totalMessages = [];
    }
    ngOnInit() {
        this.service.totalUsers().subscribe(data => console.log(this.totalUser = data));
        this.service.totalCompanies().subscribe(dataa => console.log(this.totalCompanies = dataa));
        this.service.totalClaimRequests().subscribe(claim => console.log(this.totalClaimRequests = claim));
        this.service.totalMessages().subscribe(message => console.log(this.totalMessages = message));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/adminPanel/components/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9oZWFsdGgtaW5zdXJhbmNlLXVzZXJzL2hlYWx0aC1pbnN1cmFuY2UtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HealthInsuranceUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsuranceUsersComponent", function() { return HealthInsuranceUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HealthInsuranceUsersComponent = class HealthInsuranceUsersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.service.healthInsurance().subscribe(data => console.log(this.users = data));
    }
    deleteUser(id) {
        console.log('user id in service : ' + id);
        this.service.deleteUser(id).subscribe(data => {
            this.router.navigate(['./']);
        });
    }
};
HealthInsuranceUsersComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HealthInsuranceUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-insurance-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./health-insurance-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./health-insurance-users.component.css */ "./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.css")).default]
    })
], HealthInsuranceUsersComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9ob21lLWluc3VyYW5jZS11c2Vycy9ob21lLWluc3VyYW5jZS11c2Vycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HomeInsuranceUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInsuranceUsersComponent", function() { return HomeInsuranceUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeInsuranceUsersComponent = class HomeInsuranceUsersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.service.homeInsurance().subscribe(data => console.log(this.users = data));
    }
    deleteUser(id) {
        console.log('user id in service : ' + id);
        this.service.deleteUser(id).subscribe(data => {
            this.router.navigate(['./']);
        });
    }
};
HomeInsuranceUsersComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeInsuranceUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-insurance-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-insurance-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-insurance-users.component.css */ "./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.css")).default]
    })
], HomeInsuranceUsersComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/investment-users/investment-users.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/adminPanel/components/investment-users/investment-users.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9pbnZlc3RtZW50LXVzZXJzL2ludmVzdG1lbnQtdXNlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/adminPanel/components/investment-users/investment-users.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/adminPanel/components/investment-users/investment-users.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InvestmentUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentUsersComponent", function() { return InvestmentUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InvestmentUsersComponent = class InvestmentUsersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.service.investment().subscribe(data => console.log(this.users = data));
    }
    deleteUser(id) {
        console.log('user id in service : ' + id);
        this.service.deleteUser(id).subscribe(data => {
            this.router.navigate(['./']);
        });
    }
};
InvestmentUsersComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InvestmentUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-investment-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./investment-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/investment-users/investment-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./investment-users.component.css */ "./src/app/adminPanel/components/investment-users/investment-users.component.css")).default]
    })
], InvestmentUsersComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9saWZlLWluc3VyYW5jZS11c2Vycy9saWZlLWluc3VyYW5jZS11c2Vycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LifeInsuranceUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeInsuranceUsersComponent", function() { return LifeInsuranceUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LifeInsuranceUsersComponent = class LifeInsuranceUsersComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.service.lifeInsurance().subscribe(data => console.log(this.users = data));
    }
    deleteUser(id) {
        console.log('user id in service : ' + id);
        this.service.deleteUser(id).subscribe(data => {
            this.router.navigate(['./']);
        });
    }
};
LifeInsuranceUsersComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LifeInsuranceUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-life-insurance-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./life-insurance-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./life-insurance-users.component.css */ "./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.css")).default]
    })
], LifeInsuranceUsersComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/messages/messages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/adminPanel/components/messages/messages.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/messages/messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adminPanel/components/messages/messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/adminPanel/admin.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(service) {
        this.service = service;
        this.messages = [];
    }
    ngOnInit() {
        this.service.contactMessages().subscribe(data => console.log(this.messages = data));
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/messages/messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.css */ "./src/app/adminPanel/components/messages/messages.component.css")).default]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/adminPanel/components/settings/settings.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/adminPanel/components/settings/settings.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluUGFuZWwvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/adminPanel/components/settings/settings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/adminPanel/components/settings/settings.component.ts ***!
  \**********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/components/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/adminPanel/components/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/adminPanel/default/default.component.css":
/*!**********************************************************!*\
  !*** ./src/app/adminPanel/default/default.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host{\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmat-drawer {\n  width: 350px;\n}\nmat-drawer-container {\n  height: 100%;\n}\nmat-drawer-content {\npadding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5QYW5lbC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5QYW5lbC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQge1xucGFkZGluZzogMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/adminPanel/default/default.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminPanel/default/default.component.ts ***!
  \*********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() {
        this.sidebarOpen = true;
    }
    ngOnInit() {
    }
    sideBarToggler() {
        this.sidebarOpen = !this.sidebarOpen;
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminPanel/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.css */ "./src/app/adminPanel/default/default.component.css")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/adminPanel/default/default.module.ts":
/*!******************************************************!*\
  !*** ./src/app/adminPanel/default/default.module.ts ***!
  \******************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/shared.module */ "./src/app/adminPanel/Shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default.component */ "./src/app/adminPanel/default/default.component.ts");
/* harmony import */ var _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/admin-profile/admin-profile.component */ "./src/app/adminPanel/components/admin-profile/admin-profile.component.ts");
/* harmony import */ var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/all-users/all-users.component */ "./src/app/adminPanel/components/all-users/all-users.component.ts");
/* harmony import */ var _components_claim_requests_claim_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/claim-requests/claim-requests.component */ "./src/app/adminPanel/components/claim-requests/claim-requests.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/companies/companies.component */ "./src/app/adminPanel/components/companies/companies.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ "./src/app/adminPanel/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_health_insurance_users_health_insurance_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/health-insurance-users/health-insurance-users.component */ "./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.ts");
/* harmony import */ var _components_home_insurance_users_home_insurance_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/home-insurance-users/home-insurance-users.component */ "./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.ts");
/* harmony import */ var _components_investment_users_investment_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/investment-users/investment-users.component */ "./src/app/adminPanel/components/investment-users/investment-users.component.ts");
/* harmony import */ var _components_life_insurance_users_life_insurance_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/life-insurance-users/life-insurance-users.component */ "./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/messages/messages.component */ "./src/app/adminPanel/components/messages/messages.component.ts");
/* harmony import */ var _components_Policies_health_insurance_request_health_insurance_request_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Policies/health-insurance-request/health-insurance-request.component */ "./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.ts");
/* harmony import */ var _components_Policies_home_insurance_request_home_insurance_request_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Policies/home-insurance-request/home-insurance-request.component */ "./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.ts");
/* harmony import */ var _components_Policies_investment_request_investment_request_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Policies/investment-request/investment-request.component */ "./src/app/adminPanel/components/Policies/investment-request/investment-request.component.ts");
/* harmony import */ var _components_Policies_life_insurance_request_life_insurance_request_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Policies/life-insurance-request/life-insurance-request.component */ "./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/settings/settings.component */ "./src/app/adminPanel/components/settings/settings.component.ts");
/* harmony import */ var _components_EditForms_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/EditForms/edit-user/edit-user.component */ "./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.ts");

























let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
            _components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__["AdminProfileComponent"],
            _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__["AllUsersComponent"],
            _components_claim_requests_claim_requests_component__WEBPACK_IMPORTED_MODULE_11__["ClaimRequestsComponent"],
            _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _components_health_insurance_users_health_insurance_users_component__WEBPACK_IMPORTED_MODULE_14__["HealthInsuranceUsersComponent"],
            _components_home_insurance_users_home_insurance_users_component__WEBPACK_IMPORTED_MODULE_15__["HomeInsuranceUsersComponent"],
            _components_investment_users_investment_users_component__WEBPACK_IMPORTED_MODULE_16__["InvestmentUsersComponent"],
            _components_life_insurance_users_life_insurance_users_component__WEBPACK_IMPORTED_MODULE_17__["LifeInsuranceUsersComponent"],
            _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__["MessagesComponent"],
            _components_Policies_health_insurance_request_health_insurance_request_component__WEBPACK_IMPORTED_MODULE_19__["HealthInsuranceRequestComponent"],
            _components_Policies_home_insurance_request_home_insurance_request_component__WEBPACK_IMPORTED_MODULE_20__["HomeInsuranceRequestComponent"],
            _components_Policies_investment_request_investment_request_component__WEBPACK_IMPORTED_MODULE_21__["InvestmentRequestComponent"],
            _components_Policies_life_insurance_request_life_insurance_request_component__WEBPACK_IMPORTED_MODULE_22__["LifeInsuranceRequestComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
            _components_EditForms_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_24__["EditUserComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _Shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _claim_claim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./claim/claim.component */ "./src/app/claim/claim.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _lifeinsurance_lifeinsurance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeinsurance/lifeinsurance.component */ "./src/app/lifeinsurance/lifeinsurance.component.ts");
/* harmony import */ var _investmentplan_investmentplan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./investmentplan/investmentplan.component */ "./src/app/investmentplan/investmentplan.component.ts");
/* harmony import */ var _home_insurance_home_insurance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-insurance/home-insurance.component */ "./src/app/home-insurance/home-insurance.component.ts");
/* harmony import */ var _health_insurance_health_insurance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./health-insurance/health-insurance.component */ "./src/app/health-insurance/health-insurance.component.ts");
/* harmony import */ var _companyregister_companylogin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./companyregister/companylogin.component */ "./src/app/companyregister/companylogin.component.ts");
/* harmony import */ var _usrlogin_usrlogin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usrlogin/usrlogin.component */ "./src/app/usrlogin/usrlogin.component.ts");
/* harmony import */ var _complogin_complogin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./complogin/complogin.component */ "./src/app/complogin/complogin.component.ts");
/* harmony import */ var _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-register/admin-register.component */ "./src/app/admin-register/admin-register.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _adminPanel_default_default_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adminPanel/default/default.component */ "./src/app/adminPanel/default/default.component.ts");
/* harmony import */ var _adminPanel_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adminPanel/components/dashboard/dashboard.component */ "./src/app/adminPanel/components/dashboard/dashboard.component.ts");
/* harmony import */ var _adminPanel_components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./adminPanel/components/all-users/all-users.component */ "./src/app/adminPanel/components/all-users/all-users.component.ts");
/* harmony import */ var _adminPanel_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./adminPanel/components/admin-profile/admin-profile.component */ "./src/app/adminPanel/components/admin-profile/admin-profile.component.ts");
/* harmony import */ var _adminPanel_components_companies_companies_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./adminPanel/components/companies/companies.component */ "./src/app/adminPanel/components/companies/companies.component.ts");
/* harmony import */ var _adminPanel_components_health_insurance_users_health_insurance_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./adminPanel/components/health-insurance-users/health-insurance-users.component */ "./src/app/adminPanel/components/health-insurance-users/health-insurance-users.component.ts");
/* harmony import */ var _adminPanel_components_home_insurance_users_home_insurance_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./adminPanel/components/home-insurance-users/home-insurance-users.component */ "./src/app/adminPanel/components/home-insurance-users/home-insurance-users.component.ts");
/* harmony import */ var _adminPanel_components_investment_users_investment_users_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./adminPanel/components/investment-users/investment-users.component */ "./src/app/adminPanel/components/investment-users/investment-users.component.ts");
/* harmony import */ var _adminPanel_components_life_insurance_users_life_insurance_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./adminPanel/components/life-insurance-users/life-insurance-users.component */ "./src/app/adminPanel/components/life-insurance-users/life-insurance-users.component.ts");
/* harmony import */ var _adminPanel_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./adminPanel/components/messages/messages.component */ "./src/app/adminPanel/components/messages/messages.component.ts");
/* harmony import */ var _adminPanel_components_Policies_health_insurance_request_health_insurance_request_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./adminPanel/components/Policies/health-insurance-request/health-insurance-request.component */ "./src/app/adminPanel/components/Policies/health-insurance-request/health-insurance-request.component.ts");
/* harmony import */ var _adminPanel_components_Policies_home_insurance_request_home_insurance_request_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./adminPanel/components/Policies/home-insurance-request/home-insurance-request.component */ "./src/app/adminPanel/components/Policies/home-insurance-request/home-insurance-request.component.ts");
/* harmony import */ var _adminPanel_components_Policies_investment_request_investment_request_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./adminPanel/components/Policies/investment-request/investment-request.component */ "./src/app/adminPanel/components/Policies/investment-request/investment-request.component.ts");
/* harmony import */ var _adminPanel_components_Policies_life_insurance_request_life_insurance_request_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./adminPanel/components/Policies/life-insurance-request/life-insurance-request.component */ "./src/app/adminPanel/components/Policies/life-insurance-request/life-insurance-request.component.ts");
/* harmony import */ var _adminPanel_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./adminPanel/components/settings/settings.component */ "./src/app/adminPanel/components/settings/settings.component.ts");
/* harmony import */ var _adminPanel_components_claim_requests_claim_requests_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./adminPanel/components/claim-requests/claim-requests.component */ "./src/app/adminPanel/components/claim-requests/claim-requests.component.ts");
/* harmony import */ var _adminPanel_components_EditForms_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./adminPanel/components/EditForms/edit-user/edit-user.component */ "./src/app/adminPanel/components/EditForms/edit-user/edit-user.component.ts");




























// tslint:disable-next-line: max-line-length







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"] },
    { path: 'claim', component: _claim_claim_component__WEBPACK_IMPORTED_MODULE_5__["ClaimComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'lifeinsurance', component: _lifeinsurance_lifeinsurance_component__WEBPACK_IMPORTED_MODULE_9__["LifeinsuranceComponent"] },
    { path: 'investmentplan', component: _investmentplan_investmentplan_component__WEBPACK_IMPORTED_MODULE_10__["InvestmentplanComponent"] },
    { path: 'homeinsurance', component: _home_insurance_home_insurance_component__WEBPACK_IMPORTED_MODULE_11__["HomeInsuranceComponent"] },
    { path: 'healthinsurance', component: _health_insurance_health_insurance_component__WEBPACK_IMPORTED_MODULE_12__["HealthInsuranceComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'companyRegister', component: _companyregister_companylogin_component__WEBPACK_IMPORTED_MODULE_13__["CompanyloginComponent"] },
    { path: 'userLogin', component: _usrlogin_usrlogin_component__WEBPACK_IMPORTED_MODULE_14__["UsrloginComponent"] },
    { path: 'compLogin', component: _complogin_complogin_component__WEBPACK_IMPORTED_MODULE_15__["ComploginComponent"] },
    { path: 'adminRegister', component: _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_16__["AdminRegisterComponent"] },
    { path: 'adminLogin', component: _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_17__["AdminLoginComponent"] },
    { path: 'editUser/:id', component: _adminPanel_components_EditForms_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_34__["EditUserComponent"] },
    {
        path: 'admin', component: _adminPanel_default_default_component__WEBPACK_IMPORTED_MODULE_18__["DefaultComponent"],
        children: [
            { path: '', component: _adminPanel_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"] },
            { path: 'allusers', component: _adminPanel_components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_20__["AllUsersComponent"] },
            { path: 'aProfile', component: _adminPanel_components_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_21__["AdminProfileComponent"] },
            { path: 'companies', component: _adminPanel_components_companies_companies_component__WEBPACK_IMPORTED_MODULE_22__["CompaniesComponent"] },
            { path: 'healthIU', component: _adminPanel_components_health_insurance_users_health_insurance_users_component__WEBPACK_IMPORTED_MODULE_23__["HealthInsuranceUsersComponent"] },
            { path: 'homeIU', component: _adminPanel_components_home_insurance_users_home_insurance_users_component__WEBPACK_IMPORTED_MODULE_24__["HomeInsuranceUsersComponent"] },
            { path: 'investmentIU', component: _adminPanel_components_investment_users_investment_users_component__WEBPACK_IMPORTED_MODULE_25__["InvestmentUsersComponent"] },
            { path: 'lifeIU', component: _adminPanel_components_life_insurance_users_life_insurance_users_component__WEBPACK_IMPORTED_MODULE_26__["LifeInsuranceUsersComponent"] },
            { path: 'messages', component: _adminPanel_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"] },
            { path: 'healthIR', component: _adminPanel_components_Policies_health_insurance_request_health_insurance_request_component__WEBPACK_IMPORTED_MODULE_28__["HealthInsuranceRequestComponent"] },
            { path: 'homeIR', component: _adminPanel_components_Policies_home_insurance_request_home_insurance_request_component__WEBPACK_IMPORTED_MODULE_29__["HomeInsuranceRequestComponent"] },
            { path: 'investmentIR', component: _adminPanel_components_Policies_investment_request_investment_request_component__WEBPACK_IMPORTED_MODULE_30__["InvestmentRequestComponent"] },
            { path: 'lifeIR', component: _adminPanel_components_Policies_life_insurance_request_life_insurance_request_component__WEBPACK_IMPORTED_MODULE_31__["LifeInsuranceRequestComponent"] },
            { path: 'settings', component: _adminPanel_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_32__["SettingsComponent"] },
            { path: 'claimR', component: _adminPanel_components_claim_requests_claim_requests_component__WEBPACK_IMPORTED_MODULE_33__["ClaimRequestsComponent"] },
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'PolicyDukaan';
        this.showHead = true;
        this.showFoot = true;
        // on Route change to '/admin', set the variable showHead to false
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url === '/admin' || event.url === '/admin/aProfile' || event.url === '/admin/settings' ||
                    event.url === '/admin/allusers' || event.url === '/admin/companies' || event.url === '/admin/homeIU'
                    || event.url === '/admin/messages' || event.url === '/admin/healthIU' || event.url === '/admin/investmentIR'
                    || event.url === '/admin/lifeIR' || event.url === '/admin/homeIR' || event.url === '/admin/healthIR'
                    || event.url === '/admin/claimR' || event.url === '/admin/editUser'
                    || event.url === '/admin/homeIU' || event.url === '/admin/lifeIU'
                    || event.url === '/admin/investmentIU' || event.url === '/userDash' || event.url === '/userDash/uProfile'
                    || event.url === '/userDash/uSettings' || event.url === '/compDash' || event.url === '/compDash/cUsers'
                    || event.url === '/compDash/cSettings' || event.url === '/compDash/cProfile') {
                    this.showHead = false;
                    this.showFoot = false;
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _lifeinsurance_lifeinsurance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifeinsurance/lifeinsurance.component */ "./src/app/lifeinsurance/lifeinsurance.component.ts");
/* harmony import */ var _investmentplan_investmentplan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./investmentplan/investmentplan.component */ "./src/app/investmentplan/investmentplan.component.ts");
/* harmony import */ var _health_insurance_health_insurance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./health-insurance/health-insurance.component */ "./src/app/health-insurance/health-insurance.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_insurance_home_insurance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-insurance/home-insurance.component */ "./src/app/home-insurance/home-insurance.component.ts");
/* harmony import */ var _claim_claim_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./claim/claim.component */ "./src/app/claim/claim.component.ts");
/* harmony import */ var _footer2_footer2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer2/footer2.component */ "./src/app/footer2/footer2.component.ts");
/* harmony import */ var _companyregister_companylogin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./companyregister/companylogin.component */ "./src/app/companyregister/companylogin.component.ts");
/* harmony import */ var _usrlogin_usrlogin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usrlogin/usrlogin.component */ "./src/app/usrlogin/usrlogin.component.ts");
/* harmony import */ var _complogin_complogin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./complogin/complogin.component */ "./src/app/complogin/complogin.component.ts");
/* harmony import */ var _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-register/admin-register.component */ "./src/app/admin-register/admin-register.component.ts");
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin-login/admin-login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _adminPanel_default_default_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./adminPanel/default/default.module */ "./src/app/adminPanel/default/default.module.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"],
            _companyregister_companylogin_component__WEBPACK_IMPORTED_MODULE_20__["CompanyloginComponent"],
            _lifeinsurance_lifeinsurance_component__WEBPACK_IMPORTED_MODULE_9__["LifeinsuranceComponent"],
            _investmentplan_investmentplan_component__WEBPACK_IMPORTED_MODULE_10__["InvestmentplanComponent"],
            _health_insurance_health_insurance_component__WEBPACK_IMPORTED_MODULE_11__["HealthInsuranceComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _home_insurance_home_insurance_component__WEBPACK_IMPORTED_MODULE_17__["HomeInsuranceComponent"],
            _claim_claim_component__WEBPACK_IMPORTED_MODULE_18__["ClaimComponent"],
            _footer2_footer2_component__WEBPACK_IMPORTED_MODULE_19__["Footer2Component"],
            _usrlogin_usrlogin_component__WEBPACK_IMPORTED_MODULE_21__["UsrloginComponent"],
            _complogin_complogin_component__WEBPACK_IMPORTED_MODULE_22__["ComploginComponent"],
            _admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_23__["AdminRegisterComponent"],
            _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_24__["AdminLoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _adminPanel_default_default_module__WEBPACK_IMPORTED_MODULE_26__["DefaultModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/claim/claim.component.css":
/*!*******************************************!*\
  !*** ./src/app/claim/claim.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("sup{\n    color: #ff4c4c;\n    font-size: 15px;\n}\n.col{\n    margin-bottom: 7px;\n}\n.jumbotron{\n    width: 100%;\n    height: 30vh;\n    background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('claim_header.jpg');\n    background-size: cover;\n    background-position: center;\n    color: white;\n    border-radius: 5px 5px 0px 0px;\n}\n.box{\n    box-shadow: 2px 2px 3px 4px #00bce4;\n    border-radius: 5px;\n    margin: 30px auto;\n}\n.form{\n    padding: 20px;\n}\nul{\n    list-style: none;\n    text-align: center;\n}\nul li{\n    display: inline-block;\n    padding: 1px;\n}\nul #fb{\n    color: #002ae5;\n}\nul #tw{\n    color: #00bce4;\n}\nul #insta{\n    color: #ff4c4c;\n}\nul #linkedin{\n    color: #00a4e4;\n}\nul #youtube{\n    color: #be0027;\n}\nul li:hover{\n    opacity: .8;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW0vY2xhaW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0ZBQTBHO0lBQzFHLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NsYWltL2NsYWltLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdXB7XG4gICAgY29sb3I6ICNmZjRjNGM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbHtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uanVtYm90cm9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwuNSkpLHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvY2xhaW1faGVhZGVyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XG59XG4uYm94e1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDRweCAjMDBiY2U0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cbi5mb3Jte1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnVsIGxpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxcHg7XG59XG51bCAjZmJ7XG4gICAgY29sb3I6ICMwMDJhZTU7XG59XG51bCAjdHd7XG4gICAgY29sb3I6ICMwMGJjZTQ7XG59XG51bCAjaW5zdGF7XG4gICAgY29sb3I6ICNmZjRjNGM7XG59XG51bCAjbGlua2VkaW57XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG51bCAjeW91dHViZXtcbiAgICBjb2xvcjogI2JlMDAyNztcbn1cbnVsIGxpOmhvdmVye1xuICAgIG9wYWNpdHk6IC44O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/claim/claim.component.ts":
/*!******************************************!*\
  !*** ./src/app/claim/claim.component.ts ***!
  \******************************************/
/*! exports provided: ClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimComponent", function() { return ClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let ClaimComponent = class ClaimComponent {
    constructor(service) {
        this.service = service;
        this.text = 'Your request sent!';
        this.message = false;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        this.service.claimRequest(fullform.value).subscribe(data => { console.log(data); });
        this.message = true;
    }
};
ClaimComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
ClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./claim.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/claim/claim.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./claim.component.css */ "./src/app/claim/claim.component.css")).default]
    })
], ClaimComponent);



/***/ }),

/***/ "./src/app/company.service.ts":
/*!************************************!*\
  !*** ./src/app/company.service.ts ***!
  \************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CompanyService = class CompanyService {
    constructor(http) {
        this.http = http;
        this.companyRegister = 'http://localhost:7000/company/register';
    }
    register(data) {
        return this.http.post(this.companyRegister, data);
    }
};
CompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompanyService);



/***/ }),

/***/ "./src/app/companyregister/companylogin.component.css":
/*!************************************************************!*\
  !*** ./src/app/companyregister/companylogin.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register{\n    background: -webkit-linear-gradient(left, #0099e5, #00bce4);\n    margin-top: 3%;\n    padding: 3%;\n}\n.register-left{\n    text-align: center;\n    color: #fff;\n    margin-top: 4%;\n}\n.register-left input{\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    width: 60%;\n    background: white;\n    font-weight: bold;\n    color: #0099e5;\n    margin-top: 30%;\n    margin-bottom: 3%;\n    cursor: pointer;\n}\n.register-right{\n    background: white;\n    border-top-left-radius: 10% 50%;\n    border-bottom-left-radius: 10% 50%;\n}\n.register-left img{\n    margin-top: 15%;\n    margin-bottom: 5%;\n    width: 25%;\n    -webkit-animation: mover 2s infinite  alternate;\n    animation: mover 1s infinite  alternate;\n}\n@-webkit-keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n@keyframes mover {\n    0% { transform: translateY(0); }\n    100% { transform: translateY(-20px); }\n}\n.register-left p{\n    font-weight: lighter;\n    padding: 12%;\n    margin-top: -9%;\n}\n.register .register-form{\n    padding: 10%;\n    margin-top: 10%;\n}\n.register-left a{\n    width: 130px;\n    border-radius: 40px;\n}\n.btnRegister{\n    float: right;\n    margin-top: 10%;\n    border: none;\n    border-radius: 1.5rem;\n    padding: 2%;\n    font-weight: 600;\n    width: 50%;\n}\n.register-heading{\n    text-align: center;\n    margin-top: 8%;\n    margin-bottom: -15%;\n    color: #0099e5;\n}\ninput::-webkit-input-placeholder{\n    color: #0099e5;\n}\ninput::-moz-placeholder{\n    color: #0099e5;\n}\ninput::-ms-input-placeholder{\n    color: #0099e5;\n}\ninput::placeholder{\n    color: #0099e5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueXJlZ2lzdGVyL2NvbXBhbnlsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkRBQTJEO0lBQzNELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLCtDQUErQztJQUMvQyx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtBQUN6QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFGQTtJQUNJLGNBQWM7QUFDbEI7QUFGQTtJQUNJLGNBQWM7QUFDbEI7QUFGQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55cmVnaXN0ZXIvY29tcGFueWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzAwOTllNSwgIzAwYmNlNCk7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgcGFkZGluZzogMyU7XG59XG4ucmVnaXN0ZXItbGVmdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDk5ZTU7XG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWdpc3Rlci1yaWdodHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG4ucmVnaXN0ZXItbGVmdCBpbWd7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDJzIGluZmluaXRlICBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVyIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG59XG4ucmVnaXN0ZXItbGVmdCBwe1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHBhZGRpbmc6IDEyJTtcbiAgICBtYXJnaW4tdG9wOiAtOSU7XG59XG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm17XG4gICAgcGFkZGluZzogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5yZWdpc3Rlci1sZWZ0IGF7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG4uYnRuUmVnaXN0ZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnJlZ2lzdGVyLWhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XG4gICAgY29sb3I6ICMwMDk5ZTU7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICMwMDk5ZTU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/companyregister/companylogin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/companyregister/companylogin.component.ts ***!
  \***********************************************************/
/*! exports provided: CompanyloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyloginComponent", function() { return CompanyloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company.service */ "./src/app/company.service.ts");



let CompanyloginComponent = class CompanyloginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log('data in class ' + fullform.value);
        this.service.register(fullform.value).subscribe(data => { console.log(data); });
    }
};
CompanyloginComponent.ctorParameters = () => [
    { type: _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
];
CompanyloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companylogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./companylogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/companyregister/companylogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./companylogin.component.css */ "./src/app/companyregister/companylogin.component.css")).default]
    })
], CompanyloginComponent);



/***/ }),

/***/ "./src/app/complogin/complogin.component.css":
/*!***************************************************!*\
  !*** ./src/app/complogin/complogin.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box{\n    width: 750px;\n    height: 400px;\n    margin: 50px 300px;\n    color: white;\n    box-shadow: 2px 2px 3px 4px #00bce4;\n    border-radius: 5px;\n}\n.box .left{\n    background-image: linear-gradient(to left, #00bce4, #74d2e7);\n    height: 400px;\n    width: 330px;\n    padding: 20px;\n}\n.box .left i{\n    margin-top: 35px;\n}\n.box .left h6{\n    font-size: 15px;\n}\n.box .right{\n    height: 100%;\n    width: 100%;\n}\n.box .right{\n    padding: 100px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxvZ2luL2NvbXBsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDREQUE0RDtJQUM1RCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcGxvZ2luL2NvbXBsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcbiAgICB3aWR0aDogNzUwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IDUwcHggMzAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDRweCAjMDBiY2U0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib3ggLmxlZnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMGJjZTQsICM3NGQyZTcpO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uYm94IC5sZWZ0IGl7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5ib3ggLmxlZnQgaDZ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmJveCAucmlnaHR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJveCAucmlnaHR7XG4gICAgcGFkZGluZzogMTAwcHggMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/complogin/complogin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/complogin/complogin.component.ts ***!
  \**************************************************/
/*! exports provided: ComploginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComploginComponent", function() { return ComploginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComploginComponent = class ComploginComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComploginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/complogin/complogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complogin.component.css */ "./src/app/complogin/complogin.component.css")).default]
    })
], ComploginComponent);



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main{\n    background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('contact_header.jpg');\n    background-position: center;\n    background-size: cover;\n    height: 60vh;\n    display: table;\n    width: 100%;\n}\n.main h1{\n    color: white;\n    display: table-cell;\n    vertical-align: middle;\n}\n.container{\n    padding: 20px;\n    margin-bottom: 20px;\n    margin-top: -150px;\n    background: white;\n}\nul{\n    list-style: none;\n    text-align: center;\n}\nul li{\n    display: inline-block;\n    padding: 1px;\n}\nul #fb{\n    color: #002ae5;\n}\nul #tw{\n    color: #00bce4;\n}\nul #insta{\n    color: #ff4c4c;\n}\nul #linkedin{\n    color: #00a4e4;\n}\nul #youtube{\n    color: #be0027;\n}\nul li:hover{\n    opacity: .8;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEZBQThHO0lBQzlHLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC41KSwgcmdiYSgwLDAsMCwuNSkpLCB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2NvbnRhY3RfaGVhZGVyLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tYWluIGgxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG51bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnVsIGxpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxcHg7XG59XG51bCAjZmJ7XG4gICAgY29sb3I6ICMwMDJhZTU7XG59XG51bCAjdHd7XG4gICAgY29sb3I6ICMwMGJjZTQ7XG59XG51bCAjaW5zdGF7XG4gICAgY29sb3I6ICNmZjRjNGM7XG59XG51bCAjbGlua2VkaW57XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG51bCAjeW91dHViZXtcbiAgICBjb2xvcjogI2JlMDAyNztcbn1cbnVsIGxpOmhvdmVye1xuICAgIG9wYWNpdHk6IC44O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let ContactusComponent = class ContactusComponent {
    constructor(service) {
        this.service = service;
        this.text = 'Your message sent successfully!';
        this.message = false;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        this.service.contactUs(fullform.value).subscribe(data => { console.log(data); });
        this.message = true;
    }
};
ContactusComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")).default]
    })
], ContactusComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\n    height: 50px;\n    padding: 11px;\n    background-color: #f3f4f7;\n    color: black;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMTFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY3O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/footer2/footer2.component.css":
/*!***********************************************!*\
  !*** ./src/app/footer2/footer2.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\n    height: 50px;\n    background: black;\n}\nfooter ul{\n    list-style: none;\n}\nfooter ul li{\n    display: inline-block;\n    padding: 12px;\n    text-align: center;\n    font-size: 17px;\n}\nfooter ul li a{\n    color: white;\n}\n.link:hover{\n    background: black !important;\n    color: white !important;\n}\n.links li:hover{\n    background: white;\n    cursor: pointer;\n}\n.links #fb:hover a{\n    color: blue;\n}\n.links #tw:hover a{\n    color: #00bce4;\n}\n.links #insta:hover a{\n    color: #ff4c4c;\n}\n.links #you:hover a{\n    color: #ff0000;\n}\n.links #linked:hover a{\n    color: #00a4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyMi9mb290ZXIyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIyL2Zvb3RlcjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5mb290ZXIgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmZvb3RlciB1bCBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuZm9vdGVyIHVsIGxpIGF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5saW5rcyBsaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlua3MgI2ZiOmhvdmVyIGF7XG4gICAgY29sb3I6IGJsdWU7XG59XG4ubGlua3MgI3R3OmhvdmVyIGF7XG4gICAgY29sb3I6ICMwMGJjZTQ7XG59XG4ubGlua3MgI2luc3RhOmhvdmVyIGF7XG4gICAgY29sb3I6ICNmZjRjNGM7XG59XG4ubGlua3MgI3lvdTpob3ZlciBhe1xuICAgIGNvbG9yOiAjZmYwMDAwO1xufVxuLmxpbmtzICNsaW5rZWQ6aG92ZXIgYXtcbiAgICBjb2xvcjogIzAwYTRlNDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer2/footer2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/footer2/footer2.component.ts ***!
  \**********************************************/
/*! exports provided: Footer2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer2Component", function() { return Footer2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Footer2Component = class Footer2Component {
    constructor() { }
    ngOnInit() {
    }
};
Footer2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer2/footer2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer2.component.css */ "./src/app/footer2/footer2.component.css")).default]
    })
], Footer2Component);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondNav{\n    height: 50px;\n    background-color: #f3f4f7;\n}\n.secondNav ul{\n    margin-left: 20%;\n}\n.secondNav ul li{\n    padding: 7px;\n    margin-left: 15px;\n}\n.secondNav ul li a{\n    color: black;\n}\n.secondNav ul li a i{\n    color: #00bce4;\n    font-size: 17px;\n}\nnav, .secondNav{\n    font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmROYXZ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0Zjc7XG59XG4uc2Vjb25kTmF2IHVse1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4uc2Vjb25kTmF2IHVsIGxpe1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zZWNvbmROYXYgdWwgbGkgYXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uc2Vjb25kTmF2IHVsIGxpIGEgaXtcbiAgICBjb2xvcjogIzAwYmNlNDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5uYXYsIC5zZWNvbmROYXZ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/health-insurance/health-insurance.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/health-insurance/health-insurance.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top{\n    height: 70vh;\n    width: 100%;\n    display: table;\n    background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('health_insurance2.jpg');\n    background-size: cover;\n    background-position: center;\n}\n.top .box{\n    vertical-align: middle;\n    display: table-cell;\n    color:white;\n    padding: 20px;\n}\n.content3{\n    padding: 20px;\n}\n.content3 p{\n    text-align: justify;\n}\n.content3 ul #active, #nonActive{\n    display: inline-block;\n    font-size: 25px;\n    padding: 0px 20px 10px;\n}\n.content3 ul #active{\n    border-bottom: 2px solid #00a4e4; \n    color: #00a4e4;\n}\n.content3 ul li:hover{\n    cursor: pointer;\n}\n.content3 #hr{\n    margin-top: -16px;\n}\nthead{\n    color: white;\n    background-color: #00a4e4;\n}\n.form small{\n    margin-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLWluc3VyYW5jZS9oZWFsdGgtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCwrRkFBaUg7SUFDakgsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoLWluc3VyYW5jZS9oZWFsdGgtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xuICAgIGhlaWdodDogNzB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuNSksIHJnYmEoMCwwLDAsLjUpKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9oZWFsdGhfaW5zdXJhbmNlMi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi50b3AgLmJveHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5jb250ZW50M3tcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQzIHB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250ZW50MyB1bCAjYWN0aXZlLCAjbm9uQWN0aXZle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMTBweDtcbn1cbi5jb250ZW50MyB1bCAjYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBhNGU0OyBcbiAgICBjb2xvcjogIzAwYTRlNDtcbn1cbi5jb250ZW50MyB1bCBsaTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudDMgI2hye1xuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xufVxudGhlYWR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE0ZTQ7XG59XG4uZm9ybSBzbWFsbHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/health-insurance/health-insurance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/health-insurance/health-insurance.component.ts ***!
  \****************************************************************/
/*! exports provided: HealthInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsuranceComponent", function() { return HealthInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let HealthInsuranceComponent = class HealthInsuranceComponent {
    constructor(service) {
        this.service = service;
        this.text = 'Your data is submitted';
        this.message = false;
    }
    ngOnInit() {
    }
    healthform(fullform) {
        console.log(fullform.value);
        this.service.healthInsurance(fullform.value).subscribe(data => { console.log(data); });
        this.message = true;
    }
};
HealthInsuranceComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
HealthInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-insurance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./health-insurance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health-insurance/health-insurance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./health-insurance.component.css */ "./src/app/health-insurance/health-insurance.component.css")).default]
    })
], HealthInsuranceComponent);



/***/ }),

/***/ "./src/app/home-insurance/home-insurance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home-insurance/home-insurance.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vid{\n    width: 100%;\n    height: 80vh;\n    overflow: hidden;\n}\n.vid video{\n    min-width: 100%;\n    min-height: 100%;\n    position: relative;\n}\n.vid h2{\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    position: absolute;\n    font-size: 50px;\n    color: white;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-weight: bold;\n}\n.top{\n    background-color: #e3e5e9;\n    height: 60vh;\n}\n.top img{\n    height: 60vh;\n    width: auto;\n}\n.top .left, .right{\n    padding: 20px;\n    text-align: center;\n}\n.top .left h3{\n    margin-top: 130px;\n}\n.top .right ul{\n    margin-top: 120px;\n}\n.content{\n    padding: 20px;\n    box-shadow: 1px 1px 1px 2px #00a4e4;\n    border-radius: 3px;\n}\n.content ul #active, #nonActive{\n    display: inline-block;\n    font-size: 25px;\n    padding: 0px 20px 10px;\n}\n.content ul #active{\n    border-bottom: 2px solid #00a4e4; \n    color: #00a4e4;\n}\n.content ul li:hover{\n    cursor: pointer;\n}\n.content #hr{\n    margin-top: -16px;\n}\ni{\n    color: #00a4e4;\n}\n.content p{\n    text-align: justify;\n}\n.container-fluid .row{\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1pbnN1cmFuY2UvaG9tZS1pbnN1cmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osc0VBQXNFO0lBQ3RFLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtaW5zdXJhbmNlL2hvbWUtaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnZpZCB2aWRlb3tcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udmlkIGgye1xuICAgIHRvcDogMzUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlNWU5O1xuICAgIGhlaWdodDogNjB2aDtcbn1cbi50b3AgaW1ne1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi50b3AgLmxlZnQsIC5yaWdodHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AgLmxlZnQgaDN7XG4gICAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4udG9wIC5yaWdodCB1bHtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMnB4ICMwMGE0ZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmNvbnRlbnQgdWwgI2FjdGl2ZSwgI25vbkFjdGl2ZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDEwcHg7XG59XG4uY29udGVudCB1bCAjYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBhNGU0OyBcbiAgICBjb2xvcjogIzAwYTRlNDtcbn1cbi5jb250ZW50IHVsIGxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50ICNocntcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cbml7XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG4uY29udGVudCBwe1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3d7XG4gICAgcGFkZGluZzogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home-insurance/home-insurance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-insurance/home-insurance.component.ts ***!
  \************************************************************/
/*! exports provided: HomeInsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInsuranceComponent", function() { return HomeInsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeInsuranceComponent = class HomeInsuranceComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeInsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-insurance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-insurance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-insurance/home-insurance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-insurance.component.css */ "./src/app/home-insurance/home-insurance.component.css")).default]
    })
], HomeInsuranceComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top{\n    width: 100%;\n    height: 50vh;\n    background-image: url('insurance3.jpg');\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n    display: table;\n}\n.main_box{\n    padding: 7px;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n}\n.main_box .box{\n    display: inline-block;\n    width: 130px;\n    height: 130px;\n    padding: 20px;\n    border: 1px solid black;\n    border-radius: 10px;\n    background-color: white;\n}\n.main_box .box:hover{\n    opacity: .9;\n    cursor: pointer;\n}\n.second_box{\n    padding: 20px;\n    box-shadow: 1px 1px 1px 2px #00a4e4;\n    margin: 20px auto;\n    border-radius: 5px;\n}\n.second_box .col:hover{\n    opacity: .9;\n}\n.second_box .col i:hover{\n    cursor: pointer;\n}\n.content1{\n    margin: 30px auto;\n    width: 100%;\n    height: auto;\n    background-image: url('banner.jpg');\n    background-position: center;\n    background-size: cover;\n    padding: 40px 0px 40px 20px;\n}\n.content1 .box i{\n    float: left;\n    padding: 10px;\n}\n.content2{\n    padding: 40px 0px 0px 40px;\n}\n.content2 ul{\n    list-style: none;\n    text-align: center;\n}\n.content2 ul li{\n    width: 150px;\n    height: 50px;\n    display: inline-block;\n    padding: 12px;\n    border: 1px solid black;\n    margin: 5px;\n}\n.content2 ul li:hover{\n    opacity: .8;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px 2px #00bce4;\n    border: none;\n}\n.registerBox{\n    width: 100%;\n    height: auto;\n    background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('bg.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 30px;\n}\n.registerBox .registerBox2{\n    padding: 40px 0px 40px 0px;\n}\n.registerBox .box1{\n    border-radius: 5px;\n    width: 300px;\n    height: 420px;\n    float: right;\n    color: #00a4e4;\n    background-color: white;\n    box-shadow: 1px 1px 2px 2px#00a4e4;\n    padding: 20px;\n}\n.registerBox .box1 button a{\n    color: white;\n}\n.registerBox .box2{\n    float: left;\n    border-radius: 5px;\n    background-color: #00a4e4;\n    width: 300px;\n    height: 420px;\n    padding: 20px;\n    color: white;\n    box-shadow: 1px 1px 2px 2px #ccc9c9;\n}\n.registerBox .box2 button{\n    color: #00a4e4;\n}\n.registerBox .box2 img{\n    background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtFQUFpRztJQUNqRyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pbnN1cmFuY2UzLmpwZycpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG4ubWFpbl9ib3h7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWFpbl9ib3ggLmJveHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1haW5fYm94IC5ib3g6aG92ZXJ7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlY29uZF9ib3h7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggIzAwYTRlNDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2Vjb25kX2JveCAuY29sOmhvdmVye1xuICAgIG9wYWNpdHk6IC45O1xufVxuLnNlY29uZF9ib3ggLmNvbCBpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50MXtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iYW5uZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcGFkZGluZzogNDBweCAwcHggNDBweCAyMHB4O1xufVxuLmNvbnRlbnQxIC5ib3ggaXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRlbnQye1xuICAgIHBhZGRpbmc6IDQwcHggMHB4IDBweCA0MHB4O1xufVxuLmNvbnRlbnQyIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQyIHVsIGxpe1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uY29udGVudDIgdWwgbGk6aG92ZXJ7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDJweCAjMDBiY2U0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5yZWdpc3RlckJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsLjUpKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuLnJlZ2lzdGVyQm94IC5yZWdpc3RlckJveDJ7XG4gICAgcGFkZGluZzogNDBweCAwcHggNDBweCAwcHg7XG59XG4ucmVnaXN0ZXJCb3ggLmJveDF7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzAwYTRlNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHgjMDBhNGU0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4ucmVnaXN0ZXJCb3ggLmJveDEgYnV0dG9uIGF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnJlZ2lzdGVyQm94IC5ib3gye1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNGU0O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjY2NjOWM5O1xufVxuLnJlZ2lzdGVyQm94IC5ib3gyIGJ1dHRvbntcbiAgICBjb2xvcjogIzAwYTRlNDtcbn1cbi5yZWdpc3RlckJveCAuYm94MiBpbWd7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/investmentplan/investmentplan.component.css":
/*!*************************************************************!*\
  !*** ./src/app/investmentplan/investmentplan.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top{\n    box-shadow: 1px 1px 2px 2px #00bce4;\n    border-radius: 5px;\n    margin: 20px;\n}\n.top .right{\n    background-image: url('investment_plans.png');\n    background-size: cover;\n    background-position: center;\n    height: 60vh;\n}\n.top .text_box{\n    padding: 50px 0px 20px 50px;\n}\n.top .left{\n    border-right: 2px solid #00a4e4;\n    padding: 30px;\n}\n.top .left #arrow{\n    color: #00a4e4;\n    position: absolute;\n    margin-top: 27%;\n    margin-left: 48%;\n    background: white;\n}\n.top .left .form .col-auto i{\n    color: #00a4e4;\n}\n.top .left .form small a{\n    color: #00a4e4;\n}\n.top .left .form small a:hover{\n    cursor: pointer;\n    text-decoration: underline;\n}\nthead{\n    background: #00a4e4;\n    color: white;\n}\n.content ul{\n    list-style: none;\n}\n.content ul #active, #nonActive{\n    display: inline-block;\n    font-size: 25px;\n    padding: 0px 20px 10px;\n}\n.content ul #active{\n    border-bottom: 2px solid #00a4e4; \n    color: #00a4e4;\n}\n.content ul li:hover{\n    cursor: pointer;\n}\n.content #hr{\n    margin-top: -16px;\n}\n.content{\n    padding: 20px;\n    box-shadow: 1px 1px 1px 2px #00bce4;\n    border-radius: 5px;\n    margin: 5px;\n}\n.content p{\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZXN0bWVudHBsYW4vaW52ZXN0bWVudHBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkNBQStEO0lBQy9ELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaW52ZXN0bWVudHBsYW4vaW52ZXN0bWVudHBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICMwMGJjZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi50b3AgLnJpZ2h0e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaW52ZXN0bWVudF9wbGFucy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwdmg7XG59XG4udG9wIC50ZXh0X2JveHtcbiAgICBwYWRkaW5nOiA1MHB4IDBweCAyMHB4IDUwcHg7XG59XG4udG9wIC5sZWZ0e1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMGE0ZTQ7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbi50b3AgLmxlZnQgI2Fycm93e1xuICAgIGNvbG9yOiAjMDBhNGU0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAyNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDQ4JTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi50b3AgLmxlZnQgLmZvcm0gLmNvbC1hdXRvIGl7XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG4udG9wIC5sZWZ0IC5mb3JtIHNtYWxsIGF7XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG4udG9wIC5sZWZ0IC5mb3JtIHNtYWxsIGE6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxudGhlYWR7XG4gICAgYmFja2dyb3VuZDogIzAwYTRlNDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudCB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNvbnRlbnQgdWwgI2FjdGl2ZSwgI25vbkFjdGl2ZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDEwcHg7XG59XG4uY29udGVudCB1bCAjYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBhNGU0OyBcbiAgICBjb2xvcjogIzAwYTRlNDtcbn1cbi5jb250ZW50IHVsIGxpOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50ICNocntcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMnB4ICMwMGJjZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmNvbnRlbnQgcHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/investmentplan/investmentplan.component.ts":
/*!************************************************************!*\
  !*** ./src/app/investmentplan/investmentplan.component.ts ***!
  \************************************************************/
/*! exports provided: InvestmentplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentplanComponent", function() { return InvestmentplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let InvestmentplanComponent = class InvestmentplanComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        alert('Scroll down and check plans');
        this.service.investPlan(fullform.value).subscribe(res => console.log(res));
    }
};
InvestmentplanComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
InvestmentplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-investmentplan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./investmentplan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/investmentplan/investmentplan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./investmentplan.component.css */ "./src/app/investmentplan/investmentplan.component.css")).default]
    })
], InvestmentplanComponent);



/***/ }),

/***/ "./src/app/lifeinsurance/lifeinsurance.component.css":
/*!***********************************************************!*\
  !*** ./src/app/lifeinsurance/lifeinsurance.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top{\n    border-radius: 5px;\n    box-shadow: 2px 2px 3px 4px #6ea0cf;\n    padding: 20px;\n    margin: 10px auto;\n}\n.boxs{\n    padding: 20px;\n}\n.boxs .box{\n    width: 100%;\n    height: 200px;\n    padding: 20px;\n    box-shadow: 1px 1px 1px 1px #6ea0cf;\n    font-size: 20px;\n    border-radius: 5px;\n}\n.content ul{\n    list-style: none;\n}\n.content ul #active, #nonActive{\n    display: inline-block;\n    font-size: 25px;\n    padding: 0px 20px 10px;\n}\n.content ul #active{\n    border-bottom: 2px solid #00a4e4; \n    color: #00a4e4;\n}\n.content ul li:hover{\n    cursor: pointer;\n}\n.content #hr{\n    margin-top: -16px;\n}\n.content .content2{\n    text-align: justify;\n}\nthead{\n    background-color: #00a4e4;\n    color: white;\n}\n.content2 ul{\n    list-style-type: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlmZWluc3VyYW5jZS9saWZlaW5zdXJhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9saWZlaW5zdXJhbmNlL2xpZmVpbnN1cmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDRweCAjNmVhMGNmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4uYm94c3tcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmJveHMgLmJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICM2ZWEwY2Y7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250ZW50IHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY29udGVudCB1bCAjYWN0aXZlLCAjbm9uQWN0aXZle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMTBweDtcbn1cbi5jb250ZW50IHVsICNhY3RpdmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGE0ZTQ7IFxuICAgIGNvbG9yOiAjMDBhNGU0O1xufVxuLmNvbnRlbnQgdWwgbGk6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRlbnQgI2hye1xuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuLmNvbnRlbnQgLmNvbnRlbnQye1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG50aGVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNGU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50MiB1bHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG59Il19 */");

/***/ }),

/***/ "./src/app/lifeinsurance/lifeinsurance.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lifeinsurance/lifeinsurance.component.ts ***!
  \**********************************************************/
/*! exports provided: LifeinsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeinsuranceComponent", function() { return LifeinsuranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let LifeinsuranceComponent = class LifeinsuranceComponent {
    constructor(service) {
        this.service = service;
        this.text = 'Submitted Successfully!';
        this.message = false;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        this.service.lifeInsurance(fullform.value).subscribe(data => { console.log(data); });
        this.message = true;
    }
};
LifeinsuranceComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
LifeinsuranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lifeinsurance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lifeinsurance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lifeinsurance/lifeinsurance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lifeinsurance.component.css */ "./src/app/lifeinsurance/lifeinsurance.component.css")).default]
    })
], LifeinsuranceComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".registerBox{\n    width: 100%;\n    height: auto;\n    background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('bg2.jpg');\n    background-size: cover;\n    background-position: center;\n    padding: 30px;\n}\n.registerBox .registerBox2{\n    padding: 40px 0px 40px 0px;\n}\n.registerBox .box1{\n    border-radius: 5px;\n    width: 300px;\n    height: 420px;\n    float: right;\n    color: #00a4e4;\n    background-color: white;\n    box-shadow: 1px 1px 2px 2px#00a4e4;\n    padding: 20px;\n}\n.registerBox .box1 button a{\n    color: white;\n}\n.registerBox .box2{\n    float: left;\n    border-radius: 5px;\n    background-color: #00a4e4;\n    width: 300px;\n    height: 420px;\n    padding: 20px;\n    color: white;\n    box-shadow: 1px 1px 2px 2px #ccc9c9;\n}\n.registerBox .box2 button{\n    color: #00a4e4;\n}\n.registerBox .box2 img{\n    background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0ZBQWtHO0lBQ2xHLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlckJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsLjUpKSwgdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iZzIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbi5yZWdpc3RlckJveCAucmVnaXN0ZXJCb3gye1xuICAgIHBhZGRpbmc6IDQwcHggMHB4IDQwcHggMHB4O1xufVxuLnJlZ2lzdGVyQm94IC5ib3gxe1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4IzAwYTRlNDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnJlZ2lzdGVyQm94IC5ib3gxIGJ1dHRvbiBhe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZWdpc3RlckJveCAuYm94MntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTRlNDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggI2NjYzljOTtcbn1cbi5yZWdpc3RlckJveCAuYm94MiBidXR0b257XG4gICAgY29sb3I6ICMwMGE0ZTQ7XG59XG4ucmVnaXN0ZXJCb3ggLmJveDIgaW1ne1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let LoginComponent = class LoginComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    loginform(fullform) {
        console.log(fullform.value);
        this.service.uLogin(fullform.value).subscribe(data => { console.log(data); });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainService = class MainService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.userRegisterUrl = 'http://localhost:7000/users/addNew';
        this.claimRequestUrl = 'http://localhost:7000/users/claimRequest';
        this.contactUsUrl = 'http://localhost:7000/users/sendMessage';
        this.lifeInsuranceUrl = 'http://localhost:7000/users/life';
        this.healthInsuranceUrl = 'http://localhost:7000/users/health';
        this.userLoginUrl = 'http://localhost:7000/users/login';
        this.adminRegisterUrl = 'http://localhost:7000/adminAuth/register';
        this.investPlanUrl = 'http://localhost:7000/users/investPlan';
    }
    // Http Options
    //  httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }
    // Handle API errors
    // handleError(error: HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(
    //       `Backend returned code ${error.status},` +
    //       `body was: ${error.error}`);
    //   }
    // return an observable with a user-facing error message
    //   return throwError(
    //     'Something bad happened; please try again later.');
    // };
    register(userData) {
        console.log(userData);
        return this.http.post(this.userRegisterUrl, userData);
    }
    claimRequest(data) {
        console.log(data);
        return this.http.post(this.claimRequestUrl, data);
    }
    contactUs(message) {
        return this.http.post(this.contactUsUrl, message);
    }
    lifeInsurance(usrData) {
        return this.http.post(this.lifeInsuranceUrl, usrData);
    }
    healthInsurance(udata) {
        return this.http.post(this.healthInsuranceUrl, udata);
    }
    registerAdmin(data) {
        return this.http.post(this.adminRegisterUrl, data);
    }
    uLogin(data) {
        console.log(data);
        return this.http.post(this.userLoginUrl, data);
    }
    investPlan(data) {
        return this.http.post(this.investPlanUrl, data);
    }
};
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(service) {
        this.service = service;
        this.message = 'Your are Registered Successfully!';
        this.register = false;
    }
    ngOnInit() {
    }
    myform(fullform) {
        console.log(fullform.value);
        this.service.register(fullform.value).subscribe(data => { console.log(data); });
        this.register = true;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/usrlogin/usrlogin.component.css":
/*!*************************************************!*\
  !*** ./src/app/usrlogin/usrlogin.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box{\n    width: 750px;\n    height: 400px;\n    margin: 50px 300px;\n    color: white;\n    box-shadow: 2px 2px 3px 4px #00bce4;\n    border-radius: 5px;\n}\n.box .left{\n    background-image: linear-gradient(to left, #00bce4, #74d2e7);\n    height: 400px;\n    width: 330px;\n    padding: 20px;\n}\n.box .left i{\n    margin-top: 35px;\n}\n.box .left h6{\n    font-size: 15px;\n}\n.box .right{\n    height: 100%;\n    width: 100%;\n}\n.box .right{\n    padding: 100px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNybG9naW4vdXNybG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzcmxvZ2luL3VzcmxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIHdpZHRoOiA3NTBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogNTBweCAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggNHB4ICMwMGJjZTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJveCAubGVmdHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwYmNlNCwgIzc0ZDJlNyk7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5ib3ggLmxlZnQgaXtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmJveCAubGVmdCBoNntcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uYm94IC5yaWdodHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYm94IC5yaWdodHtcbiAgICBwYWRkaW5nOiAxMDBweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/usrlogin/usrlogin.component.ts":
/*!************************************************!*\
  !*** ./src/app/usrlogin/usrlogin.component.ts ***!
  \************************************************/
/*! exports provided: UsrloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsrloginComponent", function() { return UsrloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UsrloginComponent = class UsrloginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    loginform(fullform) {
        console.log(fullform.value);
        this.service.uLogin(fullform.value).subscribe(res => {
            console.log(res.token);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/userDash']);
        }, err => console.log(err));
    }
};
UsrloginComponent.ctorParameters = () => [
    { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UsrloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usrlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usrlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usrlogin/usrlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usrlogin.component.css */ "./src/app/usrlogin/usrlogin.component.css")).default]
    })
], UsrloginComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fazi/Desktop/Projects_to_Send/PolicyDukaan/frontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map