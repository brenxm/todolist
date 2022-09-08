/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/josefinsans.ttf */ "./src/assets/josefinsans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: mainFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(249, 249, 249);\n}\n\n.header-container {\n  background-color: white;\n  box-shadow: 0 0 15px rgb(163, 163, 163);\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-container .title-logo {\n  height: 30px;\n}\n\n.main-body {\n  height: calc(100vh - 80px);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.footer {\n  height: 20px;\n  background-color: rgb(214, 214, 214);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer div {\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.project_add-button {\n  height: 30px;\n  width: 60px;\n  color: white;\n  font-size: 20px;\n  border: none;\n  background-color: dodgerblue;\n  display: block;\n  margin: 0 auto;\n}\n\n.project_add-project-modal-container {\n  height: 250px;\n  width: 200px;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n  padding-top: 20px;\n  position: absolute;\n  left: calc(50% - 100px);\n  border-radius: 10px;\n  box-shadow: 2px 5px 10px rgb(186, 186, 186);\n  transition: 0.3s;\n}\n.project_add-project-modal-container .title-container div {\n  height: 10px;\n}\n.project_add-project-modal-container .title-container p {\n  color: red;\n  font-size: 11.5px;\n  display: none;\n}\n.project_add-project-modal-container .submit-add-project {\n  transition: 0.3s;\n}\n\n.color-container {\n  display: flex;\n  justify-content: space-between;\n}\n.color-container .color-picker, .color-container .color-picker--selected {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: blue;\n  cursor: pointer;\n  border: 1px solid black;\n}\n.color-container .color-picker--selected {\n  border: 2px solid dodgerblue;\n}\n\n.repitition-type .handle-container .handle-rail {\n  height: 20px;\n  width: 60px;\n  background-color: dodgerblue;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.repitition-type .handle-container #handle-head, .repitition-type .handle-container #handle-head--toggle {\n  height: 20px;\n  width: 30px;\n  border-radius: 20px;\n  background-color: red;\n  position: relative;\n  top: -18px;\n  pointer-events: none;\n  transition: 0.3s;\n  right: -30px;\n}\n.repitition-type .handle-container #handle-head--toggle {\n  right: 0px;\n}\n.repitition-type .handle-container .date-input {\n  display: block;\n}\n\n.single-project-container {\n  height: 70px;\n  width: 100%;\n  background-color: rgb(255, 255, 255);\n  display: grid;\n  grid-template-columns: 60px 1fr 1fr 30px 30px;\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px rgb(184, 184, 184);\n}\n.single-project-container .single-project_tag-container {\n  grid-area: 1/1/4/2;\n  pointer-events: none;\n}\n.single-project-container .single-project_tag-container > * {\n  height: 80%;\n  margin: auto;\n  display: block;\n}\n.single-project-container .single-project_title-container {\n  pointer-events: none;\n  grid-area: 1/2/3/4;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.single-project-container .single-project_title-container .title {\n  font-size: 23px;\n  color: rgb(59, 59, 59);\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_tasks-count-container {\n  pointer-events: none;\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n.single-project-container .single-project_tasks-count-container .sptcc1 {\n  color: rgb(103, 103, 103);\n  font-size: 13px;\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_tasks-count-container .sptcc2 {\n  font-weight: 600;\n  color: rgb(172, 109, 20);\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_repeated-date-container {\n  pointer-events: none;\n  grid-area: 3/3/4/4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.single-project-container .single-project_repeated-date-container span {\n  color: rgb(103, 103, 103);\n  font-size: 14px;\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_edit-button {\n  grid-area: 2/4/3/5;\n}\n.single-project-container .single-project_edit-button img {\n  width: 25px;\n}\n.single-project-container .single-project_delete-button {\n  grid-area: 2/5/3/6;\n}\n.single-project-container .single-project_delete-button img {\n  width: 25px;\n}\n\n.title-logo-container > * {\n  height: 30px;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,2DAAA;AACJ;AAGA;EACI,SAAA;EACA,sBAAA;AADJ;;AAIA;EACI,oCAAA;AADJ;;AAIA;EACI,uBAAA;EACA,uCAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AADJ;AAGI;EACI,YAAA;AADR;;AAKA;EACI,0BAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAFJ;;AAKA;EACI,YAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,eAAA;EACA,kBAAA;EACA,qBAAA;AAFJ;;AAKA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,4BAAA;EACA,cAAA;EACA,cAAA;AAFJ;;AAKA;EACI,aAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,gBAAA;AAFJ;AAMQ;EACI,YAAA;AAJZ;AAOQ;EACI,UAAA;EACA,iBAAA;EACA,aAAA;AALZ;AASI;EACI,gBAAA;AAPR;;AAWA;EACI,aAAA;EACA,8BAAA;AARJ;AAUI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;AARR;AAWI;EAEI,4BAAA;AAVR;;AAgBQ;EACI,YAAA;EACA,WAAA;EACA,4BAAA;EACA,mBAAA;EACA,eAAA;AAbZ;AAgBQ;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;AAdZ;AAiBQ;EAEI,UAAA;AAhBZ;AAmBQ;EACI,cAAA;AAjBZ;;AAsBA;EACI,YAAA;EACA,WAAA;EACA,oCAAA;EACA,aAAA;EACA,6CAAA;EACA,kCAAA;EACA,mBAAA;EACA,0CAAA;AAnBJ;AAqBI;EACI,kBAAA;EACA,oBAAA;AAnBR;AAqBQ;EACI,WAAA;EACA,YAAA;EACA,cAAA;AAnBZ;AAuBI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AArBR;AAuBQ;EACI,eAAA;EACA,sBAAA;EACA,uBAAA;AArBZ;AAyBI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAvBR;AAyBQ;EACI,yBA1LU;EA2LV,eAAA;EACA,uBAAA;AAvBZ;AA0BQ;EACI,gBAAA;EACA,wBAAA;EACA,uBAAA;AAxBZ;AA4BI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA1BR;AA4BQ;EACI,yBA9MU;EA+MV,eAAA;EACA,uBAAA;AA1BZ;AA8BI;EACI,kBAAA;AA5BR;AA6BQ;EACQ,WAAA;AA3BhB;AA+BI;EACI,kBAAA;AA7BR;AA8BQ;EACI,WAAA;AA5BZ;;AAkCI;EACI,YAAA;AA/BR","sourcesContent":["@font-face {\r\n    font-family: mainFont;\r\n    src: url(\"./assets/josefinsans.ttf\") format(\"woff\");\r\n}\r\n$projectTitleSubColor:rgb(103, 103, 103);\r\n\r\n* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(249, 249, 249);\r\n}\r\n\r\n.header-container {\r\n    background-color: white;\r\n    box-shadow: 0 0 15px rgb(163, 163, 163);\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    .title-logo {\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n.main-body {\r\n    height: calc(100vh - 80px);\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    background-color: rgb(214, 214, 214);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer div {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.project_add-button {\r\n    height: 30px;\r\n    width: 60px;\r\n    color: white;\r\n    font-size: 20px;\r\n    border: none;\r\n    background-color: dodgerblue;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.project_add-project-modal-container {\r\n    height: 250px;\r\n    width: 200px;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    padding-top: 20px;\r\n    position: absolute;\r\n    left: calc(50% - 100px);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 5px 10px rgb(186, 186, 186);\r\n    transition: 0.3s;\r\n\r\n    .title-container {\r\n\r\n        div {\r\n            height: 10px;\r\n        }\r\n\r\n        p {\r\n            color: red;\r\n            font-size: 11.5px;\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .submit-add-project {\r\n        transition: 0.3s;\r\n    }\r\n}\r\n\r\n.color-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .color-picker {\r\n        height: 25px;\r\n        width: 25px;\r\n        border-radius: 50%;\r\n        background-color: blue;\r\n        cursor: pointer;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    .color-picker--selected {\r\n        @extend .color-picker;\r\n        border: 2px solid dodgerblue;\r\n    }\r\n}\r\n\r\n.repitition-type {\r\n    .handle-container {\r\n        .handle-rail {\r\n            height: 20px;\r\n            width: 60px;\r\n            background-color: dodgerblue;\r\n            border-radius: 20px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        #handle-head {\r\n            height: 20px;\r\n            width: 30px;\r\n            border-radius: 20px;\r\n            background-color: red;\r\n            position: relative;\r\n            top: -18px;\r\n            pointer-events: none;\r\n            transition: 0.3s;\r\n            right: -30px;\r\n        }\r\n\r\n        #handle-head--toggle {\r\n            @extend #handle-head;\r\n            right: 0px;\r\n        }\r\n\r\n        .date-input {\r\n            display: block;\r\n        }\r\n    }\r\n}\r\n\r\n.single-project-container {\r\n    height: 70px;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n    display: grid; \r\n    grid-template-columns: 60px 1fr 1fr 30px 30px;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 5px rgb(184, 184, 184);\r\n\r\n    .single-project_tag-container {\r\n        grid-area: 1 / 1 / 4 / 2;\r\n        pointer-events: none;\r\n\r\n        > * {\r\n            height: 80%;\r\n            margin: auto;\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .single-project_title-container {\r\n        pointer-events: none;\r\n        grid-area: 1/2/3/4;\r\n        display: flex;\r\n        align-items: center;\r\n        padding-left: 20px;\r\n\r\n        .title {\r\n            font-size: 23px;\r\n            color: rgb(59, 59, 59);\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_tasks-count-container {\r\n        pointer-events: none;\r\n        grid-area: 3/2/4/3;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 5px;\r\n\r\n        .sptcc1 {\r\n            color: $projectTitleSubColor;\r\n            font-size: 13px;\r\n            font-family: \"mainFont\";\r\n        }\r\n\r\n        .sptcc2 {\r\n            font-weight: 600;\r\n            color: rgb(172, 109, 20);\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_repeated-date-container {\r\n        pointer-events: none;\r\n        grid-area: 3/3/4/4;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        span {\r\n            color: $projectTitleSubColor;\r\n            font-size: 14px;\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_edit-button {\r\n        grid-area: 2/4/3/5;\r\n        img {\r\n                width: 25px;\r\n            }\r\n    }\r\n\r\n    .single-project_delete-button {\r\n        grid-area: 2/5/3/6;\r\n        img {\r\n            width: 25px;\r\n        }\r\n    }\r\n}\r\n\r\n.title-logo-container {\r\n    > * {\r\n        height: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/projecttag.svg":
/*!***********************************!*\
  !*** ./src/assets/projecttag.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg id=\"Layer_2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 324 500\"><defs><style>.cls-1{fill:#29abe2;}</style></defs><g id=\"Layer_1-2\"><path class=\"cls-1\" d=\"M23.19,0C10.38,0,0,10.35,0,23.12V477.16c0,20.66,23.63,30.66,36.85,15.6l111.72-155.23c2.76-4.8,7.88-7.75,13.43-7.75h0c5.55,0,10.67,2.96,13.43,7.75l111.72,155.23c13.22,15.06,36.85,5.05,36.85-15.6V23.12c0-12.77-10.38-23.12-23.19-23.12H23.19Z\"></path></g></svg>"

/***/ }),

