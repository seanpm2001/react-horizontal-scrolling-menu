webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(180).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // const handleDrag =\n  //   ({ scrollContainer }: scrollVisibilityApiType) =>\n  //   (ev: React.MouseEvent) =>\n  //     dragMove(ev, (newPos) => {\n  //       if (scrollContainer.current) {\n  //         scrollContainer.current.scrollLeft += newPos;\n  //       }\n  //     });\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => {\n    dragMove(ev, newPos => {\n      if (scrollContainer.current) {\n        const {\n          scrollLeft\n        } = scrollContainer.current;\n        scrollContainer.current.scrollLeft = newPos;\n      }\n    });\n  };\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: () => ev => dragStart(ev),\n            onMouseUp: () => dragStop,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"QIAnfwbrBz/QVir/CKzTIkppIhs=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 180,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 194,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 213,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 268,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 269,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 272,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 267,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 274,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 250,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 292,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwiaGFuZGxlRHJhZyIsInNjcm9sbENvbnRhaW5lciIsIm5ld1BvcyIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiaGFuZGxlSXRlbUNsaWNrIiwiaXRlbUlkIiwiZ2V0SXRlbUJ5SWQiLCJzY3JvbGxUb0l0ZW0iLCJpdGVtU2VsZWN0ZWQiLCJjdXJyZW50U2VsZWN0ZWQiLCJmaWx0ZXIiLCJjb25jYXQiLCJyZXN0b3JlUG9zaXRpb24iLCJ1c2VDYWxsYmFjayIsInNhdmVQb3NpdGlvbiIsInRocm90dGxlIiwiaGlkZVNjcm9sbCIsInNob3dTY3JvbGwiLCJ1c2VIaWRlQm9keVNjcm9sbCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwiaW5pdENvbXBsZXRlIiwiaXNGaXJzdEl0ZW1WaXNpYmxlIiwidXNlQ29udGV4dCIsIlZpc2liaWxpdHlDb250ZXh0IiwiaXNMYXN0SXRlbVZpc2libGUiLCJBcnJvdyIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0Iiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJDYXJkIiwidGl0bGUiLCJ2aXNpYmlsaXR5IiwidmlzaWJsZSIsImlzSXRlbVZpc2libGUiLCJjb2RlIiwiYm9yZGVyIiwibWFyZ2luIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiV3JhcHBlciIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FJQTs7Q0FHQTs7Q0FHQTs7QUFFQTtBQUVBLE1BQU1BLE1BQU0sZUFBR0MsT0FBSCw2REFBRyxTQUFTQyxHQUFaLGlEQUFHLGFBQWNDLG1CQUE3QjtBQUlBLE1BQU1DLFVBQVUsR0FBRyxNQUFuQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUlDLEtBQUQsY0FBc0JGLFVBQXRCLFNBQW1DRSxLQUFuQyxDQUFkOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxNQUNmQyxLQUFLLENBQUMsR0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxDQURSLEVBRUdDLEdBRkgsQ0FFTyxDQUFDQyxDQUFELEVBQUlDLEdBQUosTUFBYTtBQUFFQyxJQUFFLEVBQUVSLEtBQUssQ0FBQ08sR0FBRDtBQUFYLENBQWIsQ0FGUCxDQURGOztBQUtBLE1BQU1FLE9BQU8sR0FBRyxDQUNkQyxNQURjLEVBRWRDLEVBRmMsS0FHTDtBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ksTUFBWixNQUF3QixDQUF4QixJQUE2QkYsSUFBSSxDQUFDQyxHQUFMLENBQVNILEVBQUUsQ0FBQ0ssTUFBWixJQUFzQixFQUF2RTs7QUFFQSxNQUFJSixXQUFKLEVBQWlCO0FBQ2ZELE1BQUUs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QUgsR0FBbUI7QUFBN0MsU0FBWjtBQUFBLGdDQUNZTyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsT0FBZixDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBQSxpQ0FBZ0JPLElBQUksQ0FBQ0MsU0FBTCxDQUFlLENBQUMsQ0FBQy9ELFFBQWpCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixlQXdCRTtBQUNFLFdBQUssRUFBRTtBQUNMNkQsdUJBQWUsRUFBRTdELFFBQVEsR0FBRyxPQUFILEdBQWEsUUFEakM7QUFFTGdDLGNBQU0sRUFBRTtBQUZIO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRCxDLENBRUQ7OztJQXJEU29CLEk7O01BQUFBLEk7O0FBc0RULE1BQU1ZLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ3BCLFFBQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCcEUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBOUI7QUFFQUQsOENBQUssQ0FBQ3FFLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FBT0QsT0FBTyxnQkFBRyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFhLElBQTNCO0FBQ0QsQ0FSRDs7SUFBTUQsTzs7TUFBQUEsTztBQVVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaGVscGVycy9zYWZhcmktcG9seWZpbGwnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuLy8gTk9URTogcHJldmVudCBzY3JvbGxpbmcgb24gbWFpbiBwYWdlXG5pbXBvcnQgdXNlSGlkZUJvZHlTY3JvbGwgZnJvbSAnLi4vaGVscGVycy91c2VIaWRlQm9keVNjcm9sbCc7XG5cbi8vIE5PVEUgZHJhZyB3aXRoIG1vdXNlXG5pbXBvcnQgdXNlRHJhZyBmcm9tICcuLi9oZWxwZXJzL3VzZURyYWcnO1xuXG4vLyBOT1RFIGhpZGUgc2Nyb2xsYmFyIGluIF9hcHAuanNcblxuaW1wb3J0IHsgU2Nyb2xsTWVudSwgVmlzaWJpbGl0eUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51JztcblxuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcz8uZW52Py5ORVhUX1BVQkxJQ19JU19URVNUO1xuXG50eXBlIHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlID0gUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIFZpc2liaWxpdHlDb250ZXh0PjtcblxuY29uc3QgZWxlbVByZWZpeCA9ICd0ZXN0JztcbmNvbnN0IGdldElkID0gKGluZGV4OiBudW1iZXIpID0+IGAke2VsZW1QcmVmaXh9JHtpbmRleH1gO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+XG4gIEFycmF5KDE4MClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGluZCkgfSkpO1xuXG5jb25zdCBvbldoZWVsID0gKFxuICBhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLFxuICBldjogUmVhY3QuV2hlZWxFdmVudFxuKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IG5vIGdvb2Qgc3RhbmRhcnQgd2F5IHRvIGRpc3Rpbmd1aXNoIHRvdWNocGFkIHNjcm9sbGluZyBnZXN0dXJlc1xuICAvLyBidXQgY2FuIGFzc3VtZSB0aGF0IGdlc3R1cmUgd2lsbCBhZmZlY3QgWCBheGlzLCBtb3VzZSBzY3JvbGwgb25seSBZIGF4aXNcbiAgLy8gb2YgaWYgZGVsdGFZIHRvbyBzbWFsbCBwcm9iYWJseSBpcyBpdCB0b3VjaHBhZFxuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGdldEl0ZW1zKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIC8vIE5PVEU6IGZvciBhZGQgbW9yZSBpdGVtcyB3aGVuIGxhc3QgaXRlbSByZWFjaGVkXG4gIC8vIGNvbnN0IG9uVXBkYXRlID0gKHsgaXNMYXN0SXRlbVZpc2libGUgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgLy8gICBpZiAoaXNMYXN0SXRlbVZpc2libGUpIHtcbiAgLy8gICAgIGNvbnN0IG5ld0l0ZW1zID0gaXRlbXMuY29uY2F0KFxuICAvLyAgICAgICBBcnJheSg1KVxuICAvLyAgICAgICAgIC5maWxsKDApXG4gIC8vICAgICAgICAgLm1hcCgoXywgaW5kKSA9PiAoeyBpZDogZ2V0SWQoaXRlbXMubGVuZ3RoICsgaW5kKSB9KSlcbiAgLy8gICAgICk7XG4gIC8vICAgICBjb25zb2xlLmxvZygncHVzaCBuZXcgaXRlbXMnKTtcbiAgLy8gICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgICAhIXNlbGVjdGVkLmZpbmQoKGVsKSA9PiBlbCA9PT0gaWQpO1xuXG4gIGNvbnN0IHsgZHJhZ1N0YXJ0LCBkcmFnU3RvcCwgZHJhZ01vdmUsIGRyYWdnaW5nIH0gPSB1c2VEcmFnKCk7XG5cbiAgLy8gY29uc3QgaGFuZGxlRHJhZyA9XG4gIC8vICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAvLyAgIChldjogUmVhY3QuTW91c2VFdmVudCkgPT5cbiAgLy8gICAgIGRyYWdNb3ZlKGV2LCAobmV3UG9zKSA9PiB7XG4gIC8vICAgICAgIGlmIChzY3JvbGxDb250YWluZXIuY3VycmVudCkge1xuICAvLyAgICAgICAgIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgKz0gbmV3UG9zO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVEcmFnID1cbiAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgKGV2OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBkcmFnTW92ZShldiwgKG5ld1BvcykgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHNjcm9sbENvbnRhaW5lci5jdXJyZW50O1xuICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBuZXdQb3M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID1cbiAgICAoaXRlbUlkOiBzdHJpbmcpID0+XG4gICAgKHsgZ2V0SXRlbUJ5SWQsIHNjcm9sbFRvSXRlbSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGlzSXRlbVNlbGVjdGVkKGl0ZW1JZCk7XG5cbiAgICAgIHNldFNlbGVjdGVkKChjdXJyZW50U2VsZWN0ZWQ6IHN0cmluZ1tdKSA9PlxuICAgICAgICBpdGVtU2VsZWN0ZWRcbiAgICAgICAgICA/IGN1cnJlbnRTZWxlY3RlZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaXRlbUlkKVxuICAgICAgICAgIDogY3VycmVudFNlbGVjdGVkLmNvbmNhdChpdGVtSWQpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWl0ZW1TZWxlY3RlZCkge1xuICAgICAgICAvLyBOT1RFOiBjZW50ZXIgaXRlbSBvbiBzZWxlY3RcbiAgICAgICAgc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKGl0ZW1JZCksICdzbW9vdGgnLCAnY2VudGVyJywgJ25lYXJlc3QnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHJlc3RvcmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICBzY3JvbGxDb250YWluZXIsXG4gICAgICBnZXRJdGVtQnlJZCxcbiAgICAgIHNjcm9sbFRvSXRlbSxcbiAgICB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgLy8gTk9URTogc2Nyb2xsIHRvIGl0ZW0sIGF1dG8vc21vb3RoIGZvciBhbmltYXRpb25cbiAgICAgIC8vIHNjcm9sbFRvSXRlbShnZXRJdGVtQnlJZCgndGVzdDE1JyksICdhdXRvJyk7XG4gICAgICAvLyBOT1RFOiBvciByZXN0b3JlIGV4YWN0IHBvc2l0aW9uIGJ5IHBpeGVsc1xuICAgICAgLy8gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgIH0sXG4gICAgW3Bvc2l0aW9uXVxuICApO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgY29uc3Qgc2F2ZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgdGhyb3R0bGUoXG4gICAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgICAgICEhc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgJiZcbiAgICAgICAgc2V0UG9zaXRpb24oc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCksXG4gICAgICA1MDBcbiAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgeyBoaWRlU2Nyb2xsLCBzaG93U2Nyb2xsIH0gPSB1c2VIaWRlQm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHZoJywgcGFkZGluZ1RvcDogJzIwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2hpZGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17c2hvd1Njcm9sbH0+XG4gICAgICAgICAgPGRpdiBvbk1vdXNlTGVhdmU9e2RyYWdTdG9wfT5cbiAgICAgICAgICAgIDxTY3JvbGxNZW51XG4gICAgICAgICAgICAgIExlZnRBcnJvdz17TGVmdEFycm93fVxuICAgICAgICAgICAgICBSaWdodEFycm93PXtSaWdodEFycm93fVxuICAgICAgICAgICAgICBvbkluaXQ9e3Jlc3RvcmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgLy8gb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4gKGV2KSA9PiBkcmFnU3RhcnQoZXYpfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IGRyYWdTdG9wfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGVmdEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNGaXJzdEl0ZW1WaXNpYmxlLCBzY3JvbGxQcmV2IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuICAvLyBOT1RFIGluaXRDb21wbGV0ZSBpcyBhIGhhY2sgZm9yICBwcmV2ZW50IGJsaW5raW5nIG9uIGluaXRcbiAgLy8gQ2FuIGdldCB2aXNpYmlsaXR5IG9mIGl0ZW0gb25seSBhZnRlciBpdCdzIHJlbmRlcmVkXG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXshaW5pdENvbXBsZXRlIHx8IChpbml0Q29tcGxldGUgJiYgaXNGaXJzdEl0ZW1WaXNpYmxlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFByZXYoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIExlZnRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNMYXN0SXRlbVZpc2libGUsIHNjcm9sbE5leHQgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXtpbml0Q29tcGxldGUgJiYgaXNMYXN0SXRlbVZpc2libGV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxOZXh0KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBSaWdodFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICByaWdodDogJzElJyxcbiAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAnMCcgOiAnMScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHtcbiAgb25DbGljayxcbiAgc2VsZWN0ZWQsXG4gIHRpdGxlLFxuICBpdGVtSWQsXG59OiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljazogRnVuY3Rpb247XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIGNvbnN0IHZpc2libGUgPVxuICAgICF2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSB8fFxuICAgICh2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSAmJiB2aXNpYmlsaXR5LmlzSXRlbVZpc2libGUoaXRlbUlkKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLWN5PXtpdGVtSWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZpc2liaWxpdHkpfVxuICAgICAgb25LZXlEb3duPXsoZXYpID0+IHtcbiAgICAgICAgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBvbkNsaWNrKHZpc2liaWxpdHkpO1xuICAgICAgfX1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdmlzaWJsZSA/ICd0cmFuc3BhcmVudCcgOiAnZ3JheScgfX0+XG4gICAgICAgICAgdmlzaWJsZToge0pTT04uc3RyaW5naWZ5KHZpc2libGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5zZWxlY3RlZDoge0pTT04uc3RyaW5naWZ5KCEhc2VsZWN0ZWQpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZCA/ICdncmVlbicgOiAnYmlzcXVlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUT0RPOiBuZXh0anMgY29tcGxhaW5zIGFib3V0IHVzZUxheW91dEVmZmVjdFxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb3VudGVkID8gPEFwcCAvPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})