(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory(require("jquery"));
	else
		root["MyLibrary"] = factory(root["jquery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "//m.zhuge1.com:3000/";
/******/
/******/ 	var jsonpArray = window["webpackJsonpMyLibrary"] = window["webpackJsonpMyLibrary"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([19,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!************************************!*\
  !*** ./javascripts/module/base.js ***!
  \************************************/
/*! exports provided: isExternal, validUsername, validURL, validLowerCase, validUpperCase, validAlphabets, validEmail, name */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isExternal\", function() { return isExternal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validUsername\", function() { return validUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validURL\", function() { return validURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validLowerCase\", function() { return validLowerCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validUpperCase\", function() { return validUpperCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validAlphabets\", function() { return validAlphabets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validEmail\", function() { return validEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/**\n * Created by jiachenpan on 16/11/18.\n */\n\nfunction isExternal (path) {\n\treturn /^(https?:|mailto:|tel:)/.test(path);\n}\n\nfunction validUsername (str) {\n\tconst valid_map = ['admin', 'editor'];\n\treturn valid_map.indexOf(str.trim()) >= 0;\n}\n\n/* 合法uri*/\nfunction validURL (url) {\n\tconst reg = /^(https?|ftp):\\/\\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\\.)*[a-zA-Z0-9-]+\\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\\/($|[a-zA-Z0-9.,?'\\\\+&%$#=~_-]+))*$/;\n\treturn reg.test(url);\n}\n\n/* 小写字母*/\nfunction validLowerCase (str) {\n\tconst reg = /^[a-z]+$/;\n\treturn reg.test(str);\n}\n\n/* 大写字母*/\nfunction validUpperCase (str) {\n\tconst reg = /^[A-Z]+$/;\n\treturn reg.test(str);\n}\n\n/* 大小写字母*/\nfunction validAlphabets (str) {\n\tconst reg = /^[A-Za-z]+$/;\n\treturn reg.test(str);\n}\n\n/**\n   * validate email\n   * @param email\n   * @returns {boolean}\n   */\nfunction validEmail (email) {\n\tconst re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\treturn re.test(email);\n}\n\nconst name = '哈哈哈哈哈哈哈';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9qYXZhc2NyaXB0cy9tb2R1bGUvYmFzZS5qcz9mZWIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLG9HQUFvRyxFQUFFLDRDQUE0QyxFQUFFLGVBQWUsRUFBRSxnSEFBZ0gsRUFBRTtBQUN2UjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsK0JBQStCLHlCQUF5Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsR0FBRztBQUNqSztBQUNBOztBQUVPIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgamlhY2hlbnBhbiBvbiAxNi8xMS8xOC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNFeHRlcm5hbCAocGF0aCkge1xuXHRyZXR1cm4gL14oaHR0cHM/OnxtYWlsdG86fHRlbDopLy50ZXN0KHBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRVc2VybmFtZSAoc3RyKSB7XG5cdGNvbnN0IHZhbGlkX21hcCA9IFsnYWRtaW4nLCAnZWRpdG9yJ107XG5cdHJldHVybiB2YWxpZF9tYXAuaW5kZXhPZihzdHIudHJpbSgpKSA+PSAwO1xufVxuXG4vKiDlkIjms5V1cmkqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkVVJMICh1cmwpIHtcblx0Y29uc3QgcmVnID0gL14oaHR0cHM/fGZ0cCk6XFwvXFwvKFthLXpBLVowLTkuLV0rKDpbYS16QS1aMC05LiYlJC1dKykqQCkqKCgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMS05XVswLTldPykoXFwuKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFsxLTldP1swLTldKSl7M318KFthLXpBLVowLTktXStcXC4pKlthLXpBLVowLTktXStcXC4oY29tfGVkdXxnb3Z8aW50fG1pbHxuZXR8b3JnfGJpenxhcnBhfGluZm98bmFtZXxwcm98YWVyb3xjb29wfG11c2V1bXxbYS16QS1aXXsyfSkpKDpbMC05XSspKihcXC8oJHxbYS16QS1aMC05Liw/J1xcXFwrJiUkIz1+Xy1dKykpKiQvO1xuXHRyZXR1cm4gcmVnLnRlc3QodXJsKTtcbn1cblxuLyog5bCP5YaZ5a2X5q+NKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZExvd2VyQ2FzZSAoc3RyKSB7XG5cdGNvbnN0IHJlZyA9IC9eW2Etel0rJC87XG5cdHJldHVybiByZWcudGVzdChzdHIpO1xufVxuXG4vKiDlpKflhpnlrZfmr40qL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkVXBwZXJDYXNlIChzdHIpIHtcblx0Y29uc3QgcmVnID0gL15bQS1aXSskLztcblx0cmV0dXJuIHJlZy50ZXN0KHN0cik7XG59XG5cbi8qIOWkp+Wwj+WGmeWtl+avjSovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRBbHBoYWJldHMgKHN0cikge1xuXHRjb25zdCByZWcgPSAvXltBLVphLXpdKyQvO1xuXHRyZXR1cm4gcmVnLnRlc3Qoc3RyKTtcbn1cblxuLyoqXG4gICAqIHZhbGlkYXRlIGVtYWlsXG4gICAqIEBwYXJhbSBlbWFpbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRFbWFpbCAoZW1haWwpIHtcblx0Y29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ+WTiOWTiOWTiOWTiOWTiOWTiOWTiCc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),

/***/ 19:
/*!**************************************************************************************!*\
  !*** multi ./javascripts/pages/hahhaha.js webpack-hot-middleware/client?reload=true ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./javascripts/pages/hahhaha.js */20);
module.exports = __webpack_require__(/*! webpack-hot-middleware/client?reload=true */2);


/***/ }),

/***/ 20:
/*!**************************************!*\
  !*** ./javascripts/pages/hahhaha.js ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./javascripts/pages/hahhaha.js webpack-hot-middleware/client?reload=true (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/base */ 0);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 3);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ 1);\n\n\n\n\n\nconsole.log(utils__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"]);\nconsole.log(_module_base__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9qYXZhc2NyaXB0cy9wYWdlcy9oYWhoYWhhLmpzP2Y5MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNLO0FBQ2Y7O0FBRUY7QUFDMUIsWUFBWSxxREFBSztBQUNqQixZQUFZLHlDQUFJIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtoZWlnaHR9IGZyb20gJy4uL21vZHVsZS9iYXNlJztcbmltcG9ydCAqIGFzIG5hbWUgZnJvbSAnX19qc19fL21vZHVsZS9iYXNlJztcbmltcG9ydCBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzJztcbmNvbnNvbGUubG9nKHV0aWxzKTtcbmNvbnNvbGUubG9nKG5hbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),

/***/ 3:
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__3__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvZXh0ZXJuYWwgXCJqcXVlcnlcIj84ZjhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzNfXzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })

/******/ });
});