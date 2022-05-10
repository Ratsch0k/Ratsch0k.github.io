webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/about_me.tsx":
/*!****************************!*\
  !*** ./pages/about_me.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PageContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageContent */ \"./components/PageContent.tsx\");\n\n\nvar _jsxFileName = \"/home/simon/Projects/Ratsch0k.github.io/pages/about_me.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar LANGUAGES = ['javascript', 'python', 'c++', 'java', 'rust', 'brainfuck', 'bash'];\n\nvar AboutMe = function AboutMe(_ref) {\n  _s();\n\n  var setScrollable = _ref.setScrollable;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  /*\n   * Check size of content and set borders of header / footer appropriately\n   */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (contentRef.current !== null) {\n      var _contentRef$current;\n\n      var windowHeight = window.innerHeight;\n      var componentHeight = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.scrollHeight;\n\n      if (componentHeight && componentHeight + 80 > windowHeight) {\n        setScrollable(true);\n      } else {\n        setScrollable(false);\n      }\n    }\n\n    return function () {\n      setScrollable(false);\n    };\n  }, [contentRef.current]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"h-full overflow-hidden flex flex-col\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PageContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full overflow-auto pl-8 pr-8 pb-4\",\n        ref: function ref(_ref2) {\n          return contentRef.current = _ref2;\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"h-96 md:h-60 md:float-left md:mb-2 md:mr-2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            alt: t('aboutme.picturealt'),\n            className: \"h-full w-auto object-cover rounded-2xl\",\n            src: \"/images/personal_photo.jpg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"max-w-3xl m-auto md:mt-0 mt-4 mb-16\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"Trans\"], {\n            i18nKey: \"aboutme.myinfo\",\n            t: t,\n            children: [\"Hi...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"list-disc pl-8\",\n              children: LANGUAGES.map(function (el) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: t(\"aboutme.langlist.\".concat(el))\n                }, \"language-\".concat(el), false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 42\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 17\n            }, _this), \"...\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AboutMe, \"ft6vYsdgXuNWkgfs8GWI4ijxG+E=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"]];\n});\n\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutMe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRfbWUudHN4PzY2ZjEiXSwibmFtZXMiOlsiTEFOR1VBR0VTIiwiQWJvdXRNZSIsInNldFNjcm9sbGFibGUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY29tcG9uZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwicmVmIiwibWFwIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEIsWUFEZ0IsRUFFaEIsUUFGZ0IsRUFHaEIsS0FIZ0IsRUFJaEIsTUFKZ0IsRUFLaEIsTUFMZ0IsRUFNaEIsV0FOZ0IsRUFPaEIsTUFQZ0IsQ0FBbEI7O0FBVUEsSUFBTUMsT0FBc0IsR0FBRyxTQUF6QkEsT0FBeUIsT0FBcUI7QUFBQTs7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1COztBQUFBLHdCQUN0Q0Msb0VBQWMsRUFEd0I7QUFBQSxNQUMzQ0MsQ0FEMkMsbUJBQzNDQSxDQUQyQzs7QUFFbEQsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUF3QixJQUF4QixDQUF6QjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsVUFBVSxDQUFDRyxPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQUE7O0FBQy9CLFVBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxXQUE1QjtBQUNBLFVBQU1DLGVBQWUsMEJBQUdQLFVBQVUsQ0FBQ0csT0FBZCx3REFBRyxvQkFBb0JLLFlBQTVDOztBQUVBLFVBQUlELGVBQWUsSUFBSUEsZUFBZSxHQUFHLEVBQWxCLEdBQXVCSCxZQUE5QyxFQUE0RDtBQUMxRFAscUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxPQUZELE1BRU87QUFDTEEscUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGOztBQUVELFdBQU8sWUFBTTtBQUNYQSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQWZRLEVBZU4sQ0FBQ0csVUFBVSxDQUFDRyxPQUFaLENBZk0sQ0FBVDtBQWlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQUEsNkJBQ0U7QUFDSSxpQkFBUyxFQUFDLHFDQURkO0FBRUksV0FBRyxFQUFFLGFBQUNNLEtBQUQ7QUFBQSxpQkFBU1QsVUFBVSxDQUFDRyxPQUFYLEdBQXFCTSxLQUE5QjtBQUFBLFNBRlQ7QUFBQSxnQ0FJSTtBQUFLLG1CQUFTLEVBQUMsNENBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRVYsQ0FBQyxDQUFDLG9CQUFELENBQVg7QUFBbUMscUJBQVMsRUFBQyx3Q0FBN0M7QUFBc0YsZUFBRyxFQUFDO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBT0k7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBQ0UscUVBQUMsbURBQUQ7QUFBTyxtQkFBTyxFQUFDLGdCQUFmO0FBQWdDLGFBQUMsRUFBRUEsQ0FBbkM7QUFBQSw2Q0FFRTtBQUFJLHVCQUFTLEVBQUMsZ0JBQWQ7QUFBQSx3QkFDR0osU0FBUyxDQUFDZSxHQUFWLENBQWMsVUFBQ0MsRUFBRDtBQUFBLG9DQUFRO0FBQUEsNEJBQTRCWixDQUFDLDRCQUFxQlksRUFBckI7QUFBN0Isc0NBQXFCQSxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFSO0FBQUEsZUFBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBL0NEOztHQUFNZixPO1VBQ1FFLDREOzs7S0FEUkYsTztBQWlEU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dF9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zLCB1c2VUcmFuc2xhdGlvbn0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VDb21wb25lbnQnO1xuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbnRlbnQnO1xuXG5jb25zdCBMQU5HVUFHRVMgPSBbXG4gICdqYXZhc2NyaXB0JyxcbiAgJ3B5dGhvbicsXG4gICdjKysnLFxuICAnamF2YScsXG4gICdydXN0JyxcbiAgJ2JyYWluZnVjaycsXG4gICdiYXNoJyxcbl1cblxuY29uc3QgQWJvdXRNZTogUGFnZUNvbXBvbmVudCA9ICh7c2V0U2Nyb2xsYWJsZX0pID0+IHtcbiAgY29uc3Qge3R9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIC8qXG4gICAqIENoZWNrIHNpemUgb2YgY29udGVudCBhbmQgc2V0IGJvcmRlcnMgb2YgaGVhZGVyIC8gZm9vdGVyIGFwcHJvcHJpYXRlbHlcbiAgICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRSZWYuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3QgY29tcG9uZW50SGVpZ2h0ID0gY29udGVudFJlZi5jdXJyZW50Py5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgIGlmIChjb21wb25lbnRIZWlnaHQgJiYgY29tcG9uZW50SGVpZ2h0ICsgODAgPiB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgc2V0U2Nyb2xsYWJsZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNjcm9sbGFibGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtjb250ZW50UmVmLmN1cnJlbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wnPlxuICAgICAgPFBhZ2VDb250ZW50PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy1hdXRvIHBsLTggcHItOCBwYi00J1xuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiBjb250ZW50UmVmLmN1cnJlbnQgPSByZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOTYgbWQ6aC02MCBtZDpmbG9hdC1sZWZ0IG1kOm1iLTIgbWQ6bXItMic+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PXt0KCdhYm91dG1lLnBpY3R1cmVhbHQnKX0gY2xhc3NOYW1lPSdoLWZ1bGwgdy1hdXRvIG9iamVjdC1jb3ZlciByb3VuZGVkLTJ4bCcgc3JjPScvaW1hZ2VzL3BlcnNvbmFsX3Bob3RvLmpwZycgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LTN4bCBtLWF1dG8gbWQ6bXQtMCBtdC00IG1iLTE2Jz5cbiAgICAgICAgICAgICAgPFRyYW5zIGkxOG5LZXk9J2Fib3V0bWUubXlpbmZvJyB0PXt0fT5cbiAgICAgICAgICAgICAgICBIaS4uLlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZGlzYyBwbC04Jz5cbiAgICAgICAgICAgICAgICAgIHtMQU5HVUFHRVMubWFwKChlbCkgPT4gPGxpIGtleT17YGxhbmd1YWdlLSR7ZWx9YH0+e3QoYGFib3V0bWUubGFuZ2xpc3QuJHtlbH1gKX08L2xpPil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlQ29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about_me.tsx\n");

/***/ })

})