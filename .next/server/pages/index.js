"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.context.js":
/*!**********************************!*\
  !*** ./context/index.context.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\context\\\\index.context.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFFM0QsTUFBTUcsNEJBQWNGLG9EQUFhQTtBQUVqQyxNQUFNRyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDbkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO1FBQy9CUSxNQUFNLENBQUM7UUFDUEMsT0FBTztJQUNYO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDWkssU0FBU0csS0FBS0MsS0FBSyxDQUFDQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1gsWUFBWVksUUFBUTtRQUFDQyxPQUFPO1lBQUNWO1lBQU9DO1NBQVM7a0JBQ3pDRjs7Ozs7O0FBR2I7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmNvbnRleHQuanM/MmQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VyOiB7fSxcclxuICAgICAgICB0b2tlbjogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.context.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_index_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.context */ \"./context/index.context.js\");\n\n\n\nconst Home = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"display-1 text-center py-5\",\n                        children: \"Accueil Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, undefined),\n                    JSON.stringify(state),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/img/pedestrians.jpg\",\n                        alt: \"image d'accueil\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNvQjtBQUV2RCxNQUFNRSxPQUFPLElBQU07SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0osaURBQVVBLENBQUNDLCtEQUFXQTtJQUNoRCxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBNkI7Ozs7OztvQkFDMUNFLEtBQUtDLFNBQVMsQ0FBQ047a0NBQ2hCLDhEQUFDTzt3QkFBSUMsS0FBSTt3QkFBdUJDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEQ7QUFFQSxpRUFBZVYsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2luZGV4LmNvbnRleHQnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktMSB0ZXh0LWNlbnRlciBweS01Jz5BY2N1ZWlsIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3BlZGVzdHJpYW5zLmpwZ1wiIGFsdD1cImltYWdlIGQnYWNjdWVpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiSlNPTiIsInN0cmluZ2lmeSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();