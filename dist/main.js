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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: mainFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(249, 249, 249);\n}\n\n.header-container {\n  background-color: white;\n  box-shadow: 0 0 15px rgb(163, 163, 163);\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header-container .title-logo {\n  height: 30px;\n}\n.header-container .title-info-hd {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n.header-container .title-info-hd .return-btn-container {\n  width: 40px;\n  display: flex;\n  align-items: center;\n}\n.header-container .title-info-hd .return-btn-container > button {\n  display: block;\n  margin: auto;\n  height: 17px;\n  width: 17px;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n}\n.header-container .title-info-hd .return-btn-container > button > img {\n  height: 100%;\n}\n.header-container .title-info-hd .title {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"mainFont\";\n  color: dodgerblue;\n}\n.header-container .title-info-hd .title > * {\n  font-size: 40px;\n}\n.header-container .title-info-hd .info-container {\n  width: 100px;\n  font-family: \"mainFont\";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n  color: rgb(67, 67, 67);\n}\n.header-container .title-info-hd .info-container .header_task-count {\n  font-weight: 600;\n  color: orange;\n}\n.header-container .title-info-hd .info-container .header_completed-task {\n  font-weight: 600;\n  color: green;\n}\n\n.main-body {\n  height: calc(100vh - 80px);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.footer {\n  height: 20px;\n  background-color: rgb(214, 214, 214);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer div {\n  font-size: 12px;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.project_add-button {\n  height: 30px;\n  width: 60px;\n  color: white;\n  font-size: 20px;\n  border: none;\n  background-color: dodgerblue;\n  display: block;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n\n.project_add-project-modal-container {\n  width: 250px;\n  background-color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 30px;\n  position: absolute;\n  left: calc(50% - 125px);\n  border-radius: 10px;\n  box-shadow: 2px 5px 10px rgb(186, 186, 186);\n  transition: 0.3s;\n  font-size: 13px;\n  font-family: \"mainFont\";\n  gap: 20px;\n}\n.project_add-project-modal-container .title-container div {\n  height: 10px;\n}\n.project_add-project-modal-container .title-container input {\n  background-color: rgb(217, 217, 217);\n  border: none;\n  border-radius: 5px;\n}\n.project_add-project-modal-container .title-container p {\n  color: red;\n  font-size: 11.5px;\n  display: none;\n}\n.project_add-project-modal-container .button-container {\n  display: flex;\n  gap: 5px;\n}\n.project_add-project-modal-container .button-container .submit-add-project, .project_add-project-modal-container .button-container .cancel-add-project {\n  transition: 0.3s;\n  background-color: dodgerblue;\n  border: none;\n  color: white;\n  font-family: \"mainFont\";\n  padding: 10px;\n  width: auto;\n  border-radius: 5px;\n  flex: 1;\n}\n.project_add-project-modal-container .button-container .cancel-add-project {\n  background-color: rgb(225, 71, 68);\n  flex: 0.2;\n}\n\n.color-container {\n  display: flex;\n  justify-content: space-between;\n}\n.color-container .color-picker, .color-container .color-picker--selected {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: blue;\n  cursor: pointer;\n}\n.color-container .color-picker--selected {\n  border: 2px solid dodgerblue;\n}\n\n.repitition-type .handle-container .handle-rail {\n  height: 20px;\n  width: 50px;\n  background-color: rgb(204, 204, 204);\n  border-radius: 20px;\n  cursor: pointer;\n}\n.repitition-type .handle-container #handle-head, .repitition-type .handle-container #handle-head--toggle {\n  height: 20px;\n  width: 20px;\n  border-radius: 20px;\n  background-color: white;\n  position: relative;\n  pointer-events: none;\n  transition: 0.3s;\n  right: -30px;\n}\n.repitition-type .handle-container #handle-head--toggle {\n  right: 0px;\n}\n.repitition-type .handle-container .date-input {\n  display: block;\n}\n\n.single-project-container {\n  height: 70px;\n  width: 100%;\n  background-color: rgb(255, 255, 255);\n  display: grid;\n  grid-template-columns: 60px 1fr 1fr 30px 30px;\n  grid-template-rows: repeat(3, 1fr);\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px rgb(184, 184, 184);\n}\n.single-project-container .single-project_tag-container {\n  grid-area: 1/1/4/2;\n  pointer-events: none;\n}\n.single-project-container .single-project_tag-container > * {\n  height: 80%;\n  margin: auto;\n  display: block;\n}\n.single-project-container .single-project_title-container {\n  pointer-events: none;\n  grid-area: 1/2/3/4;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.single-project-container .single-project_title-container .title {\n  font-size: 23px;\n  color: rgb(59, 59, 59);\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_tasks-count-container {\n  pointer-events: none;\n  grid-area: 3/2/4/3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n.single-project-container .single-project_tasks-count-container .sptcc1 {\n  color: rgb(103, 103, 103);\n  font-size: 13px;\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_tasks-count-container .sptcc2 {\n  font-weight: 600;\n  color: rgb(172, 109, 20);\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_repeated-date-container {\n  pointer-events: none;\n  grid-area: 3/3/4/4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.single-project-container .single-project_repeated-date-container span {\n  color: rgb(103, 103, 103);\n  font-size: 14px;\n  font-family: \"mainFont\";\n}\n.single-project-container .single-project_edit-button {\n  grid-area: 2/4/3/5;\n}\n.single-project-container .single-project_edit-button img {\n  width: 25px;\n}\n.single-project-container .single-project_delete-button {\n  grid-area: 2/5/3/6;\n}\n.single-project-container .single-project_delete-button img {\n  width: 25px;\n}\n\n.title-logo-container > * {\n  height: 30px;\n}\n\n.task-container {\n  min-height: 18px;\n  display: flex;\n  gap: 10px;\n  font-family: \"mainFont\";\n}\n.task-container .task-add-btn {\n  margin: auto;\n  display: block;\n  border: none;\n  background-color: dodgerblue;\n  color: white;\n  width: auto;\n  padding: 5px;\n  border-radius: 5px;\n}\n.task-container .task-inpt {\n  flex: 1;\n  border: none;\n  background-color: transparent;\n}\n.task-container .task-inpt:focus {\n  outline: none;\n}\n.task-container input[type=checkbox] {\n  height: 20px;\n  width: 20px;\n  background: red;\n}\n.task-container input[type=checkbox] {\n  height: 20px;\n  width: 20px;\n  background: red;\n}\n.task-container .task-due-date {\n  width: 100px;\n  font-size: 14px;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: mainFont;\r\n    src: url(\"./assets/josefinsans.ttf\") format(\"woff\");\r\n}\r\n$projectTitleSubColor:rgb(103, 103, 103);\r\n\r\n* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(249, 249, 249);\r\n}\r\n\r\n.header-container {\r\n    background-color: white;\r\n    box-shadow: 0 0 15px rgb(163, 163, 163);\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    .title-logo {\r\n        height: 30px;\r\n    }\r\n\r\n    .title-info-hd{\r\n        display: flex;\r\n        height: 100%;\r\n        width: 100%;\r\n\r\n        .return-btn-container {\r\n            width: 40px;\r\n            display: flex;\r\n            align-items: center;\r\n\r\n            > button {\r\n                display: block;\r\n                margin: auto;\r\n                height: 17px;\r\n                width: 17px; \r\n                padding: 0;\r\n                border: none;\r\n                background-color: transparent;\r\n                \r\n                > img {\r\n                    height: 100%;\r\n                }\r\n            }\r\n        }\r\n\r\n        .title {\r\n            flex: 1;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            font-family: \"mainFont\";\r\n            color: dodgerblue;\r\n\r\n            > * {\r\n                font-size: 40px;\r\n\r\n            }\r\n        }\r\n\r\n        .info-container {\r\n            width: 100px;\r\n            font-family: \"mainFont\";\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            font-size: 12px;\r\n            color: rgb(67, 67, 67);\r\n\r\n            .header_task-count {\r\n                font-weight: 600;\r\n                color: orange;\r\n            }\r\n\r\n            .header_completed-task {\r\n                font-weight: 600;\r\n                color: green;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.main-body {\r\n    height: calc(100vh - 80px);\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    background-color: rgb(214, 214, 214);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer div {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.project_add-button {\r\n    height: 30px;\r\n    width: 60px;\r\n    color: white;\r\n    font-size: 20px;\r\n    border: none;\r\n    background-color: dodgerblue;\r\n    display: block;\r\n    margin: 0 auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n.project_add-project-modal-container {\r\n    width: 250px;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 30px;\r\n    position: absolute;\r\n    left: calc(50% - 125px);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 5px 10px rgb(186, 186, 186);\r\n    transition: 0.3s;\r\n    font-size: 13px;\r\n    font-family: \"mainFont\";\r\n    gap: 20px;\r\n\r\n    .title-container {\r\n\r\n        div {\r\n            height: 10px;\r\n        }\r\n\r\n        input {\r\n            background-color: rgb(217, 217, 217);\r\n            border: none;\r\n            border-radius: 5px;\r\n        }\r\n\r\n        p {\r\n            color: red;\r\n            font-size: 11.5px;\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    .button-container {\r\n        display: flex;\r\n        gap: 5px;\r\n        .submit-add-project {\r\n                transition: 0.3s;\r\n                background-color: dodgerblue;\r\n                border: none;\r\n                color: white;\r\n                font-family: \"mainFont\";\r\n                padding: 10px;\r\n                width: auto;\r\n                border-radius: 5px;\r\n                flex: 1;\r\n            }\r\n\r\n        .cancel-add-project {\r\n            @extend .submit-add-project;\r\n            background-color: rgb(225, 71, 68);\r\n            flex: 0.2;\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n.color-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .color-picker {\r\n        height: 25px;\r\n        width: 25px;\r\n        border-radius: 50%;\r\n        background-color: blue;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .color-picker--selected {\r\n        @extend .color-picker;\r\n        border: 2px solid dodgerblue;\r\n    }\r\n}\r\n\r\n.repitition-type {\r\n    .handle-container {\r\n        .handle-rail {\r\n            height: 20px;\r\n            width: 50px;\r\n            background-color: rgb(204, 204, 204);\r\n            border-radius: 20px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        #handle-head {\r\n            height: 20px;\r\n            width: 20px;\r\n            border-radius: 20px;\r\n            background-color: white;\r\n            position: relative;\r\n            pointer-events: none;\r\n            transition: 0.3s;\r\n            right: -30px;\r\n        }\r\n\r\n        #handle-head--toggle {\r\n            @extend #handle-head;\r\n            right: 0px;\r\n        }\r\n\r\n        .date-input {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n.single-project-container {\r\n    height: 70px;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n    display: grid; \r\n    grid-template-columns: 60px 1fr 1fr 30px 30px;\r\n    grid-template-rows: repeat(3, 1fr);\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 5px rgb(184, 184, 184);\r\n\r\n    .single-project_tag-container {\r\n        grid-area: 1 / 1 / 4 / 2;\r\n        pointer-events: none;\r\n\r\n        > * {\r\n            height: 80%;\r\n            margin: auto;\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .single-project_title-container {\r\n        pointer-events: none;\r\n        grid-area: 1/2/3/4;\r\n        display: flex;\r\n        align-items: center;\r\n        padding-left: 20px;\r\n\r\n        .title {\r\n            font-size: 23px;\r\n            color: rgb(59, 59, 59);\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_tasks-count-container {\r\n        pointer-events: none;\r\n        grid-area: 3/2/4/3;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 5px;\r\n\r\n        .sptcc1 {\r\n            color: $projectTitleSubColor;\r\n            font-size: 13px;\r\n            font-family: \"mainFont\";\r\n        }\r\n\r\n        .sptcc2 {\r\n            font-weight: 600;\r\n            color: rgb(172, 109, 20);\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_repeated-date-container {\r\n        pointer-events: none;\r\n        grid-area: 3/3/4/4;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        span {\r\n            color: $projectTitleSubColor;\r\n            font-size: 14px;\r\n            font-family: \"mainFont\";\r\n        }\r\n    }\r\n\r\n    .single-project_edit-button {\r\n        grid-area: 2/4/3/5;\r\n        img {\r\n                width: 25px;\r\n            }\r\n    }\r\n\r\n    .single-project_delete-button {\r\n        grid-area: 2/5/3/6;\r\n        img {\r\n            width: 25px;\r\n        }\r\n    }\r\n}\r\n\r\n.title-logo-container {\r\n    > * {\r\n        height: 30px;\r\n    }\r\n}\r\n\r\n.task-container {\r\n    min-height: 18px;\r\n    display: flex;\r\n    gap: 10px;\r\n    font-family: \"mainFont\";\r\n\r\n    .task-add-btn {\r\n        margin: auto;\r\n        display: block;\r\n        border: none;\r\n        background-color: dodgerblue;\r\n        color: white;\r\n        width: auto;\r\n        padding: 5px;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    .task-inpt {\r\n        flex: 1;\r\n        border: none;\r\n        background-color: transparent;\r\n    }\r\n\r\n    .task-inpt:focus {\r\n        outline: none;\r\n    }\r\n\r\n    input[type=checkbox] {\r\n        height: 20px;\r\n        width: 20px;\r\n        background: red;\r\n    }\r\n    \r\n    input[type=checkbox] {\r\n        height: 20px;\r\n        width: 20px;\r\n        background: red;\r\n    }\r\n\r\n    .task-due-date {\r\n        width: 100px;\r\n        font-size: 14px;\r\n    }\r\n}"],"sourceRoot":""}]);
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
        this.completedTask = 0;
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
/* harmony import */ var _assets_returnbtn_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/returnbtn.png */ "./src/assets/returnbtn.png");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/projecttag.svg */ "./src/assets/projecttag.svg");
/* harmony import */ var _assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/titlelogo.svg */ "./src/assets/titlelogo.svg");
/* harmony import */ var _assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_trashicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/trashicon.png */ "./src/assets/trashicon.png");
/* harmony import */ var _assets_editicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/editicon.png */ "./src/assets/editicon.png");









