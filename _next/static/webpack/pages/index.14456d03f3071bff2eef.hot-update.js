webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(10).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, newPos => {\n    if (scrollContainer.current) {\n      scrollContainer.current.scrollLeft += newPos;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 146,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 130,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"QIAnfwbrBz/QVir/CKzTIkppIhs=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 169,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 183,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 202,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 258,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 261,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 263,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 239,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 281,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwiaGFuZGxlRHJhZyIsInNjcm9sbENvbnRhaW5lciIsIm5ld1BvcyIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiaGFuZGxlSXRlbUNsaWNrIiwiaXRlbUlkIiwiZ2V0SXRlbUJ5SWQiLCJzY3JvbGxUb0l0ZW0iLCJpdGVtU2VsZWN0ZWQiLCJjdXJyZW50U2VsZWN0ZWQiLCJmaWx0ZXIiLCJjb25jYXQiLCJyZXN0b3JlUG9zaXRpb24iLCJ1c2VDYWxsYmFjayIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FJQTs7Q0FHQTs7Q0FHQTs7QUFFQTtBQUVBLE1BQU1BLE1BQU0sZUFBR0MsT0FBSCw2REFBRyxTQUFTQyxHQUFaLGlEQUFHLGFBQWNDLG1CQUE3QjtBQUlBLE1BQU1DLFVBQVUsR0FBRyxNQUFuQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLEtBQUQsY0FBc0JGLFVBQXRCLFNBQW1DRSxLQUFuQyxDQUFkOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUNmQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxDQURSLEVBRUdDLEdBRkgsQ0FFTyxDQUFDQyxDQUFELEVBQUlDLEdBQUosTUFBYTtBQUFFQyxJQUFFLEVBQUVSLEtBQUssQ0FBQ08sR0FBRDtBQUFYLENBQWIsQ0FGUCxDQURGOztBQUtBLE1BQU1FLE9BQU8sR0FBRyxDQUNkQyxNQURjLEVBRWRDLEVBRmMsS0FHTDtBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ksTUFBWixNQUF3QixDQUF4QixJQUE2QkYsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ssTUFBWixJQUFzQixFQUF2RTs7QUFFQSxNQUFJSixXQUFKLEVBQWlCO0FBQ2ZELE1BQUUs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Qk8sSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FBQyxDQUFDL0QsUUFBakIsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBd0JFO0FBQ0UsV0FBSyxFQUFFO0FBQ0w2RCx1QkFBZSxFQUFFN0QsUUFBUSxHQUFHLE9BQUgsR0FBYSxRQURqQztBQUVMZ0MsY0FBTSxFQUFFO0FBRkg7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNELEMsQ0FFRDs7O0lBckRTb0IsSTs7TUFBQUEsSTs7QUFzRFQsTUFBTVksT0FBTyxHQUFHLE1BQU07QUFBQTs7QUFDcEIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JwRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE5QjtBQUVBRCw4Q0FBSyxDQUFDcUUsU0FBTixDQUFnQixNQUFNO0FBQ3BCRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGRCxFQUVHLEVBRkg7QUFJQSxTQUFPRCxPQUFPLGdCQUFHLHFFQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQWEsSUFBM0I7QUFDRCxDQVJEOztJQUFNRCxPOztNQUFBQSxPO0FBVVNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9oZWxwZXJzL3NhZmFyaS1wb2x5ZmlsbCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuXG4vLyBOT1RFOiBwcmV2ZW50IHNjcm9sbGluZyBvbiBtYWluIHBhZ2VcbmltcG9ydCB1c2VIaWRlQm9keVNjcm9sbCBmcm9tICcuLi9oZWxwZXJzL3VzZUhpZGVCb2R5U2Nyb2xsJztcblxuLy8gTk9URSBkcmFnIHdpdGggbW91c2VcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4uL2hlbHBlcnMvdXNlRHJhZyc7XG5cbi8vIE5PVEUgaGlkZSBzY3JvbGxiYXIgaW4gX2FwcC5qc1xuXG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gJ3JlYWN0LWhvcml6b250YWwtc2Nyb2xsaW5nLW1lbnUnO1xuXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzPy5lbnY/Lk5FWFRfUFVCTElDX0lTX1RFU1Q7XG5cbnR5cGUgc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUgPSBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgVmlzaWJpbGl0eUNvbnRleHQ+O1xuXG5jb25zdCBlbGVtUHJlZml4ID0gJ3Rlc3QnO1xuY29uc3QgZ2V0SWQgPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7ZWxlbVByZWZpeH0ke2luZGV4fWA7XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT5cbiAgQXJyYXkoMTApXG4gICAgLmZpbGwoMClcbiAgICAubWFwKChfLCBpbmQpID0+ICh7IGlkOiBnZXRJZChpbmQpIH0pKTtcblxuY29uc3Qgb25XaGVlbCA9IChcbiAgYXBpT2JqOiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSxcbiAgZXY6IFJlYWN0LldoZWVsRXZlbnRcbik6IHZvaWQgPT4ge1xuICAvLyBOT1RFOiBubyBnb29kIHN0YW5kYXJ0IHdheSB0byBkaXN0aW5ndWlzaCB0b3VjaHBhZCBzY3JvbGxpbmcgZ2VzdHVyZXNcbiAgLy8gYnV0IGNhbiBhc3N1bWUgdGhhdCBnZXN0dXJlIHdpbGwgYWZmZWN0IFggYXhpcywgbW91c2Ugc2Nyb2xsIG9ubHkgWSBheGlzXG4gIC8vIG9mIGlmIGRlbHRhWSB0b28gc21hbGwgcHJvYmFibHkgaXMgaXQgdG91Y2hwYWRcbiAgY29uc3QgaXNUaG91Y2hwYWQgPSBNYXRoLmFicyhldi5kZWx0YVgpICE9PSAwIHx8IE1hdGguYWJzKGV2LmRlbHRhWSkgPCAxNTtcblxuICBpZiAoaXNUaG91Y2hwYWQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZXYuZGVsdGFZIDwgMCkge1xuICAgIGFwaU9iai5zY3JvbGxOZXh0KCk7XG4gIH0gZWxzZSBpZiAoZXYuZGVsdGFZID4gMCkge1xuICAgIGFwaU9iai5zY3JvbGxQcmV2KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShnZXRJdGVtcyk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAvLyBOT1RFOiBmb3IgYWRkIG1vcmUgaXRlbXMgd2hlbiBsYXN0IGl0ZW0gcmVhY2hlZFxuICAvLyBjb25zdCBvblVwZGF0ZSA9ICh7IGlzTGFzdEl0ZW1WaXNpYmxlIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PiB7XG4gIC8vICAgaWYgKGlzTGFzdEl0ZW1WaXNpYmxlKSB7XG4gIC8vICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmNvbmNhdChcbiAgLy8gICAgICAgQXJyYXkoNSlcbiAgLy8gICAgICAgICAuZmlsbCgwKVxuICAvLyAgICAgICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGl0ZW1zLmxlbmd0aCArIGluZCkgfSkpXG4gIC8vICAgICApO1xuICAvLyAgICAgY29uc29sZS5sb2coJ3B1c2ggbmV3IGl0ZW1zJyk7XG4gIC8vICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+XG4gICAgISFzZWxlY3RlZC5maW5kKChlbCkgPT4gZWwgPT09IGlkKTtcblxuICBjb25zdCB7IGRyYWdTdGFydCwgZHJhZ1N0b3AsIGRyYWdNb3ZlLCBkcmFnZ2luZyB9ID0gdXNlRHJhZygpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPVxuICAgICh7IHNjcm9sbENvbnRhaW5lciB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT5cbiAgICAoZXY6IFJlYWN0Lk1vdXNlRXZlbnQpID0+XG4gICAgICBkcmFnTW92ZShldiwgKG5ld1BvcykgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ICs9IG5ld1BvcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID1cbiAgICAoaXRlbUlkOiBzdHJpbmcpID0+XG4gICAgKHsgZ2V0SXRlbUJ5SWQsIHNjcm9sbFRvSXRlbSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGlzSXRlbVNlbGVjdGVkKGl0ZW1JZCk7XG5cbiAgICAgIHNldFNlbGVjdGVkKChjdXJyZW50U2VsZWN0ZWQ6IHN0cmluZ1tdKSA9PlxuICAgICAgICBpdGVtU2VsZWN0ZWRcbiAgICAgICAgICA/IGN1cnJlbnRTZWxlY3RlZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaXRlbUlkKVxuICAgICAgICAgIDogY3VycmVudFNlbGVjdGVkLmNvbmNhdChpdGVtSWQpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWl0ZW1TZWxlY3RlZCkge1xuICAgICAgICAvLyBOT1RFOiBjZW50ZXIgaXRlbSBvbiBzZWxlY3RcbiAgICAgICAgc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKGl0ZW1JZCksICdzbW9vdGgnLCAnY2VudGVyJywgJ25lYXJlc3QnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHJlc3RvcmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICBzY3JvbGxDb250YWluZXIsXG4gICAgICBnZXRJdGVtQnlJZCxcbiAgICAgIHNjcm9sbFRvSXRlbSxcbiAgICB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgLy8gTk9URTogc2Nyb2xsIHRvIGl0ZW0sIGF1dG8vc21vb3RoIGZvciBhbmltYXRpb25cbiAgICAgIC8vIHNjcm9sbFRvSXRlbShnZXRJdGVtQnlJZCgndGVzdDE1JyksICdhdXRvJyk7XG4gICAgICAvLyBOT1RFOiBvciByZXN0b3JlIGV4YWN0IHBvc2l0aW9uIGJ5IHBpeGVsc1xuICAgICAgLy8gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgIH0sXG4gICAgW3Bvc2l0aW9uXVxuICApO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgY29uc3Qgc2F2ZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgdGhyb3R0bGUoXG4gICAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgICAgICEhc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgJiZcbiAgICAgICAgc2V0UG9zaXRpb24oc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCksXG4gICAgICA1MDBcbiAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgeyBoaWRlU2Nyb2xsLCBzaG93U2Nyb2xsIH0gPSB1c2VIaWRlQm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHZoJywgcGFkZGluZ1RvcDogJzIwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2hpZGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17c2hvd1Njcm9sbH0+XG4gICAgICAgICAgPGRpdiBvbk1vdXNlTGVhdmU9e2RyYWdTdG9wfT5cbiAgICAgICAgICAgIDxTY3JvbGxNZW51XG4gICAgICAgICAgICAgIExlZnRBcnJvdz17TGVmdEFycm93fVxuICAgICAgICAgICAgICBSaWdodEFycm93PXtSaWdodEFycm93fVxuICAgICAgICAgICAgICBvbkluaXQ9e3Jlc3RvcmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgLy8gb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gKGV2KSA9PiBkcmFnU3RhcnQoZXYpfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGRyYWdTdG9wfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGVmdEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNGaXJzdEl0ZW1WaXNpYmxlLCBzY3JvbGxQcmV2IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuICAvLyBOT1RFIGluaXRDb21wbGV0ZSBpcyBhIGhhY2sgZm9yICBwcmV2ZW50IGJsaW5raW5nIG9uIGluaXRcbiAgLy8gQ2FuIGdldCB2aXNpYmlsaXR5IG9mIGl0ZW0gb25seSBhZnRlciBpdCdzIHJlbmRlcmVkXG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXshaW5pdENvbXBsZXRlIHx8IChpbml0Q29tcGxldGUgJiYgaXNGaXJzdEl0ZW1WaXNpYmxlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFByZXYoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIExlZnRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNMYXN0SXRlbVZpc2libGUsIHNjcm9sbE5leHQgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXtpbml0Q29tcGxldGUgJiYgaXNMYXN0SXRlbVZpc2libGV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxOZXh0KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBSaWdodFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICByaWdodDogJzElJyxcbiAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAnMCcgOiAnMScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHtcbiAgb25DbGljayxcbiAgc2VsZWN0ZWQsXG4gIHRpdGxlLFxuICBpdGVtSWQsXG59OiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljazogRnVuY3Rpb247XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIGNvbnN0IHZpc2libGUgPVxuICAgICF2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSB8fFxuICAgICh2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSAmJiB2aXNpYmlsaXR5LmlzSXRlbVZpc2libGUoaXRlbUlkKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLWN5PXtpdGVtSWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZpc2liaWxpdHkpfVxuICAgICAgb25LZXlEb3duPXsoZXYpID0+IHtcbiAgICAgICAgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBvbkNsaWNrKHZpc2liaWxpdHkpO1xuICAgICAgfX1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdmlzaWJsZSA/ICd0cmFuc3BhcmVudCcgOiAnZ3JheScgfX0+XG4gICAgICAgICAgdmlzaWJsZToge0pTT04uc3RyaW5naWZ5KHZpc2libGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5zZWxlY3RlZDoge0pTT04uc3RyaW5naWZ5KCEhc2VsZWN0ZWQpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZCA/ICdncmVlbicgOiAnYmlzcXVlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUT0RPOiBuZXh0anMgY29tcGxhaW5zIGFib3V0IHVzZUxheW91dEVmZmVjdFxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb3VudGVkID8gPEFwcCAvPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})