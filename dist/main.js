/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(249, 249, 249);\n}\n\n.header-container {\n  background-color: white;\n  box-shadow: 0 0 15px rgb(163, 163, 163);\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-container .title-logo {\n  height: 30px;\n}\n\n.main-body {\n  height: calc(100vh - 80px);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.footer {\n  height: 20px;\n  background-color: rgb(214, 214, 214);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer div {\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.project_add-button {\n  height: 30px;\n  width: 60px;\n  color: white;\n  font-size: 20px;\n  border: none;\n  background-color: dodgerblue;\n  display: block;\n  margin: 0 auto;\n}\n\n.project_add-project-modal-container {\n  height: 250px;\n  width: 200px;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n  padding-top: 20px;\n  position: absolute;\n  left: calc(50% - 100px);\n  border-radius: 10px;\n  box-shadow: 2px 5px 10px rgb(186, 186, 186);\n  transition: 0.3s;\n}\n.project_add-project-modal-container .title-container div {\n  height: 10px;\n}\n.project_add-project-modal-container .title-container p {\n  color: red;\n  font-size: 11.5px;\n  display: none;\n}\n.project_add-project-modal-container .submit-add-project {\n  transition: 0.3s;\n}\n\n.color-container {\n  display: flex;\n  justify-content: space-between;\n}\n.color-container .color-picker, .color-container .color-picker--selected {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: blue;\n  cursor: pointer;\n  border: 1px solid black;\n}\n.color-container .color-picker--selected {\n  border: 2px solid dodgerblue;\n}\n\n.repitition-type .handle-container .handle-rail {\n  height: 20px;\n  width: 60px;\n  background-color: dodgerblue;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.repitition-type .handle-container #handle-head, .repitition-type .handle-container #handle-head--toggle {\n  height: 20px;\n  width: 30px;\n  border-radius: 20px;\n  background-color: red;\n  position: relative;\n  top: -18px;\n  pointer-events: none;\n  transition: 0.3s;\n  right: -30px;\n}\n.repitition-type .handle-container #handle-head--toggle {\n  right: 0px;\n}\n.repitition-type .handle-container .date-input {\n  display: block;\n}\n\n.single-project-container {\n  height: 70px;\n  width: 100%;\n  background-color: rgb(255, 255, 255);\n  display: grid;\n  grid-template-columns: 60px 1fr 1fr 30px 30px;\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px rgb(184, 184, 184);\n}\n.single-project-container .single-project_tag-container {\n  grid-area: 1/1/4/2;\n}\n.single-project-container .single-project_title-container {\n  grid-area: 1/2/3/4;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.single-project-container .single-project_title-container .title {\n  font-size: 23px;\n}\n.single-project-container .single-project_tasks-count-container {\n  grid-area: 3/2/4/3;\n}\n.single-project-container .single-project_repeated-date-container {\n  grid-area: 3/3/4/4;\n}\n.single-project-container .single-project_edit-button {\n  grid-area: 2/4/3/5;\n}\n.single-project-container .single-project_delete-button {\n  grid-area: 2/5/3/6;\n}\n.single-project-container .project-tag {\n  height: 80%;\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n  fill: white;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,sBAAA;AACJ;;AAEA;EACI,oCAAA;AACJ;;AAEA;EACI,uBAAA;EACA,uCAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EACI,YAAA;AACR;;AAGA;EACI,0BAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAAJ;;AAGA;EACI,YAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;;AAGA;EACI,eAAA;EACA,kBAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,4BAAA;EACA,cAAA;EACA,cAAA;AAAJ;;AAGA;EACI,aAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,gBAAA;AAAJ;AAIQ;EACI,YAAA;AAFZ;AAKQ;EACI,UAAA;EACA,iBAAA;EACA,aAAA;AAHZ;AAOI;EACI,gBAAA;AALR;;AASA;EACI,aAAA;EACA,8BAAA;AANJ;AAQI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;AANR;AASI;EAEI,4BAAA;AARR;;AAcQ;EACI,YAAA;EACA,WAAA;EACA,4BAAA;EACA,mBAAA;EACA,eAAA;AAXZ;AAcQ;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;AAZZ;AAeQ;EAEI,UAAA;AAdZ;AAiBQ;EACI,cAAA;AAfZ;;AAoBA;EACI,YAAA;EACA,WAAA;EACA,oCAAA;EACA,aAAA;EACA,6CAAA;EACA,kCAAA;EACA,mBAAA;EACA,0CAAA;AAjBJ;AAmBI;EACI,kBAAA;AAjBR;AAoBI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAlBR;AAoBQ;EACI,eAAA;AAlBZ;AAsBI;EACI,kBAAA;AApBR;AAuBI;EACI,kBAAA;AArBR;AAwBI;EACI,kBAAA;AAtBR;AAyBI;EACI,kBAAA;AAvBR;AA0BI;EACI,WAAA;EACA,UAAA;EACA,cAAA;EACA,cAAA;EACA,WAAA;AAxBR","sourcesContent":["* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(249, 249, 249);\r\n}\r\n\r\n.header-container {\r\n    background-color: white;\r\n    box-shadow: 0 0 15px rgb(163, 163, 163);\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    .title-logo {\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n.main-body {\r\n    height: calc(100vh - 80px);\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    background-color: rgb(214, 214, 214);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer div {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.project_add-button {\r\n    height: 30px;\r\n    width: 60px;\r\n    color: white;\r\n    font-size: 20px;\r\n    border: none;\r\n    background-color: dodgerblue;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.project_add-project-modal-container {\r\n    height: 250px;\r\n    width: 200px;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    padding-top: 20px;\r\n    position: absolute;\r\n    left: calc(50% - 100px);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 5px 10px rgb(186, 186, 186);\r\n    transition: 0.3s;\r\n\r\n    .title-container {\r\n\r\n        div {\r\n            height: 10px;\r\n        }\r\n\r\n        p {\r\n            color: red;\r\n            font-size: 11.5px;\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .submit-add-project {\r\n        transition: 0.3s;\r\n    }\r\n}\r\n\r\n.color-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .color-picker {\r\n        height: 25px;\r\n        width: 25px;\r\n        border-radius: 50%;\r\n        background-color: blue;\r\n        cursor: pointer;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    .color-picker--selected {\r\n        @extend .color-picker;\r\n        border: 2px solid dodgerblue;\r\n    }\r\n}\r\n\r\n.repitition-type {\r\n    .handle-container {\r\n        .handle-rail {\r\n            height: 20px;\r\n            width: 60px;\r\n            background-color: dodgerblue;\r\n            border-radius: 20px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        #handle-head {\r\n            height: 20px;\r\n            width: 30px;\r\n            border-radius: 20px;\r\n            background-color: red;\r\n            position: relative;\r\n            top: -18px;\r\n            pointer-events: none;\r\n            transition: 0.3s;\r\n            right: -30px;\r\n        }\r\n\r\n        #handle-head--toggle {\r\n            @extend #handle-head;\r\n            right: 0px;\r\n        }\r\n\r\n        .date-input {\r\n            display: block;\r\n        }\r\n    }\r\n}\r\n\r\n.single-project-container {\r\n    height: 70px;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n    display: grid; \r\n    grid-template-columns: 60px 1fr 1fr 30px 30px;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 5px rgb(184, 184, 184);\r\n\r\n    .single-project_tag-container {\r\n        grid-area: 1 / 1 / 4 / 2;\r\n    }\r\n\r\n    .single-project_title-container {\r\n        grid-area: 1/2/3/4;\r\n        display: flex;\r\n        align-items: center;\r\n        padding-left: 20px;\r\n\r\n        .title {\r\n            font-size: 23px;\r\n        }\r\n    }\r\n\r\n    .single-project_tasks-count-container {\r\n        grid-area: 3/2/4/3;\r\n    }\r\n\r\n    .single-project_repeated-date-container {\r\n        grid-area: 3/3/4/4;\r\n    }\r\n\r\n    .single-project_edit-button {\r\n        grid-area: 2/4/3/5;\r\n    }\r\n\r\n    .single-project_delete-button {\r\n        grid-area: 2/5/3/6;\r\n    }\r\n\r\n    .project-tag {\r\n        height: 80%;\r\n        width: 80%;\r\n        display: block;\r\n        margin: 0 auto;\r\n        fill: white;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



class App{
    constructor(){
        this.projectContainer = [];
    }

    addProject(title, tagColor, repitiionType, dueDate, event){
        const project = new Project(title, tagColor, repitiionType, dueDate);
        this.projectContainer.push(project);
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.updateDomProjectList)(___WEBPACK_IMPORTED_MODULE_1__.application.projectContainer);

        //auto sort
    }

    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType, dueDate){
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;
        this.taskContainer = [];
        this.dueDate = dueDate;     
    }
}



/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeStructure": () => (/* binding */ initializeStructure),
/* harmony export */   "updateDomProjectList": () => (/* binding */ updateDomProjectList)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/projecttag.svg */ "./src/assets/projecttag.svg");
/* harmony import */ var _assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/titlelogo.svg */ "./src/assets/titlelogo.svg");







function initializeStructure() {
    return `
        <div class=header-container>
            <div>
                <img src=${_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_3__} alt="title logo" class="title-logo">
            </div>
        </div>
        <div class=main-body>
        </div>
        <div class=footer>
            <div>Developed by Bryan Mina</div>
        </div>
    `
}

function updateDomProjectList(container) {
   if(container.length == 0) return addProjectButton();
   const str = container.reduce((accu, val) => {
        const tempStr = generateProjectItem(val.title, val.color, val.repitiionType, val.taskContainer, val.dueDate);
        return accu + tempStr;
   }, "")
   document.querySelector(".main-body").innerHTML = str;
   addProjectButton();
}

function addProjectModal() {
    let colorSelected;
    let repeated = false;

    function output(){
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
                    <div style="background-color: red" class="color-picker" id="red"></div>
                    <div style="background-color: blue"class="color-picker" id="blue"></div>
                    <div style="background-color: green"class="color-picker" id="green"></div>
                    <div style="background-color: yellow"class="color-picker" id="yellow"></div>
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
        document.querySelector(".main-body").innerHTML += modal;
    }

    output();
    document.querySelector(".project_add-project-modal-container").onsubmit = formSubmit;
    const toggleHandler = document.querySelector(".handle-rail");
    toggleHandler.addEventListener("click", toggleButton);
    const colorPickers = document.querySelectorAll(".color-picker");
    colorPickers.forEach(picker => {
        picker.addEventListener("click", testClick);
    });

    function formSubmit(event) {
        event.preventDefault();

        const inputTitle = event.target[0].value;
        const inputDate = validateDateFormat();
        const inputTagColor = colorSelected == undefined ? "white" : colorSelected.id;

        validateInput(inputTitle);

        function validateInput(input){
            if(input.length < 1 || input.length > 15) return invalidEntry();

            if(!repeated){
                inputDate ? console.log(true) : console.log(false);
                return inputDate ? _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated, inputDate) : invalidEntry();
                
            }
           
            console.log("called?");
            _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated, null);

            function invalidEntry(){
                const p = document.querySelector(".xeess3");
                p.style.display = "block";
            }
        }

        function validateDateFormat(){
            const dateSelected = document.querySelector(".date-input-value");
            if (dateSelected.value == "") return null;
            const valid = [];
            const arr = dateSelected.value.split("");
            valid.push(...arr.slice(5, 7));
            valid.push(..."/");
            valid.push(...arr.slice(8, 10));
            valid.push(..."/");
            valid.push(...arr.slice(0, 4));
        
            return valid.join("");
        }
    }

    function testClick(event){
        if(colorSelected == null){
            colorSelected = event.target;
        } else {
            colorSelected.classList.value = "color-picker";
            colorSelected = event.target;
        }

        colorSelected.classList.value = "color-picker--selected";
    }

    function toggleButton(){
        const toggled = "handle-head--toggle";
        const unToggled = "handle-head";
        const head = document.querySelector(`.${unToggled}`);
        const dateContainer = document.querySelector(".date-input");
        const modalContainer = document.querySelector(".project_add-project-modal-container");
        head.id == unToggled ? head.id = toggled : head.id = unToggled;

        if(head.id == toggled){
            //bringout date here
            repeated = true;
            dateContainer.style.display = "none";
            modalContainer.style.height = "240px";
        } else {
            repeated = false;
          
            dateContainer.style.display = "block";
            modalContainer.style.height = "270px";

            //hide date
        }
    }
}