class Ui {
  static initializeApp() {
    const dom = document.querySelector('#content');
    dom.innerHTML = `
        <div class=header-container>
            <div class="title-logo-container">
                ${(_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_4___default())}
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
    if (project.taskContainer.length == 0) Ui.apendTaskBtn();
    const str = project.taskContainer.reduce((accu, val) => `${accu}<div>${val.taskTxt}</div>`, '');
  }

  static displayProjectLst() {
    const mainContent = document.querySelector(".main-body");
    if (_index_js__WEBPACK_IMPORTED_MODULE_1__.application.projectContainer.length == 0) {
      mainContent.innerHTML = "";
    } else {
      const str = _index_js__WEBPACK_IMPORTED_MODULE_1__.application.projectContainer.reduce((acc, val) => acc + generateProjectItem(val), "");
      mainContent.innerHTML = str;
      
      const projs = document.querySelectorAll(".single-project-container");
      
      projs.forEach(elem => elem.addEventListener(
        "click", (event) => {Ui.pullProject(event.target.getAttribute("data-id"))}
      ))
    }
   
    Ui.appendAddBtn();
    Ui.homeHeader();
    
  }

  static appendAddBtn() {
    const mainContent = document.querySelector('.main-body');
    const btn = document.createElement("button");
    btn.classList.add("project_add-button");
    btn.textContent = "+";
    mainContent.appendChild(btn);
    btn.addEventListener("click", addProjectModal)
  }

  static apendTaskBtn(){
    const mainBody = document.querySelector(".main-body");
    const str = `
      <div class="task-container">
        <button class="task-add-btn">Add Task</button> 
      </div>
    `
    mainBody.innerHTML += str;
    const btn = document.querySelector(".task-add-btn");
    btn.addEventListener("click", (event)=>{
      Ui.toggleTaskInput(event);
    })
  }

  static toggleTaskInput(event){
    const btnParent = event.target.parentElement;
    btnParent.removeChild(event.target);
    btnParent.innerHTML = `
      <input class="check-btn" type="checkbox">
      <input class="task-inpt" type="text" placeholder="What am I doing?">
      <div class="task-due-date">
        <span>Due: </span><span>${console.log('somedue daute here')}</span>
      </div>
    `
    const inpt = btnParent.children[1];
    inpt.focus();
  }

  static pullProject(uid) {
    // find the item with this uid
    const project = _index_js__WEBPACK_IMPORTED_MODULE_1__.application.projectContainer.find((project) => project.uid == uid);
    Ui.openProject(project);
  }

  static clearContent() {
    document.querySelector('.main-body').innerHTML = '';
  }

  static tasksHeader(project) {
    const mainHd = document.querySelector(".header-container");
    mainHd.innerHTML = `
        <div class="title-info-hd">
          <div class="return-btn-container">
            <button class="return-btn"><img src=${_assets_returnbtn_png__WEBPACK_IMPORTED_MODULE_2__} alt="return button"></button>
          </div>
          <div class="title"><div>${project.title}</div></div>
          <div class="info-container">
            <div>
              due: ${project.dueDate}
            </div>
            <div>
              <span>tasks:</span> <span class="header_task-count"> ${project.taskContainer.length}</span>
            </div>
            <div>
              <span>completedTask:</span> <span class="header_completed-task"> ${project.completedTask}</span>
            </div>
          </div>
        </div>
    `
    const returnBtn = document.querySelector(".return-btn");
    returnBtn.addEventListener("click", Ui.displayProjectLst);
  }

  static appendModalBtns() {
    document.querySelector(".button-container").innerHTML = `
      <button class="submit-add-project">Add Project</button>
      <button class="cancel-add-project">Cancel</button>
    `
    const cancelBtn = document.querySelector(".cancel-add-project");

    //toggle modal
    cancelBtn.addEventListener("click", () => {
      console.log("called");
    });
  }

  static homeHeader() {
    const hd = document.querySelector(".header-container");
    hd.innerHTML = `
      <div class="title-logo-container">
        ${(_assets_titlelogo_svg__WEBPACK_IMPORTED_MODULE_4___default())}
      </div>
    `
  }

  static clickTest(){
    console.log("clicker");
  }

}

function updateDomProjectList(container) {
  if (container.length == 0) return addProjectButton();
  const str = container.reduce((accu, val) => {
    const tempStr = generateProjectItem(val);
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
                    <div style="background-color: #ff2503" class="color-picker" id="ff2503"></div>
                    <div style="background-color: #499cff"class="color-picker" id="499cff"></div>
                    <div style="background-color: #14ff92"class="color-picker" id="14ff92"></div>
                    <div style="background-color: #e3ff35"class="color-picker" id="e3ff35"></div>
                    <div style="background-color: red"class="color-picker" id="custom"></div>
                </div>
            </div>
            <div class="repitition-type">
                <span>toggle on or off here</span>
                <span class="handle-container">
                    <div class="handle-rail">
                        <div class="handle-head" id="handle-head"></div>
                    </div>
                    <div class="date-input">
                        <label>Due date</label>
                        <input class ="date-input-value"type="date">
                    </div>
                </span>
            </div>
              <div class="button-container">
              </div>
        </form>
    `;
    document.querySelector('.main-body').innerHTML += modal;
    Ui.appendModalBtns();
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
      modalContainer.style.height = '260px';
    } else {
      repeated = false;

      dateContainer.style.display = 'block';
      modalContainer.style.height = '280px';

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

function generateProjectItem(project) {
  function output() {
    return `
            <div class="single-project-container" data-id="${project.uid}">
                ${new TagIcon(`${project.color}`).renderIcon()}

                <div class="single-project_title-container" >
                    <div class="title" ">${project.title}</div>
                </div>
                <div class="single-project_tasks-count-container">
                    <span class="sptcc1">Tasks:</span>
                    <span class="sptcc2">${project.taskContainer.length}</span>
                </div>
                <div class="single-project_repeated-date-container">${project.repitiionType ? '<span>repeated</span>' : `<span>Due date:${project.dueDate}</span>`}</div>
                <div class="single-project_edit-button"><img src=${_assets_editicon_png__WEBPACK_IMPORTED_MODULE_6__}></div>
                <div class="single-project_delete-button"><img src=${_assets_trashicon_png__WEBPACK_IMPORTED_MODULE_5__}></div>
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
    this.svgFile = (_assets_projecttag_svg__WEBPACK_IMPORTED_MODULE_3___default());
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

/***/ "./src/assets/returnbtn.png":
/*!**********************************!*\
  !*** ./src/assets/returnbtn.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "173891d2eee34c1d6f2c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFN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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXNzZXRzL3Byb2plY3R0YWcuc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Fzc2V0cy90aXRsZWxvZ28uc3ZnIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2pvc2VmaW5zYW5zLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG1haW5Gb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYigxNjMsIDE2MywgMTYzKTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC50aXRsZS1sb2dvIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnRpdGxlLWluZm8taGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAudGl0bGUtaW5mby1oZCAucmV0dXJuLWJ0bi1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnRpdGxlLWluZm8taGQgLnJldHVybi1idG4tY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgd2lkdGg6IDE3cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC50aXRsZS1pbmZvLWhkIC5yZXR1cm4tYnRuLWNvbnRhaW5lciA+IGJ1dHRvbiA+IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC50aXRsZS1pbmZvLWhkIC50aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcbiAgY29sb3I6IGRvZGdlcmJsdWU7XFxufVxcbi5oZWFkZXItY29udGFpbmVyIC50aXRsZS1pbmZvLWhkIC50aXRsZSA+ICoge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciAudGl0bGUtaW5mby1oZCAuaW5mby1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYig2NywgNjcsIDY3KTtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnRpdGxlLWluZm8taGQgLmluZm8tY29udGFpbmVyIC5oZWFkZXJfdGFzay1jb3VudCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuLmhlYWRlci1jb250YWluZXIgLnRpdGxlLWluZm8taGQgLmluZm8tY29udGFpbmVyIC5oZWFkZXJfY29tcGxldGVkLXRhc2sge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1haW4tYm9keSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIGRpdiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5wcm9qZWN0X2FkZC1idXR0b24ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTI1cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggMTBweCByZ2IoMTg2LCAxODYsIDE4Nik7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIGRpdiB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAudGl0bGUtY29udGFpbmVyIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIxNywgMjE3KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC50aXRsZS1jb250YWluZXIgcCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMS41cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIgLmJ1dHRvbi1jb250YWluZXIgLnN1Ym1pdC1hZGQtcHJvamVjdCwgLnByb2plY3RfYWRkLXByb2plY3QtbW9kYWwtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIC5jYW5jZWwtYWRkLXByb2plY3Qge1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXg6IDE7XFxufVxcbi5wcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciAuY2FuY2VsLWFkZC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDcxLCA2OCk7XFxuICBmbGV4OiAwLjI7XFxufVxcblxcbi5jb2xvci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItcGlja2VyLCAuY29sb3ItY29udGFpbmVyIC5jb2xvci1waWNrZXItLXNlbGVjdGVkIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbG9yLWNvbnRhaW5lciAuY29sb3ItcGlja2VyLS1zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xcbn1cXG5cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyIC5oYW5kbGUtcmFpbCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5yZXBpdGl0aW9uLXR5cGUgLmhhbmRsZS1jb250YWluZXIgI2hhbmRsZS1oZWFkLCAucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyICNoYW5kbGUtaGVhZC0tdG9nZ2xlIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcmlnaHQ6IC0zMHB4O1xcbn1cXG4ucmVwaXRpdGlvbi10eXBlIC5oYW5kbGUtY29udGFpbmVyICNoYW5kbGUtaGVhZC0tdG9nZ2xlIHtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcbi5yZXBpdGl0aW9uLXR5cGUgLmhhbmRsZS1jb250YWluZXIgLmRhdGUtaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciAxZnIgMzBweCAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2IoMTg0LCAxODQsIDE4NCk7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RhZy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RhZy1jb250YWluZXIgPiAqIHtcXG4gIGhlaWdodDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3RpdGxlLWNvbnRhaW5lciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGdyaWQtYXJlYTogMS8yLzMvNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfdGFza3MtY291bnQtY29udGFpbmVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZ3JpZC1hcmVhOiAzLzIvNC8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF90YXNrcy1jb3VudC1jb250YWluZXIgLnNwdGNjMSB7XFxuICBjb2xvcjogcmdiKDEwMywgMTAzLCAxMDMpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lciAuc3B0Y2MyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogcmdiKDE3MiwgMTA5LCAyMCk7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfcmVwZWF0ZWQtZGF0ZS1jb250YWluZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBncmlkLWFyZWE6IDMvMy80LzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9yZXBlYXRlZC1kYXRlLWNvbnRhaW5lciBzcGFuIHtcXG4gIGNvbG9yOiByZ2IoMTAzLCAxMDMsIDEwMyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXG59XFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuc2luZ2xlLXByb2plY3RfZWRpdC1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAyLzQvMy81O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiBpbWcge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcbn1cXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5zaW5nbGUtcHJvamVjdF9kZWxldGUtYnV0dG9uIGltZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnRpdGxlLWxvZ28tY29udGFpbmVyID4gKiB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcbn1cXG4udGFzay1jb250YWluZXIgLnRhc2stYWRkLWJ0biB7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnRhc2stY29udGFpbmVyIC50YXNrLWlucHQge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4udGFzay1jb250YWluZXIgLnRhc2staW5wdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4udGFzay1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcbi50YXNrLWNvbnRhaW5lciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuLnRhc2stY29udGFpbmVyIC50YXNrLWR1ZS1kYXRlIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kscUJBQUE7RUFDQSwyREFBQTtBQUNKO0FBR0E7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLG9DQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlI7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QWpSVTtFQWtSVixlQUFBO0VBQ0EsdUJBQUE7QUF2Q1o7QUEwQ1E7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUF4Q1o7QUE0Q0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUExQ1I7QUE0Q1E7RUFDSSx5QkFyU1U7RUFzU1YsZUFBQTtFQUNBLHVCQUFBO0FBMUNaO0FBOENJO0VBQ0ksa0JBQUE7QUE1Q1I7QUE2Q1E7RUFDUSxXQUFBO0FBM0NoQjtBQStDSTtFQUNJLGtCQUFBO0FBN0NSO0FBOENRO0VBQ0ksV0FBQTtBQTVDWjs7QUFrREk7RUFDSSxZQUFBO0FBL0NSOztBQW1EQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQWhESjtBQWtESTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFoRFI7QUFtREk7RUFDSSxPQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBakRSO0FBb0RJO0VBQ0ksYUFBQTtBQWxEUjtBQXFESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQW5EUjtBQXNESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXBEUjtBQXVESTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBckRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogbWFpbkZvbnQ7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9qb3NlZmluc2Fucy50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG59XFxyXFxuJHByb2plY3RUaXRsZVN1YkNvbG9yOnJnYigxMDMsIDEwMywgMTAzKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMTYzLCAxNjMsIDE2Myk7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC50aXRsZS1sb2dvIHtcXHJcXG4gICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGl0bGUtaW5mby1oZHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgIC5yZXR1cm4tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgID4gYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTdweDsgXFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICA+IGltZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAudGl0bGUge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBkb2RnZXJibHVlO1xcclxcblxcclxcbiAgICAgICAgICAgID4gKiB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW5mby1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjcsIDY3LCA2Nyk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmhlYWRlcl90YXNrLWNvdW50IHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmhlYWRlcl9jb21wbGV0ZWQtdGFzayB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tYm9keSB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTI1cHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDEwcHggcmdiKDE4NiwgMTg2LCAxODYpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgIC50aXRsZS1jb250YWluZXIge1xcclxcblxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMjE3LCAyMTcpO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgLnN1Ym1pdC1hZGQtcHJvamVjdCB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIm1haW5Gb250XFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuY2FuY2VsLWFkZC1wcm9qZWN0IHtcXHJcXG4gICAgICAgICAgICBAZXh0ZW5kIC5zdWJtaXQtYWRkLXByb2plY3Q7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgNzEsIDY4KTtcXHJcXG4gICAgICAgICAgICBmbGV4OiAwLjI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb2xvci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC5jb2xvci1waWNrZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb2xvci1waWNrZXItLXNlbGVjdGVkIHtcXHJcXG4gICAgICAgIEBleHRlbmQgLmNvbG9yLXBpY2tlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlcGl0aXRpb24tdHlwZSB7XFxyXFxuICAgIC5oYW5kbGUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIC5oYW5kbGUtcmFpbCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNoYW5kbGUtaGVhZCB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2hhbmRsZS1oZWFkLS10b2dnbGUge1xcclxcbiAgICAgICAgICAgIEBleHRlbmQgI2hhbmRsZS1oZWFkO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGF0ZS1pbnB1dCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnIgMWZyIDMwcHggMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDE4NCwgMTg0LCAxODQpO1xcclxcblxcclxcbiAgICAuc2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gNCAvIDI7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgID4gKiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF90aXRsZS1jb250YWluZXIge1xcclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8zLzQ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMy8yLzQvMztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgIC5zcHRjYzEge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJvamVjdFRpdGxlU3ViQ29sb3I7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnNwdGNjMiB7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MiwgMTA5LCAyMCk7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X3JlcGVhdGVkLWRhdGUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzMvNC80O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJvamVjdFRpdGxlU3ViQ29sb3I7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwibWFpbkZvbnRcXFwiO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaW5nbGUtcHJvamVjdF9lZGl0LWJ1dHRvbiB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIvNC8zLzU7XFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b24ge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzUvMy82O1xcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbG9nby1jb250YWluZXIge1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJtYWluRm9udFxcXCI7XFxyXFxuXFxyXFxuICAgIC50YXNrLWFkZC1idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2staW5wdCB7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2staW5wdDpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzay1kdWUtZGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJMYXllcl8yXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMjQgNTAwXFxcIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzI5YWJlMjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9XFxcIkxheWVyXzEtMlxcXCI+PHBhdGggY2xhc3M9XFxcImNscy0xXFxcIiBkPVxcXCJNMjMuMTksMEMxMC4zOCwwLDAsMTAuMzUsMCwyMy4xMlY0NzcuMTZjMCwyMC42NiwyMy42MywzMC42NiwzNi44NSwxNS42bDExMS43Mi0xNTUuMjNjMi43Ni00LjgsNy44OC03Ljc1LDEzLjQzLTcuNzVoMGM1LjU1LDAsMTAuNjcsMi45NiwxMy40Myw3Ljc1bDExMS43MiwxNTUuMjNjMTMuMjIsMTUuMDYsMzYuODUsNS4wNSwzNi44NS0xNS42VjIzLjEyYzAtMTIuNzctMTAuMzgtMjMuMTItMjMuMTktMjMuMTJIMjMuMTlaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZpZXdCb3g9XFxcIjAgMCA5OTQuNSAyNzRcXFwiPjxkZWZzPjxzdHlsZT4uY2xzLTV7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy02e2ZpbGw6IzFlOTBmZjt9LmNscy03e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD1cXFwibGluZWFyLWdyYWRpZW50XFxcIiB4MT1cXFwiMzA5LjYxXFxcIiB5MT1cXFwiMjEwLjI5XFxcIiB4Mj1cXFwiNDUzLjRcXFwiIHkyPVxcXCI5My42MVxcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcInRyYW5zbGF0ZSg2MDguNDkgNTEwLjY4KSByb3RhdGUoLTE0NC4zNCkgc2NhbGUoMS4wOCAxLjA1KSBza2V3WCgtNi43NylcXFwiIGdyYWRpZW50VW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIj48c3RvcCBvZmZzZXQ9XFxcIi4wMlxcXCIgc3RvcC1jb2xvcj1cXFwiIzU1MDcwMFxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjA2XFxcIiBzdG9wLWNvbG9yPVxcXCIjNjUwZTAxXFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuMjJcXFwiIHN0b3AtY29sb3I9XFxcIiNhMTJiMDRcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi4zNFxcXCIgc3RvcC1jb2xvcj1cXFwiI2M3M2UwN1xcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjQxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZDY0NTA4XFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuNVxcXCIgc3RvcC1jb2xvcj1cXFwiI2Q2NDcwYlxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjU4XFxcIiBzdG9wLWNvbG9yPVxcXCIjZDg0ZjE2XFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuNjZcXFwiIHN0b3AtY29sb3I9XFxcIiNkYjVkMjhcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi43M1xcXCIgc3RvcC1jb2xvcj1cXFwiI2RmNzA0MVxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiLjgxXFxcIiBzdG9wLWNvbG9yPVxcXCIjZTQ4ODYyXFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuODhcXFwiIHN0b3AtY29sb3I9XFxcIiNlYmE2OGFcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIi45NVxcXCIgc3RvcC1jb2xvcj1cXFwiI2YzYzliOFxcXCI+PC9zdG9wPjxzdG9wIG9mZnNldD1cXFwiMVxcXCIgc3RvcC1jb2xvcj1cXFwiI2ZhZThlMVxcXCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPVxcXCJsaW5lYXItZ3JhZGllbnQtMlxcXCIgeDE9XFxcIjI2NC45MVxcXCIgeTE9XFxcIjE0OC40M1xcXCIgeDI9XFxcIjMzOS44M1xcXCIgeTI9XFxcIjIzNC4zOFxcXCIgZ3JhZGllbnRUcmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtLjA0IDI4Ny43Mikgcm90YXRlKC01My42OSkgc2NhbGUoLjk2IC45NCkgc2tld1goLTUuNTMpXFxcIiBncmFkaWVudFVuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCI+PHN0b3Agb2Zmc2V0PVxcXCIwXFxcIiBzdG9wLWNvbG9yPVxcXCIjZDQ0MTAwXFxcIj48L3N0b3A+PHN0b3Agb2Zmc2V0PVxcXCIuODlcXFwiIHN0b3AtY29sb3I9XFxcIiNmYWVhZTJcXFwiPjwvc3RvcD48c3RvcCBvZmZzZXQ9XFxcIjFcXFwiIHN0b3AtY29sb3I9XFxcIiNmZmZcXFwiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk0xODcuNDUsMEgyNC43NEMxMi41MSwwLDIuNiw3LjQ1LDIuNiwxNi42NHYxNC40NWMwLDkuMTksOS45MSwxNi42NCwyMi4xNCwxNi42NGg1Ny40OXYyMDkuNjNjMCw5LjE5LDcuNDUsMTYuNjQsMTYuNjQsMTYuNjRoMTQuNDVjOS4xOSwwLDE2LjY0LTcuNDUsMTYuNjQtMTYuNjRWNDcuNzNoNTcuNDljMTIuMjMsMCwyMi4xNC03LjQ1LDIyLjE0LTE2LjY0di0xNC40NUMyMDkuNTgsNy40NSwxOTkuNjcsMCwxODcuNDUsMFpcXFwiPjwvcGF0aD48Y2lyY2xlIGNsYXNzPVxcXCJjbHMtNlxcXCIgY3g9XFxcIjM1OC43MVxcXCIgY3k9XFxcIjEzNi4xMlxcXCIgcj1cXFwiMTM2LjEyXFxcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cXFwiY2xzLTZcXFwiIGQ9XFxcIk02OTQuNTgsMTM2LjEyQzY5NC41OCw2MS44Myw2MzUuMDYsMS40NSw1NjEuMTEsLjAzVjBoLTMyLjY4QzUyMC4xMiwwLDUxMy4zOCw2Ljc0LDUxMy4zOCwxNS4wNHYyNDIuMTRjMCw4LjMxLDYuNzQsMTUuMDQsMTUuMDQsMTUuMDRoMzIuNjh2LS4wM2M3My45NS0xLjQxLDEzMy40Ni02MS43OSwxMzMuNDYtMTM2LjA4Wm0tMTMzLjQ2LDgwLjdWNTUuNDJjMC05LjgzLDguOTgtMTYuNjYsMTguNjgtMTUuMDksMjguNyw0LjY3LDY4LjcsNDguODEsNjguNyw5NS42N3MtMjQuNzgsODYuMTYtNjguNyw5NS45Yy05LjYsMi4xMy0xOC42OC01LjI2LTE4LjY4LTE1LjA5WlxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJjbHMtNlxcXCIgZD1cXFwiTTg1NS40NCwuODhjLTc1LjE3LDAtMTM2LjEyLDYwLjk0LTEzNi4xMiwxMzYuMTJzNjAuOTQsMTM2LjEyLDEzNi4xMiwxMzYuMTIsMTM2LjEyLTYwLjk0LDEzNi4xMi0xMzYuMTJTOTMwLjYyLC44OCw4NTUuNDQsLjg4Wm0wLDIyNi4yN2MtNTAuMjgsMC05MS4wNC00MC43Ni05MS4wNC05MS4wNHM0MC43Ni05MS4wNCw5MS4wNC05MS4wNCw5MS4wNCw0MC43Niw5MS4wNCw5MS4wNC00MC43Niw5MS4wNC05MS4wNCw5MS4wNFpcXFwiPjwvcGF0aD48cmVjdCBjbGFzcz1cXFwiY2xzLTdcXFwiIHg9XFxcIjI3Mi45MlxcXCIgeT1cXFwiMTMwLjIyXFxcIiB3aWR0aD1cXFwiMjE2LjgyXFxcIiBoZWlnaHQ9XFxcIjQzLjc1XFxcIiByeD1cXFwiMTkuNzdcXFwiIHJ5PVxcXCIxOS43N1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoNzczLjE1IDI5LjUxKSByb3RhdGUoMTQwLjg4KVxcXCI+PC9yZWN0PjxwYXRoIGNsYXNzPVxcXCJjbHMtNVxcXCIgZD1cXFwiTTI0NC4xMiwxNTIuNzJoMTA3LjF2MjMuOThjMCwxMC45MS04Ljg2LDE5Ljc3LTE5Ljc3LDE5Ljc3aC04Ny4zM2MtMTAuOTEsMC0xOS43Ny04Ljg2LTE5Ljc3LTE5Ljc3di00LjIyYzAtMTAuOTEsOC44Ni0xOS43NywxOS43Ny0xOS43N1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDI0MS42OCAtMTU4Ljg0KSByb3RhdGUoNTAuODgpXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVN0cnVjdHVyZSwgdXBkYXRlRG9tUHJvamVjdExpc3QsIFVpIH0gZnJvbSAnLi91aSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vcHJvamVjdCc7XG5cblVpLmluaXRpYWxpemVBcHAoKTtcbmV4cG9ydCBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcblxudXBkYXRlRG9tUHJvamVjdExpc3QoYXBwbGljYXRpb24ucHJvamVjdENvbnRhaW5lcik7XG4gICAiLCJpbXBvcnQgeyB1cGRhdGVEb21Qcm9qZWN0TGlzdCB9IGZyb20gXCIuL3VpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdENvbnRhaW5lciA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlLCBkdWVEYXRlLCB1aWQsIGV2ZW50KXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIHRhZ0NvbG9yLCByZXBpdGlpb25UeXBlLCBkdWVEYXRlLCB1aWQpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdENvbnRhaW5lci5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgIHVwZGF0ZURvbVByb2plY3RMaXN0KHRoaXMucHJvamVjdENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vYXV0byBzb3J0XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcmVtb3ZlIHByb2plY3QgICAgXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGFnQ29sb3IsIHJlcGl0aWlvblR5cGUsIGR1ZURhdGUsIHVpZCl7XHJcbiAgICAgICAgdGhpcy51aWQgPSB1aWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSB0YWdDb2xvcjtcclxuICAgICAgICB0aGlzLnJlcGl0aWlvblR5cGUgPSByZXBpdGlpb25UeXBlO1xyXG4gICAgICAgIHRoaXMudGFza0NvbnRhaW5lciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkVGFzayA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBhZGQsIGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBBcHAgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgcmV0dXJuQnRuSWNvbiBmcm9tIFwiLi9hc3NldHMvcmV0dXJuYnRuLnBuZ1wiXG5pbXBvcnQgcHJvamVjdFRhZyBmcm9tICcuL2Fzc2V0cy9wcm9qZWN0dGFnLnN2Zyc7XG5pbXBvcnQgdGl0bGVMb2dvIGZyb20gJy4vYXNzZXRzL3RpdGxlbG9nby5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9hc3NldHMvdHJhc2hpY29uLnBuZyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdGljb24ucG5nJztcblxuZXhwb3J0IGNsYXNzIFVpIHtcbiAgc3RhdGljIGluaXRpYWxpemVBcHAoKSB7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBkb20uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPWhlYWRlci1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAke3RpdGxlTG9nb31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1tYWluLWJvZHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgIDxkaXY+RGV2ZWxvcGVkIGJ5IEJyeWFuIE1pbmE8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XG4gICAgdGhpcy50YXNrc0hlYWRlcihwcm9qZWN0KTtcbiAgICBpZiAocHJvamVjdC50YXNrQ29udGFpbmVyLmxlbmd0aCA9PSAwKSBVaS5hcGVuZFRhc2tCdG4oKTtcbiAgICBjb25zdCBzdHIgPSBwcm9qZWN0LnRhc2tDb250YWluZXIucmVkdWNlKChhY2N1LCB2YWwpID0+IGAke2FjY3V9PGRpdj4ke3ZhbC50YXNrVHh0fTwvZGl2PmAsICcnKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5UHJvamVjdExzdCgpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpO1xuICAgIGlmIChhcHBsaWNhdGlvbi5wcm9qZWN0Q29udGFpbmVyLmxlbmd0aCA9PSAwKSB7XG4gICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHIgPSBhcHBsaWNhdGlvbi5wcm9qZWN0Q29udGFpbmVyLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYyArIGdlbmVyYXRlUHJvamVjdEl0ZW0odmFsKSwgXCJcIik7XG4gICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgICBcbiAgICAgIGNvbnN0IHByb2pzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaW5nbGUtcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICBcbiAgICAgIHByb2pzLmZvckVhY2goZWxlbSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7VWkucHVsbFByb2plY3QoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpfVxuICAgICAgKSlcbiAgICB9XG4gICBcbiAgICBVaS5hcHBlbmRBZGRCdG4oKTtcbiAgICBVaS5ob21lSGVhZGVyKCk7XG4gICAgXG4gIH1cblxuICBzdGF0aWMgYXBwZW5kQWRkQnRuKCkge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2FkZC1idXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3RNb2RhbClcbiAgfVxuXG4gIHN0YXRpYyBhcGVuZFRhc2tCdG4oKXtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1ib2R5XCIpO1xuICAgIGNvbnN0IHN0ciA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFzay1hZGQtYnRuXCI+QWRkIFRhc2s8L2J1dHRvbj4gXG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgbWFpbkJvZHkuaW5uZXJIVE1MICs9IHN0cjtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYWRkLWJ0blwiKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgIFVpLnRvZ2dsZVRhc2tJbnB1dChldmVudCk7XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVUYXNrSW5wdXQoZXZlbnQpe1xuICAgIGNvbnN0IGJ0blBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGJ0blBhcmVudC5yZW1vdmVDaGlsZChldmVudC50YXJnZXQpO1xuICAgIGJ0blBhcmVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjaGVjay1idG5cIiB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRhc2staW5wdFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IGFtIEkgZG9pbmc/XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1kdWUtZGF0ZVwiPlxuICAgICAgICA8c3Bhbj5EdWU6IDwvc3Bhbj48c3Bhbj4ke2NvbnNvbGUubG9nKCdzb21lZHVlIGRhdXRlIGhlcmUnKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgY29uc3QgaW5wdCA9IGJ0blBhcmVudC5jaGlsZHJlblsxXTtcbiAgICBpbnB0LmZvY3VzKCk7XG4gIH1cblxuICBzdGF0aWMgcHVsbFByb2plY3QodWlkKSB7XG4gICAgLy8gZmluZCB0aGUgaXRlbSB3aXRoIHRoaXMgdWlkXG4gICAgY29uc3QgcHJvamVjdCA9IGFwcGxpY2F0aW9uLnByb2plY3RDb250YWluZXIuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC51aWQgPT0gdWlkKTtcbiAgICBVaS5vcGVuUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbnRlbnQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIHRhc2tzSGVhZGVyKHByb2plY3QpIHtcbiAgICBjb25zdCBtYWluSGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb250YWluZXJcIik7XG4gICAgbWFpbkhkLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWluZm8taGRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmV0dXJuLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXR1cm4tYnRuXCI+PGltZyBzcmM9JHtyZXR1cm5CdG5JY29ufSBhbHQ9XCJyZXR1cm4gYnV0dG9uXCI+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PGRpdj4ke3Byb2plY3QudGl0bGV9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBkdWU6ICR7cHJvamVjdC5kdWVEYXRlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj50YXNrczo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGVhZGVyX3Rhc2stY291bnRcIj4gJHtwcm9qZWN0LnRhc2tDb250YWluZXIubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+Y29tcGxldGVkVGFzazo8L3NwYW4+IDxzcGFuIGNsYXNzPVwiaGVhZGVyX2NvbXBsZXRlZC10YXNrXCI+ICR7cHJvamVjdC5jb21wbGV0ZWRUYXNrfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG4gICAgY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXR1cm4tYnRuXCIpO1xuICAgIHJldHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVWkuZGlzcGxheVByb2plY3RMc3QpO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZE1vZGFsQnRucygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1hZGQtcHJvamVjdFwiPkFkZCBQcm9qZWN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLWFkZC1wcm9qZWN0XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgYFxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWFkZC1wcm9qZWN0XCIpO1xuXG4gICAgLy90b2dnbGUgbW9kYWxcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGhvbWVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb250YWluZXJcIik7XG4gICAgaGQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICR7dGl0bGVMb2dvfVxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9XG5cbiAgc3RhdGljIGNsaWNrVGVzdCgpe1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlclwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb21Qcm9qZWN0TGlzdChjb250YWluZXIpIHtcbiAgaWYgKGNvbnRhaW5lci5sZW5ndGggPT0gMCkgcmV0dXJuIGFkZFByb2plY3RCdXR0b24oKTtcbiAgY29uc3Qgc3RyID0gY29udGFpbmVyLnJlZHVjZSgoYWNjdSwgdmFsKSA9PiB7XG4gICAgY29uc3QgdGVtcFN0ciA9IGdlbmVyYXRlUHJvamVjdEl0ZW0odmFsKTtcbiAgICByZXR1cm4gYWNjdSArIHRlbXBTdHI7XG4gIH0sICcnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpLmlubmVySFRNTCA9IHN0cjtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICBwcm9qZWN0RWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgVWkucHVsbFByb2plY3QoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTsgfSk7XG4gIH0pO1xuICBhZGRQcm9qZWN0QnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RNb2RhbCgpIHtcbiAgbGV0IGNvbG9yU2VsZWN0ZWQ7XG4gIGxldCByZXBlYXRlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG91dHB1dCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGBcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJwcm9qZWN0X2FkZC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1pbmxlbmd0aD1cIjFcIiBtYXhsZW5ndGg9XCIxNVwibmFtZT1cImlucHV0LW5hbWVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWNvbnRhaW5lclwiPjxwIGNsYXNzPVwieGVlc3MzXCI+TXVzdCBjb250YWluIGF0IGxlYXN0IDEgdG8gMTUgY2hhcmFjdGVyPC9wPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnY29sb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlRhZyBjb2xvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2ZmMjUwM1wiIGNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJmZjI1MDNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM0OTljZmZcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCI0OTljZmZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMxNGZmOTJcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCIxNGZmOTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNlM2ZmMzVcImNsYXNzPVwiY29sb3ItcGlja2VyXCIgaWQ9XCJlM2ZmMzVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJlZFwiY2xhc3M9XCJjb2xvci1waWNrZXJcIiBpZD1cImN1c3RvbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVwaXRpdGlvbi10eXBlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+dG9nZ2xlIG9uIG9yIG9mZiBoZXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGFuZGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFuZGxlLXJhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW5kbGUtaGVhZFwiIGlkPVwiaGFuZGxlLWhlYWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RHVlIGRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzID1cImRhdGUtaW5wdXQtdmFsdWVcInR5cGU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpLmlubmVySFRNTCArPSBtb2RhbDtcbiAgICBVaS5hcHBlbmRNb2RhbEJ0bnMoKTtcbiAgfVxuXG4gIG91dHB1dCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXInKS5vbnN1Ym1pdCA9IGZvcm1TdWJtaXQ7XG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFuZGxlLXJhaWwnKTtcbiAgdG9nZ2xlSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJ1dHRvbik7XG4gIGNvbnN0IGNvbG9yUGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1waWNrZXInKTtcbiAgY29sb3JQaWNrZXJzLmZvckVhY2goKHBpY2tlcikgPT4ge1xuICAgIHBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRlc3RDbGljayk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGV2ZW50LnRhcmdldFswXS52YWx1ZTtcbiAgICBjb25zdCBpbnB1dERhdGUgPSB2YWxpZGF0ZURhdGVGb3JtYXQoKTtcbiAgICBjb25zdCBpbnB1dFRhZ0NvbG9yID0gY29sb3JTZWxlY3RlZCA9PSB1bmRlZmluZWQgPyAnd2hpdGUnIDogY29sb3JTZWxlY3RlZC5pZDtcblxuICAgIHZhbGlkYXRlSW5wdXQoaW5wdXRUaXRsZSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGlucHV0KSB7XG4gICAgICBpZiAoaW5wdXQubGVuZ3RoIDwgMSB8fCBpbnB1dC5sZW5ndGggPiAxNSkgcmV0dXJuIGludmFsaWRFbnRyeSgpO1xuXG4gICAgICBpZiAoIXJlcGVhdGVkKSB7XG4gICAgICAgIHJldHVybiBpbnB1dERhdGUgPyBhcHBsaWNhdGlvbi5hZGRQcm9qZWN0KGlucHV0VGl0bGUsIGlucHV0VGFnQ29sb3IsIHJlcGVhdGVkLCBpbnB1dERhdGUsIGdlbmVyYXRlVWlkKCkpIDogaW52YWxpZEVudHJ5KCk7XG4gICAgICB9XG5cbiAgICAgIGFwcGxpY2F0aW9uLmFkZFByb2plY3QoaW5wdXRUaXRsZSwgaW5wdXRUYWdDb2xvciwgcmVwZWF0ZWQsIG51bGwsIGdlbmVyYXRlVWlkKCkpO1xuXG4gICAgICBmdW5jdGlvbiBpbnZhbGlkRW50cnkoKSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueGVlc3MzJyk7XG4gICAgICAgIHAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVVaWQoKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVEYXRlRm9ybWF0KCkge1xuICAgICAgY29uc3QgZGF0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5wdXQtdmFsdWUnKTtcbiAgICAgIGlmIChkYXRlU2VsZWN0ZWQudmFsdWUgPT0gJycpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgdmFsaWQgPSBbXTtcbiAgICAgIGNvbnN0IGFyciA9IGRhdGVTZWxlY3RlZC52YWx1ZS5zcGxpdCgnJyk7XG4gICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg1LCA3KSk7XG4gICAgICB2YWxpZC5wdXNoKC4uLicvJyk7XG4gICAgICB2YWxpZC5wdXNoKC4uLmFyci5zbGljZSg4LCAxMCkpO1xuICAgICAgdmFsaWQucHVzaCguLi4nLycpO1xuICAgICAgdmFsaWQucHVzaCguLi5hcnIuc2xpY2UoMCwgNCkpO1xuXG4gICAgICByZXR1cm4gdmFsaWQuam9pbignJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGVzdENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGNvbG9yU2VsZWN0ZWQgPT0gbnVsbCkge1xuICAgICAgY29sb3JTZWxlY3RlZCA9IGV2ZW50LnRhcmdldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSAnY29sb3ItcGlja2VyJztcbiAgICAgIGNvbG9yU2VsZWN0ZWQgPSBldmVudC50YXJnZXQ7XG4gICAgfVxuXG4gICAgY29sb3JTZWxlY3RlZC5jbGFzc0xpc3QudmFsdWUgPSAnY29sb3ItcGlja2VyLS1zZWxlY3RlZCc7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVCdXR0b24oKSB7XG4gICAgY29uc3QgdG9nZ2xlZCA9ICdoYW5kbGUtaGVhZC0tdG9nZ2xlJztcbiAgICBjb25zdCB1blRvZ2dsZWQgPSAnaGFuZGxlLWhlYWQnO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt1blRvZ2dsZWR9YCk7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9hZGQtcHJvamVjdC1tb2RhbC1jb250YWluZXInKTtcbiAgICBoZWFkLmlkID09IHVuVG9nZ2xlZCA/IGhlYWQuaWQgPSB0b2dnbGVkIDogaGVhZC5pZCA9IHVuVG9nZ2xlZDtcblxuICAgIGlmIChoZWFkLmlkID09IHRvZ2dsZWQpIHtcbiAgICAgIC8vIGJyaW5nb3V0IGRhdGUgaGVyZVxuICAgICAgcmVwZWF0ZWQgPSB0cnVlO1xuICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzI2MHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwZWF0ZWQgPSBmYWxzZTtcblxuICAgICAgZGF0ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcyODBweCc7XG5cbiAgICAgIC8vIGhpZGUgZGF0ZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfYWRkLWJ1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSAnKyc7XG4gIGJ1dHRvbi5vbmNsaWNrID0gYWRkUHJvamVjdE1vZGFsO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib2R5JykuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SXRlbShwcm9qZWN0KSB7XG4gIGZ1bmN0aW9uIG91dHB1dCgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lclwiIGRhdGEtaWQ9XCIke3Byb2plY3QudWlkfVwiPlxuICAgICAgICAgICAgICAgICR7bmV3IFRhZ0ljb24oYCR7cHJvamVjdC5jb2xvcn1gKS5yZW5kZXJJY29uKCl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGl0bGUtY29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIiBcIj4ke3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X3Rhc2tzLWNvdW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwdGNjMVwiPlRhc2tzOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcHRjYzJcIj4ke3Byb2plY3QudGFza0NvbnRhaW5lci5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtcHJvamVjdF9yZXBlYXRlZC1kYXRlLWNvbnRhaW5lclwiPiR7cHJvamVjdC5yZXBpdGlpb25UeXBlID8gJzxzcGFuPnJlcGVhdGVkPC9zcGFuPicgOiBgPHNwYW4+RHVlIGRhdGU6JHtwcm9qZWN0LmR1ZURhdGV9PC9zcGFuPmB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2VkaXQtYnV0dG9uXCI+PGltZyBzcmM9JHtlZGl0SWNvbn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0X2RlbGV0ZS1idXR0b25cIj48aW1nIHNyYz0ke2RlbGV0ZUljb259PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0KCk7XG59XG5cbmNsYXNzIFRhZ0ljb24ge1xuICBjb25zdHJ1Y3Rvcihjb2xvclNlbGVjdGVkKSB7XG4gICAgdGhpcy5jdXN0b21Db2xvciA9IGNvbG9yU2VsZWN0ZWQ7XG4gICAgdGhpcy5jbGFzcyA9ICcnO1xuICAgIHRoaXMuaWQgPSAnJztcbiAgICB0aGlzLnN2Z0ZpbGUgPSBwcm9qZWN0VGFnO1xuICB9XG5cbiAgZ2VuZXJhdGVDdXN0b21DbGFzcygpIHtcbiAgICB0aGlzLmNsYXNzID0gTWF0aC5yYW5kb20oKSAqIDEwMDAwO1xuICAgIHRoaXMuaWQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDA7XG4gICAgdGhpcy5zdmdGaWxlID0gdGhpcy5zdmdGaWxlLnJlcGxhY2UoJ0xheWVyXzInLCB0aGlzLmlkKTtcbiAgICB0aGlzLnN2Z0ZpbGUgPSB0aGlzLnN2Z0ZpbGUucmVwbGFjZSgnY2xzLTEnLCB0aGlzLmNsYXNzKTtcbiAgICB0aGlzLnN2Z0ZpbGUgPSB0aGlzLnN2Z0ZpbGUucmVwbGFjZSgnY2xzLTEnLCB0aGlzLmNsYXNzKTtcbiAgfVxuXG4gIHVwZGF0ZVN2Z0NvbG9yKCkge1xuICAgIGNvbnN0IHRlc3RUZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0VGVyLmlubmVySFRNTCA9IHRoaXMuc3ZnRmlsZTtcbiAgICBjb25zdCByZWdleCA9IC8oPzw9e2ZpbGw6IykuKj87L2k7XG4gICAgdGhpcy5zdmdGaWxlID0gdGhpcy5zdmdGaWxlLnJlcGxhY2UocmVnZXgsIGAke3RoaXMuY3VzdG9tQ29sb3J9O2ApO1xuICB9XG5cbiAgcmVuZGVySWNvbigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQ3VzdG9tQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZVN2Z0NvbG9yKCk7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwic2luZ2xlLXByb2plY3RfdGFnLWNvbnRhaW5lclwiIHN0eWxlPVwiZmlsbDojJHt0aGlzLmN1c3RvbUNvbG9yfVwiPiR7dGhpcy5zdmdGaWxlfTwvZGl2PmA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==