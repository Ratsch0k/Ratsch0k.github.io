self["webpackHotUpdate_N_E"]("pages/about-me",{

/***/ "./pages/about-me.tsx":
/*!****************************!*\
  !*** ./pages/about-me.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\about-me.tsx";


function Block() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-white inline-block h-full ml-2 mr-2 align-middle",
    style: {
      width: '20%',
      height: '0.25rem'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Block;

function AboutMe() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "h-full",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-4xl text-center md:text-6xl pt-4 absolute",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Block, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "About Me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Block, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex h-full w-full items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: "text-xl border-solid border-2 p-2 rounded-lg hover:bg-secondary transition-colors",
            children: "GO BACK"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c2 = AboutMe;
;
/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

var _c, _c2;

$RefreshReg$(_c, "Block");
$RefreshReg$(_c2, "AboutMe");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQtbWUudHN4Il0sIm5hbWVzIjpbIkJsb2NrIiwid2lkdGgiLCJoZWlnaHQiLCJBYm91dE1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixzQkFDRTtBQUNFLGFBQVMsRUFBQyxxREFEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUU7QUFGSDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQVZRRixLOztBQVlULFNBQVNHLE9BQVQsR0FBbUI7QUFDakIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGdEQUFmO0FBQUEsOEJBQ0UsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFLLGVBQVMsRUFBQyxnREFBZjtBQUFBLDZCQUNFO0FBQUEsK0JBQUssOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlO0FBQUcscUJBQVMsRUFBQyxtRkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O01BYlFBLE87QUFhUjtBQUVELCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LW1lLjU3NDAxOTczZGM4MGJkMmUyZDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEJsb2NrKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGlubGluZS1ibG9jayBoLWZ1bGwgbWwtMiBtci0yIGFsaWduLW1pZGRsZVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzIwJScsXG4gICAgICAgIGhlaWdodDogJzAuMjVyZW0nXG4gICAgICB9fVxuICAgID48L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBBYm91dE1lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtNnhsIHB0LTQgYWJzb2x1dGVcIj5cbiAgICAgICAgPEJsb2NrIC8+XG4gICAgICAgIDxzcGFuPkFib3V0IE1lPC9zcGFuPlxuICAgICAgICA8QmxvY2sgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXY+PExpbmsgaHJlZj0nLyc+PGEgY2xhc3NOYW1lPVwidGV4dC14bCBib3JkZXItc29saWQgYm9yZGVyLTIgcC0yIHJvdW5kZWQtbGcgaG92ZXI6Ymctc2Vjb25kYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+R08gQkFDSzwvYT48L0xpbms+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XG4iXSwic291cmNlUm9vdCI6IiJ9