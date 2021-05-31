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
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImhhbmRsZURyYWdFbmQiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwiZGlyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVETixXQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNOLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1VLFlBQVksR0FBR04sa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQXVCO0FBQ3RELFFB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UDtBQUVMQyxlQUFPLEVBQUU1QixJQUFJLEtBQUssV0FBVCxHQUF1QixDQUF2QixHQUEyQixDQUYvQjtBQUdMNkIsaUJBQVMsRUFBRTdCLElBQUksS0FBSyxXQUFULEdBQXVCLGVBQXZCLEdBQXlDO0FBSC9DLE9BRlQ7QUFBQSw2QkFRRSw4REFBQyw4Q0FBRDtBQUFTLGNBQU0sRUFBRTtBQUFBLGlCQUFNSSxRQUFRLENBQUMsR0FBRCxFQUFNLFdBQU4sQ0FBZDtBQUFBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBM0V1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjRjMjY5Y2IzZWQ5ZDE0Y2M1ZThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignLycpXG4gIGNvbnN0IFtpbml0aWFsUG9zLCBzZXRJbml0aWFsUG9zXSA9IHVzZVN0YXRlPHt4OiBOdW1iZXIsIHk6IG51bWJlcn0+KCk7XG5cbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VDYWxsYmFjaygocGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0UGFnZShwYXRoKVxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShwYXRoLCB0aXRsZSwgcGF0aClcbiAgfSwgW3BhZ2UsIHNldFBhZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICBzZXRQYWdlKCcvJylcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgIHNldFBhZ2UoJy9hYm91dC1tZScpXG4gICAgfVxuICB9LCBbc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgc2V0SW5pdGlhbFBvcyh7eDogZXZlbnQuc2NyZWVuWCwgeTogZXZlbnQuc2NyZWVuWX0pO1xuICB9LCBbc2V0SW5pdGlhbFBvc10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxQb3MpXG4gICAgaWYgKGluaXRpYWxQb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGluaXRpYWxQb3MueSAtIGV2ZW50LnNjcmVlblkgPiAzMCkge1xuICAgICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgICAgfSBlbHNlIGlmIChpbml0aWFsUG9zLnkgLSBldmVudC5zY3JlZW5ZIDwgLTMwKSB7XG4gICAgICAgIHNldFBhZ2UoJy8nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5kaXIoaW5pdGlhbFBvcylcbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEcmFnRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlRHJhZ0VudGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRHJhZ0VuZClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlRHJhZ0VudGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEcmFnRW5kKVxuICAgIH1cbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnLycgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEludHJvIHRvQWJvdXRNZT17KCkgPT4gbmF2aWdhdGUoJy9hYm91dC1tZScsICdBYm91dCBNZScpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnL2Fib3V0LW1lJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFib3V0TWUgZ29CYWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycsICdQb3J0Zm9saW8nKX0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9