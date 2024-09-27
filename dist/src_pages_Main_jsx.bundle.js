"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkntelecom_project"] = self["webpackChunkntelecom_project"] || []).push([["src_pages_Main_jsx"],{

/***/ "./src/components/Banner.jsx":
/*!***********************************!*\
  !*** ./src/components/Banner.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_images_banner_bannerTitleImg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/banner/bannerTitleImg.png */ \"./src/assets/images/banner/bannerTitleImg.png\");\n/* harmony import */ var _assets_images_banner_bannerCellphoneImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/banner/bannerCellphoneImg.png */ \"./src/assets/images/banner/bannerCellphoneImg.png\");\n/* harmony import */ var _assets_images_banner_mobileBackgroundImg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/banner/mobileBackgroundImg.png */ \"./src/assets/images/banner/mobileBackgroundImg.png\");\n/* harmony import */ var _constant_bannerButtonList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/bannerButtonList */ \"./src/constant/bannerButtonList.jsx\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\n\n\n\n\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  max-width: 1200px;\\n\"])));\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n\"])));\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  display: flex;\\n  flex-direction: \", \";\\n  justify-content: \", \";\\n  align-items: \", \";\\n  width: \", \";\\n  height: auto;\\n  gap: 15px;\\n  z-index: 3;\\n  flex: 1;\\n  bottom: \", \";\\n  padding: 0 20px;\\n\"])), function (props) {\n  return props.$isMobile ? 'column' : 'row';\n}, function (props) {\n  return props.$isMobile ? '' : 'space-around';\n}, function (props) {\n  return props.$isMobile ? 'center' : '';\n}, function (props) {\n  return props.$isMobile ? '75%;' : '100%;';\n}, function (props) {\n  return props.$isMobile ? '15%' : '35%';\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  top: 100px;\\n  width: 60%;\\n  left: 50px;\\n  z-index: 2;\\n\"])));\nvar BannerCellphoneImg = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  width: 520px;\\n  right: 0;\\n  z-index: 1;\\n\"])));\nvar MobileBackgroundImg = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: auto;\\n\"])));\nvar ImgButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  max-width: 300px;\\n  min-width: 175px;\\n  width: 100%;\\n  flex: 1;\\n\"])));\nvar Banner = function Banner(_ref) {\n  var isMobile = _ref.isMobile,\n    isLoaded = _ref.isLoaded;\n  var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();\n  return isLoaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile\n  }, !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgWrapper, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {\n    src: _assets_images_banner_bannerTitleImg_png__WEBPACK_IMPORTED_MODULE_1__,\n    alt: 'title',\n    $isMobile: isMobile\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BannerCellphoneImg, {\n    src: _assets_images_banner_bannerCellphoneImg_png__WEBPACK_IMPORTED_MODULE_2__,\n    $isMobile: isMobile\n  })), isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgWrapper, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileBackgroundImg, {\n    src: _assets_images_banner_mobileBackgroundImg_png__WEBPACK_IMPORTED_MODULE_3__,\n    $isMobile: isMobile\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonWrapper, {\n    $isMobile: isMobile\n  }, _constant_bannerButtonList__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === null || _constant_bannerButtonList__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === void 0 ? void 0 : _constant_bannerButtonList__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      key: item.src,\n      href: item.href ? item.href : null\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgButton, {\n      key: item.href,\n      src: item.src,\n      alt: item.alt,\n      onClick: item.handleOnClick ? item.handleOnClick : function () {\n        return navigate(item.path);\n      }\n    }));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);\n\n//# sourceURL=webpack://ntelecom-project/./src/components/Banner.jsx?");

/***/ }),

/***/ "./src/constant/bannerButtonList.jsx":
/*!*******************************************!*\
  !*** ./src/constant/bannerButtonList.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_button_activationMethodsBtnImg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/button/activationMethodsBtnImg.png */ \"./src/assets/images/button/activationMethodsBtnImg.png\");\n/* harmony import */ var _assets_images_button_callBtnImg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/button/callBtnImg.png */ \"./src/assets/images/button/callBtnImg.png\");\n/* harmony import */ var _assets_images_button_chatBtnImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/button/chatBtnImg.png */ \"./src/assets/images/button/chatBtnImg.png\");\n\n\n\nvar BANNER_BUTTON_LIST = [{\n  src: _assets_images_button_activationMethodsBtnImg_png__WEBPACK_IMPORTED_MODULE_0__,\n  alt: '개통방법 알아보기',\n  path: '/activation-method'\n}, {\n  src: _assets_images_button_callBtnImg_png__WEBPACK_IMPORTED_MODULE_1__,\n  alt: '전화 상담',\n  href: 'tel:010-4419-4451'\n}, {\n  src: _assets_images_button_chatBtnImg_png__WEBPACK_IMPORTED_MODULE_2__,\n  alt: '채널톡 상담',\n  handleOnClick: function handleOnClick() {\n    return window.open('https://pf.kakao.com/_XpAvK');\n  }\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BANNER_BUTTON_LIST);\n\n//# sourceURL=webpack://ntelecom-project/./src/constant/bannerButtonList.jsx?");

/***/ }),

/***/ "./src/pages/Main.jsx":
/*!****************************!*\
  !*** ./src/pages/Main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ \"./src/components/Banner.jsx\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  height: \", \";\\n\"])), function (props) {\n  return props.$isMobile ? '100%' : '100vh';\n});\nvar Main = function Main() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile,\n    isLoaded = _useViewport.isLoaded;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isMobile: isMobile,\n    isLoaded: isLoaded\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://ntelecom-project/./src/pages/Main.jsx?");

/***/ }),

/***/ "./src/assets/images/banner/bannerCellphoneImg.png":
/*!*********************************************************!*\
  !*** ./src/assets/images/banner/bannerCellphoneImg.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/41926d758e094bd778cc.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/banner/bannerCellphoneImg.png?");

/***/ }),

/***/ "./src/assets/images/banner/bannerTitleImg.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/banner/bannerTitleImg.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/d455783e31876e5c87af.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/banner/bannerTitleImg.png?");

/***/ }),

/***/ "./src/assets/images/banner/mobileBackgroundImg.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/banner/mobileBackgroundImg.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/124b9b173538228f2cca.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/banner/mobileBackgroundImg.png?");

/***/ }),

/***/ "./src/assets/images/button/activationMethodsBtnImg.png":
/*!**************************************************************!*\
  !*** ./src/assets/images/button/activationMethodsBtnImg.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/fb084ba805e8a5e41443.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/button/activationMethodsBtnImg.png?");

/***/ }),

/***/ "./src/assets/images/button/callBtnImg.png":
/*!*************************************************!*\
  !*** ./src/assets/images/button/callBtnImg.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/5c05abb71aa066c5223e.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/button/callBtnImg.png?");

/***/ }),

/***/ "./src/assets/images/button/chatBtnImg.png":
/*!*************************************************!*\
  !*** ./src/assets/images/button/chatBtnImg.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/530f6ca021d60936c820.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/button/chatBtnImg.png?");

/***/ })

}]);