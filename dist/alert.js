/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!******************!*\
  !*** ./alert.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
var alert = document.createElement("div");
var content = document.createElement("div");
var text = document.createElement("p");
var svg = "\n<svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16C3.5 17.1046 4.39543 18 5.5 18H15.5C16.6046 18 17.5 17.1046 17.5 16V11.5\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>\n<path d=\"M11.5303 11.5303C11.2374 11.8232 10.7626 11.8232 10.4697 11.5303C10.1768 11.2374 10.1768 10.7626 10.4697 10.4697L11.5303 11.5303ZM18.9999 3.00006L19 2.25006C19.4142 2.25007 19.7499 2.58585 19.7499 3.00006L18.9999 3.00006ZM19.7499 7.00031C19.7499 7.41452 19.4142 7.7503 18.9999 7.7503C18.5857 7.7503 18.2499 7.41452 18.2499 7.0003L19.7499 7.00031ZM15 3.74994C14.5858 3.74993 14.25 3.41413 14.2501 2.99992C14.2501 2.5857 14.5859 2.24993 15.0001 2.24994L15 3.74994ZM10.4697 10.4697L18.4696 2.46973L19.5303 3.53039L11.5303 11.5303L10.4697 10.4697ZM19.7499 3.00006L19.7499 7.00031L18.2499 7.0003L18.2499 3.00006L19.7499 3.00006ZM18.9999 3.75006L15 3.74994L15.0001 2.24994L19 2.25006L18.9999 3.75006Z\" fill=\"white\"/>\n</svg>\n";
alert.id = "wejeAlert";
alert.style = "display: none !important;\n  position: fixed !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 17px !important;\n  margin: auto !important;\n  z-index: 100 !important;\n  width: 220px !important;\n  font-size: 15px !important;\n  height: 60px !important;\n  justify-content: center !important;\n  border-radius: 20px !important;\n  color: white !important;\n  background-color: #4881FF !important";
content.style = "display: flex !important;\n  gap: 10px !important;\n  justify-content: center !important;\n  align-items: center !important;";
text.innerText = "Content sent";
content.innerHTML = svg;
content.append(text);
alert.append(content);
document.body.append(alert);
/* harmony default export */ __webpack_exports__["default"] = (alert);
/******/ })()
;
//# sourceMappingURL=alert.js.map