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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _assets_image_openCellphoneButton_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/image/openCellphoneButton.png */ \"./src/assets/image/openCellphoneButton.png\");\n/* harmony import */ var _assets_image_cellPhoneButton_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/image/cellPhoneButton.png */ \"./src/assets/image/cellPhoneButton.png\");\n/* harmony import */ var _assets_image_chatButton_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/image/chatButton.png */ \"./src/assets/image/chatButton.png\");\n/* harmony import */ var _assets_image_banner_title_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image/banner title.png */ \"./src/assets/image/banner title.png\");\n/* harmony import */ var _assets_image_bannerCellphoneImg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/image/bannerCellphoneImg.png */ \"./src/assets/image/bannerCellphoneImg.png\");\n/* harmony import */ var _assets_image_bannerImg3_mobile_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/image/bannerImg3(mobile).png */ \"./src/assets/image/bannerImg3(mobile).png\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\n\n\n\n\n\n\n\n\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: center;\\n  max-width: 1200px;\\n\"])));\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  height: auto;\\n  display: flex;\\n\"])));\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  display: flex;\\n  flex-direction: \", \";\\n  justify-content: \", \";\\n  align-items: \", \";\\n  width: 100%;\\n  gap: 15px;\\n  z-index: 3;\\n  flex: 1;\\n  bottom: \", \"px;\\n  padding: 0 20px;\\n\"])), function (props) {\n  return props.$isMobile ? 'column' : 'row';\n}, function (props) {\n  return props.$isMobile ? '' : 'space-around';\n}, function (props) {\n  return props.$isMobile ? 'center' : '';\n}, function (props) {\n  return props.$isMobile ? 100 : 180;\n});\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  top: 100px;\\n  width: 60%;\\n  left: 50px;\\n  z-index: 2;\\n\"])));\nvar BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  width: 520px;\\n  right: 0;\\n  z-index: 1;\\n\"])));\nvar MobildImage = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].img(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  width: 100%;\\n\"])));\nvar ImgButton = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].img(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  max-width: 300px;\\n  min-width: 175px;\\n  height: auto;\\n  flex: 1;\\n\"])));\nvar Banner = function Banner(_ref) {\n  var isMobile = _ref.isMobile;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();\n  var imgButtonOject = [{\n    src: _assets_image_openCellphoneButton_png__WEBPACK_IMPORTED_MODULE_2__,\n    alt: '개통방법 알아보기',\n    handleClick: function handleClick() {\n      return navigate('/open-cellphone');\n    }\n  }, {\n    src: _assets_image_cellPhoneButton_png__WEBPACK_IMPORTED_MODULE_3__,\n    alt: '전화 상담',\n    handleClick: null\n  }, {\n    src: _assets_image_chatButton_png__WEBPACK_IMPORTED_MODULE_4__,\n    alt: '채널톡 상담',\n    handleClick: null\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {\n    $isMobile: isMobile\n  }, !isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgWrapper, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title, {\n    src: _assets_image_banner_title_png__WEBPACK_IMPORTED_MODULE_5__,\n    alt: 'title',\n    $isMobile: isMobile\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundImage, {\n    src: _assets_image_bannerCellphoneImg_png__WEBPACK_IMPORTED_MODULE_6__,\n    $isMobile: isMobile\n  })), !!isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgWrapper, {\n    $isMobile: isMobile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobildImage, {\n    src: _assets_image_bannerImg3_mobile_png__WEBPACK_IMPORTED_MODULE_7__,\n    $isMobile: isMobile\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonWrapper, {\n    $isMobile: isMobile\n  }, imgButtonOject === null || imgButtonOject === void 0 ? void 0 : imgButtonOject.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImgButton, {\n      key: item.src,\n      src: item.src,\n      alt: item.alt,\n      onClick: item.handleClick\n    });\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);\n\n//# sourceURL=webpack://ntelecom-project/./src/components/Banner.jsx?");

/***/ }),

/***/ "./src/hooks/useViewPort.jsx":
/*!***********************************!*\
  !*** ./src/hooks/useViewPort.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\nfunction useViewport() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    width = _useState2[0],\n    setWidth = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState4 = _slicedToArray(_useState3, 2),\n    height = _useState4[0],\n    setHeight = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    isMobile = _useState6[0],\n    setIsMobile = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState8 = _slicedToArray(_useState7, 2),\n    isLoaded = _useState8[0],\n    setIsLoaded = _useState8[1];\n  var handleResize = function handleResize() {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n    setIsMobile(window.innerWidth <= 600 || window.outerWidth <= 600);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {\n    handleResize();\n    setIsLoaded(true);\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return {\n    width: width,\n    height: height,\n    isMobile: isMobile,\n    isLoaded: isLoaded\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useViewport);\n\n//# sourceURL=webpack://ntelecom-project/./src/hooks/useViewPort.jsx?");

/***/ }),

