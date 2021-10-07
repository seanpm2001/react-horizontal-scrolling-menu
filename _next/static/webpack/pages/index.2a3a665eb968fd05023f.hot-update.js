webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/useDrag.ts":
/*!****************************!*\
  !*** ./helpers/useDrag.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDrag; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nfunction useDrag() {\n  _s();\n\n  const [clicked, setClicked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [dragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const dragStart = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(ev => {\n    setPosition(ev.clientX);\n    setClicked(true);\n  }, []);\n  const dragStop = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => // NOTE: need some delay so item under cursor won't be clicked\n  window.requestAnimationFrame(() => {\n    setDragging(false);\n    setClicked(false);\n  }), []);\n\n  const dragMove = (ev, cb) => {\n    const newDiff = position - ev.clientX;\n    const movedEnough = Math.abs(newDiff) > 5;\n\n    if (clicked && movedEnough) {\n      setDragging(true);\n    }\n\n    if (dragging && movedEnough) {\n      setPosition(newDiff);\n      console.log(ev.clientX);\n      cb === null || cb === void 0 ? void 0 : cb(newDiff);\n    }\n\n    return ev.clientX;\n  };\n\n  return {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging,\n    position,\n    setDragging,\n    setPosition\n  };\n}\n\n_s(useDrag, \"53TrGd8rx0RL8iJFA4T2ALtCZ8M=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy91c2VEcmFnLnRzPzAyZjIiXSwibmFtZXMiOlsidXNlRHJhZyIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZHJhZ1N0YXJ0IiwidXNlQ2FsbGJhY2siLCJldiIsImNsaWVudFgiLCJkcmFnU3RvcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYWdNb3ZlIiwiY2IiLCJuZXdEaWZmIiwibW92ZWRFbm91Z2giLCJNYXRoIiwiYWJzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5QjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0csUUFBRCxFQUFXQyxXQUFYLElBQTBCTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUFoQztBQUVBLFFBQU1LLFNBQVMsR0FBR04sNENBQUssQ0FBQ08sV0FBTixDQUFtQkMsRUFBRCxJQUEwQjtBQUM1REgsZUFBVyxDQUFDRyxFQUFFLENBQUNDLE9BQUosQ0FBWDtBQUNBVixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FIaUIsRUFHZixFQUhlLENBQWxCO0FBS0EsUUFBTVcsUUFBUSxHQUFHViw0Q0FBSyxDQUFDTyxXQUFOLENBQ2YsTUFDRTtBQUNBSSxRQUFNLENBQUNDLHFCQUFQLENBQTZCLE1BQU07QUFDakNULGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUosY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEdBSEQsQ0FIYSxFQU9mLEVBUGUsQ0FBakI7O0FBVUEsUUFBTWMsUUFBUSxHQUFHLENBQUNMLEVBQUQsRUFBdUJNLEVBQXZCLEtBQXlEO0FBQ3hFLFVBQU1DLE9BQU8sR0FBR1gsUUFBUSxHQUFHSSxFQUFFLENBQUNDLE9BQTlCO0FBRUEsVUFBTU8sV0FBVyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsT0FBVCxJQUFvQixDQUF4Qzs7QUFFQSxRQUFJakIsT0FBTyxJQUFJa0IsV0FBZixFQUE0QjtBQUMxQmIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxRQUFJRCxRQUFRLElBQUljLFdBQWhCLEVBQTZCO0FBQzNCWCxpQkFBVyxDQUFDVSxPQUFELENBQVg7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVlaLEVBQUUsQ0FBQ0MsT0FBZjtBQUNBSyxRQUFFLFNBQUYsSUFBQUEsRUFBRSxXQUFGLFlBQUFBLEVBQUUsQ0FBR0MsT0FBSCxDQUFGO0FBQ0Q7O0FBQ0QsV0FBT1AsRUFBRSxDQUFDQyxPQUFWO0FBQ0QsR0FmRDs7QUFpQkEsU0FBTztBQUNMSCxhQURLO0FBRUxJLFlBRks7QUFHTEcsWUFISztBQUlMWCxZQUpLO0FBS0xFLFlBTEs7QUFNTEQsZUFOSztBQU9MRTtBQVBLLEdBQVA7QUFTRDs7R0E5Q3VCUixPIiwiZmlsZSI6Ii4vaGVscGVycy91c2VEcmFnLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRHJhZygpIHtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZHJhZ2dpbmcsIHNldERyYWdnaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBjb25zdCBkcmFnU3RhcnQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBzZXRQb3NpdGlvbihldi5jbGllbnRYKTtcbiAgICBzZXRDbGlja2VkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZHJhZ1N0b3AgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PlxuICAgICAgLy8gTk9URTogbmVlZCBzb21lIGRlbGF5IHNvIGl0ZW0gdW5kZXIgY3Vyc29yIHdvbid0IGJlIGNsaWNrZWRcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgIHNldENsaWNrZWQoZmFsc2UpO1xuICAgICAgfSksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBkcmFnTW92ZSA9IChldjogUmVhY3QuTW91c2VFdmVudCwgY2I/OiAobmV3UG9zOiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCBuZXdEaWZmID0gcG9zaXRpb24gLSBldi5jbGllbnRYO1xuXG4gICAgY29uc3QgbW92ZWRFbm91Z2ggPSBNYXRoLmFicyhuZXdEaWZmKSA+IDU7XG5cbiAgICBpZiAoY2xpY2tlZCAmJiBtb3ZlZEVub3VnaCkge1xuICAgICAgc2V0RHJhZ2dpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnaW5nICYmIG1vdmVkRW5vdWdoKSB7XG4gICAgICBzZXRQb3NpdGlvbihuZXdEaWZmKTtcbiAgICAgIGNvbnNvbGUubG9nKGV2LmNsaWVudFgpO1xuICAgICAgY2I/LihuZXdEaWZmKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2LmNsaWVudFg7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkcmFnU3RhcnQsXG4gICAgZHJhZ1N0b3AsXG4gICAgZHJhZ01vdmUsXG4gICAgZHJhZ2dpbmcsXG4gICAgcG9zaXRpb24sXG4gICAgc2V0RHJhZ2dpbmcsXG4gICAgc2V0UG9zaXRpb24sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/useDrag.ts\n");

/***/ })

})