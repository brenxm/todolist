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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(249, 249, 249);\n}\n\n.header-container {\n  background-color: white;\n  box-shadow: 0 0 15px rgb(163, 163, 163);\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-container h1 {\n  color: rgb(65, 90, 174);\n}\n\n.main-body {\n  height: calc(100vh - 80px);\n  padding: 20px;\n}\n\n.footer {\n  height: 20px;\n  background-color: rgb(214, 214, 214);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer div {\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.project_add-button {\n  height: 30px;\n  width: 60px;\n  color: white;\n  font-size: 20px;\n  border: none;\n  background-color: dodgerblue;\n  display: block;\n  margin: 0 auto;\n}\n\n.project_add-project-modal-container {\n  height: 250px;\n  width: 200px;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n  padding-top: 20px;\n  position: absolute;\n  left: calc(50% - 100px);\n  border-radius: 10px;\n  box-shadow: 2px 5px 10px rgb(186, 186, 186);\n  transition: 0.3s;\n}\n.project_add-project-modal-container .title-container div {\n  height: 10px;\n}\n.project_add-project-modal-container .title-container p {\n  color: red;\n  font-size: 11.5px;\n  display: none;\n}\n.project_add-project-modal-container .submit-add-project {\n  transition: 0.3s;\n}\n\n.color-container {\n  display: flex;\n  justify-content: space-between;\n}\n.color-container .color-picker, .color-container .color-picker--selected {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: blue;\n  cursor: pointer;\n  border: 1px solid black;\n}\n.color-container .color-picker--selected {\n  border: 2px solid dodgerblue;\n}\n\n.repitition-type .handle-container .handle-rail {\n  height: 20px;\n  width: 60px;\n  background-color: dodgerblue;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.repitition-type .handle-container #handle-head, .repitition-type .handle-container #handle-head--toggle {\n  height: 20px;\n  width: 30px;\n  border-radius: 20px;\n  background-color: red;\n  position: relative;\n  top: -18px;\n  pointer-events: none;\n  transition: 0.3s;\n  right: -30px;\n}\n.repitition-type .handle-container #handle-head--toggle {\n  right: 0px;\n}\n.repitition-type .handle-container .date-input {\n  display: none;\n}\n\n.single-project-container {\n  height: 70px;\n  width: 100%;\n  background-color: rgb(255, 255, 255);\n  display: grid;\n  grid-template-columns: 60px 1fr 1fr 30px 30px;\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px rgb(184, 184, 184);\n}\n.single-project-container .single-project_tag-container {\n  grid-area: 1/1/4/2;\n}\n.single-project-container .single-project_title-container {\n  grid-area: 1/2/3/4;\n}\n.single-project-container .single-project_tasks-count-container {\n  grid-area: 3/2/4/3;\n}\n.single-project-container .single-project_repeated-date-container {\n  grid-area: 3/3/4/4;\n}\n.single-project-container .single-project_edit-button {\n  grid-area: 2/4/3/5;\n}\n.single-project-container .single-project_delete-button {\n  grid-area: 2/5/3/6;\n}\n.single-project-container .project-tag {\n  height: 80%;\n  width: 80%;\n  display: block;\n  margin: 0 auto;\n  fill: white;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,sBAAA;AACJ;;AAEA;EACI,oCAAA;AACJ;;AAEA;EACI,uBAAA;EACA,uCAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,uBAAA;AACJ;;AAEA;EACI,0BAAA;EACA,aAAA;AACJ;;AAEA;EACI,YAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,eAAA;EACA,kBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,4BAAA;EACA,cAAA;EACA,cAAA;AACJ;;AAEA;EACI,aAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,gBAAA;AACJ;AAGQ;EACI,YAAA;AADZ;AAIQ;EACI,UAAA;EACA,iBAAA;EACA,aAAA;AAFZ;AAMI;EACI,gBAAA;AAJR;;AAQA;EACI,aAAA;EACA,8BAAA;AALJ;AAOI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,uBAAA;AALR;AAQI;EAEI,4BAAA;AAPR;;AAaQ;EACI,YAAA;EACA,WAAA;EACA,4BAAA;EACA,mBAAA;EACA,eAAA;AAVZ;AAaQ;EACI,YAAA;EACA,WAAA;EACA,mBAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;AAXZ;AAcQ;EAEI,UAAA;AAbZ;AAgBQ;EACI,aAAA;AAdZ;;AAmBA;EACI,YAAA;EACA,WAAA;EACA,oCAAA;EACA,aAAA;EACA,6CAAA;EACA,kCAAA;EACA,mBAAA;EACA,0CAAA;AAhBJ;AAkBI;EACI,kBAAA;AAhBR;AAmBI;EACI,kBAAA;AAjBR;AAoBI;EACI,kBAAA;AAlBR;AAqBI;EACI,kBAAA;AAnBR;AAsBI;EACI,kBAAA;AApBR;AAuBI;EACI,kBAAA;AArBR;AAwBI;EACI,WAAA;EACA,UAAA;EACA,cAAA;EACA,cAAA;EACA,WAAA;AAtBR","sourcesContent":["* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(249, 249, 249);\r\n}\r\n\r\n.header-container {\r\n    background-color: white;\r\n    box-shadow: 0 0 15px rgb(163, 163, 163);\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.header-container h1 {\r\n    color: rgb(65, 90, 174);\r\n}\r\n\r\n.main-body {\r\n    height: calc(100vh - 80px);\r\n    padding: 20px;\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    background-color: rgb(214, 214, 214);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer div {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.project_add-button {\r\n    height: 30px;\r\n    width: 60px;\r\n    color: white;\r\n    font-size: 20px;\r\n    border: none;\r\n    background-color: dodgerblue;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.project_add-project-modal-container {\r\n    height: 250px;\r\n    width: 200px;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    padding-top: 20px;\r\n    position: absolute;\r\n    left: calc(50% - 100px);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 5px 10px rgb(186, 186, 186);\r\n    transition: 0.3s;\r\n\r\n    .title-container {\r\n\r\n        div {\r\n            height: 10px;\r\n        }\r\n\r\n        p {\r\n            color: red;\r\n            font-size: 11.5px;\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .submit-add-project {\r\n        transition: 0.3s;\r\n    }\r\n}\r\n\r\n.color-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .color-picker {\r\n        height: 25px;\r\n        width: 25px;\r\n        border-radius: 50%;\r\n        background-color: blue;\r\n        cursor: pointer;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    .color-picker--selected {\r\n        @extend .color-picker;\r\n        border: 2px solid dodgerblue;\r\n    }\r\n}\r\n\r\n.repitition-type {\r\n    .handle-container {\r\n        .handle-rail {\r\n            height: 20px;\r\n            width: 60px;\r\n            background-color: dodgerblue;\r\n            border-radius: 20px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        #handle-head {\r\n            height: 20px;\r\n            width: 30px;\r\n            border-radius: 20px;\r\n            background-color: red;\r\n            position: relative;\r\n            top: -18px;\r\n            pointer-events: none;\r\n            transition: 0.3s;\r\n            right: -30px;\r\n        }\r\n\r\n        #handle-head--toggle {\r\n            @extend #handle-head;\r\n            right: 0px;\r\n        }\r\n\r\n        .date-input {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n.single-project-container {\r\n    height: 70px;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n    display: grid; \r\n    grid-template-columns: 60px 1fr 1fr 30px 30px;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 5px rgb(184, 184, 184);\r\n\r\n    .single-project_tag-container {\r\n        grid-area: 1 / 1 / 4 / 2;\r\n    }\r\n\r\n    .single-project_title-container {\r\n        grid-area: 1/2/3/4;\r\n    }\r\n\r\n    .single-project_tasks-count-container {\r\n        grid-area: 3/2/4/3;\r\n    }\r\n\r\n    .single-project_repeated-date-container {\r\n        grid-area: 3/3/4/4;\r\n    }\r\n\r\n    .single-project_edit-button {\r\n        grid-area: 2/4/3/5;\r\n    }\r\n\r\n    .single-project_delete-button {\r\n        grid-area: 2/5/3/6;\r\n    }\r\n\r\n    .project-tag {\r\n        height: 80%;\r\n        width: 80%;\r\n        display: block;\r\n        margin: 0 auto;\r\n        fill: white;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    addProject(title, tagColor, repitiionType, event){
        const project = new Project(title, tagColor, repitiionType);
        console.log(project);
        this.projectContainer.push(project);
        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.updateDomProjectList)(___WEBPACK_IMPORTED_MODULE_1__.application.projectContainer);

        //auto sort
    }

    //remove project    
}

class Project{
    constructor(title, tagColor, repitiionType){
        this.title = title;
        this.color = tagColor;
        this.repitiionType = repitiionType;     
    }
}



/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeStructure": () => (/* binding */ initializeStructure),
/* harmony export */   "updateDomProjectList": () => (/* binding */ updateDomProjectList)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/projecttag.svg */ "./src/assets/projecttag.svg");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2__);







