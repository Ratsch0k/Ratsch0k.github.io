self["webpackHotUpdate_N_E"]("pages/_app",{

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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();




function Home() {
  _s();

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      page = _useState[0],
      setPage = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    router.beforePopState(function (_ref) {
      var url = _ref.url,
          as = _ref.as,
          options = _ref.options;
      console.log(as);
      setPage(as);
      return false;
    });
  }, [router]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(router.pathname);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [page === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_intro__WEBPACK_IMPORTED_MODULE_3__.default, {
      toAboutMe: function toAboutMe() {
        return window.history.pushState('/about-me', 'About Me', '/about-me');
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), page === '/about-me' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "TEST"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Home, "RZWFSQqUQtNzO8PVa3z4GQmbH7c=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiYmVmb3JlUG9wU3RhdGUiLCJ1cmwiLCJhcyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJoaXN0b3J5IiwicHVzaFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7O0FBRDZCLGtCQUVMQywrQ0FBUSxFQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUk3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RMLFVBQU0sQ0FBQ00sY0FBUCxDQUFzQixnQkFBMEI7QUFBQSxVQUF2QkMsR0FBdUIsUUFBdkJBLEdBQXVCO0FBQUEsVUFBbEJDLEVBQWtCLFFBQWxCQSxFQUFrQjtBQUFBLFVBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUM5Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQUosYUFBTyxDQUFDSSxFQUFELENBQVA7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUpEO0FBS0QsR0FOUSxFQU1OLENBQUNSLE1BQUQsQ0FOTSxDQUFUO0FBUUFLLGtEQUFTLENBQUMsWUFBTTtBQUNkSyxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBTSxDQUFDWSxRQUFuQjtBQUNELEdBRlEsQ0FBVDtBQUlBLHNCQUNFO0FBQUEsZUFFSVQsSUFBSSxLQUFLVSxTQUFULGlCQUNBLDhEQUFDLDJDQUFEO0FBQU8sZUFBUyxFQUFFO0FBQUEsZUFBTUMsTUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUIsV0FBekIsRUFBc0MsVUFBdEMsRUFBa0QsV0FBbEQsQ0FBTjtBQUFBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixFQU1JYixJQUFJLEtBQUssV0FBVCxpQkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUEsa0JBREY7QUFZRDs7R0E1QnVCSixJO1VBQ1BFLDhEOzs7S0FET0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZlMDVmNDk2ZjE3ZDAxZTcxY2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIuYmVmb3JlUG9wU3RhdGUoKHsgdXJsLCBhcywgb3B0aW9ucyB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhcylcbiAgICAgIHNldFBhZ2UoYXMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH0sIFtyb3V0ZXJdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcbiAgICAgICAgcGFnZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgIDxJbnRybyB0b0Fib3V0TWU9eygpID0+IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJywgJy9hYm91dC1tZScpfSAvPlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBwYWdlID09PSAnL2Fib3V0LW1lJyAmJlxuICAgICAgICA8ZGl2PlRFU1Q8L2Rpdj5cbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=