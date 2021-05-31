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

      if (as !== '/' && as !== '/about-me') {
        return false;
      }

      setPage(as);
      return true;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(router.pathname);
  }, [router.pathname]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [page === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_intro__WEBPACK_IMPORTED_MODULE_3__.default, {
      toAboutMe: function toAboutMe() {
        return router.push('/about-me', undefined, {
          shallow: true
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), page === '/about-me' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "TEST"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiYmVmb3JlUG9wU3RhdGUiLCJ1cmwiLCJhcyIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwdXNoIiwic2hhbGxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCOztBQUQ2QixrQkFFTEMsK0NBQVEsRUFGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFJN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkTCxVQUFNLENBQUNNLGNBQVAsQ0FBc0IsZ0JBQTBCO0FBQUEsVUFBdkJDLEdBQXVCLFFBQXZCQSxHQUF1QjtBQUFBLFVBQWxCQyxFQUFrQixRQUFsQkEsRUFBa0I7QUFBQSxVQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQzlDLFVBQUlELEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxXQUF6QixFQUFzQztBQUNwQyxlQUFPLEtBQVA7QUFDRDs7QUFFREosYUFBTyxDQUFDSSxFQUFELENBQVA7QUFDQSxhQUFPLElBQVA7QUFDRCxLQVBEO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBSCxrREFBUyxDQUFDLFlBQU07QUFDZEssV0FBTyxDQUFDQyxHQUFSLENBQVlYLE1BQU0sQ0FBQ1ksUUFBbkI7QUFDRCxHQUZRLEVBRU4sQ0FBQ1osTUFBTSxDQUFDWSxRQUFSLENBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsZUFFSVQsSUFBSSxLQUFLVSxTQUFULGlCQUNBLDhEQUFDLDJDQUFEO0FBQU8sZUFBUyxFQUFFO0FBQUEsZUFBTWIsTUFBTSxDQUFDYyxJQUFQLENBQVksV0FBWixFQUF5QkQsU0FBekIsRUFBb0M7QUFBQ0UsaUJBQU8sRUFBRTtBQUFWLFNBQXBDLENBQU47QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosRUFNSVosSUFBSSxLQUFLLFdBQVQsaUJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBLGtCQURGO0FBWUQ7O0dBL0J1QkosSTtVQUNQRSw4RDs7O0tBRE9GLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MTQ4NjQzODBkY2JjNjUzOGRmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi9fYWJvdXQtbWUnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9faW50cm8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLmJlZm9yZVBvcFN0YXRlKCh7IHVybCwgYXMsIG9wdGlvbnMgfSkgPT4ge1xuICAgICAgaWYgKGFzICE9PSAnLycgJiYgYXMgIT09ICcvYWJvdXQtbWUnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2V0UGFnZShhcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSlcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBwYWdlID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgPEludHJvIHRvQWJvdXRNZT17KCkgPT4gcm91dGVyLnB1c2goJy9hYm91dC1tZScsIHVuZGVmaW5lZCwge3NoYWxsb3c6IHRydWV9KX0gLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcGFnZSA9PT0gJy9hYm91dC1tZScgJiZcbiAgICAgICAgPGRpdj5URVNUPC9kaXY+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9