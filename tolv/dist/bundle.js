/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


window.onload = function () {
  var header_effect = document.querySelector("header");
  var main_article1 = document.querySelector(".main__article1");
  var main_article2 = document.querySelector(".main__article2");
  var main_article3 = document.querySelector(".main__article3");
  window.addEventListener("scroll", scrollEffect);
  window.addEventListener("scroll", showCopyScrollDown);
  window.addEventListener("scroll", showCopyScrollUp);
  window.addEventListener("scroll", deleteCopy);

  function scrollEffect() {
    if (window.scrollY >= 1) {
      header_effect.style.backgroundColor = "white";
      header_effect.style.transition = "0.4s ease";
      header_effect.style.boxShadow = "0.3px 0px 10px 1px gray";
    } else {
      header_effect.style.backgroundColor = "";
      header_effect.style.boxShadow = "";
    }
  }

  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    console.log(main_article1);
  });

  function showCopyScrollDown() {
    if (window.scrollY >= 1790 && window.screenY <= 3680) {
      main_article1.style.opacity = "0";
      main_article2.style.opacity = "1";
      main_article2.style.transition = "1s ease";
    } else if (window.screenY >= 2720) {
      main_article2.style.opacity = "0";
      main_article3.style.opacity = "1";
      main_article3.style.transition = "1s ease";
    }
  }

  function showCopyScrollUp() {
    if (window.scrollY <= 1790) {
      main_article1.style.opacity = "1";
      main_article2.style.opacity = "0";
    } else if (1790 <= window.screenY && window.screenY <= 3680) {
      main_article2.style.opacity = "1";
      main_article3.style.opacity = "0";
    }
  }

  function deleteCopy() {
    if (window.scrollY >= 4153) {
      main_article2.style.display = "none";
      main_article1.style.display = "none";
      main_article3.style.display = "none";
    }
  }
};

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;