/***/ "./src/assets/titlelogo.svg":
/*!**********************************!*\
  !*** ./src/assets/titlelogo.svg ***!
  \**********************************/
/***/ ((module) => {

module.exports = "<svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 994.5 274\"><defs><style>.cls-5{fill:url(#linear-gradient-2);}.cls-6{fill:#1e90ff;}.cls-7{fill:url(#linear-gradient);}</style><linearGradient id=\"linear-gradient\" x1=\"309.61\" y1=\"210.29\" x2=\"453.4\" y2=\"93.61\" gradientTransform=\"translate(608.49 510.68) rotate(-144.34) scale(1.08 1.05) skewX(-6.77)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".02\" stop-color=\"#550700\"></stop><stop offset=\".06\" stop-color=\"#650e01\"></stop><stop offset=\".22\" stop-color=\"#a12b04\"></stop><stop offset=\".34\" stop-color=\"#c73e07\"></stop><stop offset=\".41\" stop-color=\"#d64508\"></stop><stop offset=\".5\" stop-color=\"#d6470b\"></stop><stop offset=\".58\" stop-color=\"#d84f16\"></stop><stop offset=\".66\" stop-color=\"#db5d28\"></stop><stop offset=\".73\" stop-color=\"#df7041\"></stop><stop offset=\".81\" stop-color=\"#e48862\"></stop><stop offset=\".88\" stop-color=\"#eba68a\"></stop><stop offset=\".95\" stop-color=\"#f3c9b8\"></stop><stop offset=\"1\" stop-color=\"#fae8e1\"></stop></linearGradient><linearGradient id=\"linear-gradient-2\" x1=\"264.91\" y1=\"148.43\" x2=\"339.83\" y2=\"234.38\" gradientTransform=\"translate(-.04 287.72) rotate(-53.69) scale(.96 .94) skewX(-5.53)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#d44100\"></stop><stop offset=\".89\" stop-color=\"#faeae2\"></stop><stop offset=\"1\" stop-color=\"#fff\"></stop></linearGradient></defs><path class=\"cls-6\" d=\"M187.45,0H24.74C12.51,0,2.6,7.45,2.6,16.64v14.45c0,9.19,9.91,16.64,22.14,16.64h57.49v209.63c0,9.19,7.45,16.64,16.64,16.64h14.45c9.19,0,16.64-7.45,16.64-16.64V47.73h57.49c12.23,0,22.14-7.45,22.14-16.64v-14.45C209.58,7.45,199.67,0,187.45,0Z\"></path><circle class=\"cls-6\" cx=\"358.71\" cy=\"136.12\" r=\"136.12\"></circle><path class=\"cls-6\" d=\"M694.58,136.12C694.58,61.83,635.06,1.45,561.11,.03V0h-32.68C520.12,0,513.38,6.74,513.38,15.04v242.14c0,8.31,6.74,15.04,15.04,15.04h32.68v-.03c73.95-1.41,133.46-61.79,133.46-136.08Zm-133.46,80.7V55.42c0-9.83,8.98-16.66,18.68-15.09,28.7,4.67,68.7,48.81,68.7,95.67s-24.78,86.16-68.7,95.9c-9.6,2.13-18.68-5.26-18.68-15.09Z\"></path><path class=\"cls-6\" d=\"M855.44,.88c-75.17,0-136.12,60.94-136.12,136.12s60.94,136.12,136.12,136.12,136.12-60.94,136.12-136.12S930.62,.88,855.44,.88Zm0,226.27c-50.28,0-91.04-40.76-91.04-91.04s40.76-91.04,91.04-91.04,91.04,40.76,91.04,91.04-40.76,91.04-91.04,91.04Z\"></path><rect class=\"cls-7\" x=\"272.92\" y=\"130.22\" width=\"216.82\" height=\"43.75\" rx=\"19.77\" ry=\"19.77\" transform=\"translate(773.15 29.51) rotate(140.88)\"></rect><path class=\"cls-5\" d=\"M244.12,152.72h107.1v23.98c0,10.91-8.86,19.77-19.77,19.77h-87.33c-10.91,0-19.77-8.86-19.77-19.77v-4.22c0-10.91,8.86-19.77,19.77-19.77Z\" transform=\"translate(241.68 -158.84) rotate(50.88)\"></path></svg>"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "application": () => (/* binding */ application)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




_ui__WEBPACK_IMPORTED_MODULE_1__.Ui.initializeApp();
const application = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]();

(0,_ui__WEBPACK_IMPORTED_MODULE_1__.updateDomProjectList)(application.projectContainer);
   

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType, dueDate, uid, event){
        const project = new Project(title, tagColor, repitiionType, dueDate, uid);
        this.projectContainer.push(project);
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.updateDomProjectList)(this.projectContainer);

        //auto sort
    }


    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType, dueDate, uid){
        this.uid = uid;
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;
        this.taskContainer = [];
        this.dueDate = dueDate; 
        this.completed = 0;
    }
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ui": () => (/* binding */ Ui),
/* harmony export */   "updateDomProjectList": () => (/* binding */ updateDomProjectList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/projecttag.svg */ "./src/assets/projecttag.svg");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/titlelogo.svg */ "./src/assets/titlelogo.svg");
/* harmony import */ var _assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_trashicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trashicon.png */ "./src/assets/trashicon.png");
/* harmony import */ var _assets_editicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/editicon.png */ "./src/assets/editicon.png");









