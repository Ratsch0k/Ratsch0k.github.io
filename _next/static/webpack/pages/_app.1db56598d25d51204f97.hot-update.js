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
  var navigate = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (path, title) {
    setPage(path);
    window.history.pushState(path, title, path);
  }, [page, setPage]);
  var toHome = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    navigate('/', 'Portfolio');
  }, [navigate]);
  var toAboutMe = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    navigate('/about-me', 'About Me');
  }, [navigate]);
  var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    if (event.deltaY < 0) {
      toHome();
    } else if (event.deltaY > 0) {
      toAboutMe();
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
          toAboutMe();
        } else if (initialPos.y - touch.screenY < -80) {
          toHome();
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
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

_s(Home, "+1JOL1Vs0chzAdLoe7JGOP4s65Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwiaW5pdGlhbFBvcyIsInNldEluaXRpYWxQb3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJhc1BhdGgiLCJuYXZpZ2F0ZSIsInVzZUNhbGxiYWNrIiwicGF0aCIsInRpdGxlIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRvSG9tZSIsInRvQWJvdXRNZSIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwiaGFuZGxlRHJhZ0VudGVyIiwidG91Y2hlcyIsImxlbmd0aCIsInRvdWNoIiwiaXRlbSIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJoYW5kbGVEcmFnRW5kIiwidW5kZWZpbmVkIiwiY2hhbmdlZFRvdWNoZXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBUyxHQUFULENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRU9GLCtDQUFRLEVBRmY7QUFBQSxNQUV0QkcsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUc3QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkTCxXQUFPLENBQUNHLE1BQU0sQ0FBQ0csTUFBUixDQUFQO0FBQ0QsR0FGUSxFQUVOLENBQUNILE1BQU0sQ0FBQ0csTUFBUixDQUZNLENBQVQ7QUFLQSxNQUFNQyxRQUFRLEdBQUdDLGtEQUFXLENBQUMsVUFBQ0MsSUFBRCxFQUFlQyxLQUFmLEVBQWlDO0FBQzVEVixXQUFPLENBQUNTLElBQUQsQ0FBUDtBQUNBRSxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkosSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDRCxJQUF0QztBQUNELEdBSDJCLEVBR3pCLENBQUNWLElBQUQsRUFBT0MsT0FBUCxDQUh5QixDQUE1QjtBQUtBLE1BQU1jLE1BQU0sR0FBR04sa0RBQVcsQ0FBQyxZQUFNO0FBQy9CRCxZQUFRLENBQUMsR0FBRCxFQUFNLFdBQU4sQ0FBUjtBQUNELEdBRnlCLEVBRXZCLENBQUNBLFFBQUQsQ0FGdUIsQ0FBMUI7QUFJQSxNQUFNUSxTQUFTLEdBQUdQLGtEQUFXLENBQUMsWUFBTTtBQUNsQ0QsWUFBUSxDQUFDLFdBQUQsRUFBYyxVQUFkLENBQVI7QUFDRCxHQUY0QixFQUUxQixDQUFDQSxRQUFELENBRjBCLENBQTdCO0FBSUEsTUFBTVMsWUFBWSxHQUFHUixrREFBVyxDQUFDLFVBQUNTLEtBQUQsRUFBdUI7QUFDdEQsUUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEJKLFlBQU07QUFDUCxLQUZELE1BRU8sSUFBSUcsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDM0JILGVBQVM7QUFDVjtBQUNGLEdBTitCLEVBTTdCLENBQUNSLFFBQUQsQ0FONkIsQ0FBaEM7QUFRQSxNQUFNWSxlQUFlLEdBQUdYLGtEQUFXLENBQUMsVUFBQ1MsS0FBRCxFQUF1QjtBQUN6RCxRQUFJQSxLQUFLLENBQUNHLE9BQU4sSUFBaUJILEtBQUssQ0FBQ0csT0FBTixDQUFjQyxNQUFkLEtBQXlCLENBQTlDLEVBQWlEO0FBQy9DLFVBQU1DLEtBQUssR0FBR0wsS0FBSyxDQUFDRyxPQUFOLENBQWNHLElBQWQsQ0FBbUIsQ0FBbkIsQ0FBZDs7QUFDQSxVQUFJRCxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnBCLHFCQUFhLENBQUM7QUFBQ3NCLFdBQUMsRUFBRUYsS0FBSyxDQUFDRyxPQUFWO0FBQW1CQyxXQUFDLEVBQUVKLEtBQUssQ0FBQ0s7QUFBNUIsU0FBRCxDQUFiO0FBQ0Q7QUFDRjtBQUNGLEdBUGtDLEVBT2hDLENBQUN6QixhQUFELENBUGdDLENBQW5DO0FBU0EsTUFBTTBCLGFBQWEsR0FBR3BCLGtEQUFXLENBQUMsVUFBQ1MsS0FBRCxFQUF1QjtBQUN2RCxRQUFJaEIsVUFBVSxLQUFLNEIsU0FBZixJQUE0QlosS0FBSyxDQUFDYSxjQUFsQyxJQUFvRGIsS0FBSyxDQUFDYSxjQUFOLENBQXFCVCxNQUFyQixLQUFnQyxDQUF4RixFQUEyRjtBQUN6RixVQUFNQyxLQUFLLEdBQUdMLEtBQUssQ0FBQ2EsY0FBTixDQUFxQlAsSUFBckIsQ0FBMEIsQ0FBMUIsQ0FBZDs7QUFDQSxVQUFJRCxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixZQUFJckIsVUFBVSxDQUFDeUIsQ0FBWCxHQUFlSixLQUFLLENBQUNLLE9BQXJCLEdBQStCLEVBQW5DLEVBQXVDO0FBQ3JDWixtQkFBUztBQUNWLFNBRkQsTUFFTyxJQUFJZCxVQUFVLENBQUN5QixDQUFYLEdBQWVKLEtBQUssQ0FBQ0ssT0FBckIsR0FBK0IsQ0FBQyxFQUFwQyxFQUF3QztBQUM3Q2IsZ0JBQU07QUFDUDtBQUNGO0FBQ0Y7QUFDRixHQVhnQyxFQVc5QixDQUFDYixVQUFELENBWDhCLENBQWpDO0FBYUFJLGtEQUFTLENBQUMsWUFBTTtBQUNkTSxVQUFNLENBQUNvQixtQkFBUCxDQUEyQixPQUEzQixFQUFvQ2YsWUFBcEM7QUFDQUwsVUFBTSxDQUFDb0IsbUJBQVAsQ0FBMkIsWUFBM0IsRUFBeUNaLGVBQXpDO0FBQ0FSLFVBQU0sQ0FBQ29CLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDSCxhQUF2QztBQUNBakIsVUFBTSxDQUFDcUIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNoQixZQUFqQztBQUNBTCxVQUFNLENBQUNxQixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ2IsZUFBdEM7QUFDQVIsVUFBTSxDQUFDcUIsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0NKLGFBQXBDO0FBRUEsV0FBTyxZQUFNO0FBQ1hqQixZQUFNLENBQUNvQixtQkFBUCxDQUEyQixPQUEzQixFQUFvQ2YsWUFBcEM7QUFDQUwsWUFBTSxDQUFDb0IsbUJBQVAsQ0FBMkIsWUFBM0IsRUFBeUNaLGVBQXpDO0FBQ0FSLFlBQU0sQ0FBQ29CLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDSCxhQUF2QztBQUNELEtBSkQ7QUFLRCxHQWJRLEVBYU4sQ0FBQzNCLFVBQUQsQ0FiTSxDQUFUO0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xnQyxrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRW5DLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBZixHQUFtQixDQUZ2QjtBQUdMb0MsaUJBQVMsRUFBRXBDLElBQUksS0FBSyxHQUFULEdBQWUsZUFBZixHQUFpQztBQUh2QyxPQUZUO0FBQUEsNkJBUUUsOERBQUMsMkNBQUQ7QUFBTyxpQkFBUyxFQUFFO0FBQUEsaUJBQU1RLFFBQVEsQ0FBQyxXQUFELEVBQWMsVUFBZCxDQUFkO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQ0UsZUFBUyxFQUFDLHdDQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0wwQixrQkFBVSxFQUFFLGlEQURQO0FBRUxDLGVBQU8sRUFBRW5DLElBQUksS0FBSyxXQUFULEdBQXVCLENBQXZCLEdBQTJCLENBRi9CO0FBR0xvQyxpQkFBUyxFQUFFcEMsSUFBSSxLQUFLLFdBQVQsR0FBdUIsZUFBdkIsR0FBeUM7QUFIL0MsT0FGVDtBQUFBLDZCQVFFLDhEQUFDLDhDQUFEO0FBQVMsY0FBTSxFQUFFO0FBQUEsaUJBQU1RLFFBQVEsQ0FBQyxHQUFELEVBQU0sV0FBTixDQUFkO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E1RnVCVixJO1VBR1BPLDhEOzs7S0FIT1AsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkYjU2NTk4ZDI1ZDUxMjA0Zjk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQWJvdXRNZSBmcm9tICcuL19hYm91dC1tZSdcbmltcG9ydCBJbnRybyBmcm9tICcuL19pbnRybydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignLycpXG4gIGNvbnN0IFtpbml0aWFsUG9zLCBzZXRJbml0aWFsUG9zXSA9IHVzZVN0YXRlPHt4OiBOdW1iZXIsIHk6IG51bWJlcn0+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZShyb3V0ZXIuYXNQYXRoKVxuICB9LCBbcm91dGVyLmFzUGF0aF0pXG5cbiAgXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlQ2FsbGJhY2soKHBhdGg6IHN0cmluZywgdGl0bGU6IHN0cmluZykgPT4ge1xuICAgIHNldFBhZ2UocGF0aClcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUocGF0aCwgdGl0bGUsIHBhdGgpXG4gIH0sIFtwYWdlLCBzZXRQYWdlXSlcblxuICBjb25zdCB0b0hvbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy8nLCAnUG9ydGZvbGlvJylcbiAgfSwgW25hdmlnYXRlXSlcblxuICBjb25zdCB0b0Fib3V0TWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbmF2aWdhdGUoJy9hYm91dC1tZScsICdBYm91dCBNZScpXG4gIH0sIFtuYXZpZ2F0ZV0pXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIHRvSG9tZSgpXG4gICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICB0b0Fib3V0TWUoKVxuICAgIH1cbiAgfSwgW25hdmlnYXRlXSlcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzLml0ZW0oMCk7XG4gICAgICBpZiAodG91Y2ggIT09IG51bGwpIHtcbiAgICAgICAgc2V0SW5pdGlhbFBvcyh7eDogdG91Y2guc2NyZWVuWCwgeTogdG91Y2guc2NyZWVuWX0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3NldEluaXRpYWxQb3NdKVxuXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICBpZiAoaW5pdGlhbFBvcyAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlcy5pdGVtKDApO1xuICAgICAgaWYgKHRvdWNoICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChpbml0aWFsUG9zLnkgLSB0b3VjaC5zY3JlZW5ZID4gODApIHtcbiAgICAgICAgICB0b0Fib3V0TWUoKVxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxQb3MueSAtIHRvdWNoLnNjcmVlblkgPCAtODApIHtcbiAgICAgICAgICB0b0hvbWUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVEcmFnRW50ZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlRHJhZ0VuZClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZURyYWdFbnRlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZURyYWdFbmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFBvc10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvJyA/IDEgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogcGFnZSA9PT0gJy8nID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW50cm8gdG9BYm91dE1lPXsoKSA9PiBuYXZpZ2F0ZSgnL2Fib3V0LW1lJywgJ0Fib3V0IE1lJyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGVhc2Utb3V0IDUwMG1zLCBvcGFjaXR5IGVhc2UtaW4gMjUwbXMnLFxuICAgICAgICAgIG9wYWNpdHk6IHBhZ2UgPT09ICcvYWJvdXQtbWUnID8gMSA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiBwYWdlID09PSAnL2Fib3V0LW1lJyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWJvdXRNZSBnb0JhY2s9eygpID0+IG5hdmlnYXRlKCcvJywgJ1BvcnRmb2xpbycpfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=