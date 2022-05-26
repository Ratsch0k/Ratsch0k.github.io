webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/intro.tsx":
/*!*************************!*\
  !*** ./pages/intro.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icons/Logo */ \"./components/icons/Logo.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.tsx\");\n/* harmony import */ var _components_icons_CircuitBoardIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/CircuitBoardIcon */ \"./components/icons/CircuitBoardIcon.tsx\");\n/* harmony import */ var _components_TailwindConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TailwindConfig */ \"./components/TailwindConfig.ts\");\n/* harmony import */ var _components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hooks/useTheme */ \"./components/hooks/useTheme.tsx\");\n\n\n\nvar _jsxFileName = \"/home/simon/Projects/Ratsch0k.github.io/pages/intro.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar primaryContrast = _components_TailwindConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].theme.colors.primary.contrast;\nvar primary = _components_TailwindConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].theme.colors.primary.DEFAULT;\n\nvar Intro = function Intro(_ref) {\n  _s();\n\n  var setScrollable = _ref.setScrollable,\n      firstPage = _ref.firstPage;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(firstPage),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var hoverRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      mouseDown = _useState2[0],\n      setMouseDown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      clicked = _useState3[0],\n      setClicked = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      hintClick = _useState4[0],\n      setHintClick = _useState4[1];\n\n  var animHover = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useTheme = Object(_components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(),\n      theme = _useTheme.theme;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setScrollable(false);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (hoverRef.current) {\n      animHover.current = hoverRef.current.animate([{\n        transform: 'scale(1.0)'\n      }, {\n        transform: 'scale(1.1)'\n      }, {\n        transform: 'scale(1.0)'\n      }], {\n        iterations: Infinity,\n        duration: 4000\n      });\n    }\n  }, []); // After 2 seconds. Hint that the user can click\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setTimeout(function () {\n      if (!mouseDown && !clicked) {\n        setHintClick(true);\n      }\n    }, 2000);\n    return function () {\n      clearTimeout(id);\n    };\n  }, [mouseDown, clicked]);\n  var handleMouseDown = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    if (animHover.current) {\n      animHover.current.pause();\n    }\n\n    setMouseDown(true);\n  }, []);\n  var handleSkip = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (event) {\n    setOpen(false);\n    event.stopPropagation();\n  }, []);\n  var handleMouseUp = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    setMouseDown(false);\n    setClicked(true);\n    setTimeout(function () {\n      setOpen(false);\n    }, 2000);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      open: open,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute inset-0 bg-background-light dark:bg-background-dark flex justify-center items-center z-40 text-primary dark:text-primary-contrast transition-opacity \".concat(clicked && 'opacity-0 animate-ball-shrink'),\n        style: {\n          transitionDelay: '1.2s',\n          transitionDuration: '0.8s'\n        },\n        onMouseDown: handleMouseDown,\n        onMouseUp: handleMouseUp,\n        onTouchStart: handleMouseDown,\n        onTouchEnd: handleMouseUp,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"transition-all duration-250 transform \".concat(mouseDown ? 'scale-90' : 'scale-1'),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-[20vw] h-[20vh]\",\n            ref: hoverRef,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_icons_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              style: {\n                width: '20vw',\n                height: '20vh'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 13\n            }, _this)\n          }, 'logo-div', false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute h-full flex items-end text-center font-bold text-xs md:text-lg lg:text-xl transition-opacity duration-500 opacity-0 \".concat(hintClick && 'opacity-100'),\n          style: {\n            height: 'min(30vh, 30vw)'\n          },\n          children: t('intro.hintClick')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"h-full w-full absolute flex justify-center items-center\",\n          children: clicked && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_icons_CircuitBoardIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            className: \"h-full w-full\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"absolute p-4 pb-0 right-8 bottom-8 text-xs border-b-2 md:text-xl xl:text-2xl transition-all hover:border-b-8 border-primary-dark dark:border-primary-contrast disabled:opacity-0\",\n          onClick: handleSkip,\n          onMouseUp: handleSkip,\n          onMouseDown: handleSkip,\n          onTouchStart: handleSkip,\n          onTouchEnd: handleSkip,\n          disabled: clicked,\n          children: t('intro.skip')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex h-full justify-center items-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"sm:text-6xl text-4xl text-center text-primary dark:text-primary-contrast transition-colors \".concat(clicked ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear'] : !open ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-now'] : ''),\n          children: \"Simon Kurz\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"md:text-sm text-xs text-secondary-dark dark:text-secondary transition-colors md:transform md:translate-x-40 \".concat(clicked ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear'] : !open ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-now'] : '', \" \").concat(clicked ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-subtitle'] : !open ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-subtitle-now'] : ''),\n          children: t('intro.info')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            display: 'grid',\n            gridTemplateColumns: '1fr'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: 'transition-opacity ' + theme === 'dark' ? 'opacity-0' : 'opacity-1',\n            style: {\n              gridArea: '1 / 1'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"sm:text-6xl sm:mt-4 text-4xl text-center transition-colors \".concat(clicked ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear'] : !open ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-now'] : ''),\n              style: {\n                transform: 'scaleY(-1)',\n                background: \"linear-gradient(0deg, \".concat(primaryContrast, \" 0%, rgba(0,0,0,0) 60%)\"),\n                backgroundClip: 'text',\n                WebkitBackgroundClip: 'text',\n                WebkitTextFillColor: 'transparent'\n              },\n              children: \"Simon Kurz\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 160,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: 'transition-opacity ' + theme === 'dark' ? 'opacity-0' : 'opacity-1',\n            style: {\n              gridArea: '1 / 1'\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"sm:text-6xl sm:mt-4 text-4xl text-center transition-colors \".concat(clicked ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear'] : !open ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a['appear-now'] : ''),\n              style: {\n                transform: 'scaleY(-1)',\n                background: \"linear-gradient(0deg, \".concat(primary, \" 0%, rgba(0,0,0,0) 60%)\"),\n                backgroundClip: 'text',\n                WebkitBackgroundClip: 'text',\n                WebkitTextFillColor: 'transparent'\n              },\n              children: \"Simon Kurz\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 175,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 174,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Intro, \"J9NIuwYtSRpXbJwkxaR9w6OfaJY=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"], _components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Intro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Intro);\n\nvar _c;\n\n$RefreshReg$(_c, \"Intro\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW50cm8udHN4PzZkMTAiXSwibmFtZXMiOlsicHJpbWFyeUNvbnRyYXN0IiwiVGFpbHdpbmRDb25maWciLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJjb250cmFzdCIsIkRFRkFVTFQiLCJJbnRybyIsInNldFNjcm9sbGFibGUiLCJmaXJzdFBhZ2UiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaG92ZXJSZWYiLCJ1c2VSZWYiLCJtb3VzZURvd24iLCJzZXRNb3VzZURvd24iLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImhpbnRDbGljayIsInNldEhpbnRDbGljayIsImFuaW1Ib3ZlciIsInVzZVRoZW1lIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImFuaW1hdGUiLCJ0cmFuc2Zvcm0iLCJpdGVyYXRpb25zIiwiSW5maW5pdHkiLCJkdXJhdGlvbiIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZU1vdXNlRG93biIsInVzZUNhbGxiYWNrIiwicGF1c2UiLCJoYW5kbGVTa2lwIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVNb3VzZVVwIiwidHJhbnNpdGlvbkRlbGF5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZXMiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRBcmVhIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDbGlwIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJXZWJraXRUZXh0RmlsbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLGtFQUFjLENBQUNDLEtBQWYsQ0FBcUJDLE1BQXJCLENBQTRCQyxPQUE1QixDQUFvQ0MsUUFB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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuREY7QUFBQSxrQkFERjtBQThHRCxDQW5MRDs7R0FBTTlDLEs7VUFDUUcsNEQsRUFPSWMsa0U7OztLQVJaakIsSztBQXFMU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbnRyby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZVRyYW5zbGF0aW9ufSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9pY29ucy9Mb2dvJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBDaXJjdWl0Qm9hcmRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMvQ2lyY3VpdEJvYXJkSWNvbic7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudCc7XG5pbXBvcnQgVGFpbHdpbmRDb25maWcgZnJvbSAnLi4vY29tcG9uZW50cy9UYWlsd2luZENvbmZpZyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob29rcy91c2VUaGVtZSc7XG5cbmNvbnN0IHByaW1hcnlDb250cmFzdCA9IFRhaWx3aW5kQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5LmNvbnRyYXN0O1xuY29uc3QgcHJpbWFyeSA9IFRhaWx3aW5kQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5LkRFRkFVTFQ7XG5cbmNvbnN0IEludHJvOiBQYWdlQ29tcG9uZW50ID0gKHtzZXRTY3JvbGxhYmxlLCBmaXJzdFBhZ2V9KSA9PiB7XG4gIGNvbnN0IHt0fSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZpcnN0UGFnZSk7XG4gIGNvbnN0IGhvdmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW21vdXNlRG93biwgc2V0TW91c2VEb3duXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaGludENsaWNrLCBzZXRIaW50Q2xpY2tdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBhbmltSG92ZXIgPSB1c2VSZWY8QW5pbWF0aW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VUaGVtZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChob3ZlclJlZi5jdXJyZW50KSB7XG4gICAgICBhbmltSG92ZXIuY3VycmVudCA9IGhvdmVyUmVmLmN1cnJlbnQuYW5pbWF0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCknLFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGl0ZXJhdGlvbnM6IEluZmluaXR5LFxuICAgICAgICAgIGR1cmF0aW9uOiA0MDAwLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIEFmdGVyIDIgc2Vjb25kcy4gSGludCB0aGF0IHRoZSB1c2VyIGNhbiBjbGlja1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIW1vdXNlRG93biAmJiAhY2xpY2tlZCkge1xuICAgICAgICBzZXRIaW50Q2xpY2sodHJ1ZSk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9XG4gIH0sIFttb3VzZURvd24sIGNsaWNrZWRdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGFuaW1Ib3Zlci5jdXJyZW50KSB7XG4gICAgICBhbmltSG92ZXIuY3VycmVudC5wYXVzZSgpO1xuICAgIH1cbiAgICBzZXRNb3VzZURvd24odHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTa2lwID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TW91c2VEb3duKGZhbHNlKTtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgfSwgMjAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWwgb3Blbj17b3Blbn0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgYGFic29sdXRlIGluc2V0LTAgYmctYmFja2dyb3VuZC1saWdodCBkYXJrOmJnLWJhY2tncm91bmQtZGFyayBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTQwIHRleHQtcHJpbWFyeSBkYXJrOnRleHQtcHJpbWFyeS1jb250cmFzdCB0cmFuc2l0aW9uLW9wYWNpdHkgJHtjbGlja2VkICYmICdvcGFjaXR5LTAgYW5pbWF0ZS1iYWxsLXNocmluayd9YFxuICAgICAgICB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiAnMS4ycycsXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC44cycsXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgIG9uVG91Y2hFbmQ9e2hhbmRsZU1vdXNlVXB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjUwIHRyYW5zZm9ybSAke21vdXNlRG93biA/ICdzY2FsZS05MCcgOiAnc2NhbGUtMSd9YH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PSdsb2dvLWRpdidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bMjB2d10gaC1bMjB2aF0nXG4gICAgICAgICAgICByZWY9e2hvdmVyUmVmfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMb2dvIHN0eWxlPXt7d2lkdGg6ICcyMHZ3JywgaGVpZ2h0OiAnMjB2aCd9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBoLWZ1bGwgZmxleCBpdGVtcy1lbmQgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQteHMgbWQ6dGV4dC1sZyBsZzp0ZXh0LXhsIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDAgb3BhY2l0eS0wICR7aGludENsaWNrICYmICdvcGFjaXR5LTEwMCd9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogJ21pbigzMHZoLCAzMHZ3KScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdpbnRyby5oaW50Q2xpY2snKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCB3LWZ1bGwgYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsaWNrZWQgJiZcbiAgICAgICAgICAgIDxDaXJjdWl0Qm9hcmRJY29uIGNsYXNzTmFtZT0naC1mdWxsIHctZnVsbCcgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBwLTQgcGItMCByaWdodC04IGJvdHRvbS04IHRleHQteHMgYm9yZGVyLWItMiBtZDp0ZXh0LXhsIHhsOnRleHQtMnhsIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJvcmRlci1iLTggYm9yZGVyLXByaW1hcnktZGFyayBkYXJrOmJvcmRlci1wcmltYXJ5LWNvbnRyYXN0IGRpc2FibGVkOm9wYWNpdHktMCdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTa2lwfVxuICAgICAgICAgIG9uTW91c2VVcD17aGFuZGxlU2tpcH1cbiAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlU2tpcH1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2hhbmRsZVNraXB9XG4gICAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlU2tpcH1cbiAgICAgICAgICBkaXNhYmxlZD17Y2xpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdpbnRyby5za2lwJyl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGgtZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc206dGV4dC02eGwgdGV4dC00eGwgdGV4dC1jZW50ZXIgdGV4dC1wcmltYXJ5IGRhcms6dGV4dC1wcmltYXJ5LWNvbnRyYXN0IHRyYW5zaXRpb24tY29sb3JzICR7Y2xpY2tlZCA/IHN0eWxlc1snYXBwZWFyJ106ICFvcGVuID8gc3R5bGVzWydhcHBlYXItbm93J10gOiAnJ31gfT5cbiAgICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1kOnRleHQtc20gdGV4dC14cyB0ZXh0LXNlY29uZGFyeS1kYXJrIGRhcms6dGV4dC1zZWNvbmRhcnkgdHJhbnNpdGlvbi1jb2xvcnMgbWQ6dHJhbnNmb3JtIG1kOnRyYW5zbGF0ZS14LTQwICR7Y2xpY2tlZCA/IHN0eWxlc1snYXBwZWFyJ10gOiAhb3BlbiA/IHN0eWxlc1snYXBwZWFyLW5vdyddIDogJyd9ICR7Y2xpY2tlZCA/IHN0eWxlc1snYXBwZWFyLXN1YnRpdGxlJ10gOiAhb3BlbiA/IHN0eWxlc1snYXBwZWFyLXN1YnRpdGxlLW5vdyddIDogJyd9YH0+XG4gICAgICAgICAgICB7dCgnaW50cm8uaW5mbycpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBUaGlzIGlzIGEgd2VpcmQgaGFjayB0byBhdm9pZCBzdHlsaW5nIGJ1Z3Mgd2hlbiB0cmFuc2l0aW9uaW5nIHRoZSBjb2xvciB3aXRoaW4gdGhlIGJhY2tncm91bmQgcHJvcGVydHkuXG4gICAgICAgICAgICAgKiBJdCB3b3VsZCBiZSBjbGVhbmVyIHRvIGNoYW5nZSB0aGUgZmlyc3QgY29sb3Igc3RlcCBpbiB0aGUgYmFja2dyb3VuZCBsaW5lYXIgZ3JhZGllbnQgYnV0IGZvciBzb21lXG4gICAgICAgICAgICAgKiByZWFzb24gdGhpcyBicmVha3MgdGhlIGJhY2tncm91bmQgY2xpcCBwcm9wZXJ0eSBhbmQgdGhlIHRleHQgaGFzIG5vIGdyYWRpZW50LiBJbnN0ZWFkLCBqdXN0XG4gICAgICAgICAgICAgKiB0aGUgYmFja2dyb3VuZCBpcyBhIGxpbmVhciBncmFkaWVudC4gVG8gYXZvaWQgdGhpcywgSSBzZXBhcmF0ZWQgYm90aCB0eXBlcyBpbnRvIGRpZmZlcmVudFxuICAgICAgICAgICAgICogY29tcG9uZW50cywgY2hhbmdlcyB0aGUgY29sb3IgYW5kIHRyYW5zaXRpb24gYmV0d2VlbiB0aGVtIGJ5IGNoYW5naW5nIHRoZWlyIG9wYWNpdHkuXG4gICAgICAgICAgICAgKiBGdW5uaWx5IGVub3VnaCwgb3BhY2l0eSBvbmx5IGFmZmVjdHMgdGhvc2UgZWxlbWVudHMgd2hlbiB0aGUgb3BhY2l0eSBvZiBhIHBhcmVudCBlbGVtZW50IGlzIGNoYW5nZWQuXG4gICAgICAgICAgICAgKiBDaGFuZ2luZyB0aGUgb3BhY2l0eSBvZiBhIGdyYWRpZW50IHRleHQgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0cmFuc2l0aW9uLW9wYWNpdHkgJyArIHRoZW1lID09PSAnZGFyaycgPyAnb3BhY2l0eS0wJyA6ICdvcGFjaXR5LTEnfSBzdHlsZT17e2dyaWRBcmVhOiAnMSAvIDEnfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNtOnRleHQtNnhsIHNtOm10LTQgdGV4dC00eGwgdGV4dC1jZW50ZXIgdHJhbnNpdGlvbi1jb2xvcnMgJHtjbGlja2VkID8gc3R5bGVzWydhcHBlYXInXSA6ICFvcGVuID8gc3R5bGVzWydhcHBlYXItbm93J10gOiAnJ31gfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgtMSknLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMGRlZywgJHtwcmltYXJ5Q29udHJhc3R9IDAlLCByZ2JhKDAsMCwwLDApIDYwJSlgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpbW9uIEt1cnpcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndHJhbnNpdGlvbi1vcGFjaXR5ICcgKyB0aGVtZSA9PT0gJ2RhcmsnID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xJ30gc3R5bGU9e3tncmlkQXJlYTogJzEgLyAxJ319PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzbTp0ZXh0LTZ4bCBzbTptdC00IHRleHQtNHhsIHRleHQtY2VudGVyIHRyYW5zaXRpb24tY29sb3JzICR7Y2xpY2tlZCA/IHN0eWxlc1snYXBwZWFyJ10gOiAhb3BlbiA/IHN0eWxlc1snYXBwZWFyLW5vdyddIDogJyd9YH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoLTEpJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsICR7cHJpbWFyeX0gMCUsIHJnYmEoMCwwLDAsMCkgNjAlKWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENsaXA6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxuICAgICAgICAgICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2ltb24gS3VyelxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intro.tsx\n");

/***/ })

})