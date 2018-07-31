(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("https"));
	else if(typeof define === 'function' && define.amd)
		define(["https"], factory);
	else if(typeof exports === 'object')
		exports["Openiban"] = factory(require("https"));
	else
		root["Openiban"] = factory(root["https"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var openiban_http_1 = __webpack_require__(1);
var defaultOptions = {
    getBIC: true,
    validateBankCode: true
};
function validate(iban, opts) {
    if (opts === void 0) { opts = defaultOptions; }
    var optionsString = "?getBIC=" + (opts.getBIC || 'false') + "&validateBankCode=" + (opts.validateBankCode || 'false');
    var url = '/validate/' + iban + optionsString;
    return openiban_http_1.get(url)
        .then(function (response) {
        return response;
    })
        .catch(function (err) {
        return err;
    });
}
exports.validate = validate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var https = __webpack_require__(2);
function get(url) {
    var options = {
        host: 'openiban.savedo.com',
        port: 443,
        path: url,
        method: 'get',
        headers: { 'Accept': '*/*' }
    };
    return new Promise(function (resolve, reject) {
        https.get(options, function (res) {
            res.on('data', function (d) {
                resolve(JSON.parse(d.toString()));
            });
        }).on('error', function (err) {
            reject(err);
        });
    });
}
exports.get = get;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })
/******/ ]);
});