//initialize main structure
function initializeStructure() {
    return `
        <div class=header-container>
            <h1>TodoList</h1>
        </div>
        <div class=main-body>
        </div>
        <div class=footer>
            <div>Developed by Bryan Mina</div>
        </div>
    `
}

function updateDomProjectList(container) {
    /*
    function generateProjectItem() {
        if (container.length == 0) return "";
        const str = container.reduce((accu, val) => {
            const singleProject = `
            <div class="project-single-container">
                <div class = "project_title">${val.title}</div>
                <div class = "project_description">${val.color}</div>
            </div>
        `;
            return accu + singleProject;
        }, "");
        return str;
    };
    document.querySelector(".main-body").innerHTML = generateProjectItem();
    addProjectButton();
    */
   if(container.length == 0) return addProjectButton();
   const str = container.reduce((accu, val) => {
        const tempStr = generateProjectItem(val.title, val.color, val.repitiionType);
        return accu + tempStr;
   }, "")
   document.querySelector(".main-body").innerHTML = str;
   addProjectButton();
}

function addProjectModal() {
    let colorSelected;
    let repeated = false;

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

            if(repeated){
                return inputDate ? _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated) : invalidEntry();
            }
           
            _index_js__WEBPACK_IMPORTED_MODULE_1__.application.addProject(inputTitle, inputTagColor, repeated);

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
            
            return valid;
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
            dateContainer.style.display = "block";
            modalContainer.style.height = "270px";
        } else {
            repeated = false;
            dateContainer.style.display = "none";
            modalContainer.style.height = "240px";

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

function generateProjectItem(title, tagColor, repitiionType){

    function tagColor(){
        return `   
            <div>${(_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_2___default())}</div>
        `
    }

    function render(){
        return `
            <div class="single-project-container">
                <div class="single-project_tag-container">${tagColor()}</div>
                <div class="single-project_title-container">${title}</div>
                <div class="single-project_tasks-count-container">tasks 0
                </div>
                <div class="single-project_repeated-date-container">${repitiionType}</div>
                <div class="single-project_edit-button">edit</div>
                <div class="single-project_delete-button">delete</div>
            </div>
        `
    }

    return render();
}

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
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");






const root = document.querySelector("#content");
root.innerHTML = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.initializeStructure)();