class Ui {
  static initializeApp() {
    const dom = document.querySelector('#content');
    dom.innerHTML = `
        <div class=header-container>
            <div class="title-logo-container">
                ${(_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3___default())}
            </div>
        </div>
        <div class=main-body>
        </div>
        <div class="footer">
        <div>Developed by Bryan Mina</div>
      </div>
    `;
  }

  static openProject(project) {
    this.clearContent();
    this.tasksHeader(project);
    if (project.taskContainer.length == 0) Ui.appendAddBtn();
    const str = project.taskContainer.reduce((accu, val) => `${accu}<div>${val.taskTxt}</div>`, '');
  }

  static displayProjectLst(project) {
    const dom = document.querySelector('#content');
    dom = '';
  }

  static appendAddBtn() {
    const mainContent = document.querySelector('.main-body');
    mainContent.innerHTML += '<button class="project_add-button">+</button>';
    const addBtn = document.querySelector('.project_add-button');
    addBtn.addEventListener('click', () => {
      console.log('clicked button');
    });
  }

  static pullProject(uid) {
    // find the item with this uid
    const project = _index_js__WEBPACK_IMPORTED_MODULE_1__.application.projectContainer.find((project) => project.uid == uid);
    Ui.openProject(project);
  }

  static clearContent() {
    document.querySelector('.main-body').innerHTML = '';
  }

  static tasksHeader(project){
    const mainHd = document.querySelector(".header-container");
    mainHd.innerHTML = `
        <span>${project.title}</span>
        <span class="info-container">
          <div>
            ${project.dueDate}
          </div>
          <div>
            tasks:${project.taskContainer.length}
          </div>
          <div>
            completedTask:${project.completedTask};
          </div>

        </span>
    `
  }
}

function updateDomProjectList(container) {
  if (container.length == 0) return addProjectButton();
  const str = container.reduce((accu, val) => {
    const tempStr = generateProjectItem(val.title, val.color, val.repitiionType, val.taskContainer, val.dueDate, val.uid);
    return accu + tempStr;
  }, '');
  document.querySelector('.main-body').innerHTML = str;
  const projectElements = document.querySelectorAll('.single-project-container');
  projectElements.forEach((elem) => {
    elem.addEventListener('click', (event) => { Ui.pullProject(event.target.getAttribute('data-id')); });
  });
  addProjectButton();
}

