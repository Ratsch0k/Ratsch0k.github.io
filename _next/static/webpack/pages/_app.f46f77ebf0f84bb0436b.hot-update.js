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

      window.location.pathname = as;
      setPage(as);
      return false;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(page);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [page === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_intro__WEBPACK_IMPORTED_MODULE_3__.default, {
      toAboutMe: function toAboutMe() {
        return router.push('/about-me', undefined, {
          shallow: true
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), page === '/about-me' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "TEST"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiYmVmb3JlUG9wU3RhdGUiLCJ1cmwiLCJhcyIsIm9wdGlvbnMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInB1c2giLCJzaGFsbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7O0FBRDZCLGtCQUVMQywrQ0FBUSxFQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUk3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RMLFVBQU0sQ0FBQ00sY0FBUCxDQUFzQixnQkFBMEI7QUFBQSxVQUF2QkMsR0FBdUIsUUFBdkJBLEdBQXVCO0FBQUEsVUFBbEJDLEVBQWtCLFFBQWxCQSxFQUFrQjtBQUFBLFVBQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDOUMsVUFBSUQsRUFBRSxLQUFLLEdBQVAsSUFBY0EsRUFBRSxLQUFLLFdBQXpCLEVBQXNDO0FBQ3BDLGVBQU8sS0FBUDtBQUNEOztBQUVERSxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCSixFQUEzQjtBQUNBSixhQUFPLENBQUNJLEVBQUQsQ0FBUDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBUkQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUFILGtEQUFTLENBQUMsWUFBTTtBQUNkUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNELEdBRlEsQ0FBVDtBQUlBLHNCQUNFO0FBQUEsZUFFSUEsSUFBSSxLQUFLWSxTQUFULGlCQUNBLDhEQUFDLDJDQUFEO0FBQU8sZUFBUyxFQUFFO0FBQUEsZUFBTWYsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZLFdBQVosRUFBeUJELFNBQXpCLEVBQW9DO0FBQUNFLGlCQUFPLEVBQUU7QUFBVixTQUFwQyxDQUFOO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBTUlkLElBQUksS0FBSyxXQUFULGlCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQSxrQkFERjtBQVlEOztHQWhDdUJKLEk7VUFDUEUsOEQ7OztLQURPRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjQ2Zjc3ZWJmMGY4NGJiMDQzNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJvdXRlci5iZWZvcmVQb3BTdGF0ZSgoeyB1cmwsIGFzLCBvcHRpb25zIH0pID0+IHtcbiAgICAgIGlmIChhcyAhPT0gJy8nICYmIGFzICE9PSAnL2Fib3V0LW1lJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IGFzXG4gICAgICBzZXRQYWdlKGFzKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBhZ2UpXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBwYWdlID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgPEludHJvIHRvQWJvdXRNZT17KCkgPT4gcm91dGVyLnB1c2goJy9hYm91dC1tZScsIHVuZGVmaW5lZCwge3NoYWxsb3c6IHRydWV9KX0gLz5cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgcGFnZSA9PT0gJy9hYm91dC1tZScgJiZcbiAgICAgICAgPGRpdj5URVNUPC9kaXY+XG4gICAgICB9XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9