const application = new _app__WEBPACK_IMPORTED_MODULE_2__["default"]();

(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDomProjectList)(application.projectContainer);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0RBQVUsQ0FBQztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsV0FBVztBQUN2RSw4REFBOEQsTUFBTTtBQUNwRTtBQUNBO0FBQ0Esc0VBQXNFLGNBQWM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk11QjtBQUN1QjtBQUNnQztBQUN0RDtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUVBQW1CO0FBQ3BDO0FBQ08sd0JBQXdCLDRDQUFHO0FBQ2xDO0FBQ0Esc0VBQW9COzs7Ozs7O1VDWHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy9wcm9qZWN0dGFnLnN2ZyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDE2MywgMTYzLCAxNjMpO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIgaDEge1xcbiAgY29sb3I6IHJnYig2NSwgOTAsIDE3NCk7XFxufVxcblxcbi5tYWluLWJvZHkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgZGl2IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMHB4IHJnYigxODYsIDE4NiwgMTg2KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIGRpdiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIHAge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC5zdWJtaXQtYWRkLXByb2plY3Qge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbG9yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY29sb3ItY29udGFpbmVyIC5jb2xvci1waWNrZXIsIC5jb2xvci1jb250YWluZXIgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5jb2xvci1jb250YWluZXIgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcXG59XFxuXFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAuaGFuZGxlLXJhaWwge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAjaGFuZGxlLWhlYWQsIC5yZXBpdGl0aW9uLXR5cGUgLmhhbmRsZS1jb250YWluZXIgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMThweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHJpZ2h0OiAtMzBweDtcXG59XFxuLnJlcGl0aXRpb24tdHlwZSAuaGFuZGxlLWNvbnRhaW5lciAjaGFuZGxlLWhlYWQtLXRvZ2dsZSB7XFxuICByaWdodDogMHB4O1xcbn1cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyIC5kYXRlLWlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciAxZnIgMzBweCAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RhZy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMy80O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90YXNrcy1jb3VudC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9yZXBlYXRlZC1kYXRlLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDMvMy80LzQ7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X2VkaXQtYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogMi80LzMvNTtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfZGVsZXRlLWJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IDIvNS8zLzY7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtdGFnIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmaWxsOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdRO0VBQ0ksWUFBQTtBQURaO0FBSVE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBRlo7QUFNSTtFQUNJLGdCQUFBO0FBSlI7O0FBUUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFMSjtBQU9JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBTFI7QUFRSTtFQUVJLDRCQUFBO0FBUFI7O0FBYVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVlo7QUFhUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBWFo7QUFjUTtFQUVJLFVBQUE7QUFiWjtBQWdCUTtFQUNJLGFBQUE7QUFkWjs7QUFtQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBaEJKO0FBa0JJO0VBQ0ksa0JBQUE7QUFoQlI7QUFtQkk7RUFDSSxrQkFBQTtBQWpCUjtBQW9CSTtFQUNJLGtCQUFBO0FBbEJSO0FBcUJJO0VBQ0ksa0JBQUE7QUFuQlI7QUFzQkk7RUFDSSxrQkFBQTtBQXBCUjtBQXVCSTtFQUNJLGtCQUFBO0FBckJSO0FBd0JJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUF0QlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDE2MywgMTYzLCAxNjMpO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxyXFxuICAgIGNvbG9yOiByZ2IoNjUsIDkwLCAxNzQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2IoMTg2LCAxODYsIDE4Nik7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgIC50aXRsZS1jb250YWluZXIge1xcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Ym1pdC1hZGQtcHJvamVjdCB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb2xvci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC5jb2xvci1waWNrZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbG9yLXBpY2tlci0tc2VsZWN0ZWQge1xcclxcbiAgICAgICAgQGV4dGVuZCAuY29sb3ItcGlja2VyO1xcclxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVwaXRpdGlvbi10eXBlIHtcXHJcXG4gICAgLmhhbmRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgLmhhbmRsZS1yYWlsIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNoYW5kbGUtaGVhZCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IC0xOHB4O1xcclxcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcclxcbiAgICAgICAgICAgIEBleHRlbmQgI2hhbmRsZS1oZWFkO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGF0ZS1pbnB1dCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciAxZnIgMzBweCAzMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF90YWctY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyA0IC8gMjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfdGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzMvNDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfdGFza3MtY291bnQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMy8yLzQvMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfcmVwZWF0ZWQtZGF0ZS1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvNC8zLzU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0LXRhZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBpZD1cXFwiTGF5ZXJfMlxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzI0IDUwMFxcXCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyOWFiZTI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPVxcXCJMYXllcl8xLTJcXFwiPjxwYXRoIGNsYXNzPVxcXCJjbHMtMVxcXCIgZD1cXFwiTTIzLjE5LDBDMTAuMzgsMCwwLDEwLjM1LDAsMjMuMTJWNDc3LjE2YzAsMjAuNjYsMjMuNjMsMzAuNjYsMzYuODUsMTUuNmwxMTEuNzItMTU1LjIzYzIuNzYtNC44LDcuODgtNy43NSwxMy40My03Ljc1aDBjNS41NSwwLDEwLjY3LDIuOTYsMTMuNDMsNy43NWwxMTEuNzIsMTU1LjIzYzEzLjIyLDE1LjA2LDM2Ljg1LDUuMDUsMzYuODUtMTUuNlYyMy4xMmMwLTEyLjc3LTEwLjM4LTIzLjEyLTIzLjE5LTIzLjEySDIzLjE5WlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsImltcG9ydCB7IHVwZGF0ZURvbVByb2plY3RMaXN0IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0aW9uXCI7XHJcbmltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSBcIi5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdCh0aXRsZSwgdGFnQ29sb3IsIHJlcGl0aWlvblR5cGUsIGV2ZW50KXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIucHVzaChwcm9qZWN0KTtcclxuICAgICAgICB1cGRhdGVEb21Qcm9qZWN0TGlzdChhcHBsaWNhdGlvbi5wcm9qZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy9hdXRvIHNvcnRcclxuICAgIH1cclxuXHJcbiAgICAvL3JlbW92ZSBwcm9qZWN0ICAgIFxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHRhZ0NvbG9yO1xyXG4gICAgICAgIHRoaXMucmVwaXRpaW9uVHlwZSA9IHJlcGl0aWlvblR5cGU7ICAgICBcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBwcm9qZWN0VGFnIGZyb20gXCIuL2Fzc2V0cy9wcm9qZWN0dGFnLnN2Z1wiO1xyXG5cclxuXHJcbi8vaW5pdGlhbGl6ZSBtYWluIHN0cnVjdHVyZVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0cnVjdHVyZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1oZWFkZXItY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDE+VG9kb0xpc3Q8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9bWFpbi1ib2R5PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2PkRldmVsb3BlZCBieSBCcnlhbiBNaW5hPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb21Qcm9qZWN0TGlzdChjb250YWluZXIpIHtcclxuICAgIC8qXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJdGVtKCkge1xyXG4gICAgICAgIGlmIChjb250YWluZXIubGVuZ3RoID09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGNvbnRhaW5lci5yZWR1Y2UoKGFjY3UsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVQcm9qZWN0ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1zaW5nbGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0X3RpdGxlXCI+JHt2YWwudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJwcm9qZWN0X2Rlc2NyaXB0aW9uXCI+JHt2YWwuY29sb3J9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2N1ICsgc2luZ2xlUHJvamVjdDtcclxuICAgICAgICB9LCBcIlwiKTtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpLmlubmVySFRNTCA9IGdlbmVyYXRlUHJvamVjdEl0ZW0oKTtcclxuICAgIGFkZFByb2plY3RCdXR0b24oKTtcclxuICAgICovXHJcbiAgIGlmKGNvbnRhaW5lci5sZW5ndGggPT0gMCkgcmV0dXJuIGFkZFByb2plY3RCdXR0b24oKTtcclxuICAgY29uc3Qgc3RyID0gY29udGFpbmVyLnJlZHVjZSgoYWNjdSwgdmFsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFN0ciA9IGdlbmVyYXRlUHJvamVjdEl0ZW0odmFsLnRpdGxlLCB2YWwuY29sb3IsIHZhbC5yZXBpdGlpb25UeXBlKTtcclxuICAgICAgICByZXR1cm4gYWNjdSArIHRlbXBTdHI7XHJcbiAgIH0sIFwiXCIpXHJcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpLmlubmVySFRNTCA9IHN0cjtcclxuICAgYWRkUHJvamVjdEJ1dHRvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0TW9kYWwoKSB7XHJcbiAgICBsZXQgY29sb3JTZWxlY3RlZDtcclxuICAgIGxldCByZXBlYXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gYFxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtaW5sZW5ndGg9XCIxXCIgbWF4bGVuZ3RoPVwiMTVcIm5hbWU9XCJpbnB1dC1uYW1lXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNvbnRhaW5lclwiPjxwIGNsYXNzPVwieGVlc3MzXCI+TXVzdCBjb250YWluIGF0IGxlYXN0IDEgdG8gMTUgY2hhcmFjdGVyPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ2NvbG9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRhZyBjb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiIGNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJyZWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogYmx1ZVwiY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cImJsdWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW5cImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJncmVlblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJ5ZWxsb3dcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCJjbGFzcz1cImNvbG9yLXBpY2tlclwiIGlkPVwiY3VzdG9tXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBpdGl0aW9uLXR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+dG9nZ2xlIG9uIG9yIG9mZiBoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtcmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPRkYgIE9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtaGVhZFwiIGlkPVwiaGFuZGxlLWhlYWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIGRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3MgPVwiZGF0ZS1pbnB1dC12YWx1ZVwidHlwZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1hZGQtcHJvamVjdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgYDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tYm9keVwiKS5pbm5lckhUTUwgKz0gbW9kYWw7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyXCIpLm9uc3VibWl0ID0gZm9ybVN1Ym1pdDtcclxuICAgIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbmRsZS1yYWlsXCIpO1xyXG4gICAgdG9nZ2xlSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQnV0dG9uKTtcclxuICAgIGNvbnN0IGNvbG9yUGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItcGlja2VyXCIpO1xyXG4gICAgY29sb3JQaWNrZXJzLmZvckVhY2gocGlja2VyID0+IHtcclxuICAgICAgICBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRlc3RDbGljayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSB2YWxpZGF0ZURhdGVGb3JtYXQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dFRhZ0NvbG9yID0gY29sb3JTZWxlY3RlZCA9PSB1bmRlZmluZWQgPyBcIndoaXRlXCIgOiBjb2xvclNlbGVjdGVkLmlkO1xyXG5cclxuICAgICAgICB2YWxpZGF0ZUlucHV0KGlucHV0VGl0bGUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGlucHV0KXtcclxuICAgICAgICAgICAgaWYoaW5wdXQubGVuZ3RoIDwgMSB8fCBpbnB1dC5sZW5ndGggPiAxNSkgcmV0dXJuIGludmFsaWRFbnRyeSgpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVwZWF0ZWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0RGF0ZSA/IGFwcGxpY2F0aW9uLmFkZFByb2plY3QoaW5wdXRUaXRsZSwgaW5wdXRUYWdDb2xvciwgcmVwZWF0ZWQpIDogaW52YWxpZEVudHJ5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkUHJvamVjdChpbnB1dFRpdGxlLCBpbnB1dFRhZ0NvbG9yLCByZXBlYXRlZCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbnZhbGlkRW50cnkoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnhlZXNzM1wiKTtcclxuICAgICAgICAgICAgICAgIHAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVEYXRlRm9ybWF0KCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dC12YWx1ZVwiKTtcclxuICAgICAgICAgICAgaWYgKGRhdGVTZWxlY3RlZC52YWx1ZSA9PSBcIlwiKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgYXJyID0gZGF0ZVNlbGVjdGVkLnZhbHVlLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg1LCA3KSk7XHJcbiAgICAgICAgICAgIHZhbGlkLnB1c2goLi4uXCIvXCIpO1xyXG4gICAgICAgICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg4LCAxMCkpO1xyXG4gICAgICAgICAgICB2YWxpZC5wdXNoKC4uLlwiL1wiKTtcclxuICAgICAgICAgICAgdmFsaWQucHVzaCguLi5hcnIuc2xpY2UoMCwgNCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0Q2xpY2soZXZlbnQpe1xyXG4gICAgICAgIGlmKGNvbG9yU2VsZWN0ZWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0ZWQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSBcImNvbG9yLXBpY2tlclwiO1xyXG4gICAgICAgICAgICBjb2xvclNlbGVjdGVkID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSBcImNvbG9yLXBpY2tlci0tc2VsZWN0ZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVCdXR0b24oKXtcclxuICAgICAgICBjb25zdCB0b2dnbGVkID0gXCJoYW5kbGUtaGVhZC0tdG9nZ2xlXCI7XHJcbiAgICAgICAgY29uc3QgdW5Ub2dnbGVkID0gXCJoYW5kbGUtaGVhZFwiO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1blRvZ2dsZWR9YCk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXJcIik7XHJcbiAgICAgICAgaGVhZC5pZCA9PSB1blRvZ2dsZWQgPyBoZWFkLmlkID0gdG9nZ2xlZCA6IGhlYWQuaWQgPSB1blRvZ2dsZWQ7XHJcblxyXG4gICAgICAgIGlmKGhlYWQuaWQgPT0gdG9nZ2xlZCl7XHJcbiAgICAgICAgICAgIC8vYnJpbmdvdXQgZGF0ZSBoZXJlXHJcbiAgICAgICAgICAgIHJlcGVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjI3MHB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVwZWF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMjQwcHhcIjtcclxuXHJcbiAgICAgICAgICAgIC8vaGlkZSBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9hZGQtYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBidXR0b24ub25jbGljayA9IGFkZFByb2plY3RNb2RhbDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEl0ZW0odGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlKXtcclxuXHJcbiAgICBmdW5jdGlvbiB0YWdDb2xvcigpe1xyXG4gICAgICAgIHJldHVybiBgICAgXHJcbiAgICAgICAgICAgIDxkaXY+JHtwcm9qZWN0VGFnfTwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lclwiPiR7dGFnQ29sb3IoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXJcIj4ke3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lclwiPnRhc2tzIDBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3JlcGVhdGVkLWRhdGUtY29udGFpbmVyXCI+JHtyZXBpdGlpb25UeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2VkaXQtYnV0dG9uXCI+ZWRpdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b25cIj5kZWxldGU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZW5kZXIoKTtcclxufSIsImltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVTdHJ1Y3R1cmUsIHVwZGF0ZURvbVByb2plY3RMaXN0IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0aW9uXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxucm9vdC5pbm5lckhUTUwgPSBpbml0aWFsaXplU3RydWN0dXJlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XHJcblxyXG51cGRhdGVEb21Qcm9qZWN0TGlzdChhcHBsaWNhdGlvbi5wcm9qZWN0Q29udGFpbmVyKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=