function addProjectModal() {
  let colorSelected;
  let repeated = false;

  function output() {
    const modal = `
        <form class="project_add-project-modal-container">
            <div class="title-container">
                <label>Title</label>
                <input minlength="1" maxlength="15"name="input-name" type="text">
                <div class="p-container"><p class="xeess3">Must contain at least 1 to 15 character</p></div>
            </div>
            <div class="tagcolor-container">
                <label>Tag color</label>
                <div class="color-container">
                    <div style="background-color: red" class="color-picker" id="ff2503"></div>
                    <div style="background-color: blue"class="color-picker" id="499cff"></div>
                    <div style="background-color: green"class="color-picker" id="14ff92"></div>
                    <div style="background-color: yellow"class="color-picker" id="e3ff35"></div>
                    <div style="background-color: red"class="color-picker" id="custom"></div>
                </div>
            </div>
            <div class="repitition-type">
                <div>toggle on or off here</div>
                <div class="handle-container">
                    <div class="handle-rail">
                        OFF  ON
                        <div class="handle-head" id="handle-head"></div>
                    </div>
                    <div class="date-input">
                        <label>Due date</label>
                        <input class ="date-input-value"type="date">
                    </div>
                </div>
            </div>
            <button class="submit-add-project">Add Project</button>
        </form>
    `;
    document.querySelector('.main-body').innerHTML += modal;
  }

  output();
  document.querySelector('.project_add-project-modal-container').onsubmit = formSubmit;
  const toggleHandler = document.querySelector('.handle-rail');
  toggleHandler.addEventListener('click', toggleButton);
  const colorPickers = document.querySelectorAll('.color-picker');
  colorPickers.forEach((picker) => {
    picker.addEventListener('click', testClick);
  });

  function formSubmit(event) {
    event.preventDefault();

    const inputTitle = event.target[0].value;
    const inputDate = validateDateFormat();
    const inputTagColor = colorSelected == undefined ? 'white' : colorSelected.id;

    validateInput(inputTitle);

    function validateInput(input) {
      if (input.length < 1 || input.length > 15) return invalidEntry();

      if (!repeated) {
        return inputDate ? _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated, inputDate, generateUid()) : invalidEntry();
      }

      _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated, null, generateUid());

      function invalidEntry() {
        const p = document.querySelector('.xeess3');
        p.style.display = 'block';
      }
    }

    function generateUid() {
      const number = Math.random() * 100;
      console.log(number);
      return number;
    }

    function validateDateFormat() {
      const dateSelected = document.querySelector('.date-input-value');
      if (dateSelected.value == '') return null;
      const valid = [];
      const arr = dateSelected.value.split('');
      valid.push(...arr.slice(5, 7));
      valid.push(...'/');
      valid.push(...arr.slice(8, 10));
      valid.push(...'/');
      valid.push(...arr.slice(0, 4));

      return valid.join('');
    }
  }

  function testClick(event) {
    if (colorSelected == null) {
      colorSelected = event.target;
    } else {
      colorSelected.classList.value = 'color-picker';
      colorSelected = event.target;
    }

    colorSelected.classList.value = 'color-picker--selected';
  }

  function toggleButton() {
    const toggled = 'handle-head--toggle';
    const unToggled = 'handle-head';
    const head = document.querySelector(`.${unToggled}`);
    const dateContainer = document.querySelector('.date-input');
    const modalContainer = document.querySelector('.project_add-project-modal-container');
    head.id == unToggled ? head.id = toggled : head.id = unToggled;

    if (head.id == toggled) {
      // bringout date here
      repeated = true;
      dateContainer.style.display = 'none';
      modalContainer.style.height = '240px';
    } else {
      repeated = false;

      dateContainer.style.display = 'block';
      modalContainer.style.height = '270px';

      // hide date
    }
  }
}

function addProjectButton() {
  const button = document.createElement('button');
  button.classList.add('project_add-button');
  button.textContent = '+';
  button.onclick = addProjectModal;
  document.querySelector('.main-body').appendChild(button);
}

function generateProjectItem(title, tagColor, repitiionType, tasksContainer, dueDate, uid) {
  function accessProjectTasks() {
  }

  function output() {
    return `
            <div class="single-project-container" data-id="${uid}">
                ${new TagIcon(`${tagColor}`).renderIcon()}

                <div class="single-project_title-container" >
                    <div class="title" ">${title}</div>
                </div>
                <div class="single-project_tasks-count-container">
                    <span class="sptcc1">Tasks:</span>
                    <span class="sptcc2">${tasksContainer.length}</span>
                </div>
                <div class="single-project_repeated-date-container">${repitiionType ? '<span>repeated</span>' : `<span>Due date:${dueDate}</span>`}</div>
                <div class="single-project_edit-button"><img src=${_assets_editicon_png__WEBPACK_IMPORTED_MODULE_5__}></div>
                <div class="single-project_delete-button"><img src=${_assets_trashicon_png__WEBPACK_IMPORTED_MODULE_4__}></div>
            </div>
        `;
  }

  return output();
}

class TagIcon {
  constructor(colorSelected) {
    this.customColor = colorSelected;
    this.class = '';
    this.id = '';
    this.svgFile = (_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2___default());
  }

  generateCustomClass() {
    this.class = Math.random() * 10000;
    this.id = Math.random() * 10000;
    this.svgFile = this.svgFile.replace('Layer_2', this.id);
    this.svgFile = this.svgFile.replace('cls-1', this.class);
    this.svgFile = this.svgFile.replace('cls-1', this.class);
  }

  updateSvgColor() {
    const testTer = document.createElement('div');
    testTer.innerHTML = this.svgFile;
    const regex = /(?<={fill:#).*?;/i;
    this.svgFile = this.svgFile.replace(regex, `${this.customColor};`);
  }

  renderIcon() {
    this.generateCustomClass();
    this.updateSvgColor();
    return `<div class="single-project_tag-container" style="fill:#${this.customColor}">${this.svgFile}</div>`;
  }
}


/***/ }),

/***/ "./src/assets/editicon.png":
/*!*********************************!*\
  !*** ./src/assets/editicon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60273b0b439e30266abb.png";

/***/ }),

/***/ "./src/assets/josefinsans.ttf":
/*!************************************!*\
  !*** ./src/assets/josefinsans.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1bfcfba29eda50476f98.ttf";

/***/ }),

