self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_link_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/link_button */ "./components/link_button.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\index.tsx";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "flex h-full justify-center items-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-6xl text-4xl text-center ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().appear)),
        children: "Simon Kurz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-sm text-xs text-secondary sm:transform sm:translate-x-40 ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().appear), " ").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default()["appear-subtitle"])),
        children: "Student, Developer, Future IT-Security expert"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sm:text-6xl sm:mt-4 text-4xl text-center ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().appear)),
        style: {
          transform: 'scaleY(-1)',
          background: 'linear-gradient(0deg, rgba(255,255,255,0.32) 0%, rgba(0,0,0,0) 60%)',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        },
        children: "Simon Kurz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center mt-4 ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().appear), " ").concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default()["appear-subtitle"])),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_link_button__WEBPACK_IMPORTED_MODULE_1__.default, {
          href: "/about-me",
          children: "About Me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENsaXAiLCJXZWJraXRUZXh0RmlsbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyx5Q0FBZjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyw2Q0FBc0NDLHVFQUF0QyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLDZFQUFzRUEsdUVBQXRFLGNBQXVGQSxtRkFBdkYsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBT0U7QUFDRSxpQkFBUyxxREFBOENBLHVFQUE5QyxDQURYO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLG1CQUFTLEVBQUUsWUFETjtBQUVMQyxvQkFBVSxFQUFFLHFFQUZQO0FBR0xDLHdCQUFjLEVBQUUsTUFIWDtBQUlMQyw2QkFBbUIsRUFBRTtBQUpoQixTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFrQkU7QUFBSyxpQkFBUyw2QkFBc0JKLHVFQUF0QixjQUF1Q0EsbUZBQXZDLENBQWQ7QUFBQSwrQkFDRSw4REFBQyw0REFBRDtBQUFZLGNBQUksRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBM0J1QkQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjc2NDViODhjNjU2NTBkNGU2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rX2J1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206dGV4dC02eGwgdGV4dC00eGwgdGV4dC1jZW50ZXIgJHtzdHlsZXMuYXBwZWFyfWB9PlxuICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206dGV4dC1zbSB0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5IHNtOnRyYW5zZm9ybSBzbTp0cmFuc2xhdGUteC00MCAke3N0eWxlcy5hcHBlYXJ9ICR7c3R5bGVzWydhcHBlYXItc3VidGl0bGUnXX1gfT5cbiAgICAgICAgICBTdHVkZW50LCBEZXZlbG9wZXIsIEZ1dHVyZSBJVC1TZWN1cml0eSBleHBlcnRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BzbTp0ZXh0LTZ4bCBzbTptdC00IHRleHQtNHhsIHRleHQtY2VudGVyICR7c3R5bGVzLmFwcGVhcn1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoLTEpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjMyKSAwJSwgcmdiYSgwLDAsMCwwKSA2MCUpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgbXQtNCAke3N0eWxlcy5hcHBlYXJ9ICR7c3R5bGVzWydhcHBlYXItc3VidGl0bGUnXX1gfT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPScvYWJvdXQtbWUnPkFib3V0IE1lPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9