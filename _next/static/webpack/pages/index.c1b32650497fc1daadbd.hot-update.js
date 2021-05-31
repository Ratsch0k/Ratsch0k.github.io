self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2ludHJvLnRzeCJdLCJuYW1lcyI6WyJJbnRybyIsInRvQWJvdXRNZSIsInN0eWxlcyIsInRyYW5zZm9ybSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdFRleHRGaWxsQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsU0FBU0EsS0FBVCxPQUF3QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFDdEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUNBQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsNkNBQXNDQyx1RUFBdEMsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyw2RUFBc0VBLHVFQUF0RSxjQUF1RkEsbUZBQXZGLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQ0UsaUJBQVMscURBQThDQSx1RUFBOUMsQ0FEWDtBQUVFLGFBQUssRUFBRTtBQUNMQyxtQkFBUyxFQUFFLFlBRE47QUFFTEMsb0JBQVUsRUFBRSxxRUFGUDtBQUdMQyx3QkFBYyxFQUFFLE1BSFg7QUFJTEMsNkJBQW1CLEVBQUU7QUFKaEIsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBa0JFO0FBQUssaUJBQVMsNkJBQXNCSix1RUFBdEIsQ0FBZDtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBQyx3Q0FBbEI7QUFBMkQsaUJBQU8sRUFBRUQsU0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7S0EzQlFELEs7QUE2QlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFiMzI2NTA0OTdmYzFkYWFkYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGludGVyZmFjZSBJbnRyb1Byb3BzIHtcbiAgdG9BYm91dE1lKCk6IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIEludHJvKHt0b0Fib3V0TWV9OiBJbnRyb1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNtOnRleHQtNnhsIHRleHQtNHhsIHRleHQtY2VudGVyICR7c3R5bGVzLmFwcGVhcn1gfT5cbiAgICAgICAgICBTaW1vbiBLdXJ6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNtOnRleHQtc20gdGV4dC14cyB0ZXh0LXNlY29uZGFyeSBzbTp0cmFuc2Zvcm0gc206dHJhbnNsYXRlLXgtNDAgJHtzdHlsZXMuYXBwZWFyfSAke3N0eWxlc1snYXBwZWFyLXN1YnRpdGxlJ119YH0+XG4gICAgICAgICAgU3R1ZGVudCwgRGV2ZWxvcGVyLCBGdXR1cmUgSVQtU2VjdXJpdHkgZXhwZXJ0XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgc206dGV4dC02eGwgc206bXQtNCB0ZXh0LTR4bCB0ZXh0LWNlbnRlciAke3N0eWxlcy5hcHBlYXJ9YH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKC0xKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMC4zMikgMCUsIHJnYmEoMCwwLDAsMCkgNjAlKScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxuICAgICAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTaW1vbiBLdXJ6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtY2VudGVyIG10LTQgJHtzdHlsZXMuYXBwZWFyfWB9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTRcIiBvbkNsaWNrPXt0b0Fib3V0TWV9PkFib3V0IE1lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cm8iXSwic291cmNlUm9vdCI6IiJ9