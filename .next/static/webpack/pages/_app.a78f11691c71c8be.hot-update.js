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

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _Header_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.data */ \"./src/components/Header.data.js\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppContext */ \"./src/AppContext.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    var _this = this;\n    _s();\n    var value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loogedIn = ref[0], setIsLoggedIn = ref[1];\n    console.log(value);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoggedIn(value.isLoggedIn);\n    }, [\n        value.isLoggedIn\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar, {\n            fixed: \"top\",\n            className: \"navigation\",\n            collapseOnSelect: true,\n            expand: \"lg\",\n            bg: \"light\",\n            variant: \"dark\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Brand, {\n                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlinks),\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().log1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assests/brand_logo.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Toggle, {\n                        \"aria-controls\": \"responsive-navbar-nav\"\n                    }, void 0, false, {\n                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Navbar.Collapse, {\n                        id: \"responsive-navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                                className: \"me-auto\",\n                                children: _Header_data__WEBPACK_IMPORTED_MODULE_2__.MenuItems.map(function(items, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlinks),\n                                        href: items.url,\n                                        children: items.title\n                                    }, i, false, {\n                                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlinks),\n                                        href: \"/Upload\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().badge1),\n                                            children: \"Visit Link\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().UploadBtn),\n                                        href: \"/Upload\",\n                                        children: \"Upload Slip\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().navlinks),\n                                        href: \"/Login\",\n                                        children: loogedIn == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: \"User\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            viewBox: \"0 0 448 512\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/appsmartz/Desktop/investPro1/src/components/Header.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"IQm8qlMw9VblCmNGrglKgPVeB7U=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStEO0FBQ087QUFDNUI7QUFDVTtBQUNiOztBQUV2QyxTQUFTVyxNQUFNLEdBQUc7OztJQUNoQixJQUFNQyxLQUFLLEdBQUdYLGlEQUFVLENBQUNTLG1EQUFVLENBQUM7SUFDcEMsSUFBa0NQLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFSbkQsUUFRaUIsR0FBbUJBLEdBQWUsR0FBbEMsRUFSakIsYUFRZ0MsR0FBSUEsR0FBZSxHQUFuQjtJQUM5QlksT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDO0lBRW5CVixnREFBUyxDQUFDLFdBQU07UUFDZFksYUFBYSxDQUFDRixLQUFLLENBQUNLLFVBQVUsQ0FBQyxDQUFDO0tBQ2pDLEVBQUU7UUFBQ0wsS0FBSyxDQUFDSyxVQUFVO0tBQUMsQ0FBQyxDQUFDO0lBQ3ZCLHFCQUNFO2tCQUNFLDRFQUFDYixtREFBTTtZQUNMYyxLQUFLLEVBQUMsS0FBSztZQUNYQyxTQUFTLEVBQUMsWUFBWTtZQUN0QkMsZ0JBQWdCO1lBQ2hCQyxNQUFNLEVBQUMsSUFBSTtZQUNYQyxFQUFFLEVBQUMsT0FBTztZQUNWQyxPQUFPLEVBQUMsTUFBTTtzQkFFZCw0RUFBQ2xCLHNEQUFTOztrQ0FDUiw4REFBQ0QseURBQVk7d0JBQUNlLFNBQVMsRUFBRVYsMkVBQWU7d0JBQUVpQixJQUFJLEVBQUMsR0FBRztrQ0FDaEQsNEVBQUNDLE1BQUk7NEJBQUNSLFNBQVMsRUFBRVYsdUVBQVc7c0NBQzFCLDRFQUFDb0IsS0FBRztnQ0FBQ0MsR0FBRyxFQUFDLHlCQUF5Qjs7Ozs7b0NBQUc7Ozs7O2dDQUNoQzs7Ozs7NEJBQ007a0NBQ2YsOERBQUMxQiwwREFBYTt3QkFBQzRCLGVBQWEsRUFBQyx1QkFBdUI7Ozs7OzRCQUFHO2tDQUN2RCw4REFBQzVCLDREQUFlO3dCQUFDOEIsRUFBRSxFQUFDLHVCQUF1Qjs7MENBQ3pDLDhEQUFDNUIsZ0RBQUc7Z0NBQUNhLFNBQVMsRUFBQyxTQUFTOzBDQUNyQlgsdURBQWEsQ0FBQyxTQUFDNEIsS0FBSyxFQUFFQyxDQUFDLEVBQUs7b0NBQzNCLHFCQUNFLDhEQUFDL0IscURBQVE7d0NBQ1BhLFNBQVMsRUFBRVYsMkVBQWU7d0NBRTFCaUIsSUFBSSxFQUFFVSxLQUFLLENBQUNHLEdBQUc7a0RBRWRILEtBQUssQ0FBQ0ksS0FBSzt1Q0FIUEgsQ0FBQzs7Ozs2Q0FJRyxDQUNYO2lDQUNILENBQUM7Ozs7O29DQUNFOzBDQUNOLDhEQUFDL0IsZ0RBQUc7O2tEQUlGLDhEQUFDQSxxREFBUTt3Q0FBQ2EsU0FBUyxFQUFFViwyRUFBZTt3Q0FBRWlCLElBQUksRUFBRSxTQUFTO2tEQUNuRCw0RUFBQ0MsTUFBSTs0Q0FBQ1IsU0FBUyxFQUFFVix5RUFBYTtzREFBRSxZQUFVOzs7OztnREFBTzs7Ozs7NENBQ3hDO2tEQUNYLDhEQUFDSCxxREFBUTt3Q0FBQ2EsU0FBUyxFQUFFViw0RUFBZ0I7d0NBQUVpQixJQUFJLEVBQUUsU0FBUztrREFBRSxhQUV4RDs7Ozs7NENBQVc7a0RBQ1gsOERBQUNwQixxREFBUTt3Q0FBQ2EsU0FBUyxFQUFFViwyRUFBZTt3Q0FBRWlCLElBQUksRUFBQyxRQUFRO2tEQUNoRGIsUUFBUSxJQUFJLElBQUksaUJBQ2YsOERBQUM4QixJQUFFO3NEQUFDLE1BQUk7Ozs7O2dEQUFLLGlCQUViLDhEQUFDQyxLQUFHOzRDQUFDQyxLQUFLLEVBQUMsNEJBQTRCOzRDQUFDQyxPQUFPLEVBQUMsYUFBYTtzREFDM0QsNEVBQUNDLE1BQUk7Z0RBQUNDLENBQUMsRUFBQyw0WUFBNFk7Ozs7O29EQUFHOzs7OztnREFDblo7Ozs7OzRDQUVDOzs7Ozs7b0NBQ1A7Ozs7Ozs0QkFDVTs7Ozs7O29CQUNSOzs7OztnQkFDTDtxQkFDUixDQUNIO0NBQ0g7R0FoRVFyQyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFrRWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/MzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZiYXIsIENvbnRhaW5lciwgTmF2LCBOYXZEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW1zIH0gZnJvbSBcIi4vSGVhZGVyLmRhdGFcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9BcHBDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIGNvbnN0IFtsb29nZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dnZWRJbih2YWx1ZS5pc0xvZ2dlZEluKTtcclxuICB9LCBbdmFsdWUuaXNMb2dnZWRJbl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgZml4ZWQ9XCJ0b3BcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIlxyXG4gICAgICAgIGNvbGxhcHNlT25TZWxlY3RcclxuICAgICAgICBleHBhbmQ9XCJsZ1wiXHJcbiAgICAgICAgYmc9XCJsaWdodFwiXHJcbiAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPXtzdHlsZXMubmF2bGlua3N9IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZzF9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2VzdHMvYnJhbmRfbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgICAgICB7TWVudUl0ZW1zLm1hcCgoaXRlbXMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmtzfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtcy51cmx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgICB7LyogPE5hdi5MaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmtzfSBocmVmPVwiL1NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgU2lnblVwXHJcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmtzfSBocmVmPXtcIi9VcGxvYWRcIn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZTF9PlZpc2l0IExpbms8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPXtzdHlsZXMuVXBsb2FkQnRufSBocmVmPXtcIi9VcGxvYWRcIn0+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWQgU2xpcFxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmtzfSBocmVmPVwiL0xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9vZ2VkSW4gPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGgzPlVzZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzIgMzA0aC05NkM3OC44IDMwNCAwIDM4Mi44IDAgNDgwYzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMzg0YzE3LjY3IDAgMzItMTQuMzMgMzItMzJDNDQ4IDM4Mi44IDM2OS4yIDMwNCAyNzIgMzA0ek00OC45OSA0NjRDNTYuODkgNDAwLjkgMTEwLjggMzUyIDE3NiAzNTJoOTZjNjUuMTYgMCAxMTkuMSA0OC45NSAxMjcgMTEySDQ4Ljk5ek0yMjQgMjU2YzcwLjY5IDAgMTI4LTU3LjMxIDEyOC0xMjhjMC03MC42OS01Ny4zMS0xMjgtMTI4LTEyOFM5NiA1Ny4zMSA5NiAxMjhDOTYgMTk4LjcgMTUzLjMgMjU2IDIyNCAyNTZ6TTIyNCA0OGM0NC4xMSAwIDgwIDM1Ljg5IDgwIDgwYzAgNDQuMTEtMzUuODkgODAtODAgODBTMTQ0IDE3Mi4xIDE0NCAxMjhDMTQ0IDgzLjg5IDE3OS45IDQ4IDIyNCA0OHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsIkNvbnRhaW5lciIsIk5hdiIsIk5hdkRyb3Bkb3duIiwiTWVudUl0ZW1zIiwic3R5bGVzIiwiQXBwQ29udGV4dCIsIkhlYWRlciIsInZhbHVlIiwibG9vZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiY29uc29sZSIsImxvZyIsImlzTG9nZ2VkSW4iLCJmaXhlZCIsImNsYXNzTmFtZSIsImNvbGxhcHNlT25TZWxlY3QiLCJleHBhbmQiLCJiZyIsInZhcmlhbnQiLCJCcmFuZCIsIm5hdmxpbmtzIiwiaHJlZiIsInNwYW4iLCJsb2cxIiwiaW1nIiwic3JjIiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJtYXAiLCJpdGVtcyIsImkiLCJMaW5rIiwidXJsIiwidGl0bGUiLCJiYWRnZTEiLCJVcGxvYWRCdG4iLCJoMyIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ })

});