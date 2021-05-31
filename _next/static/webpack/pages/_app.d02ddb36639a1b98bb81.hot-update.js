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

  var handleDragEnter = function handleDragEnter(event) {
    setInitialPos({
      x: event.screenX,
      y: event.screenY
    });
    console.log(event.screenY);
  };

  var handleDragEnd = function handleDragEnd(event) {
    console.log(initialPos ? "TRUE" : "FALSE");

    if (initialPos !== undefined) {
      if (initialPos.y - event.screenY > 30) {
        setPage('/about-me');
      } else if (initialPos.y - event.screenY < -30) {
        setPage('/');
      }
    }
  };

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
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Home, "3kwa6mGWsaE2PSm22e1T85OWj6w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwieCIsInNjcmVlblgiLCJ5Iiwic2NyZWVuWSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnRW5kIiwidW5kZWZpbmVkIiwidXNlRWZmZWN0IiwiZGlyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUk3QixNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVETixXQUFPLENBQUNLLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNOLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1VLFlBQVksR0FBR04sa0RBQVcsQ0FBQyxVQUFDTyxLQUFELEVBQXVCO0FBQ3RELFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQ3BCWixhQUFPLENBQUMsR0FBRCxDQUFQO0FBQ0QsS0FGRCxNQUVPLElBQUlXLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQW5CLEVBQXNCO0FBQzNCWixhQUFPLENBQUMsV0FBRCxDQUFQO0FBQ0Q7QUFDRixHQU4rQixFQU03QixDQUFDQSxPQUFELENBTjZCLENBQWhDOztBQVFBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0YsS0FBRCxFQUF1QjtBQUM3Q1QsaUJBQWEsQ0FBQztBQUFDWSxPQUFDLEVBQUVILEtBQUssQ0FBQ0ksT0FBVjtBQUFtQkMsT0FBQyxFQUFFTCxLQUFLLENBQUNNO0FBQTVCLEtBQUQsQ0FBYjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBSyxDQUFDTSxPQUFsQjtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDVCxLQUFELEVBQXVCO0FBQzNDTyxXQUFPLENBQUNDLEdBQVIsQ0FBWWxCLFVBQVUsR0FBRyxNQUFILEdBQVksT0FBbEM7O0FBQ0EsUUFBSUEsVUFBVSxLQUFLb0IsU0FBbkIsRUFBOEI7QUFDNUIsVUFBSXBCLFVBQVUsQ0FBQ2UsQ0FBWCxHQUFlTCxLQUFLLENBQUNNLE9BQXJCLEdBQStCLEVBQW5DLEVBQXVDO0FBQ3JDakIsZUFBTyxDQUFDLFdBQUQsQ0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJQyxVQUFVLENBQUNlLENBQVgsR0FBZUwsS0FBSyxDQUFDTSxPQUFyQixHQUErQixDQUFDLEVBQXBDLEVBQXdDO0FBQzdDakIsZUFBTyxDQUFDLEdBQUQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixHQVREOztBQVdBc0Isa0RBQVMsQ0FBQyxZQUFNO0FBQ2RKLFdBQU8sQ0FBQ0ssR0FBUixDQUFZdEIsVUFBWjtBQUNELEdBRlEsRUFFTixDQUFDQSxVQUFELENBRk0sQ0FBVDtBQUlBcUIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RmLFVBQU0sQ0FBQ2lCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDZCxZQUFqQztBQUNBSCxVQUFNLENBQUNpQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1gsZUFBckM7QUFDQU4sVUFBTSxDQUFDaUIsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNKLGFBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1hiLFlBQU0sQ0FBQ2tCLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DZixZQUFwQztBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xnQixrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRTVCLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBZixHQUFtQixDQUZ2QjtBQUdMNkIsaUJBQVMsRUFBRTdCLElBQUksS0FBSyxHQUFULEdBQWUsZUFBZixHQUFpQztBQUh2QyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsMkNBQUQ7QUFBTyxpQkFBUyxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQyxXQUFELEVBQWMsVUFBZCxDQUFkO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0x1QixrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRTVCLElBQUksS0FBSyxXQUFULEdBQXVCLENBQXZCLEdBQTJCLENBRi9CO0FBR0w2QixpQkFBUyxFQUFFN0IsSUFBSSxLQUFLLFdBQVQsR0FBdUIsZUFBdkIsR0FBeUM7QUFIL0MsT0FGVDtBQUFBLDZCQVFFLDhEQUFDLDhDQUFEO0FBQVMsY0FBTSxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQyxHQUFELEVBQU0sV0FBTixDQUFkO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0F2RXVCTixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDAyZGRiMzY2MzlhMWI5OGJiODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcvJylcbiAgY29uc3QgW2luaXRpYWxQb3MsIHNldEluaXRpYWxQb3NdID0gdXNlU3RhdGU8e3g6IE51bWJlciwgeTogbnVtYmVyfT4oKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlKHBhdGgpXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHBhdGgsIHRpdGxlLCBwYXRoKVxuICB9LCBbcGFnZSwgc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHNldFBhZ2UoJy8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICB9XG4gIH0sIFtzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBzZXRJbml0aWFsUG9zKHt4OiBldmVudC5zY3JlZW5YLCB5OiBldmVudC5zY3JlZW5ZfSk7XG4gICAgY29uc29sZS5sb2coZXZlbnQuc2NyZWVuWSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbml0aWFsUG9zID8gXCJUUlVFXCIgOiBcIkZBTFNFXCIpXG4gICAgaWYgKGluaXRpYWxQb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGluaXRpYWxQb3MueSAtIGV2ZW50LnNjcmVlblkgPiAzMCkge1xuICAgICAgICBzZXRQYWdlKCcvYWJvdXQtbWUnKVxuICAgICAgfSBlbHNlIGlmIChpbml0aWFsUG9zLnkgLSBldmVudC5zY3JlZW5ZIDwgLTMwKSB7XG4gICAgICAgIHNldFBhZ2UoJy8nKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5kaXIoaW5pdGlhbFBvcylcbiAgfSwgW2luaXRpYWxQb3NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEcmFnRW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnLycgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEludHJvIHRvQWJvdXRNZT17KCkgPT4gbmF2aWdhdGUoJy9hYm91dC1tZScsICdBYm91dCBNZScpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBlYXNlLW91dCA1MDBtcywgb3BhY2l0eSBlYXNlLWluIDI1MG1zJyxcbiAgICAgICAgICBvcGFjaXR5OiBwYWdlID09PSAnL2Fib3V0LW1lJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEFib3V0TWUgZ29CYWNrPXsoKSA9PiBuYXZpZ2F0ZSgnLycsICdQb3J0Zm9saW8nKX0vPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9