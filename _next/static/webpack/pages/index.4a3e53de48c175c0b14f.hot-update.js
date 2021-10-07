webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/useDrag.ts":
/*!****************************!*\
  !*** ./helpers/useDrag.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDrag; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDrag() {\n  _s();\n\n  const [clicked, setClicked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [dragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const dragStart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(ev => {\n    setPosition(ev.clientX);\n    setClicked(true);\n  }, []);\n  const dragStop = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => // NOTE: need some delay so item under cursor won't be clicked\n  window.requestAnimationFrame(() => {\n    setDragging(false);\n    setClicked(false);\n  }), []);\n\n  const dragMove = (ev, cb) => {\n    const newDiff = position - ev.clientX;\n    const movedEnough = Math.abs(newDiff) > 5;\n\n    if (clicked && movedEnough) {\n      setDragging(true);\n    }\n\n    if (dragging && movedEnough) {\n      // setPosition(ev.clientX);\n      // cb(newDiff);\n      console.log(ev.clientX);\n      cb(ev.clientX);\n    }\n  };\n\n  return {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging,\n    position,\n    setDragging,\n    setPosition\n  };\n}\n\n_s(useDrag, \"53TrGd8rx0RL8iJFA4T2ALtCZ8M=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91c2VEcmFnLnRzPzAyZjIiXSwibmFtZXMiOlsidXNlRHJhZyIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZHJhZ1N0YXJ0IiwidXNlQ2FsbGJhY2siLCJldiIsImNsaWVudFgiLCJkcmFnU3RvcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYWdNb3ZlIiwiY2IiLCJuZXdEaWZmIiwibW92ZWRFbm91Z2giLCJNYXRoIiwiYWJzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5QjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0csUUFBRCxFQUFXQyxXQUFYLElBQTBCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUFoQztBQUVBLFFBQU1LLFNBQVMsR0FBR04sNENBQUssQ0FBQ08sV0FBTixDQUFtQkMsRUFBRCxJQUEwQjtBQUM1REgsZUFBVyxDQUFDRyxFQUFFLENBQUNDLE9BQUosQ0FBWDtBQUNBVixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FIaUIsRUFHZixFQUhlLENBQWxCO0FBS0EsUUFBTVcsUUFBUSxHQUFHViw0Q0FBSyxDQUFDTyxXQUFOLENBQ2YsTUFDRTtBQUNBSSxRQUFNLENBQUNDLHFCQUFQLENBQTZCLE1BQU07QUFDakNULGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUosY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBSEQsQ0FIYSxFQU9mLEVBUGUsQ0FBakI7O0FBVUEsUUFBTWMsUUFBUSxHQUFHLENBQUNMLEVBQUQsRUFBdUJNLEVBQXZCLEtBQXdEO0FBQ3ZFLFVBQU1DLE9BQU8sR0FBR1gsUUFBUSxHQUFHSSxFQUFFLENBQUNDLE9BQTlCO0FBRUEsVUFBTU8sV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsT0FBVCxJQUFvQixDQUF4Qzs7QUFFQSxRQUFJakIsT0FBTyxJQUFJa0IsV0FBZixFQUE0QjtBQUMxQmIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxRQUFJRCxRQUFRLElBQUljLFdBQWhCLEVBQTZCO0FBQzNCO0FBQ0E7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVlaLEVBQUUsQ0FBQ0MsT0FBZjtBQUNBSyxRQUFFLENBQUNOLEVBQUUsQ0FBQ0MsT0FBSixDQUFGO0FBQ0Q7QUFDRixHQWZEOztBQWlCQSxTQUFPO0FBQ0xILGFBREs7QUFFTEksWUFGSztBQUdMRyxZQUhLO0FBSUxYLFlBSks7QUFLTEUsWUFMSztBQU1MRCxlQU5LO0FBT0xFO0FBUEssR0FBUDtBQVNEOztHQTlDdUJSLE8iLCJmaWxlIjoiLi9oZWxwZXJzL3VzZURyYWcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEcmFnKCkge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkcmFnZ2luZywgc2V0RHJhZ2dpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGRyYWdTdGFydCA9IFJlYWN0LnVzZUNhbGxiYWNrKChldjogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKGV2LmNsaWVudFgpO1xuICAgIHNldENsaWNrZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBkcmFnU3RvcCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICgpID0+XG4gICAgICAvLyBOT1RFOiBuZWVkIHNvbWUgZGVsYXkgc28gaXRlbSB1bmRlciBjdXJzb3Igd29uJ3QgYmUgY2xpY2tlZFxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHNldERyYWdnaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0Q2xpY2tlZChmYWxzZSk7XG4gICAgICB9KSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IGRyYWdNb3ZlID0gKGV2OiBSZWFjdC5Nb3VzZUV2ZW50LCBjYjogKG5ld1BvczogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgbmV3RGlmZiA9IHBvc2l0aW9uIC0gZXYuY2xpZW50WDtcblxuICAgIGNvbnN0IG1vdmVkRW5vdWdoID0gTWF0aC5hYnMobmV3RGlmZikgPiA1O1xuXG4gICAgaWYgKGNsaWNrZWQgJiYgbW92ZWRFbm91Z2gpIHtcbiAgICAgIHNldERyYWdnaW5nKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChkcmFnZ2luZyAmJiBtb3ZlZEVub3VnaCkge1xuICAgICAgLy8gc2V0UG9zaXRpb24oZXYuY2xpZW50WCk7XG4gICAgICAvLyBjYihuZXdEaWZmKTtcbiAgICAgIGNvbnNvbGUubG9nKGV2LmNsaWVudFgpO1xuICAgICAgY2IoZXYuY2xpZW50WCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZHJhZ1N0YXJ0LFxuICAgIGRyYWdTdG9wLFxuICAgIGRyYWdNb3ZlLFxuICAgIGRyYWdnaW5nLFxuICAgIHBvc2l0aW9uLFxuICAgIHNldERyYWdnaW5nLFxuICAgIHNldFBvc2l0aW9uLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/useDrag.ts\n");

/***/ })

})