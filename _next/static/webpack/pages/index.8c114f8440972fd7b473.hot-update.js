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
    if (event.touches.length === 1) {
      var touch = event.touches.item(0);

      if (touch !== null) {
        setInitialPos({
          x: touch.screenX,
          y: touch.screenY
        });
      }
    }
  }, [setInitialPos]);
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    if (initialPos !== undefined && event.changedTouches.length === 1) {
      var touch = event.changedTouches.item(0);

      if (touch !== null) {
        if (initialPos.y - touch.screenY > 30) {
          setPage('/about-me');
        } else if (initialPos.y - touch.screenY < -30) {
          setPage('/');
        }
      }
    }
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('touchstart', handleDragEnter);
    window.removeEventListener('touchend', handleDragEnd);
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleDragEnter);
    window.addEventListener('touchend', handleDragEnd);
    return function () {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleDragEnter);
      window.removeEventListener('touchend', handleDragEnd);
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
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwidG91Y2hlcyIsImxlbmd0aCIsInRvdWNoIiwiaXRlbSIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJoYW5kbGVEcmFnRW5kIiwidW5kZWZpbmVkIiwiY2hhbmdlZFRvdWNoZXMiLCJ1c2VFZmZlY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFTLEdBQVQsQ0FESDtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFBQSxtQkFFT0YsK0NBQVEsRUFGZjtBQUFBLE1BRXRCRyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBSTdCLE1BQU1DLFFBQVEsR0FBR0Msa0RBQVcsQ0FBQyxVQUFDQyxJQUFELEVBQWVDLEtBQWYsRUFBaUM7QUFDNUROLFdBQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBQ0FFLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxTQUFmLENBQXlCSixJQUF6QixFQUErQkMsS0FBL0IsRUFBc0NELElBQXRDO0FBQ0QsR0FIMkIsRUFHekIsQ0FBQ04sSUFBRCxFQUFPQyxPQUFQLENBSHlCLENBQTVCO0FBS0EsTUFBTVUsWUFBWSxHQUFHTixrREFBVyxD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R0FBZSxlQUFmLEdBQWlDO0FBSHZDLE9BRlQ7QUFBQSw2QkFRRSw4REFBQywyQ0FBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLFdBQUQsRUFBYyxVQUFkLENBQWQ7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFDRSxlQUFTLEVBQUMsd0NBRFo7QUFFRSxXQUFLLEVBQUU7QUFDTHlCLGtCQUFVLEVBQUUsaURBRFA7QUFFTEMsZUFBTyxFQUFFOUIsSUFBSSxLQUFLLFdBQVQsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FGL0I7QUFHTCtCLGlCQUFTLEVBQUUvQixJQUFJLEtBQUssV0FBVCxHQUF1QixlQUF2QixHQUF5QztBQUgvQyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsOENBQUQ7QUFBUyxjQUFNLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLEdBQUQsRUFBTSxXQUFOLENBQWQ7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQTlFdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGMxMTRmODQ0MDk3MmZkN2I0NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcvJylcbiAgY29uc3QgW2luaXRpYWxQb3MsIHNldEluaXRpYWxQb3NdID0gdXNlU3RhdGU8e3g6IE51bWJlciwgeTogbnVtYmVyfT4oKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlKHBhdGgpXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHBhdGgsIHRpdGxlLCBwYXRoKVxuICB9LCBbcGFnZSwgc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHNldFBhZ2UoJy8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICB9XG4gIH0sIFtzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlcy5pdGVtKDApO1xuICAgICAgaWYgKHRvdWNoICE9PSBudWxsKSB7XG4gICAgICAgIHNldEluaXRpYWxQb3Moe3g6IHRvdWNoLnNjcmVlblgsIHk6IHRvdWNoLnNjcmVlbll9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzZXRJbml0aWFsUG9zXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgaWYgKGluaXRpYWxQb3MgIT09IHVuZGVmaW5lZCAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICh0b3VjaCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaW5pdGlhbFBvcy55IC0gdG91Y2guc2NyZWVuWSA+IDMwKSB7XG4gICAgICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsUG9zLnkgLSB0b3VjaC5zY3JlZW5ZIDwgLTMwKSB7XG4gICAgICAgICAgc2V0UGFnZSgnLycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbml0aWFsUG9zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVEcmFnRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVEcmFnRW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlRHJhZ0VudGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcbiAgICB9XG4gIH0sIFtpbml0aWFsUG9zXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy8nID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnLycgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbnRybyB0b0Fib3V0TWU9eygpID0+IG5hdmlnYXRlKCcvYWJvdXQtbWUnLCAnQWJvdXQgTWUnKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBYm91dE1lIGdvQmFjaz17KCkgPT4gbmF2aWdhdGUoJy8nLCAnUG9ydGZvbGlvJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==