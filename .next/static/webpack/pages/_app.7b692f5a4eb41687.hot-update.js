"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_index_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index.context */ \"./context/index.context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_index_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav bg-dark justify-content-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"nav-link text-light\",\n                    children: \"EmarhSocNet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\components\\\\Navbar.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/connexion\",\n                    className: \"nav-link text-light\",\n                    children: \"Connexion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\components\\\\Navbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/inscription\",\n                    className: \"nav-link text-light\",\n                    children: \"Inscription\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\components\\\\Navbar.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/deconnexion\",\n                    onClick: logout,\n                    className: \"nav-link text-light\",\n                    children: \"D\\xe9connexion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\components\\\\Navbar.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moi\\\\Desktop\\\\Programming\\\\MERN\\\\SocialNetwork\\\\client\\\\components\\\\Navbar.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navbar, \"IzBrK9Uh5b8SzqXA7wuK/y4Nq84=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtQztBQUNOO0FBQzBCO0FBRXZELE1BQU1HLFNBQVMsSUFBTTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLGlEQUFVQSxDQUFDRSwrREFBV0E7SUFFaEQsTUFBTUksU0FBUyxJQUFNO1FBQ2pCQyxPQUFPQyxZQUFZLENBQUNDLFVBQVUsQ0FBQztJQUNuQztJQUVBLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFLO29CQUFJRCxXQUFVOzhCQUFzQjs7Ozs7OzhCQUcvQyw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFLO29CQUFhRCxXQUFVOzhCQUFzQjs7Ozs7OzhCQUd4RCw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFLO29CQUFlRCxXQUFVOzhCQUFzQjs7Ozs7OzhCQUcxRCw4REFBQ1Ysa0RBQUlBO29CQUFDVyxNQUFLO29CQUFlQyxTQUFTUDtvQkFBUUssV0FBVTs4QkFBc0I7Ozs7Ozs7Ozs7Ozs7QUFNM0Y7R0F6Qk1SO0tBQUFBO0FBMkJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2luZGV4LmNvbnRleHQnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdiBiZy1kYXJrIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYXJoU29jTmV0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Nvbm5leGlvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25uZXhpb25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5zY3JpcHRpb25cIiBjbGFzc05hbWU9XCJuYXYtbGluayB0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5zY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVjb25uZXhpb25cIiBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEw6ljb25uZXhpb25cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJMaW5rIiwiVXNlckNvbnRleHQiLCJOYXZiYXIiLCJzdGF0ZSIsInNldFN0YXRlIiwibG9nb3V0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});