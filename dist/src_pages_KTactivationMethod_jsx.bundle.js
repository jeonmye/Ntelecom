"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkntelecom_project"] = self["webpackChunkntelecom_project"] || []).push([["src_pages_KTactivationMethod_jsx"],{

/***/ "./src/constant/appStoreLinktList.jsx":
/*!********************************************!*\
  !*** ./src/constant/appStoreLinktList.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KT_APP_STORE_LINK_LIST: () => (/* binding */ KT_APP_STORE_LINK_LIST),\n/* harmony export */   LG_APP_STORE_LINK_LIST: () => (/* binding */ LG_APP_STORE_LINK_LIST)\n/* harmony export */ });\nvar KT_APP_STORE_LINK_LIST = [{\n  label: 'K망 멤버십 어플 설치하기 (안드로이드)',\n  href: 'http://play.google.com/store/apps/details?id=nrcom.ntelecom.nrcmembership'\n}, {\n  label: 'K망 멤버십 어플 설치하기 (아이폰)',\n  href: 'https://apps.apple.com/app/id1295585489'\n}];\nvar LG_APP_STORE_LINK_LIST = [{\n  label: 'L망 멤버십 어플 설치하기 (안드로이드)',\n  href: 'http://play.google.com/store/apps/details?id=nrcom.ntelecomlg.nrcmembershiplg&hl=ko'\n}, {\n  label: 'L망 멤버십 어플 설치하기(아이폰)',\n  href: 'https://apps.apple.com/app/id1568423904'\n}];\n\n//# sourceURL=webpack://ntelecom-project/./src/constant/appStoreLinktList.jsx?");

/***/ }),

/***/ "./src/hooks/useViewPort.jsx":
/*!***********************************!*\
  !*** ./src/hooks/useViewPort.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nfunction useViewport() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    width = _useState2[0],\n    setWidth = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState4 = _slicedToArray(_useState3, 2),\n    height = _useState4[0],\n    setHeight = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    isMobile = _useState6[0],\n    setIsMobile = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState8 = _slicedToArray(_useState7, 2),\n    isLoaded = _useState8[0],\n    setIsLoaded = _useState8[1];\n  var handleResize = function handleResize() {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n    setIsMobile(window.innerWidth <= 600 || window.outerWidth <= 600);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {\n    handleResize();\n    setIsLoaded(true);\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return {\n    width: width,\n    height: height,\n    isMobile: isMobile,\n    isLoaded: isLoaded\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewport);\n\n//# sourceURL=webpack://ntelecom-project/./src/hooks/useViewPort.jsx?");

/***/ }),

/***/ "./src/pages/KTactivationMethod.jsx":
/*!******************************************!*\
  !*** ./src/pages/KTactivationMethod.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _assets_images_exampleImage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/exampleImage.png */ \"./src/assets/images/exampleImage.png\");\n/* harmony import */ var _constant_appStoreLinktList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant/appStoreLinktList */ \"./src/constant/appStoreLinktList.jsx\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n\"])));\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  margin-bottom: 30px;\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  font-size: \", \"px;\\n  font-weight: 600;\\n  margin-bottom: 30px;\\n\"])), function (props) {\n  return props.$isMobile ? 24 : 32;\n});\nvar ExampleImg = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: auto;\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  text-decoration: none;\\n  color: white;\\n  padding: 10px 10px;\\n  display: inline-block;\\n  background-color: #1f1f1f;\\n  position: relative;\\n  border: 1px solid #1f1f1f;\\n  border-radius: 15px;\\n\"])));\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  gap: 10px;\\n  flex-direction: \", \";\\n  margin-bottom: 15px;\\n\"])), function (props) {\n  return props.$isMobile ? 'column' : 'row';\n});\nvar KTactivationMethod = function KTactivationMethod() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonWrapper, {\n    $isMobile: isMobile\n  }, _constant_appStoreLinktList__WEBPACK_IMPORTED_MODULE_3__.KT_APP_STORE_LINK_LIST.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n      href: item.href\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, null, item.label));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {\n    $isMobile: isMobile\n  }, \"\\uC564\\uD154\\uB808\\uCF64 \\uBA64\\uBC84\\uC2ED K\\uB9DD \\uC811\\uC218\\uBC29\\uBC95\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExampleImg, {\n    src: _assets_images_exampleImage_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"\\uC0D8\\uD50C\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExampleImg, {\n    src: _assets_images_exampleImage_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"\\uC0D8\\uD50C\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExampleImg, {\n    src: _assets_images_exampleImage_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: \"\\uC0D8\\uD50C\"\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KTactivationMethod);\n\n//# sourceURL=webpack://ntelecom-project/./src/pages/KTactivationMethod.jsx?");

/***/ }),

/***/ "./src/assets/images/exampleImage.png":
/*!********************************************!*\
  !*** ./src/assets/images/exampleImage.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/b0f0d7386889cebe09c3.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/images/exampleImage.png?");

/***/ })

}]);