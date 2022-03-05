/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./pinner.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pinner": function() { return /* binding */ pinner; },
/* harmony export */   "setPinnerCoords": function() { return /* binding */ setPinnerCoords; },
/* harmony export */   "togglePinner": function() { return /* binding */ togglePinner; }
/* harmony export */ });
var pinner = document.createElement("div");
pinner.innerHTML = '<svg class="clipper" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect class="clipper" width="22" height="22" rx="5" fill="black"/> <path class="clipper" d="M12.7393 15V15.75C13.0656 15.75 13.3544 15.5391 13.4537 15.2284L12.7393 15ZM9.42036 15L8.71933 15.2665C8.82999 15.5576 9.10898 15.75 9.42036 15.75V15ZM8.89757 13.625L9.5986 13.3585L9.50318 13.1075L9.27015 12.9741L8.89757 13.625ZM13.1789 13.625L12.8013 12.9769L12.5523 13.1221L12.4645 13.3966L13.1789 13.625ZM12.7393 14.25H9.42036V15.75H12.7393V14.25ZM10.1214 14.7335L9.5986 13.3585L8.19653 13.8915L8.71933 15.2665L10.1214 14.7335ZM9.27015 12.9741C7.1587 11.7655 6.46928 9.69082 6.84933 7.94038C7.22695 6.20112 8.66121 4.75 10.9831 4.75V3.25C7.9121 3.25 5.90146 5.23638 5.38348 7.62212C4.86793 9.99668 5.83221 12.7345 8.52498 14.2759L9.27015 12.9741ZM10.9831 4.75C13.3053 4.75 14.7488 6.20208 15.1419 7.94616C15.5377 9.70185 14.868 11.773 12.8013 12.9769L13.5564 14.2731C16.2103 12.727 17.1393 9.98565 16.6052 7.61634C16.0686 5.23542 14.054 3.25 10.9831 3.25V4.75ZM12.4645 13.3966L12.0249 14.7716L13.4537 15.2284L13.8933 13.8534L12.4645 13.3966Z" fill="white"/> <path class="clipper" d="M10 18H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>';
pinner.id = "wejePinner";
pinner.classList.add("clipper");
pinner.style = "position: absolute; top: -50px; left: 10px; z-index: 9999999; cursor: pointer; display: none; width: 32px; height: 32px;";
var interval = null;
function setPinnerCoords(selection, type) {
  clearInterval(interval);

  if (!selection && type === "EMPTY") {
    pinner.style.top = -50 + "px";
    pinner.style.left = 0;
  } else if (selection && type === "IMAGE" && selection.width > 100) {
    pinner.style.top = selection.getBoundingClientRect().y + window.scrollY + 10 + "px";
    pinner.style.left = selection.getBoundingClientRect().x + 10 + "px";
  } else {
    pinner.style.top = selection.getRangeAt(0).getBoundingClientRect().y + window.scrollY + "px";
    pinner.style.left = selection.getRangeAt(0).getBoundingClientRect().x <= 20 ? 5 : selection.getRangeAt(0).getBoundingClientRect().x - 35 + "px";
    interval = setInterval(function () {
      pinner.style.top = selection.getRangeAt(0).getBoundingClientRect().y + window.scrollY + "px";
      pinner.style.left = selection.getRangeAt(0).getBoundingClientRect().x <= 20 ? 5 : selection.getRangeAt(0).getBoundingClientRect().x - 35 + "px";
    }, 500);
  }
}
function togglePinner(pinnerStatus) {
  if (pinnerStatus.text || pinnerStatus.image) {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}
document.body.append(pinner);
/******/ })()
;
//# sourceMappingURL=pinner.js.map