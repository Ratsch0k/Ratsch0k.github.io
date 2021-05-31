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
    console.dir(event.touches);

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
    if (initialPos !== undefined && event.touches.length === 1) {
      var touch = event.touches.item(0);

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
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwiY29uc29sZSIsImRpciIsInRvdWNoZXMiLCJsZW5ndGgiLCJ0b3VjaCIsIml0ZW0iLCJ4Iiwic2NyZWVuWCIsInkiLCJzY3JlZW5ZIiwiaGFuZGxlRHJhZ0VuZCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQVMsR0FBVCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVPRiwrQ0FBUSxFQUZmO0FBQUEsTUFFdEJHLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFJN0IsTUFBTUMsUUFBUSxHQUFHQyxrREFBVyxDQUFDLFVBQUNDLElBQUQsRUFBZUMsS0FBZixFQUFpQztBQUM1RE4sV0FBTyxDQUFDSyxJQUFELENBQVA7QUFDQUUsVUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJKLElBQXpCLEVBQStCQyxLQUEvQixFQUFzQ0QsSUFBdEM7QUFDRCxHQUgyQixFQUd6QixDQUFDTixJQUFELEVBQU9DLE9BQVAsQ0FIeUIsQ0FBNUI7QUFLQSxNQUFNVSxZQUFZLEdBQUdOLGtEQUFXLENB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QW1CLENBRnZCO0FBR0xnQyxpQkFBUyxFQUFFaEMsSUFBSSxLQUFLLEdBQVQsR0FBZSxlQUFmLEdBQWlDO0FBSHZDLE9BRlQ7QUFBQSw2QkFRRSw4REFBQywyQ0FBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLFdBQUQsRUFBYyxVQUFkLENBQWQ7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFDRSxlQUFTLEVBQUMsd0NBRFo7QUFFRSxXQUFLLEVBQUU7QUFDTDBCLGtCQUFVLEVBQUUsaURBRFA7QUFFTEMsZUFBTyxFQUFFL0IsSUFBSSxLQUFLLFdBQVQsR0FBdUIsQ0FBdkIsR0FBMkIsQ0FGL0I7QUFHTGdDLGlCQUFTLEVBQUVoQyxJQUFJLEtBQUssV0FBVCxHQUF1QixlQUF2QixHQUF5QztBQUgvQyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsOENBQUQ7QUFBUyxjQUFNLEVBQUU7QUFBQSxpQkFBTUksUUFBUSxDQUFDLEdBQUQsRUFBTSxXQUFOLENBQWQ7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQS9FdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNDkwMTY0NDdhYjI5NTkxM2M5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFib3V0TWUgZnJvbSAnLi9fYWJvdXQtbWUnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9faW50cm8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oJy8nKVxuICBjb25zdCBbaW5pdGlhbFBvcywgc2V0SW5pdGlhbFBvc10gPSB1c2VTdGF0ZTx7eDogTnVtYmVyLCB5OiBudW1iZXJ9PigpO1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlQ2FsbGJhY2soKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4ge1xuICAgIHNldFBhZ2UocGF0aClcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUocGF0aCwgdGl0bGUsIHBhdGgpXG4gIH0sIFtwYWdlLCBzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgc2V0UGFnZSgnLycpXG4gICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgIH1cbiAgfSwgW3NldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IHVzZUNhbGxiYWNrKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuZGlyKGV2ZW50LnRvdWNoZXMpXG4gICAgaWYgKGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXMuaXRlbSgwKTtcbiAgICAgIGlmICh0b3VjaCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRJbml0aWFsUG9zKHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc2V0SW5pdGlhbFBvc10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgIGlmIChpbml0aWFsUG9zICE9PSB1bmRlZmluZWQgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlcy5pdGVtKDApO1xuICAgICAgaWYgKHRvdWNoICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpbml0aWFsUG9zLnkgLSB0b3VjaC5zY3JlZW5ZID4gMzApIHtcbiAgICAgICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxQb3MueSAtIHRvdWNoLnNjcmVlblkgPCAtMzApIHtcbiAgICAgICAgICBzZXRQYWdlKCcvJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlRHJhZ0VudGVyKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZURyYWdFbmQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlRHJhZ0VudGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZURyYWdFbmQpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVEcmFnRW5kKVxuICAgIH1cbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnLycgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEludHJvIHRvQWJvdXRNZT17KCkgPT4gbmF2aWdhdGUoJy9hYm91dC1tZScsICdBYm91dCBNZScpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnL2Fib3V0LW1lJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFib3V0TWUgZ29CYWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycsICdQb3J0Zm9saW8nKX0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9