/***/ "./src/pages/Main.jsx":
/*!****************************!*\
  !*** ./src/pages/Main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useViewPort */ \"./src/hooks/useViewPort.jsx\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ \"./src/components/Banner.jsx\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n// import React from 'react';\n// import styled from 'styled-components';\n// import useViewport from '../hooks/useViewPort';\n\n// const Container = styled.div`\n//   position: relative;\n//   width: 100%;\n//   height: 100%;\n//   display: flex;\n//   justify-content: center;\n//   max-width: 1200px;\n//   margin: 0 auto;\n\n//   @media (max-width: 1200px) {\n//     justify-content: flex-start;\n//   }\n// `;\n\n// const CellphoneImg = styled.img`\n//   position: absolute;\n//   top: 0;\n//   left: 0;\n//   width: 480px;\n//   height: auto;\n//   z-index: 1;\n\n//   @media (max-width: 1200px) {\n//     width: 480px;\n//     right: 0;\n//     left: auto;\n//   }\n// `;\n\n// const MobileImg = styled.img`\n//   max-width: 100%;\n//   height: auto;\n// `;\n\n// const TextImg = styled.img`\n//   position: absolute;\n//   top: 200px;\n//   right: 0;\n//   width: 550px;\n//   height: auto;\n//   z-index: 2;\n\n//   @media (max-width: 1200px) {\n//     width: 60%;\n//     top: 0;\n//     left: 30px;\n//     right: auto;\n//     margin-top: 80px;\n//   }\n// `;\n\n// const ButtonContainer = styled.div`\n//   position: absolute;\n//   bottom: 20px;\n//   display: flex;\n//   justify-content: center;\n//   gap: 40px;\n//   z-index: 3;\n//   width: 100%;\n\n//   @media (max-width: 1200px) {\n//     position: absolute;\n//     flex-direction: column;\n//     align-items: center;\n//     gap: 20px;\n//     padding-bottom: 40px;\n//     width: ${props => (props.isMobile ? '100%' : '450px')};\n//     bottom: 0;\n//   }\n// `;\n\n// const ButtonImg = styled.img`\n//   width: 400px;\n//   height: auto;\n\n//   @media (max-width: 1200px) {\n//     width: 80%;\n//     max-width: 300px; /* Adjust the max-width to fit within smaller screens */\n//   }\n// `;\n\n// const Main = () => {\n//   const { isMobile } = useViewport();\n\n//   return (\n//     <Container>\n//       {!isMobile ? (\n//         <>\n//           <TextImg src=\"../assets/image/banner title.png\" alt=\"배너\" />\n//           <CellphoneImg src=\"../assets/image/bannerCellphoneImg.png\" alt=\"배너\" />\n//         </>\n//       ) : (\n//         <MobileImg src=\"../assets/image/bannerImg(mobile).png\" alt=\"배너\" />\n//       )}\n\n//       <ButtonContainer isMobile={isMobile}>\n//         <ButtonImg src=\"../assets/image/openCellphoneButton.png\" alt=\"셀프 개통 방법 보러가기\" />\n//         <ButtonImg src=\"../assets/image/cellPhoneButton.png\" alt=\"전화 상담\" />\n//         <ButtonImg src=\"../assets/image/chatButton.png\" alt=\"채널톡 상담\" />\n//       </ButtonContainer>\n//     </Container>\n//   );\n// };\n\n// export default Main;\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  height: 100vh;\\n\"])));\nvar Main = function Main() {\n  var _useViewport = (0,_hooks_useViewPort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    isMobile = _useViewport.isMobile;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isMobile: isMobile\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n\n//# sourceURL=webpack://ntelecom-project/./src/pages/Main.jsx?");

/***/ }),

/***/ "./src/assets/image/banner title.png":
/*!*******************************************!*\
  !*** ./src/assets/image/banner title.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/d455783e31876e5c87af.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/banner_title.png?");

/***/ }),

/***/ "./src/assets/image/bannerCellphoneImg.png":
/*!*************************************************!*\
  !*** ./src/assets/image/bannerCellphoneImg.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/41926d758e094bd778cc.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/bannerCellphoneImg.png?");

/***/ }),

/***/ "./src/assets/image/bannerImg3(mobile).png":
/*!*************************************************!*\
  !*** ./src/assets/image/bannerImg3(mobile).png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/d0bc4edc857b35452f9d.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/bannerImg3(mobile).png?");

/***/ }),

/***/ "./src/assets/image/cellPhoneButton.png":
/*!**********************************************!*\
  !*** ./src/assets/image/cellPhoneButton.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/5c05abb71aa066c5223e.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/cellPhoneButton.png?");

/***/ }),

/***/ "./src/assets/image/chatButton.png":
/*!*****************************************!*\
  !*** ./src/assets/image/chatButton.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/530f6ca021d60936c820.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/chatButton.png?");

/***/ }),

/***/ "./src/assets/image/openCellphoneButton.png":
/*!**************************************************!*\
  !*** ./src/assets/image/openCellphoneButton.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"asset/fb084ba805e8a5e41443.png\";\n\n//# sourceURL=webpack://ntelecom-project/./src/assets/image/openCellphoneButton.png?");

/***/ })

}]);