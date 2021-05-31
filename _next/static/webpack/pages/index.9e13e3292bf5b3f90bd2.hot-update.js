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
  var handleMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    setInitialPos({
      x: event.screenX,
      y: event.screenY
    });
  }, []);
  var handleDrag = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    isUp: bool;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('dragenter', handleMouseDown);
    window.addEventListener('dragover', handleDrag);
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
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_s(Home, "DUaZTU6XD7zrVzzECTyx5QYqLyE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlTW91c2VEb3duIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImhhbmRsZURyYWciLCJpc1VwIiwiYm9vbCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQVMsR0FBVCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVPRiwrQ0FBUSxFQUZmO0FBQUEsTUFFdEJHLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFJN0IsTUFBTUMsUUFBUSxHQUFHQyxrREFBVyxDQUFDLFVBQUNDLElBQUQsRUFBZUMsS0FBZixFQUFpQztBQUM1RE4sV0FBTyxDQUFDSyxJQUFELENBQVA7QUFDQUUsVUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJKLElBQXpCLEVBQStCQyxLQUEvQixFQUFzQ0QsSUFBdEM7QUFDRCxHQUgyQixFQUd6QixDQUFDTixJQUFELEVBQU9DLE9BQVAsQ0FIeUIsQ0FBNUI7QUFLQSxNQUFNVSxZQUFZLEdBQUdOLGtEQUFXLENBQUMsVUFBQ08sS0FBRCxFQUF1QjtBQUN0RCxRQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQlosYUFBTyxDQUFDLEdBQUQsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJVyxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUMzQlosYUFBTyxDQUFDLFdBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FOK0IsRUFNN0IsQ0FBQ0EsT0FBRCxDQU42QixDQUFoQztBQVFBLE1BQU1hLGVBQWUsR0FBR1Qsa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQXNCO0FBQ3hEVCxpQkFBYSxDQUFDO0FBQUNZLE9BQUMsRUFBRUgsS0FBSyxDQUFDSSxPQUFWO0FBQW1CQyxPQUFDLEVBQUVMLEtBQUssQ0FBQ007QUFBNUIsS0FBRCxDQUFiO0FBQ0QsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7QUFJQSxNQUFNQyxVQUFVLEdBQUdkLGtEQUFXLENBQUMsVUFBQ08sS0FBRCxFQUFzQjtBQUNuRFEsUUFBSSxFQUFFQyxJQUFJO0FBQ1gsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RkLFVBQU0sQ0FBQ2UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNaLFlBQWpDO0FBQ0FILFVBQU0sQ0FBQ2UsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNULGVBQXJDO0FBQ0FOLFVBQU0sQ0FBQ2UsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0NKLFVBQXBDO0FBRUEsV0FBTyxZQUFNO0FBQ1hYLFlBQU0sQ0FBQ2dCLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DYixZQUFwQztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xjLGtCQUFVLEVBQUUsaURBRFA7QUFFTEMsZUFBTyxFQUFFMUIsSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFmLEdBQW1CLENBRnZCO0FBR0wyQixpQkFBUyxFQUFFM0IsSUFBSSxLQUFLLEdBQVQsR0FBZSxlQUFmLEdBQWlDO0FBSHZDLE9BRlQ7QUFBQSw2QkFRRSw4REFBQywyQ0FBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLFdBQUQsRUFBYyxVQUFkLENBQWQ7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFDRSxlQUFTLEVBQUMsd0NBRFo7QUFFRSxXQUFLLEVBQUU7QUFDTHFCLGtCQUFVLEVBQUUsaURBRFA7QUFFTEMsZUFBTyxFQUFFMUIsSUFBSSxLQUFLLFdBQVQsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FGL0I7QUFHTDJCLGlCQUFTLEVBQUUzQixJQUFJLEtBQUssV0FBVCxHQUF1QixlQUF2QixHQUF5QztBQUgvQyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsOENBQUQ7QUFBUyxjQUFNLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLEdBQUQsRUFBTSxXQUFOLENBQWQ7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQTNEdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWUxM2UzMjkyYmY1YjNmOTBiZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcvJylcbiAgY29uc3QgW2luaXRpYWxQb3MsIHNldEluaXRpYWxQb3NdID0gdXNlU3RhdGU8e3g6IE51bWJlciwgeTogbnVtYmVyfT4oKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlKHBhdGgpXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHBhdGgsIHRpdGxlLCBwYXRoKVxuICB9LCBbcGFnZSwgc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHNldFBhZ2UoJy8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICB9XG4gIH0sIFtzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSB1c2VDYWxsYmFjaygoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgIHNldEluaXRpYWxQb3Moe3g6IGV2ZW50LnNjcmVlblgsIHk6IGV2ZW50LnNjcmVlbll9KTtcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9IHVzZUNhbGxiYWNrKChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgaXNVcDogYm9vbFxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgaGFuZGxlTW91c2VEb3duKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZURyYWcpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy8nID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW50cm8gdG9BYm91dE1lPXsoKSA9PiBuYXZpZ2F0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnL2Fib3V0LW1lJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZSBnb0JhY2s9eygpID0+IG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=