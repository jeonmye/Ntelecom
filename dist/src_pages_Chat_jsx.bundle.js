"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkntelecom_project"] = self["webpackChunkntelecom_project"] || []).push([["src_pages_Chat_jsx"],{

/***/ "./src/pages/Chat.jsx":
/*!****************************!*\
  !*** ./src/pages/Chat.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _assets_images_resource_callImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/resource/callImg.png */ \"./src/assets/images/resource/callImg.png\");\n/* harmony import */ var _assets_images_resource_kakaoChannelChatImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/resource/kakaoChannelChatImg.png */ \"./src/assets/images/resource/kakaoChannelChatImg.png\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  gap: 0px;\\n  flex-direction: \", \";\\n  justify-content: center;\\n\"])), function (props) {\n  return props.$isMobile ? 'column' : 'row';\n});\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  height: 100%;\\n  display: flex;\\n\\n  align-items: center;\\n  flex-direction: column;\\n  margin: \", \";\\n  cursor: pointer;\\n\"])), function (props) {\n  return props.$isMobile ? '0 0 15px 0' : '10px';\n});\nvar CallImg = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  width: \", \"%;\\n  max-width: 350px;\\n  height: auto;\\n\"])), function (props) {\n  return props.$isMobile ? 60 : 95;\n});\nvar KakaoImg = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  width: \", \"%;\\n  max-width: 350px;\\n  height: auto;\\n\"])), function (props) {\n  return props.$isMobile ? 60 : 95;\n});\nvar Chat = function Chat() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile,\n    onClick: function onClick() {\n      return window.open('https://pf.kakao.com/_XpAvK');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KakaoImg, {\n    $isMobile: isMobile,\n    src: _assets_images_resource_kakaoChannelChatImg_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: \"\\uCE74\\uCE74\\uC624\\uD1A1\\uC5F0\\uACB0\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"tel:010-4419-4451\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CallImg, {\n    $isMobile: isMobile,\n    src: _assets_images_resource_callImg_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"\\uC804\\uD654\\uC5F0\\uACB0\"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);\n\n//# sourceURL=webpack://ntelecom-project/./src/pages/Chat.jsx?");

/***/ }),

/***/ "./src/assets/images/resource/callImg.png":
/*!************************************************!*\
  !*** ./src/assets/images/resource/callImg.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/2f09e6cc8f06551464b0.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/resource/callImg.png?");

/***/ }),

/***/ "./src/assets/images/resource/kakaoChannelChatImg.png":
/*!************************************************************!*\
  !*** ./src/assets/images/resource/kakaoChannelChatImg.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/f10ff15f192022410190.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/resource/kakaoChannelChatImg.png?");

/***/ })

}]);