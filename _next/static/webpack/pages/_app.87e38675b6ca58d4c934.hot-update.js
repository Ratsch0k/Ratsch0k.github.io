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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      initialPos = _useState2[0],
      setInitialPos = _useState2[1];

  var navigate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (path, title) {
    setPage(path);
    window.history.pushState(path, title, path);
  }, [page, setPage]);
  var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    if (event.deltaY < 0) {
      setPage('/');
    } else if (event.deltaY > 0) {
      setPage('/about-me');
    }
  }, [setPage]);
  var handleDragEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    setInitialPos({
      x: event.screenX,
      y: event.screenY
    });
  }, [setInitialPos]);
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    console.log(initialPos);

    if (initialPos !== undefined) {
      if (initialPos.y - event.screenY > 30) {
        setPage('/about-me');
      } else if (initialPos.y - event.screenY < -30) {
        setPage('/');
      }
    }
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.dir(initialPos);
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('mousedown', handleDragEnter);
    window.addEventListener('mouseup', handleDragEnd);
    return function () {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [initialPos]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "overflow-auto",
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
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(Home, "kUoUtoTKWPmqmn8o++n6JpCxI+0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImhhbmRsZURyYWdFbmQiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwiZGlyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVETixXQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNOLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1VLFlBQVksR0FBR04sa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQXVCO0FBQ3RELFFB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QUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBdEV1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg3ZTM4Njc1YjZjYTU4ZDRjOTM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignLycpXG4gIGNvbnN0IFtpbml0aWFsUG9zLCBzZXRJbml0aWFsUG9zXSA9IHVzZVN0YXRlPHt4OiBOdW1iZXIsIHk6IG51bWJlcn0+KCk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VDYWxsYmFjaygocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UGFnZShwYXRoKVxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShwYXRoLCB0aXRsZSwgcGF0aClcbiAgfSwgW3BhZ2UsIHNldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICBzZXRQYWdlKCcvJylcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgIHNldFBhZ2UoJy9hYm91dC1tZScpXG4gICAgfVxuICB9LCBbc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgc2V0SW5pdGlhbFBvcyh7eDogZXZlbnQuc2NyZWVuWCwgeTogZXZlbnQuc2NyZWVuWX0pO1xuICB9LCBbc2V0SW5pdGlhbFBvc10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxQb3MpXG4gICAgaWYgKGluaXRpYWxQb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGluaXRpYWxQb3MueSAtIGV2ZW50LnNjcmVlblkgPiAzMCkge1xuICAgICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgICAgfSBlbHNlIGlmIChpbml0aWFsUG9zLnkgLSBldmVudC5zY3JlZW5ZIDwgLTMwKSB7XG4gICAgICAgIHNldFBhZ2UoJy8nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5kaXIoaW5pdGlhbFBvcylcbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEcmFnRW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH0sIFtpbml0aWFsUG9zXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy8nID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnLycgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbnRybyB0b0Fib3V0TWU9eygpID0+IG5hdmlnYXRlKCcvYWJvdXQtbWUnLCAnQWJvdXQgTWUnKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBYm91dE1lIGdvQmFjaz17KCkgPT4gbmF2aWdhdGUoJy8nLCAnUG9ydGZvbGlvJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==