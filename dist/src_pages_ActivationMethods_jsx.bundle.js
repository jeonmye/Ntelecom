"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkntelecom_project"] = self["webpackChunkntelecom_project"] || []).push([["src_pages_ActivationMethods_jsx"],{

/***/ "./src/pages/ActivationMethods.jsx":
/*!*****************************************!*\
  !*** ./src/pages/ActivationMethods.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _assets_images_resource_ktMembershipImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/resource/ktMembershipImg.png */ \"./src/assets/images/resource/ktMembershipImg.png\");\n/* harmony import */ var _assets_images_resource_lgMembershipImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/resource/lgMembershipImg.png */ \"./src/assets/images/resource/lgMembershipImg.png\");\n/* harmony import */ var _metadatas_metadats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadatas/metadats */ \"./src/metadatas/metadats.jsx\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  gap: 30px;\\n  flex-direction: \", \";\\n\"])), function (props) {\n  return props.$isMobile ? 'column' : 'row';\n});\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  margin: \", \";\\n  cursor: pointer;\\n\"])), function (props) {\n  return props.$isMobile ? '0 0 15px 0' : '60px';\n});\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  font-size: \", \"px;\\n  font-weight: 500;\\n  margin-bottom: 15px;\\n\"])), function (props) {\n  return props.$isMobile ? 18 : 28;\n});\nvar MembershipImg = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  width: \", \"%;\\n  height: auto;\\n\"])), function (props) {\n  return props.$isMobile ? 60 : 95;\n});\nvar ActivationMethods = function ActivationMethods() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_metadatas_metadats__WEBPACK_IMPORTED_MODULE_4__.ActivationMethodsPageMetas, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile,\n    onClick: function onClick() {\n      return navigate('/activation-method/KT');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, {\n    $isMobile: isMobile\n  }, \"\\uC564\\uD154\\uB808\\uCF64 \\uBA64\\uBC84\\uC2ED K\\uB9DD \\uAC1C\\uD1B5\\uBC29\\uBC95\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MembershipImg, {\n    src: _assets_images_resource_ktMembershipImg_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"\\uC0D8\\uD50C\",\n    $isMobile: isMobile\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile,\n    onClick: function onClick() {\n      return navigate('/activation-method/LG');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, {\n    $isMobile: isMobile\n  }, \"\\uC564\\uD154\\uB808\\uCF64 \\uBA64\\uBC84\\uC2ED L\\uB9DD \\uAC1C\\uD1B5\\uBC29\\uBC95\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MembershipImg, {\n    src: _assets_images_resource_lgMembershipImg_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: \"\\uC0D8\\uD50C\",\n    $isMobile: isMobile\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivationMethods);\n\n//# sourceURL=webpack://ntelecom-project/./src/pages/ActivationMethods.jsx?");

/***/ }),

/***/ "./src/assets/images/resource/ktMembershipImg.png":
/*!********************************************************!*\
  !*** ./src/assets/images/resource/ktMembershipImg.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/0a79e370fedc6a900f14.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/resource/ktMembershipImg.png?");

/***/ }),

/***/ "./src/assets/images/resource/lgMembershipImg.png":
/*!********************************************************!*\
  !*** ./src/assets/images/resource/lgMembershipImg.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/67221b8311be0d631c64.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/resource/lgMembershipImg.png?");

/***/ })

}]);