function addProjectButton() {
    const button = document.createElement("button");
    button.classList.add("project_add-button");
    button.textContent = "+";
    button.onclick = addProjectModal;
    document.querySelector(".main-body").appendChild(button);
}

function generateProjectItem(title, tagColor, repitiionType, tasksContainer, dueDate){
    function accessProjectTasks(){
        //opening the task
        console.log("clicked this");
    }

    function mounter(){
        const button = document.querySelector(".single-project-container");
        button.onclick = accessProjectTasks; 
    }
    function output(){
        return `
            <div class="single-project-container">
                <div class="single-project_tag-container">
                    <img src=${_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__} class="project-tag">
                </div>
                <div class="single-project_title-container">
                    <div class="title">${title}</div>
                </div>
                <div class="single-project_tasks-count-container">
                    <span>Tasks:${tasksContainer.length}</span>
                </div>
                <div class="single-project_repeated-date-container">${repitiionType ? "<span>repeated</span>" : "<span>Due date:"+ dueDate +"</span>" }</div>
                <div class="single-project_edit-button">edit</div>
                <div class="single-project_delete-button">delete</div>
            </div>
        `
    }

    return output();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "application": () => (/* binding */ application)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");






const root = document.querySelector("#content");
root.innerHTML = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.initializeStructure)();

