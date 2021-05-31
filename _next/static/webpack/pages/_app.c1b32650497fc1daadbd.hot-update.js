self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_intro.tsx":
/*!**************************!*\
  !*** ./pages/_intro.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\_intro.tsx";


function Intro(_ref) {
  var toAboutMe = _ref.toAboutMe;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex h-full justify-center items-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-6xl text-4xl text-center ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().appear)),
        children: "Simon Kurz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-sm text-xs text-secondary sm:transform sm:translate-x-40 ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().appear), " ").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default()["appear-subtitle"])),
        children: "Student, Developer, Future IT-Security expert"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-6xl sm:mt-4 text-4xl text-center ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().appear)),
        style: {
          transform: 'scaleY(-1)',
          background: 'linear-gradient(0deg, rgba(255,255,255,0.32) 0%, rgba(0,0,0,0) 60%)',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        },
        children: "Simon Kurz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center mt-4 ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().appear)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-secondary text-white rounded-lg p-4",
          onClick: toAboutMe,
          children: "About Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c;

$RefreshReg$(_c, "Intro");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2ludHJvLnRzeCJdLCJuYW1lcyI6WyJJbnRybyIsInRvQWJvdXRNZSIsInN0eWxlcyIsInRyYW5zZm9ybSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdFRleHRGaWxsQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsU0FBU0EsS0FBVCxPQUF3QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFDdEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUNBQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsNkNBQXNDQyx1RUFBdEMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyw2RUFBc0VBLHVFQUF0RSxjQUF1RkEsbUZBQXZGLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQ0UsaUJBQVMscURBQThDQSx1RUFBOUMsQ0FEWDtBQUVFLGFBQUssRUFBRTtBQUNMQyxtQkFBUyxFQUFFLFlBRE47QUFFTEMsb0JBQVUsRUFBRSxxRUFGUDtBQUdMQyx3QkFBYyxFQUFFLE1BSFg7QUFJTEMsNkJBQW1CLEVBQUU7QUFKaEIsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBa0JFO0FBQUssaUJBQVMsNkJBQXNCSix1RUFBdEIsQ0FBZDtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBQyx3Q0FBbEI7QUFBMkQsaUJBQU8sRUFBRUQsU0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7S0EzQlFELEs7QUE2QlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMWIzMjY1MDQ5N2ZjMWRhYWRiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEludHJvUHJvcHMge1xuICB0b0Fib3V0TWUoKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gSW50cm8oe3RvQWJvdXRNZX06IEludHJvUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206dGV4dC02eGwgdGV4dC00eGwgdGV4dC1jZW50ZXIgJHtzdHlsZXMuYXBwZWFyfWB9PlxuICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206dGV4dC1zbSB0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5IHNtOnRyYW5zZm9ybSBzbTp0cmFuc2xhdGUteC00MCAke3N0eWxlcy5hcHBlYXJ9ICR7c3R5bGVzWydhcHBlYXItc3VidGl0bGUnXX1gfT5cbiAgICAgICAgICBTdHVkZW50LCBEZXZlbG9wZXIsIEZ1dHVyZSBJVC1TZWN1cml0eSBleHBlcnRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbTp0ZXh0LTZ4bCBzbTptdC00IHRleHQtNHhsIHRleHQtY2VudGVyICR7c3R5bGVzLmFwcGVhcn1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoLTEpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjMyKSAwJSwgcmdiYSgwLDAsMCwwKSA2MCUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgbXQtNCAke3N0eWxlcy5hcHBlYXJ9YH0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHAtNFwiIG9uQ2xpY2s9e3RvQWJvdXRNZX0+QWJvdXQgTWU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRybyJdLCJzb3VyY2VSb290IjoiIn0=