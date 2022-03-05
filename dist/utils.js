/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./alert.js":
/*!******************!*\
  !*** ./alert.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPostData": function() { return /* binding */ createPostData; },
/* harmony export */   "setPostData": function() { return /* binding */ setPostData; },
/* harmony export */   "findImageNode": function() { return /* binding */ findImageNode; }
/* harmony export */ });
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./alert.js");


function getBase64Image(url, callback) {
  var xhr;
  xhr = new XMLHttpRequest();

  xhr.onload = function () {
    var reader;
    reader = new FileReader();

    reader.onloadend = function () {
      callback(reader.result);
    };

    reader.readAsDataURL(xhr.response);
  };

  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

function createHTMLItem(clientData, node) {
  var item;
  item = {};
  item.type = "html";
  item.html = node.outerHTML;
  item.text = node.innerText;
  return item;
}

function createImageItem(url) {
  return new Promise(function (res, rej) {
    return getBase64Image(url, function (path) {
      var item;
      item = {};
      item.type = "image";
      item.base64 = path;
      item.url = url;
      res(item);
    });
  });
}

function createURLItem(clientData, node) {
  var item, url;
  item = {};
  url = node.linkUrl === "current" ? window.location.href : node.linkUrl;
  item.type = "link";
  item.url = url;
  return item;
}

function createPostData(clientData, nodeList) {
  var items, postData;
  postData = {
    data: []
  };
  items = [];
  postData.uid = clientData.uid;
  postData.apiKey = clientData.apiKey;
  postData.source = window.location.href;
  nodeList.forEach(function (el, idx) {
    var item, url;

    if (el.nodeName === "IMG" || el.srcUrl) {
      url = el.srcUrl ? el.srcUrl : el.src;
      item = createImageItem(url);
      items.push(item);
    } else if (el.nodeName !== "IMG" && !el.linkUrl) {
      item = new Promise(function (res, rej) {
        res(createHTMLItem(clientData, el));
      });
      items.push(item);
    } else if (el.linkUrl) {
      item = createURLItem(clientData, el);
      postData.data.push(item);
      setPostData(postData);
    }
  });
  Promise.all(items).then(function (values) {
    if (values.length) {
      values.forEach(function (el) {
        return postData.data.push(el);
      });
      setPostData(postData);
    }
  });
}
function setPostData(content) {
  chrome.runtime.sendMessage({
    content: content
  });
  _alert__WEBPACK_IMPORTED_MODULE_0__["default"].style.display = "flex";
  setTimeout(function () {
    _alert__WEBPACK_IMPORTED_MODULE_0__["default"].style.display = "none";
  }, 3000);
}
function findImageNode(nodeList, clientData) {
  var elements, filteredList, isImageFound, list, wrapper;
  list = Array.from(nodeList.children).slice();
  isImageFound = false;
  filteredList = [];
  elements = [];
  list.forEach(function (el) {
    if (el.querySelector("img")) {
      return isImageFound = true;
    }
  });

  if (isImageFound) {
    list.forEach(function (node) {
      var wrapper;

      if (node.querySelector("img")) {
        wrapper = document.createElement("div");

        if (elements.length) {
          elements.forEach(function (el) {
            return wrapper.append(el);
          });
        }

        filteredList.push(wrapper);
        elements = [];
        filteredList.push(node.querySelector("img"));
        return isImageFound = true;
      } else {
        return elements.push(node);
      }
    });

    if (elements.length) {
      wrapper = document.createElement("div");

      if (elements.length) {
        elements.forEach(function (node) {
          return wrapper.append(node);
        });
      }

      filteredList.push(wrapper);
    }

    createPostData(clientData, filteredList);
  } else {
    return false;
  }

  return isImageFound;
}
}();
/******/ })()
;
//# sourceMappingURL=utils.js.map