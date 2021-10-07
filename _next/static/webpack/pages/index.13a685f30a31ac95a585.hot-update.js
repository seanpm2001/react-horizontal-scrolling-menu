webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/useDrag.ts":
/*!****************************!*\
  !*** ./helpers/useDrag.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDrag; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDrag() {\n  _s();\n\n  const [clicked, setClicked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [dragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const position = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(0);\n  const dragStart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(ev => {\n    position.current = ev.clientX;\n    setClicked(true);\n  }, []);\n  const dragStop = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => // NOTE: need some delay so item under cursor won't be clicked\n  window.requestAnimationFrame(() => {\n    setDragging(false);\n    setClicked(false);\n  }), []);\n\n  const dragMove = (ev, cb) => {\n    const newDiff = position.current - ev.clientX;\n    const movedEnough = Math.abs(newDiff) > 5;\n\n    if (clicked && movedEnough) {\n      setDragging(true);\n    }\n\n    if (dragging && movedEnough) {\n      position.current = ev.clientX;\n      cb(newDiff);\n    }\n  };\n\n  return {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging,\n    position,\n    setDragging\n  };\n}\n\n_s(useDrag, \"JjN9emDpmis+MqTevVt8p3Kc0Ck=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91c2VEcmFnLnRzPzAyZjIiXSwibmFtZXMiOlsidXNlRHJhZyIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJwb3NpdGlvbiIsInVzZVJlZiIsImRyYWdTdGFydCIsInVzZUNhbGxiYWNrIiwiZXYiLCJjdXJyZW50IiwiY2xpZW50WCIsImRyYWdTdG9wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhZ01vdmUiLCJjYiIsIm5ld0RpZmYiLCJtb3ZlZEVub3VnaCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBaEM7QUFDQSxRQUFNRyxRQUFRLEdBQUdKLDRDQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLENBQWpCO0FBRUEsUUFBTUMsU0FBUyxHQUFHTiw0Q0FBSyxDQUFDTyxXQUFOLENBQW1CQyxFQUFELElBQTBCO0FBQzVESixZQUFRLENBQUNLLE9BQVQsR0FBbUJELEVBQUUsQ0FBQ0UsT0FBdEI7QUFDQVgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBSGlCLEVBR2YsRUFIZSxDQUFsQjtBQUtBLFFBQU1ZLFFBQVEsR0FBR1gsNENBQUssQ0FBQ08sV0FBTixDQUNmLE1BQ0U7QUFDQUssUUFBTSxDQUFDQyxxQkFBUCxDQUE2QixNQUFNO0FBQ2pDVixlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FKLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQUhELENBSGEsRUFPZixFQVBlLENBQWpCOztBQVVBLFFBQU1lLFFBQVEsR0FBRyxDQUFDTixFQUFELEVBQXVCTyxFQUF2QixLQUF3RDtBQUN2RSxVQUFNQyxPQUFPLEdBQUdaLFFBQVEsQ0FBQ0ssT0FBVCxHQUFtQkQsRUFBRSxDQUFDRSxPQUF0QztBQUVBLFVBQU1PLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILE9BQVQsSUFBb0IsQ0FBeEM7O0FBRUEsUUFBSWxCLE9BQU8sSUFBSW1CLFdBQWYsRUFBNEI7QUFDMUJkLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsUUFBSUQsUUFBUSxJQUFJZSxXQUFoQixFQUE2QjtBQUMzQmIsY0FBUSxDQUFDSyxPQUFULEdBQW1CRCxFQUFFLENBQUNFLE9BQXRCO0FBQ0FLLFFBQUUsQ0FBQ0MsT0FBRCxDQUFGO0FBQ0Q7QUFDRixHQWJEOztBQWVBLFNBQU87QUFDTFYsYUFESztBQUVMSyxZQUZLO0FBR0xHLFlBSEs7QUFJTFosWUFKSztBQUtMRSxZQUxLO0FBTUxEO0FBTkssR0FBUDtBQVFEOztHQTNDdUJOLE8iLCJmaWxlIjoiLi9oZWxwZXJzL3VzZURyYWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEcmFnKCkge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBwb3NpdGlvbiA9IFJlYWN0LnVzZVJlZigwKTtcblxuICBjb25zdCBkcmFnU3RhcnQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBwb3NpdGlvbi5jdXJyZW50ID0gZXYuY2xpZW50WDtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZHJhZ1N0b3AgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PlxuICAgICAgLy8gTk9URTogbmVlZCBzb21lIGRlbGF5IHNvIGl0ZW0gdW5kZXIgY3Vyc29yIHdvbid0IGJlIGNsaWNrZWRcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgIHNldENsaWNrZWQoZmFsc2UpO1xuICAgICAgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBkcmFnTW92ZSA9IChldjogUmVhY3QuTW91c2VFdmVudCwgY2I6IChuZXdQb3M6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgIGNvbnN0IG5ld0RpZmYgPSBwb3NpdGlvbi5jdXJyZW50IC0gZXYuY2xpZW50WDtcblxuICAgIGNvbnN0IG1vdmVkRW5vdWdoID0gTWF0aC5hYnMobmV3RGlmZikgPiA1O1xuXG4gICAgaWYgKGNsaWNrZWQgJiYgbW92ZWRFbm91Z2gpIHtcbiAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChkcmFnZ2luZyAmJiBtb3ZlZEVub3VnaCkge1xuICAgICAgcG9zaXRpb24uY3VycmVudCA9IGV2LmNsaWVudFg7XG4gICAgICBjYihuZXdEaWZmKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkcmFnU3RhcnQsXG4gICAgZHJhZ1N0b3AsXG4gICAgZHJhZ01vdmUsXG4gICAgZHJhZ2dpbmcsXG4gICAgcG9zaXRpb24sXG4gICAgc2V0RHJhZ2dpbmcsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/useDrag.ts\n");

/***/ })

})