const application = new _app__WEBPACK_IMPORTED_MODULE_2__["default"]();

(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDomProjectList)(application.projectContainer);


/***/ }),

/***/ "./src/assets/projecttag.svg":
/*!***********************************!*\
  !*** ./src/assets/projecttag.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b32fcc9b39176514eebb.svg";

/***/ }),

/***/ "./src/assets/titlelogo.svg":
/*!**********************************!*\
  !*** ./src/assets/titlelogo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af3ee46471d70daeb4f6.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDE2MywgMTYzLCAxNjMpO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnRpdGxlLWxvZ28ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1ib2R5IHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgZGl2IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYigxODYsIDE4NiwgMTg2KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIGRpdiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIHAge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC5zdWJtaXQtYWRkLXByb2plY3Qge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbG9yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY29sb3ItY29udGFpbmVyIC5jb2xvci1waWNrZXIsIC5jb2xvci1jb250YWluZXIgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5jb2xvci1jb250YWluZXIgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAuaGFuZGxlLXJhaWwge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAjaGFuZGxlLWhlYWQsIC5yZXBpdGl0aW9uLXR5cGUgLmhhbmRsZS1jb250YWluZXIgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMThweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHJpZ2h0OiAtMzBweDtcXG59XFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAjaGFuZGxlLWhlYWQtLXRvZ2dsZSB7XFxuICByaWdodDogMHB4O1xcbn1cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyIC5kYXRlLWlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMWZyIDMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDE4NCwgMTg0LCAxODQpO1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90YWctY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzQvMjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfdGl0bGUtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMS8yLzMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfdGFza3MtY291bnQtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMy8yLzQvMztcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfcmVwZWF0ZWQtZGF0ZS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IDIvNC8zLzU7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LXRhZyB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZmlsbDogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUdBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUlRO0VBQ0ksWUFBQTtBQUZaO0FBS1E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBSFo7QUFPSTtFQUNJLGdCQUFBO0FBTFI7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFOSjtBQVFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBTlI7QUFTSTtFQUVJLDRCQUFBO0FBUlI7O0FBY1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWFo7QUFjUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBWlo7QUFlUTtFQUVJLFVBQUE7QUFkWjtBQWlCUTtFQUNJLGNBQUE7QUFmWjs7QUFvQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBakJKO0FBbUJJO0VBQ0ksa0JBQUE7QUFqQlI7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksZUFBQTtBQWxCWjtBQXNCSTtFQUNJLGtCQUFBO0FBcEJSO0FBdUJJO0VBQ0ksa0JBQUE7QUFyQlI7QUF3Qkk7RUFDSSxrQkFBQTtBQXRCUjtBQXlCSTtFQUNJLGtCQUFBO0FBdkJSO0FBMEJJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUF4QlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDE2MywgMTYzLCAxNjMpO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAudGl0bGUtbG9nbyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYm9keSB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2IoMTg2LCAxODYsIDE4Nik7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgIC50aXRsZS1jb250YWluZXIge1xcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1pdC1hZGQtcHJvamVjdCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb2xvci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC5jb2xvci1waWNrZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcclxcbiAgICAgICAgQGV4dGVuZCAuY29sb3ItcGlja2VyO1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVwaXRpdGlvbi10eXBlIHtcXHJcXG4gICAgLmhhbmRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgLmhhbmRsZS1yYWlsIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNoYW5kbGUtaGVhZCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IC0xOHB4O1xcclxcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcclxcbiAgICAgICAgICAgIEBleHRlbmQgI2hhbmRsZS1oZWFkO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGF0ZS1pbnB1dCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMWZyIDMwcHggMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDE4NCwgMTg0LCAxODQpO1xcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gNCAvIDI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X3RpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8zLzQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF90YXNrcy1jb3VudC1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF9yZXBlYXRlZC1kYXRlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDMvMy80LzQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X2VkaXQtYnV0dG9uIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMi80LzMvNTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvNS8zLzY7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3QtdGFnIHtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHVwZGF0ZURvbVByb2plY3RMaXN0IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0aW9uXCI7XHJcbmltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdCh0aXRsZSwgdGFnQ29sb3IsIHJlcGl0aWlvblR5cGUsIGR1ZURhdGUsIGV2ZW50KXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlLCBkdWVEYXRlKTtcclxuICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIucHVzaChwcm9qZWN0KTtcclxuICAgICAgICB1cGRhdGVEb21Qcm9qZWN0TGlzdChhcHBsaWNhdGlvbi5wcm9qZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy9hdXRvIHNvcnRcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0ICAgIFxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlLCBkdWVEYXRlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHRhZ0NvbG9yO1xyXG4gICAgICAgIHRoaXMucmVwaXRpaW9uVHlwZSA9IHJlcGl0aWlvblR5cGU7XHJcbiAgICAgICAgdGhpcy50YXNrQ29udGFpbmVyID0gW107XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTsgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgYXBwbGljYXRpb24gfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHByb2plY3RUYWcgZnJvbSBcIi4vYXNzZXRzL3Byb2plY3R0YWcuc3ZnXCI7XHJcbmltcG9ydCB0aXRsZUxvZ28gZnJvbSBcIi4vYXNzZXRzL3RpdGxlbG9nby5zdmdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RydWN0dXJlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPWhlYWRlci1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke3RpdGxlTG9nb30gYWx0PVwidGl0bGUgbG9nb1wiIGNsYXNzPVwidGl0bGUtbG9nb1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPW1haW4tYm9keT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPWZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdj5EZXZlbG9wZWQgYnkgQnJ5YW4gTWluYTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9tUHJvamVjdExpc3QoY29udGFpbmVyKSB7XHJcbiAgIGlmKGNvbnRhaW5lci5sZW5ndGggPT0gMCkgcmV0dXJuIGFkZFByb2plY3RCdXR0b24oKTtcclxuICAgY29uc3Qgc3RyID0gY29udGFpbmVyLnJlZHVjZSgoYWNjdSwgdmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFN0ciA9IGdlbmVyYXRlUHJvamVjdEl0ZW0odmFsLnRpdGxlLCB2YWwuY29sb3IsIHZhbC5yZXBpdGlpb25UeXBlLCB2YWwudGFza0NvbnRhaW5lciwgdmFsLmR1ZURhdGUpO1xyXG4gICAgICAgIHJldHVybiBhY2N1ICsgdGVtcFN0cjtcclxuICAgfSwgXCJcIilcclxuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJvZHlcIikuaW5uZXJIVE1MID0gc3RyO1xyXG4gICBhZGRQcm9qZWN0QnV0dG9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RNb2RhbCgpIHtcclxuICAgIGxldCBjb2xvclNlbGVjdGVkO1xyXG4gICAgbGV0IHJlcGVhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gb3V0cHV0KCl7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBgXHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJwcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1pbmxlbmd0aD1cIjFcIiBtYXhsZW5ndGg9XCIxNVwibmFtZT1cImlucHV0LW5hbWVcIiB0eXBlPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtY29udGFpbmVyXCI+PHAgY2xhc3M9XCJ4ZWVzczNcIj5NdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSB0byAxNSBjaGFyYWN0ZXI8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnY29sb3ItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGFnIGNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCIgY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cInJlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBibHVlXCJjbGFzcz1cImNvbG9yLXBpY2tlclwiIGlkPVwiYmx1ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblwiY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cImdyZWVuXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvd1wiY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cInllbGxvd1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZWRcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJjdXN0b21cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGl0aXRpb24tdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj50b2dnbGUgb24gb3Igb2ZmIGhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbmRsZS1yYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9GRiAgT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbmRsZS1oZWFkXCIgaWQ9XCJoYW5kbGUtaGVhZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EdWUgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcyA9XCJkYXRlLWlucHV0LXZhbHVlXCJ0eXBlPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWFkZC1wcm9qZWN0XCI+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICBgO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpLmlubmVySFRNTCArPSBtb2RhbDtcclxuICAgIH1cclxuXHJcbiAgICBvdXRwdXQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXJcIikub25zdWJtaXQgPSBmb3JtU3VibWl0O1xyXG4gICAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFuZGxlLXJhaWxcIik7XHJcbiAgICB0b2dnbGVIYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVCdXR0b24pO1xyXG4gICAgY29uc3QgY29sb3JQaWNrZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1waWNrZXJcIik7XHJcbiAgICBjb2xvclBpY2tlcnMuZm9yRWFjaChwaWNrZXIgPT4ge1xyXG4gICAgICAgIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGVzdENsaWNrKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IHZhbGlkYXRlRGF0ZUZvcm1hdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGFnQ29sb3IgPSBjb2xvclNlbGVjdGVkID09IHVuZGVmaW5lZCA/IFwid2hpdGVcIiA6IGNvbG9yU2VsZWN0ZWQuaWQ7XHJcblxyXG4gICAgICAgIHZhbGlkYXRlSW5wdXQoaW5wdXRUaXRsZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQpe1xyXG4gICAgICAgICAgICBpZihpbnB1dC5sZW5ndGggPCAxIHx8IGlucHV0Lmxlbmd0aCA+IDE1KSByZXR1cm4gaW52YWxpZEVudHJ5KCk7XHJcblxyXG4gICAgICAgICAgICBpZighcmVwZWF0ZWQpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXREYXRlID8gY29uc29sZS5sb2codHJ1ZSkgOiBjb25zb2xlLmxvZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXREYXRlID8gYXBwbGljYXRpb24uYWRkUHJvamVjdChpbnB1dFRpdGxlLCBpbnB1dFRhZ0NvbG9yLCByZXBlYXRlZCwgaW5wdXREYXRlKSA6IGludmFsaWRFbnRyeSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWQ/XCIpO1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRQcm9qZWN0KGlucHV0VGl0bGUsIGlucHV0VGFnQ29sb3IsIHJlcGVhdGVkLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGludmFsaWRFbnRyeSgpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueGVlc3MzXCIpO1xyXG4gICAgICAgICAgICAgICAgcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGVGb3JtYXQoKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWlucHV0LXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZVNlbGVjdGVkLnZhbHVlID09IFwiXCIpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZCA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBkYXRlU2VsZWN0ZWQudmFsdWUuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgIHZhbGlkLnB1c2goLi4uYXJyLnNsaWNlKDUsIDcpKTtcclxuICAgICAgICAgICAgdmFsaWQucHVzaCguLi5cIi9cIik7XHJcbiAgICAgICAgICAgIHZhbGlkLnB1c2goLi4uYXJyLnNsaWNlKDgsIDEwKSk7XHJcbiAgICAgICAgICAgIHZhbGlkLnB1c2goLi4uXCIvXCIpO1xyXG4gICAgICAgICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSgwLCA0KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZC5qb2luKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0Q2xpY2soZXZlbnQpe1xyXG4gICAgICAgIGlmKGNvbG9yU2VsZWN0ZWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0ZWQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSBcImNvbG9yLXBpY2tlclwiO1xyXG4gICAgICAgICAgICBjb2xvclNlbGVjdGVkID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSBcImNvbG9yLXBpY2tlci0tc2VsZWN0ZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVCdXR0b24oKXtcclxuICAgICAgICBjb25zdCB0b2dnbGVkID0gXCJoYW5kbGUtaGVhZC0tdG9nZ2xlXCI7XHJcbiAgICAgICAgY29uc3QgdW5Ub2dnbGVkID0gXCJoYW5kbGUtaGVhZFwiO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1blRvZ2dsZWR9YCk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZC5pZCA9PSB1blRvZ2dsZWQgPyBoZWFkLmlkID0gdG9nZ2xlZCA6IGhlYWQuaWQgPSB1blRvZ2dsZWQ7XHJcblxyXG4gICAgICAgIGlmKGhlYWQuaWQgPT0gdG9nZ2xlZCl7XHJcbiAgICAgICAgICAgIC8vYnJpbmdvdXQgZGF0ZSBoZXJlXHJcbiAgICAgICAgICAgIHJlcGVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMjQwcHhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXBlYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gXCIyNzBweFwiO1xyXG5cclxuICAgICAgICAgICAgLy9oaWRlIGRhdGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RCdXR0b24oKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2FkZC1idXR0b25cIik7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gYWRkUHJvamVjdE1vZGFsO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWJvZHlcIikuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SXRlbSh0aXRsZSwgdGFnQ29sb3IsIHJlcGl0aWlvblR5cGUsIHRhc2tzQ29udGFpbmVyLCBkdWVEYXRlKXtcclxuICAgIGZ1bmN0aW9uIGFjY2Vzc1Byb2plY3RUYXNrcygpe1xyXG4gICAgICAgIC8vb3BlbmluZyB0aGUgdGFza1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0aGlzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdW50ZXIoKXtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lclwiKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IGFjY2Vzc1Byb2plY3RUYXNrczsgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvdXRwdXQoKXtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7cHJvamVjdFRhZ30gY2xhc3M9XCJwcm9qZWN0LXRhZ1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRhc2tzOiR7dGFza3NDb250YWluZXIubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3JlcGVhdGVkLWRhdGUtY29udGFpbmVyXCI+JHtyZXBpdGlpb25UeXBlID8gXCI8c3Bhbj5yZXBlYXRlZDwvc3Bhbj5cIiA6IFwiPHNwYW4+RHVlIGRhdGU6XCIrIGR1ZURhdGUgK1wiPC9zcGFuPlwiIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvblwiPmVkaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcHJvamVjdF9kZWxldGUtYnV0dG9uXCI+ZGVsZXRlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0KCk7XHJcbn0iLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplU3RydWN0dXJlLCB1cGRhdGVEb21Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdGlvblwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xyXG5cclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbnJvb3QuaW5uZXJIVE1MID0gaW5pdGlhbGl6ZVN0cnVjdHVyZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5cclxudXBkYXRlRG9tUHJvamVjdExpc3QoYXBwbGljYXRpb24ucHJvamVjdENvbnRhaW5lcik7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==