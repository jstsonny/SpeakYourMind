"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f9e598c8d8bd\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQzMDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmOWU1OThjOGQ4YmRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/auth/Login.tsx":
/*!****************************!*\
  !*** ./app/auth/Login.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Login() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"list-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n            className: \"text-sm bg-green-90000 text-white py-2 px-6 rounded-xl disabled:opacity-25\",\n            children: \"Sign In\"\n        }, void 0, false, {\n            fileName: \"/Users/sonnytajvarjahanara/Desktop/GitHub/fit-app/fit-app/app/auth/Login.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sonnytajvarjahanara/Desktop/GitHub/fit-app/fit-app/app/auth/Login.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdXRoL0xvZ2luLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVzQztBQUV2QixTQUFTQztJQUNwQixxQkFDQSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFDViw0RUFBQ0M7WUFBT0MsU0FBUyxJQUFNTCx1REFBTUE7WUFBSUcsV0FBVTtzQkFBNkU7Ozs7Ozs7Ozs7O0FBSWhJO0tBUHdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXV0aC9Mb2dpbi50c3g/ODhmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHtzaWduSW59IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LW5vbmUnPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGJnLWdyZWVuLTkwMDAwIHRleHQtd2hpdGUgcHktMiBweC02IHJvdW5kZWQteGwgZGlzYWJsZWQ6b3BhY2l0eS0yNVwiPlxuICAgICAgICAgICAgU2lnbiBJbjwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJzaWduSW4iLCJMb2dpbiIsImxpIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/auth/Login.tsx\n"));

/***/ })

});