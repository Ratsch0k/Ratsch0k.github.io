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
  }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImhhbmRsZURyYWdFbmQiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwiZGlyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVETixXQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNOLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1VLFlBQVksR0FBR04sa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQXVCO0FBQ3RELFFB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QSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQXRFdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU5M2E3MTgyM2JhNmYwMWMwM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcvJylcbiAgY29uc3QgW2luaXRpYWxQb3MsIHNldEluaXRpYWxQb3NdID0gdXNlU3RhdGU8e3g6IE51bWJlciwgeTogbnVtYmVyfT4oKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlKHBhdGgpXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHBhdGgsIHRpdGxlLCBwYXRoKVxuICB9LCBbcGFnZSwgc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHNldFBhZ2UoJy8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICB9XG4gIH0sIFtzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBzZXRJbml0aWFsUG9zKHt4OiBldmVudC5zY3JlZW5YLCB5OiBldmVudC5zY3JlZW5ZfSk7XG4gIH0sIFtzZXRJbml0aWFsUG9zXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5pdGlhbFBvcylcbiAgICBpZiAoaW5pdGlhbFBvcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaW5pdGlhbFBvcy55IC0gZXZlbnQuc2NyZWVuWSA+IDMwKSB7XG4gICAgICAgIHNldFBhZ2UoJy9hYm91dC1tZScpXG4gICAgICB9IGVsc2UgaWYgKGluaXRpYWxQb3MueSAtIGV2ZW50LnNjcmVlblkgPCAtMzApIHtcbiAgICAgICAgc2V0UGFnZSgnLycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmRpcihpbml0aWFsUG9zKVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURyYWdFbmQpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy8nID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW50cm8gdG9BYm91dE1lPXsoKSA9PiBuYXZpZ2F0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnL2Fib3V0LW1lJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZSBnb0JhY2s9eygpID0+IG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=