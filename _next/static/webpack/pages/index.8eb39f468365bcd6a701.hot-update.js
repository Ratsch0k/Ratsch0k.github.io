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
    if (initialPos !== undefined) {
      if (initialPos.y - event.screenY > 30) {
        setPage('/about-me');
      } else if (initialPos.y - event.screenY < -30) {
        setPage('/');
      }
    }
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('mousedown', handleDragEnter);
    window.removeEventListener('mouseup', handleDragEnd);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('mousedown', handleDragEnter);
    window.addEventListener('mouseup', handleDragEnd);
    return function () {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('mousedown', handleDragEnter);
      window.removeEventListener('mouseup', handleDragEnd);
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

_s(Home, "g2YGfB2Tbs7OWVmM+c9dx6WwEDA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImhhbmRsZURyYWdFbmQiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFTLEdBQVQsQ0FESDtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFBQSxtQkFFT0YsK0NBQVEsRUFGZjtBQUFBLE1BRXRCRyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBSTdCLE1BQU1DLFFBQVEsR0FBR0Msa0RBQVcsQ0FBQyxVQUFDQyxJQUFELEVBQWVDLEtBQWYsRUFBaUM7QUFDNUROLFdBQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBQ0FFLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCSixJQUF6QixFQUErQkMsS0FBL0IsRUFBc0NELElBQXRDO0FBQ0QsR0FIMkIsRUFHekIsQ0FBQ04sSUFBRCxFQUFPQyxPQUFQLENBSHlCLENBQTVCO0FBS0EsTUFBTVUsWUFBWSxHQUFHTixrREFBVyxDQUFDLFVBQUNPLEtBQUQsRUFBdUI7QUFDdEQsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdB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RTtBQUFBLGlCQUFNSSxRQUFRLENBQUMsR0FBRCxFQUFNLFdBQU4sQ0FBZDtBQUFBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBdEV1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZWIzOWY0NjgzNjViY2Q2YTcwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi9fYWJvdXQtbWUnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9faW50cm8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJy8nKVxuICBjb25zdCBbaW5pdGlhbFBvcywgc2V0SW5pdGlhbFBvc10gPSB1c2VTdGF0ZTx7eDogTnVtYmVyLCB5OiBudW1iZXJ9PigpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlQ2FsbGJhY2soKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4ge1xuICAgIHNldFBhZ2UocGF0aClcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUocGF0aCwgdGl0bGUsIHBhdGgpXG4gIH0sIFtwYWdlLCBzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgc2V0UGFnZSgnLycpXG4gICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgIH1cbiAgfSwgW3NldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIHNldEluaXRpYWxQb3Moe3g6IGV2ZW50LnNjcmVlblgsIHk6IGV2ZW50LnNjcmVlbll9KTtcbiAgfSwgW3NldEluaXRpYWxQb3NdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoaW5pdGlhbFBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaW5pdGlhbFBvcy55IC0gZXZlbnQuc2NyZWVuWSA+IDMwKSB7XG4gICAgICAgIHNldFBhZ2UoJy9hYm91dC1tZScpXG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxQb3MueSAtIGV2ZW50LnNjcmVlblkgPCAtMzApIHtcbiAgICAgICAgc2V0UGFnZSgnLycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURyYWdFbmQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEcmFnRW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURyYWdFbmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy8nID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW50cm8gdG9BYm91dE1lPXsoKSA9PiBuYXZpZ2F0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnL2Fib3V0LW1lJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZSBnb0JhY2s9eygpID0+IG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=