/***/ "./src/assets/trashicon.png":
/*!**********************************!*\
  !*** ./src/assets/trashicon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c16d618c9c61c345544c.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DLGtEQUFrRCxrQkFBa0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQixJQUFJLGFBQWE7QUFDdkc7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9wcm9qZWN0dGFnLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hc3NldHMvdGl0bGVsb2dvLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9qb3NlZmluc2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBtYWluRm9udDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMTYzLCAxNjMsIDE2Myk7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAudGl0bGUtbG9nbyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5tYWluLWJvZHkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBkaXYge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4ucHJvamVjdF9hZGQtYnV0dG9uIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggcmdiKDE4NiwgMTg2LCAxODYpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC50aXRsZS1jb250YWluZXIgZGl2IHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC50aXRsZS1jb250YWluZXIgcCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMS41cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIgLnN1Ym1pdC1hZGQtcHJvamVjdCB7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY29sb3ItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jb2xvci1jb250YWluZXIgLmNvbG9yLXBpY2tlciwgLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItcGlja2VyLS1zZWxlY3RlZCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItcGlja2VyLS1zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xcbn1cXG5cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyIC5oYW5kbGUtcmFpbCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyICNoYW5kbGUtaGVhZCwgLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAjaGFuZGxlLWhlYWQtLXRvZ2dsZSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xOHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcmlnaHQ6IC0zMHB4O1xcbn1cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyICNoYW5kbGUtaGVhZC0tdG9nZ2xlIHtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5yZXBpdGl0aW9uLXR5cGUgLmhhbmRsZS1jb250YWluZXIgLmRhdGUtaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciAxZnIgMzBweCAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RhZy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RhZy1jb250YWluZXIgPiAqIHtcXG4gIGhlaWdodDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RpdGxlLWNvbnRhaW5lciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGdyaWQtYXJlYTogMS8yLzMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfdGFza3MtY291bnQtY29udGFpbmVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90YXNrcy1jb3VudC1jb250YWluZXIgLnNwdGNjMSB7XFxuICBjb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lciAuc3B0Y2MyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogcmdiKDE3MiwgMTA5LCAyMCk7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfcmVwZWF0ZWQtZGF0ZS1jb250YWluZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBncmlkLWFyZWE6IDMvMy80LzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9yZXBlYXRlZC1kYXRlLWNvbnRhaW5lciBzcGFuIHtcXG4gIGNvbG9yOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAyLzQvMy81O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9kZWxldGUtYnV0dG9uIGltZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnRpdGxlLWxvZ28tY29udGFpbmVyID4gKiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkRBQUE7QUFDSjtBQUdBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxvQ0FBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7RUFDSSxZQUFBO0FBRFI7O0FBS0E7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQUZKO0FBTVE7RUFDSSxZQUFBO0FBSlo7QUFPUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFMWjtBQVNJO0VBQ0ksZ0JBQUE7QUFQUjs7QUFXQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQVJKO0FBVUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFSUjtBQVdJO0VBRUksNEJBQUE7QUFWUjs7QUFnQlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBYlo7QUFnQlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWRaO0FBaUJRO0VBRUksVUFBQTtBQWhCWjtBQW1CUTtFQUNJLGNBQUE7QUFqQlo7O0FBc0JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQW5CSjtBQXFCSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFuQlI7QUFxQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFuQlo7QUF1Qkk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQlI7QUF1QlE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXJCWjtBQXlCSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF2QlI7QUF5QlE7RUFDSSx5QkExTFU7RUEyTFYsZUFBQTtFQUNBLHVCQUFBO0FBdkJaO0FBMEJRO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBeEJaO0FBNEJJO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMUJSO0FBNEJRO0VBQ0kseUJBOU1VO0VBK01WLGVBQUE7RUFDQSx1QkFBQTtBQTFCWjtBQThCSTtFQUNJLGtCQUFBO0FBNUJSO0FBNkJRO0VBQ1EsV0FBQTtBQTNCaEI7QUErQkk7RUFDSSxrQkFBQTtBQTdCUjtBQThCUTtFQUNJLFdBQUE7QUE1Qlo7O0FBa0NJO0VBQ0ksWUFBQTtBQS9CUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcclxcbiAgICBzcmM6IHVybChcXFwiLi9hc3NldHMvam9zZWZpbnNhbnMudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxufVxcclxcbiRwcm9qZWN0VGl0bGVTdWJDb2xvcjpyZ2IoMTAzLCAxMDMsIDEwMyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDE2MywgMTYzLCAxNjMpO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAudGl0bGUtbG9nbyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYm9keSB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2IoMTg2LCAxODYsIDE4Nik7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgIC50aXRsZS1jb250YWluZXIge1xcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1pdC1hZGQtcHJvamVjdCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb2xvci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC5jb2xvci1waWNrZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcclxcbiAgICAgICAgQGV4dGVuZCAuY29sb3ItcGlja2VyO1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVwaXRpdGlvbi10eXBlIHtcXHJcXG4gICAgLmhhbmRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgLmhhbmRsZS1yYWlsIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNoYW5kbGUtaGVhZCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IC0xOHB4O1xcclxcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcclxcbiAgICAgICAgICAgIEBleHRlbmQgI2hhbmRsZS1oZWFkO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGF0ZS1pbnB1dCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMWZyIDMwcHggMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDE4NCwgMTg0LCAxODQpO1xcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gNCAvIDI7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgID4gKiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8zLzQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMy8yLzQvMztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgIC5zcHRjYzEge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJvamVjdFRpdGxlU3ViQ29sb3I7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNwdGNjMiB7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MiwgMTA5LCAyMCk7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X3JlcGVhdGVkLWRhdGUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJvamVjdFRpdGxlU3ViQ29sb3I7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvNC8zLzU7XFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbG9nby1jb250YWluZXIge1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBpZD1cXFwiTGF5ZXJfMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzI0IDUwMFxcXCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyOWFiZTI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPVxcXCJMYXllcl8xLTJcXFwiPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIzLjE5LDBDMTAuMzgsMCwwLDEwLjM1LDAsMjMuMTJWNDc3LjE2YzAsMjAuNjYsMjMuNjMsMzAuNjYsMzYuODUsMTUuNmwxMTEuNzItMTU1LjIzYzIuNzYtNC44LDcuODgtNy43NSwxMy40My03Ljc1aDBjNS41NSwwLDEwLjY3LDIuOTYsMTMuNDMsNy43NWwxMTEuNzIsMTU1LjIzYzEzLjIyLDE1LjA2LDM2Ljg1LDUuMDUsMzYuODUtMTUuNlYyMy4xMmMwLTEyLjc3LTEwLjM4LTIzLjEyLTIzLjE5LTIzLjEySDIzLjE5WlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2aWV3Qm94PVxcXCIwIDAgOTk0LjUgMjc0XFxcIj48ZGVmcz48c3R5bGU+LmNscy01e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7fS5jbHMtNntmaWxsOiMxZTkwZmY7fS5jbHMtN3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9XFxcImxpbmVhci1ncmFkaWVudFxcXCIgeDE9XFxcIjMwOS42MVxcXCIgeTE9XFxcIjIxMC4yOVxcXCIgeDI9XFxcIjQ1My40XFxcIiB5Mj1cXFwiOTMuNjFcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNjA4LjQ5IDUxMC42OCkgcm90YXRlKC0xNDQuMzQpIHNjYWxlKDEuMDggMS4wNSkgc2tld1goLTYuNzcpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIuMDJcXFwiIHN0b3AtY29sb3I9XFxcIiM1NTA3MDBcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi4wNlxcXCIgc3RvcC1jb2xvcj1cXFwiIzY1MGUwMVxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjIyXFxcIiBzdG9wLWNvbG9yPVxcXCIjYTEyYjA0XFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuMzRcXFwiIHN0b3AtY29sb3I9XFxcIiNjNzNlMDdcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi40MVxcXCIgc3RvcC1jb2xvcj1cXFwiI2Q2NDUwOFxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjVcXFwiIHN0b3AtY29sb3I9XFxcIiNkNjQ3MGJcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi41OFxcXCIgc3RvcC1jb2xvcj1cXFwiI2Q4NGYxNlxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjY2XFxcIiBzdG9wLWNvbG9yPVxcXCIjZGI1ZDI4XFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuNzNcXFwiIHN0b3AtY29sb3I9XFxcIiNkZjcwNDFcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi44MVxcXCIgc3RvcC1jb2xvcj1cXFwiI2U0ODg2MlxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjg4XFxcIiBzdG9wLWNvbG9yPVxcXCIjZWJhNjhhXFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuOTVcXFwiIHN0b3AtY29sb3I9XFxcIiNmM2M5YjhcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmYWU4ZTFcXFwiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD1cXFwibGluZWFyLWdyYWRpZW50LTJcXFwiIHgxPVxcXCIyNjQuOTFcXFwiIHkxPVxcXCIxNDguNDNcXFwiIHgyPVxcXCIzMzkuODNcXFwiIHkyPVxcXCIyMzQuMzhcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLS4wNCAyODcuNzIpIHJvdGF0ZSgtNTMuNjkpIHNjYWxlKC45NiAuOTQpIHNrZXdYKC01LjUzKVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiPjxzdG9wIG9mZnNldD1cXFwiMFxcXCIgc3RvcC1jb2xvcj1cXFwiI2Q0NDEwMFxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjg5XFxcIiBzdG9wLWNvbG9yPVxcXCIjZmFlYWUyXFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZmZmXFxcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNMTg3LjQ1LDBIMjQuNzRDMTIuNTEsMCwyLjYsNy40NSwyLjYsMTYuNjR2MTQuNDVjMCw5LjE5LDkuOTEsMTYuNjQsMjIuMTQsMTYuNjRoNTcuNDl2MjA5LjYzYzAsOS4xOSw3LjQ1LDE2LjY0LDE2LjY0LDE2LjY0aDE0LjQ1YzkuMTksMCwxNi42NC03LjQ1LDE2LjY0LTE2LjY0VjQ3LjczaDU3LjQ5YzEyLjIzLDAsMjIuMTQtNy40NSwyMi4xNC0xNi42NHYtMTQuNDVDMjA5LjU4LDcuNDUsMTk5LjY3LDAsMTg3LjQ1LDBaXFxcIj48L3BhdGg+PGNpcmNsZSBjbGFzcz1cXFwiY2xzLTZcXFwiIGN4PVxcXCIzNTguNzFcXFwiIGN5PVxcXCIxMzYuMTJcXFwiIHI9XFxcIjEzNi4xMlxcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcImNscy02XFxcIiBkPVxcXCJNNjk0LjU4LDEzNi4xMkM2OTQuNTgsNjEuODMsNjM1LjA2LDEuNDUsNTYxLjExLC4wM1YwaC0zMi42OEM1MjAuMTIsMCw1MTMuMzgsNi43NCw1MTMuMzgsMTUuMDR2MjQyLjE0YzAsOC4zMSw2Ljc0LDE1LjA0LDE1LjA0LDE1LjA0aDMyLjY4di0uMDNjNzMuOTUtMS40MSwxMzMuNDYtNjEuNzksMTMzLjQ2LTEzNi4wOFptLTEzMy40Niw4MC43VjU1LjQyYzAtOS44Myw4Ljk4LTE2LjY2LDE4LjY4LTE1LjA5LDI4LjcsNC42Nyw2OC43LDQ4LjgxLDY4LjcsOTUuNjdzLTI0Ljc4LDg2LjE2LTY4LjcsOTUuOWMtOS42LDIuMTMtMTguNjgtNS4yNi0xOC42OC0xNS4wOVpcXFwiPjwvcGF0aD48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk04NTUuNDQsLjg4Yy03NS4xNywwLTEzNi4xMiw2MC45NC0xMzYuMTIsMTM2LjEyczYwLjk0LDEzNi4xMiwxMzYuMTIsMTM2LjEyLDEzNi4xMi02MC45NCwxMzYuMTItMTM2LjEyUzkzMC42MiwuODgsODU1LjQ0LC44OFptMCwyMjYuMjdjLTUwLjI4LDAtOTEuMDQtNDAuNzYtOTEuMDQtOTEuMDRzNDAuNzYtOTEuMDQsOTEuMDQtOTEuMDQsOTEuMDQsNDAuNzYsOTEuMDQsOTEuMDQtNDAuNzYsOTEuMDQtOTEuMDQsOTEuMDRaXFxcIj48L3BhdGg+PHJlY3QgY2xhc3M9XFxcImNscy03XFxcIiB4PVxcXCIyNzIuOTJcXFwiIHk9XFxcIjEzMC4yMlxcXCIgd2lkdGg9XFxcIjIxNi44MlxcXCIgaGVpZ2h0PVxcXCI0My43NVxcXCIgcng9XFxcIjE5Ljc3XFxcIiByeT1cXFwiMTkuNzdcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDc3My4xNSAyOS41MSkgcm90YXRlKDE0MC44OClcXFwiPjwvcmVjdD48cGF0aCBjbGFzcz1cXFwiY2xzLTVcXFwiIGQ9XFxcIk0yNDQuMTIsMTUyLjcyaDEwNy4xdjIzLjk4YzAsMTAuOTEtOC44NiwxOS43Ny0xOS43NywxOS43N2gtODcuMzNjLTEwLjkxLDAtMTkuNzctOC44Ni0xOS43Ny0xOS43N3YtNC4yMmMwLTEwLjkxLDguODYtMTkuNzcsMTkuNzctMTkuNzdaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgyNDEuNjggLTE1OC44NCkgcm90YXRlKDUwLjg4KVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCB7IGluaXRpYWxpemVTdHJ1Y3R1cmUsIHVwZGF0ZURvbVByb2plY3RMaXN0LCBVaSB9IGZyb20gJy4vdWknO1xuaW1wb3J0IEFwcCBmcm9tICcuL3Byb2plY3QnO1xuXG5VaS5pbml0aWFsaXplQXBwKCk7XG5leHBvcnQgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XG5cbnVwZGF0ZURvbVByb2plY3RMaXN0KGFwcGxpY2F0aW9uLnByb2plY3RDb250YWluZXIpO1xuICAgIiwiaW1wb3J0IHsgdXBkYXRlRG9tUHJvamVjdExpc3QgfSBmcm9tIFwiLi91aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwe1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHRpdGxlLCB0YWdDb2xvciwgcmVwaXRpaW9uVHlwZSwgZHVlRGF0ZSwgdWlkLCBldmVudCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlLCB0YWdDb2xvciwgcmVwaXRpaW9uVHlwZSwgZHVlRGF0ZSwgdWlkKTtcclxuICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIucHVzaChwcm9qZWN0KTtcclxuICAgICAgICB1cGRhdGVEb21Qcm9qZWN0TGlzdCh0aGlzLnByb2plY3RDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvL2F1dG8gc29ydFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0ICAgIFxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlLCBkdWVEYXRlLCB1aWQpe1xyXG4gICAgICAgIHRoaXMudWlkID0gdWlkO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdGFnQ29sb3I7XHJcbiAgICAgICAgdGhpcy5yZXBpdGlpb25UeXBlID0gcmVwaXRpaW9uVHlwZTtcclxuICAgICAgICB0aGlzLnRhc2tDb250YWluZXIgPSBbXTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlOyBcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBhZGQsIGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBBcHAgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmltcG9ydCBwcm9qZWN0VGFnIGZyb20gJy4vYXNzZXRzL3Byb2plY3R0YWcuc3ZnJztcbmltcG9ydCB0aXRsZUxvZ28gZnJvbSAnLi9hc3NldHMvdGl0bGVsb2dvLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy90cmFzaGljb24ucG5nJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0aWNvbi5wbmcnO1xuXG5leHBvcnQgY2xhc3MgVWkge1xuICBzdGF0aWMgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9aGVhZGVyLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICR7dGl0bGVMb2dvfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPW1haW4tYm9keT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPGRpdj5EZXZlbG9wZWQgYnkgQnJ5YW4gTWluYTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5jbGVhckNvbnRlbnQoKTtcbiAgICB0aGlzLnRhc2tzSGVhZGVyKHByb2plY3QpO1xuICAgIGlmIChwcm9qZWN0LnRhc2tDb250YWluZXIubGVuZ3RoID09IDApIFVpLmFwcGVuZEFkZEJ0bigpO1xuICAgIGNvbnN0IHN0ciA9IHByb2plY3QudGFza0NvbnRhaW5lci5yZWR1Y2UoKGFjY3UsIHZhbCkgPT4gYCR7YWNjdX08ZGl2PiR7dmFsLnRhc2tUeHR9PC9kaXY+YCwgJycpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlQcm9qZWN0THN0KHByb2plY3QpIHtcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGRvbSA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZEFkZEJ0bigpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgKz0gJzxidXR0b24gY2xhc3M9XCJwcm9qZWN0X2FkZC1idXR0b25cIj4rPC9idXR0b24+JztcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9hZGQtYnV0dG9uJyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQgYnV0dG9uJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcHVsbFByb2plY3QodWlkKSB7XG4gICAgLy8gZmluZCB0aGUgaXRlbSB3aXRoIHRoaXMgdWlkXG4gICAgY29uc3QgcHJvamVjdCA9IGFwcGxpY2F0aW9uLnByb2plY3RDb250YWluZXIuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT0gdWlkKTtcbiAgICBVaS5vcGVuUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbnRlbnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIHRhc2tzSGVhZGVyKHByb2plY3Qpe1xuICAgIGNvbnN0IG1haW5IZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgICBtYWluSGQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3Bhbj4ke3Byb2plY3QudGl0bGV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICR7cHJvamVjdC5kdWVEYXRlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB0YXNrczoke3Byb2plY3QudGFza0NvbnRhaW5lci5sZW5ndGh9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIGNvbXBsZXRlZFRhc2s6JHtwcm9qZWN0LmNvbXBsZXRlZFRhc2t9O1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvc3Bhbj5cbiAgICBgXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvbVByb2plY3RMaXN0KGNvbnRhaW5lcikge1xuICBpZiAoY29udGFpbmVyLmxlbmd0aCA9PSAwKSByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbigpO1xuICBjb25zdCBzdHIgPSBjb250YWluZXIucmVkdWNlKChhY2N1LCB2YWwpID0+IHtcbiAgICBjb25zdCB0ZW1wU3RyID0gZ2VuZXJhdGVQcm9qZWN0SXRlbSh2YWwudGl0bGUsIHZhbC5jb2xvciwgdmFsLnJlcGl0aWlvblR5cGUsIHZhbC50YXNrQ29udGFpbmVyLCB2YWwuZHVlRGF0ZSwgdmFsLnVpZCk7XG4gICAgcmV0dXJuIGFjY3UgKyB0ZW1wU3RyO1xuICB9LCAnJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKS5pbm5lckhUTUwgPSBzdHI7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtcHJvamVjdC1jb250YWluZXInKTtcbiAgcHJvamVjdEVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IFVpLnB1bGxQcm9qZWN0KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7IH0pO1xuICB9KTtcbiAgYWRkUHJvamVjdEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0TW9kYWwoKSB7XG4gIGxldCBjb2xvclNlbGVjdGVkO1xuICBsZXQgcmVwZWF0ZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBvdXRwdXQoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBgXG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtaW5sZW5ndGg9XCIxXCIgbWF4bGVuZ3RoPVwiMTVcIm5hbWU9XCJpbnB1dC1uYW1lXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jb250YWluZXJcIj48cCBjbGFzcz1cInhlZXNzM1wiPk11c3QgY29udGFpbiBhdCBsZWFzdCAxIHRvIDE1IGNoYXJhY3RlcjwvcD48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ2NvbG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5UYWcgY29sb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiIGNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJmZjI1MDNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGJsdWVcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCI0OTljZmZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGdyZWVuXCJjbGFzcz1cImNvbG9yLXBpY2tlclwiIGlkPVwiMTRmZjkyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJlM2ZmMzVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cImN1c3RvbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwaXRpdGlvbi10eXBlXCI+XG4gICAgICAgICAgICAgICAgPGRpdj50b2dnbGUgb24gb3Igb2ZmIGhlcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLXJhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9GRiAgT05cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtaGVhZFwiIGlkPVwiaGFuZGxlLWhlYWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIGRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID1cImRhdGUtaW5wdXQtdmFsdWVcInR5cGU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWFkZC1wcm9qZWN0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpLmlubmVySFRNTCArPSBtb2RhbDtcbiAgfVxuXG4gIG91dHB1dCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXInKS5vbnN1Ym1pdCA9IGZvcm1TdWJtaXQ7XG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFuZGxlLXJhaWwnKTtcbiAgdG9nZ2xlSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJ1dHRvbik7XG4gIGNvbnN0IGNvbG9yUGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1waWNrZXInKTtcbiAgY29sb3JQaWNrZXJzLmZvckVhY2goKHBpY2tlcikgPT4ge1xuICAgIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlc3RDbGljayk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSB2YWxpZGF0ZURhdGVGb3JtYXQoKTtcbiAgICBjb25zdCBpbnB1dFRhZ0NvbG9yID0gY29sb3JTZWxlY3RlZCA9PSB1bmRlZmluZWQgPyAnd2hpdGUnIDogY29sb3JTZWxlY3RlZC5pZDtcblxuICAgIHZhbGlkYXRlSW5wdXQoaW5wdXRUaXRsZSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQubGVuZ3RoIDwgMSB8fCBpbnB1dC5sZW5ndGggPiAxNSkgcmV0dXJuIGludmFsaWRFbnRyeSgpO1xuXG4gICAgICBpZiAoIXJlcGVhdGVkKSB7XG4gICAgICAgIHJldHVybiBpbnB1dERhdGUgPyBhcHBsaWNhdGlvbi5hZGRQcm9qZWN0KGlucHV0VGl0bGUsIGlucHV0VGFnQ29sb3IsIHJlcGVhdGVkLCBpbnB1dERhdGUsIGdlbmVyYXRlVWlkKCkpIDogaW52YWxpZEVudHJ5KCk7XG4gICAgICB9XG5cbiAgICAgIGFwcGxpY2F0aW9uLmFkZFByb2plY3QoaW5wdXRUaXRsZSwgaW5wdXRUYWdDb2xvciwgcmVwZWF0ZWQsIG51bGwsIGdlbmVyYXRlVWlkKCkpO1xuXG4gICAgICBmdW5jdGlvbiBpbnZhbGlkRW50cnkoKSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueGVlc3MzJyk7XG4gICAgICAgIHAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVaWQoKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVEYXRlRm9ybWF0KCkge1xuICAgICAgY29uc3QgZGF0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5wdXQtdmFsdWUnKTtcbiAgICAgIGlmIChkYXRlU2VsZWN0ZWQudmFsdWUgPT0gJycpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgdmFsaWQgPSBbXTtcbiAgICAgIGNvbnN0IGFyciA9IGRhdGVTZWxlY3RlZC52YWx1ZS5zcGxpdCgnJyk7XG4gICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg1LCA3KSk7XG4gICAgICB2YWxpZC5wdXNoKC4uLicvJyk7XG4gICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg4LCAxMCkpO1xuICAgICAgdmFsaWQucHVzaCguLi4nLycpO1xuICAgICAgdmFsaWQucHVzaCguLi5hcnIuc2xpY2UoMCwgNCkpO1xuXG4gICAgICByZXR1cm4gdmFsaWQuam9pbignJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGVzdENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGNvbG9yU2VsZWN0ZWQgPT0gbnVsbCkge1xuICAgICAgY29sb3JTZWxlY3RlZCA9IGV2ZW50LnRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSAnY29sb3ItcGlja2VyJztcbiAgICAgIGNvbG9yU2VsZWN0ZWQgPSBldmVudC50YXJnZXQ7XG4gICAgfVxuXG4gICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSAnY29sb3ItcGlja2VyLS1zZWxlY3RlZCc7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVCdXR0b24oKSB7XG4gICAgY29uc3QgdG9nZ2xlZCA9ICdoYW5kbGUtaGVhZC0tdG9nZ2xlJztcbiAgICBjb25zdCB1blRvZ2dsZWQgPSAnaGFuZGxlLWhlYWQnO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1blRvZ2dsZWR9YCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXInKTtcbiAgICBoZWFkLmlkID09IHVuVG9nZ2xlZCA/IGhlYWQuaWQgPSB0b2dnbGVkIDogaGVhZC5pZCA9IHVuVG9nZ2xlZDtcblxuICAgIGlmIChoZWFkLmlkID09IHRvZ2dsZWQpIHtcbiAgICAgIC8vIGJyaW5nb3V0IGRhdGUgaGVyZVxuICAgICAgcmVwZWF0ZWQgPSB0cnVlO1xuICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzI0MHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwZWF0ZWQgPSBmYWxzZTtcblxuICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcyNzBweCc7XG5cbiAgICAgIC8vIGhpZGUgZGF0ZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfYWRkLWJ1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gIGJ1dHRvbi5vbmNsaWNrID0gYWRkUHJvamVjdE1vZGFsO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib2R5JykuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SXRlbSh0aXRsZSwgdGFnQ29sb3IsIHJlcGl0aWlvblR5cGUsIHRhc2tzQ29udGFpbmVyLCBkdWVEYXRlLCB1aWQpIHtcbiAgZnVuY3Rpb24gYWNjZXNzUHJvamVjdFRhc2tzKCkge1xuICB9XG5cbiAgZnVuY3Rpb24gb3V0cHV0KCkge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3QtY29udGFpbmVyXCIgZGF0YS1pZD1cIiR7dWlkfVwiPlxuICAgICAgICAgICAgICAgICR7bmV3IFRhZ0ljb24oYCR7dGFnQ29sb3J9YCkucmVuZGVySWNvbigpfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3RpdGxlLWNvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCIgXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGFza3MtY291bnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3B0Y2MxXCI+VGFza3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwdGNjMlwiPiR7dGFza3NDb250YWluZXIubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfcmVwZWF0ZWQtZGF0ZS1jb250YWluZXJcIj4ke3JlcGl0aWlvblR5cGUgPyAnPHNwYW4+cmVwZWF0ZWQ8L3NwYW4+JyA6IGA8c3Bhbj5EdWUgZGF0ZToke2R1ZURhdGV9PC9zcGFuPmB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2VkaXQtYnV0dG9uXCI+PGltZyBzcmM9JHtlZGl0SWNvbn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b25cIj48aW1nIHNyYz0ke2RlbGV0ZUljb259PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0KCk7XG59XG5cbmNsYXNzIFRhZ0ljb24ge1xuICBjb25zdHJ1Y3Rvcihjb2xvclNlbGVjdGVkKSB7XG4gICAgdGhpcy5jdXN0b21Db2xvciA9IGNvbG9yU2VsZWN0ZWQ7XG4gICAgdGhpcy5jbGFzcyA9ICcnO1xuICAgIHRoaXMuaWQgPSAnJztcbiAgICB0aGlzLnN2Z0ZpbGUgPSBwcm9qZWN0VGFnO1xuICB9XG5cbiAgZ2VuZXJhdGVDdXN0b21DbGFzcygpIHtcbiAgICB0aGlzLmNsYXNzID0gTWF0aC5yYW5kb20oKSAqIDEwMDAwO1xuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgdGhpcy5zdmdGaWxlID0gdGhpcy5zdmdGaWxlLnJlcGxhY2UoJ0xheWVyXzInLCB0aGlzLmlkKTtcbiAgICB0aGlzLnN2Z0ZpbGUgPSB0aGlzLnN2Z0ZpbGUucmVwbGFjZSgnY2xzLTEnLCB0aGlzLmNsYXNzKTtcbiAgICB0aGlzLnN2Z0ZpbGUgPSB0aGlzLnN2Z0ZpbGUucmVwbGFjZSgnY2xzLTEnLCB0aGlzLmNsYXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVN2Z0NvbG9yKCkge1xuICAgIGNvbnN0IHRlc3RUZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0VGVyLmlubmVySFRNTCA9IHRoaXMuc3ZnRmlsZTtcbiAgICBjb25zdCByZWdleCA9IC8oPzw9e2ZpbGw6IykuKj87L2k7XG4gICAgdGhpcy5zdmdGaWxlID0gdGhpcy5zdmdGaWxlLnJlcGxhY2UocmVnZXgsIGAke3RoaXMuY3VzdG9tQ29sb3J9O2ApO1xuICB9XG5cbiAgcmVuZGVySWNvbigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQ3VzdG9tQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZVN2Z0NvbG9yKCk7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lclwiIHN0eWxlPVwiZmlsbDojJHt0aGlzLmN1c3RvbUNvbG9yfVwiPiR7dGhpcy5zdmdGaWxlfTwvZGl2PmA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==