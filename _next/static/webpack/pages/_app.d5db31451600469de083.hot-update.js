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
      console.dir(touch);

      if (touch !== null) {
        setInitialPos({
          x: touch.screenX,
          y: touch.screenY
        });
      }
    }
  }, [setInitialPos]);
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    console.dir(event.touches);

    if (initialPos !== undefined && event.touches.length === 1) {
      var touch = event.touches.item(0);
      console.dir(touch);

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
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwiY29uc29sZSIsImRpciIsInRvdWNoZXMiLCJsZW5ndGgiLCJ0b3VjaCIsIml0ZW0iLCJ4Iiwic2NyZWVuWCIsInkiLCJzY3JlZW5ZIiwiaGFuZGxlRHJhZ0VuZCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQVMsR0FBVCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLG1CQUVPRiwrQ0FBUSxFQUZmO0FBQUEsTUFFdEJHLFVBRnNCO0FBQUEsTUFFVkMsYUFGVTs7QUFJN0IsTUFBTUMsUUFBUSxHQUFHQyxrREFBVyxDQUFDLFVBQUNDLElBQUQsRUFBZUMsS0FBZixFQUFpQztBQUM1RE4sV0FBTyxDQUFDSyxJQUFELENBQVA7QUFDQUUsVUFBTSxDQUFDQyxPQUFQLENBQWVDLFNBQWYsQ0FBeUJKLElBQXpCLEVBQStCQyxLQUEvQixFQUFzQ0QsSUFBdEM7QUFDRCxHQUgyQixFQUd6QixDQUFDTixJQUFELEVBQU9DLE9BQVAsQ0FIeUIsQ0FBNUI7QUFLQSxNQUFNVSxZQUFZLEdBQUdOLGtEQUFXLENB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LDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0w0QixrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRS9CLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBZixHQUFtQixDQUZ2QjtBQUdMZ0MsaUJBQVMsRUFBRWhDLElBQUksS0FBSyxHQUFULEdBQWUsZUFBZixHQUFpQztBQUh2QyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsMkNBQUQ7QUFBTyxpQkFBUyxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQyxXQUFELEVBQWMsVUFBZCxDQUFkO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0wwQixrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRS9CLElBQUksS0FBSyxXQUFULEdBQXVCLENBQXZCLEdBQTJCLENBRi9CO0FBR0xnQyxpQkFBUyxFQUFFaEMsSUFBSSxLQUFLLFdBQVQsR0FBdUIsZUFBdkIsR0FBeUM7QUFIL0MsT0FGVDtBQUFBLDZCQVFFLDhEQUFDLDhDQUFEO0FBQVMsY0FBTSxFQUFFO0FBQUEsaUJBQU1JLFFBQVEsQ0FBQyxHQUFELEVBQU0sV0FBTixDQUFkO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0FsRnVCTixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDVkYjMxNDUxNjAwNDY5ZGUwODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dE1lIGZyb20gJy4vX2Fib3V0LW1lJ1xuaW1wb3J0IEludHJvIGZyb20gJy4vX2ludHJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcvJylcbiAgY29uc3QgW2luaXRpYWxQb3MsIHNldEluaXRpYWxQb3NdID0gdXNlU3RhdGU8e3g6IE51bWJlciwgeTogbnVtYmVyfT4oKTtcblxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRQYWdlKHBhdGgpXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHBhdGgsIHRpdGxlLCBwYXRoKVxuICB9LCBbcGFnZSwgc2V0UGFnZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHNldFBhZ2UoJy8nKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICB9XG4gIH0sIFtzZXRQYWdlXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmRpcihldmVudC50b3VjaGVzKVxuICAgIGlmIChldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzLml0ZW0oMCk7XG4gICAgICBjb25zb2xlLmRpcih0b3VjaClcbiAgICAgIGlmICh0b3VjaCAhPT0gbnVsbCkge1xuICAgICAgICBzZXRJbml0aWFsUG9zKHt4OiB0b3VjaC5zY3JlZW5YLCB5OiB0b3VjaC5zY3JlZW5ZfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc2V0SW5pdGlhbFBvc10pXG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IHVzZUNhbGxiYWNrKChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUuZGlyKGV2ZW50LnRvdWNoZXMpXG4gICAgaWYgKGluaXRpYWxQb3MgIT09IHVuZGVmaW5lZCAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzLml0ZW0oMCk7XG4gICAgICBjb25zb2xlLmRpcih0b3VjaClcbiAgICAgIGlmICh0b3VjaCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaW5pdGlhbFBvcy55IC0gdG91Y2guc2NyZWVuWSA+IDMwKSB7XG4gICAgICAgICAgc2V0UGFnZSgnL2Fib3V0LW1lJylcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsUG9zLnkgLSB0b3VjaC5zY3JlZW5ZIDwgLTMwKSB7XG4gICAgICAgICAgc2V0UGFnZSgnLycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbml0aWFsUG9zXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVEcmFnRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVEcmFnRW5kKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlRHJhZ0VudGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcbiAgICB9XG4gIH0sIFtpbml0aWFsUG9zXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy8nID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnLycgPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbnRybyB0b0Fib3V0TWU9eygpID0+IG5hdmlnYXRlKCcvYWJvdXQtbWUnLCAnQWJvdXQgTWUnKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gZWFzZS1vdXQgNTAwbXMsIG9wYWNpdHkgZWFzZS1pbiAyNTBtcycsXG4gICAgICAgICAgb3BhY2l0eTogcGFnZSA9PT0gJy9hYm91dC1tZScgPyAxIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBYm91dE1lIGdvQmFjaz17KCkgPT4gbmF2aWdhdGUoJy8nLCAnUG9ydGZvbGlvJyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==