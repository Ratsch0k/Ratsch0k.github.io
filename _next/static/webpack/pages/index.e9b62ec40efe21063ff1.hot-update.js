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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_me__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_about-me */ "./pages/_about-me.tsx");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();




function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('/'),
      page = _useState[0],
      setPage = _useState[1];

  var navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (path, title) {
    setPage(path);
    window.history.pushState(path, title, path);
  }, [page, setPage]);
  var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute h-full w-full overflow-hidden",
      style: {
        transition: 'transform ease-out 500ms, opacity ease-in 250ms',
        opacity: page === '/' ? 1 : 0,
        transform: page === '/' ? 'translateY(0)' : 'translateY(-100%)'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_intro__WEBPACK_IMPORTED_MODULE_3__.default, {
        toAboutMe: function toAboutMe() {
          return navigate('/about-me', 'About Me');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute h-full w-full overflow-hidden",
      style: {
        transition: 'transform ease-out 500ms, opacity ease-in 250ms',
        opacity: page === '/about-me' ? 1 : 0,
        transform: page === '/about-me' ? 'translateY(0)' : 'translateY(100%)'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_me__WEBPACK_IMPORTED_MODULE_2__.default, {
        goBack: function goBack() {
          return navigate('/', 'Portfolio');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Home, "aXdxs2rtXgY3FGDV4nQVaJuGolg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwibmF2aWdhdGUiLCJ1c2VDYWxsYmFjayIsInBhdGgiLCJ0aXRsZSIsIndpbmRvdyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQVMsR0FBVCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUc3QixNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVESixXQUFPLENBQUNHLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNKLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1RLFlBQVksR0FBR04sa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQWtCLENBRWxELENBRitCLENBQWhDO0FBSUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkTCxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYSCxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBQyx3Q0FEWjtBQUVFLFdBQUssRUFBRTtBQUNMSyxrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRWYsSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFmLEdBQW1CLENBRnZCO0FBR0xnQixpQkFBUyxFQUFFaEIsSUFBSSxLQUFLLEdBQVQsR0FBZSxlQUFmLEdBQWlDO0FBSHZDLE9BRlQ7QUFBQSw2QkFRRSw4REFBQywyQ0FBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQSxpQkFBTUUsUUFBUSxDQUFDLFdBQUQsRUFBYyxVQUFkLENBQWQ7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFDRSxlQUFTLEVBQUMsd0NBRFo7QUFFRSxXQUFLLEVBQUU7QUFDTFksa0JBQVUsRUFBRSxpREFEUDtBQUVMQyxlQUFPLEVBQUVmLElBQUksS0FBSyxXQUFULEdBQXVCLENBQXZCLEdBQTJCLENBRi9CO0FBR0xnQixpQkFBUyxFQUFFaEIsSUFBSSxLQUFLLFdBQVQsR0FBdUIsZUFBdkIsR0FBeUM7QUFIL0MsT0FGVDtBQUFBLDZCQVFFLDhEQUFDLDhDQUFEO0FBQVMsY0FBTSxFQUFFO0FBQUEsaUJBQU1FLFFBQVEsQ0FBQyxHQUFELEVBQU0sV0FBTixDQUFkO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E1Q3VCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5YjYyZWM0MGVmZTIxMDYzZmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignLycpXG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VDYWxsYmFjaygocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UGFnZShwYXRoKVxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShwYXRoLCB0aXRsZSwgcGF0aClcbiAgfSwgW3BhZ2UsIHNldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKChldmVudDogRXZlbnQpID0+IHtcblxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy8nID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnLycgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbnRybyB0b0Fib3V0TWU9eygpID0+IG5hdmlnYXRlKCcvYWJvdXQtbWUnLCAnQWJvdXQgTWUnKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBYm91dE1lIGdvQmFjaz17KCkgPT4gbmF2aWdhdGUoJy8nLCAnUG9ydGZvbGlvJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==