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
/* harmony import */ var _about_me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_about-me */ "./pages/_about-me.tsx");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_intro */ "./pages/_intro.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\simon\\Projects\\ratsch0k.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();





function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('/'),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      initialPos = _useState2[0],
      setInitialPos = _useState2[1];

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setPage(router.asPath);
  }, [router.asPath]);
  var toHome = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    navigate('/', 'Portfolio');
  }, [navigate]);
  var navigate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (path, title) {
    setPage(path);
    window.history.pushState(path, title, path);
  }, [page, setPage]);
  var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    if (event.deltaY < 0) {
      navigate('/', 'Portfolio');
    } else if (event.deltaY > 0) {
      navigate('/about-me', 'About Me');
    }
  }, [navigate]);
  var handleDragEnter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    if (event.touches && event.touches.length === 1) {
      var touch = event.touches.item(0);

      if (touch !== null) {
        setInitialPos({
          x: touch.screenX,
          y: touch.screenY
        });
      }
    }
  }, [setInitialPos]);
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    if (initialPos !== undefined && event.changedTouches && event.changedTouches.length === 1) {
      var touch = event.changedTouches.item(0);

      if (touch !== null) {
        if (initialPos.y - touch.screenY > 80) {
          setPage('/about-me');
        } else if (initialPos.y - touch.screenY < -80) {
          setPage('/');
        }
      }
    }
  }, [initialPos]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_intro__WEBPACK_IMPORTED_MODULE_4__.default, {
        toAboutMe: function toAboutMe() {
          return navigate('/about-me', 'About Me');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute h-full w-full overflow-hidden",
      style: {
        transition: 'transform ease-out 500ms, opacity ease-in 250ms',
        opacity: page === '/about-me' ? 1 : 0,
        transform: page === '/about-me' ? 'translateY(0)' : 'translateY(100%)'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_me__WEBPACK_IMPORTED_MODULE_3__.default, {
        goBack: function goBack() {
          return navigate('/', 'Portfolio');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(Home, "+9Fbj2R0eKNSK/h3MfFkvJZFpi4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJhc1BhdGgiLCJ0b0hvbWUiLCJ1c2VDYWxsYmFjayIsIm5hdmlnYXRlIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwidG91Y2hlcyIsImxlbmd0aCIsInRvdWNoIiwiaXRlbSIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJoYW5kbGVEcmFnRW5kIiwidW5kZWZpbmVkIiwiY2hhbmdlZFRvdWNoZXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUc3QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkTCxXQUFPLENBQUNHLE1BQU0sQ0FBQ0csTUFBUixDQUFQO0FBQ0QsR0FGUSxFQUVOLENBQUNILE1BQU0sQ0FBQ0csTUFBUixDQUZNLENBQVQ7QUFJQSxNQUFNQyxNQUFNLEdBQUdDLGtEQUFXLENBQUMsWUFBTTtBQUMvQkMsWUFBUSxDQUFD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R0F2RnVCWixJO1VBR1BPLDhEOzs7S0FIT1AsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1OWM4OWVkODNjOTAyNDI2YTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignLycpXG4gIGNvbnN0IFtpbml0aWFsUG9zLCBzZXRJbml0aWFsUG9zXSA9IHVzZVN0YXRlPHt4OiBOdW1iZXIsIHk6IG51bWJlcn0+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZShyb3V0ZXIuYXNQYXRoKVxuICB9LCBbcm91dGVyLmFzUGF0aF0pXG5cbiAgY29uc3QgdG9Ib21lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpXG4gIH0sIFtuYXZpZ2F0ZV0pXG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VDYWxsYmFjaygocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UGFnZShwYXRoKVxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShwYXRoLCB0aXRsZSwgcGF0aClcbiAgfSwgW3BhZ2UsIHNldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICBuYXZpZ2F0ZSgnLycsICdQb3J0Zm9saW8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgbmF2aWdhdGUoJy9hYm91dC1tZScsICdBYm91dCBNZScpXG4gICAgfVxuICB9LCBbbmF2aWdhdGVdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IHVzZUNhbGxiYWNrKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICh0b3VjaCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRJbml0aWFsUG9zKHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc2V0SW5pdGlhbFBvc10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgIGlmIChpbml0aWFsUG9zICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLml0ZW0oMCk7XG4gICAgICBpZiAodG91Y2ggIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGluaXRpYWxQb3MueSAtIHRvdWNoLnNjcmVlblkgPiA4MCkge1xuICAgICAgICAgIHNldFBhZ2UoJy9hYm91dC1tZScpXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFBvcy55IC0gdG91Y2guc2NyZWVuWSA8IC04MCkge1xuICAgICAgICAgIHNldFBhZ2UoJy8nKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZURyYWdFbmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy8nID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW50cm8gdG9BYm91dE1lPXsoKSA9PiBuYXZpZ2F0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnL2Fib3V0LW1lJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZSBnb0JhY2s9eygpID0+IG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=