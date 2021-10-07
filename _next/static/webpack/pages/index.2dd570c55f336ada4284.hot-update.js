webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_safari_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/safari-polyfill */ \"./helpers/safari-polyfill.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ \"./node_modules/lodash/throttle.js\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/useHideBodyScroll */ \"./helpers/useHideBodyScroll/index.ts\");\n/* harmony import */ var _helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/useDrag */ \"./helpers/useDrag.ts\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/alex/react-horizontal-scrolling-menu/example-nextjs/pages/index.tsx\",\n    _process,\n    _process$env,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\n\n\n // NOTE: prevent scrolling on main page\n\n // NOTE drag with mouse\n\n // NOTE hide scrollbar in _app.js\n\n\nconst isTest = (_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NEXT_PUBLIC_IS_TEST;\nconst elemPrefix = 'test';\n\nconst getId = index => \"\".concat(elemPrefix).concat(index);\n\nconst getItems = () => Array(170).fill(0).map((_, ind) => ({\n  id: getId(ind)\n}));\n\nconst onWheel = (apiObj, ev) => {\n  // NOTE: no good standart way to distinguish touchpad scrolling gestures\n  // but can assume that gesture will affect X axis, mouse scroll only Y axis\n  // of if deltaY too small probably is it touchpad\n  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n\n  if (isThouchpad) {\n    ev.stopPropagation();\n    return;\n  }\n\n  if (ev.deltaY < 0) {\n    apiObj.scrollNext();\n  } else if (ev.deltaY > 0) {\n    apiObj.scrollPrev();\n  }\n};\n\nfunction App() {\n  _s();\n\n  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(getItems);\n  const [selected, setSelected] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]);\n  const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0); // NOTE: for add more items when last item reached\n  // const onUpdate = ({ isLastItemVisible }: scrollVisibilityApiType) => {\n  //   if (isLastItemVisible) {\n  //     const newItems = items.concat(\n  //       Array(5)\n  //         .fill(0)\n  //         .map((_, ind) => ({ id: getId(items.length + ind) }))\n  //     );\n  //     console.log('push new items');\n  //     setItems(newItems);\n  //   }\n  // };\n\n  const isItemSelected = id => !!selected.find(el => el === id);\n\n  const {\n    dragStart,\n    dragStop,\n    dragMove,\n    dragging\n  } = Object(_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const onMouseUp = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStop, [dragStop]);\n  const onMouseDown = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => dragStart, [dragStart]);\n  const pos = {\n    current: 0\n  };\n\n  const handleDrag = ({\n    scrollContainer\n  }) => ev => dragMove(ev, diff => {\n    if (scrollContainer.current) {\n      const {\n        scrollLeft\n      } = scrollContainer.current;\n      const change = pos.current - diff;\n      pos.current = diff;\n      const newPos = scrollLeft + change;\n      console.log({\n        change,\n        diff,\n        newPos\n      });\n      scrollContainer.current.scrollLeft = newPos > 0 ? newPos : 0;\n    }\n  });\n\n  const handleItemClick = itemId => ({\n    getItemById,\n    scrollToItem\n  }) => {\n    if (dragging) {\n      return false;\n    }\n\n    const itemSelected = isItemSelected(itemId);\n    setSelected(currentSelected => itemSelected ? currentSelected.filter(el => el !== itemId) : currentSelected.concat(itemId));\n\n    if (!itemSelected) {\n      // NOTE: center item on select\n      scrollToItem(getItemById(itemId), 'smooth', 'center', 'nearest');\n    }\n  };\n\n  const restorePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(({\n    scrollContainer,\n    getItemById,\n    scrollToItem\n  }) => {// NOTE: scroll to item, auto/smooth for animation\n    // scrollToItem(getItemById('test15'), 'auto');\n    // NOTE: or restore exact position by pixels\n    // scrollContainer.current.scrollLeft = position;\n  }, [position]); // eslint-disable-next-line react-hooks/exhaustive-deps\n\n  const savePosition = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(({\n    scrollContainer\n  }) => !!scrollContainer.current && setPosition(scrollContainer.current.scrollLeft), 500), []);\n  const {\n    hideScroll,\n    showScroll\n  } = Object(_helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      style: {\n        height: '200vh',\n        paddingTop: '200px'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseEnter: hideScroll,\n        onMouseLeave: showScroll,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onMouseLeave: dragStop,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"ScrollMenu\"], {\n            LeftArrow: LeftArrow,\n            RightArrow: RightArrow,\n            onInit: restorePosition // onUpdate={onUpdate}\n            ,\n            onScroll: savePosition,\n            onWheel: onWheel,\n            onMouseDown: onMouseDown,\n            onMouseUp: onMouseUp,\n            onMouseMove: handleDrag,\n            children: items.map(({\n              id\n            }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n              title: id,\n              itemId: id // NOTE: itemId is required for track items\n              ,\n              onClick: handleItemClick(id),\n              selected: isItemSelected(id)\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 17\n            }, this))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 142,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 5\n  }, this);\n}\n\n_s(App, \"Jro51pFq0RYQw3sW1MVxRBkKz0o=\", false, function () {\n  return [_helpers_useDrag__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _helpers_useHideBodyScroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = App;\n\nfunction LeftArrow() {\n  _s2();\n\n  const {\n    initComplete,\n    isFirstItemVisible,\n    scrollPrev\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]); // NOTE initComplete is a hack for  prevent blinking on init\n  // Can get visibility of item only after it's rendered\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: !initComplete || initComplete && isFirstItemVisible,\n    onClick: () => scrollPrev(isTest ? 'auto' : 'smooth'),\n    children: \"Left\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 5\n  }, this);\n}\n\n_s2(LeftArrow, \"2u9dvBRCES5pVRMXIGOF3Ug5BzY=\");\n\n_c2 = LeftArrow;\n\nfunction RightArrow() {\n  _s3();\n\n  const {\n    initComplete,\n    isLastItemVisible,\n    scrollNext\n  } = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Arrow, {\n    disabled: initComplete && isLastItemVisible,\n    onClick: () => scrollNext(isTest ? 'auto' : 'smooth'),\n    children: \"Right\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 191,\n    columnNumber: 5\n  }, this);\n}\n\n_s3(RightArrow, \"PATf83e6EP2QcNJjlk2fI328v74=\");\n\n_c3 = RightArrow;\n\nfunction Arrow({\n  children,\n  disabled,\n  onClick\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    disabled: disabled,\n    onClick: onClick,\n    style: {\n      cursor: 'pointer',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      right: '1%',\n      opacity: disabled ? '0' : '1',\n      userSelect: 'none'\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 210,\n    columnNumber: 5\n  }, this);\n}\n\n_c4 = Arrow;\n\nfunction Card({\n  onClick,\n  selected,\n  title,\n  itemId\n}) {\n  _s4();\n\n  const visibility = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__[\"VisibilityContext\"]);\n  const visible = !visibility.initComplete || visibility.initComplete && visibility.isItemVisible(itemId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"data-cy\": itemId,\n    onClick: () => onClick(visibility),\n    onKeyDown: ev => {\n      ev.code === 'Enter' && onClick(visibility);\n    },\n    role: \"button\",\n    style: {\n      border: '1px solid',\n      display: 'inline-block',\n      margin: '0 10px',\n      width: '160px',\n      userSelect: 'none'\n    },\n    tabIndex: 0,\n    className: \"card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-header\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 265,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          backgroundColor: visible ? 'transparent' : 'gray'\n        },\n        children: [\"visible: \", JSON.stringify(visible)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 266,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"selected: \", JSON.stringify(!!selected)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 269,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 264,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        backgroundColor: selected ? 'green' : 'bisque',\n        height: '200px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 271,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 247,\n    columnNumber: 5\n  }, this);\n} // TODO: nextjs complains about useLayoutEffect\n\n\n_s4(Card, \"wzCNnUK2b4GmsbLaFyuDONa1PJI=\");\n\n_c5 = Card;\n\nconst Wrapper = () => {\n  _s5();\n\n  const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(() => {\n    setMounted(true);\n  }, []);\n  return mounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(App, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 289,\n    columnNumber: 20\n  }, undefined) : null;\n};\n\n_s5(Wrapper, \"LrrVfNW3d1raFE0BNzCTILYmIfo=\");\n\n_c6 = Wrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"LeftArrow\");\n$RefreshReg$(_c3, \"RightArrow\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"Card\");\n$RefreshReg$(_c6, \"Wrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiaXNUZXN0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lTX1RFU1QiLCJlbGVtUHJlZml4IiwiZ2V0SWQiLCJpbmRleCIsImdldEl0ZW1zIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZCIsImlkIiwib25XaGVlbCIsImFwaU9iaiIsImV2IiwiaXNUaG91Y2hwYWQiLCJNYXRoIiwiYWJzIiwiZGVsdGFYIiwiZGVsdGFZIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsTmV4dCIsInNjcm9sbFByZXYiLCJBcHAiLCJpdGVtcyIsInNldEl0ZW1zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiaXNJdGVtU2VsZWN0ZWQiLCJmaW5kIiwiZWwiLCJkcmFnU3RhcnQiLCJkcmFnU3RvcCIsImRyYWdNb3ZlIiwiZHJhZ2dpbmciLCJ1c2VEcmFnIiwib25Nb3VzZVVwIiwidXNlQ2FsbGJhY2siLCJvbk1vdXNlRG93biIsInBvcyIsImN1cnJlbnQiLCJoYW5kbGVEcmFnIiwic2Nyb2xsQ29udGFpbmVyIiwiZGlmZiIsInNjcm9sbExlZnQiLCJjaGFuZ2UiLCJuZXdQb3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSXRlbUNsaWNrIiwiaXRlbUlkIiwiZ2V0SXRlbUJ5SWQiLCJzY3JvbGxUb0l0ZW0iLCJpdGVtU2VsZWN0ZWQiLCJjdXJyZW50U2VsZWN0ZWQiLCJmaWx0ZXIiLCJjb25jYXQiLCJyZXN0b3JlUG9zaXRpb24iLCJzYXZlUG9zaXRpb24iLCJ0aHJvdHRsZSIsImhpZGVTY3JvbGwiLCJzaG93U2Nyb2xsIiwidXNlSGlkZUJvZHlTY3JvbGwiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyIsImluaXRDb21wbGV0ZSIsImlzRmlyc3RJdGVtVmlzaWJsZSIsInVzZUNvbnRleHQiLCJWaXNpYmlsaXR5Q29udGV4dCIsImlzTGFzdEl0ZW1WaXNpYmxlIiwiQXJyb3ciLCJjaGlsZHJlbiIsImRpc2FibGVkIiwib25DbGljayIsImN1cnNvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJyaWdodCIsIm9wYWNpdHkiLCJ1c2VyU2VsZWN0IiwiQ2FyZCIsInRpdGxlIiwidmlzaWJpbGl0eSIsInZpc2libGUiLCJpc0l0ZW1WaXNpYmxlIiwiY29kZSIsImJvcmRlciIsIm1hcmdpbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIldyYXBwZXIiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBSUE7O0NBR0E7O0NBR0E7O0FBRUE7QUFFQSxNQUFNQSxNQUFNLGVBQUdDLE9BQUgsNkRBQUcsU0FBU0MsR0FBWixpREFBRyxhQUFjQyxtQkFBN0I7QUFJQSxNQUFNQyxVQUFVLEdBQUcsTUFBbkI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxLQUFELGNBQXNCRixVQUF0QixTQUFtQ0UsS0FBbkMsQ0FBZDs7QUFFQSxNQUFNQyxRQUFRLEdBQUcsTUFDZkMsS0FBSyxDQUFDLEdBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsQ0FEUixFQUVHQyxHQUZILENBRU8sQ0FBQ0MsQ0FBRCxFQUFJQyxHQUFKLE1BQWE7QUFBRUMsSUFBRSxFQUFFUixLQUFLLENBQUNPLEdBQUQ7QUFBWCxDQUFiLENBRlAsQ0FERjs7QUFLQSxNQUFNRSxPQUFPLEdBQUcsQ0FDZEMsTUFEYyxFQUVkQyxFQUZjLEtBR0w7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxFQUFFLENBQUNJLE1BQVosTUFBd0IsQ0FBeEIsSUFBNkJGLElBQUksQ0FBQ0MsR0FBTCxDQUFT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QUFlLEtBQWYsQ0FBOUI7QUFFQUQsOENBQUssQ0FBQzRFLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FBT0QsT0FBTyxnQkFBRyxxRUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFhLElBQTNCO0FBQ0QsQ0FSRDs7SUFBTUQsTzs7TUFBQUEsTztBQVVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaGVscGVycy9zYWZhcmktcG9seWZpbGwnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxuLy8gTk9URTogcHJldmVudCBzY3JvbGxpbmcgb24gbWFpbiBwYWdlXG5pbXBvcnQgdXNlSGlkZUJvZHlTY3JvbGwgZnJvbSAnLi4vaGVscGVycy91c2VIaWRlQm9keVNjcm9sbCc7XG5cbi8vIE5PVEUgZHJhZyB3aXRoIG1vdXNlXG5pbXBvcnQgdXNlRHJhZyBmcm9tICcuLi9oZWxwZXJzL3VzZURyYWcnO1xuXG4vLyBOT1RFIGhpZGUgc2Nyb2xsYmFyIGluIF9hcHAuanNcblxuaW1wb3J0IHsgU2Nyb2xsTWVudSwgVmlzaWJpbGl0eUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51JztcblxuY29uc3QgaXNUZXN0ID0gcHJvY2Vzcz8uZW52Py5ORVhUX1BVQkxJQ19JU19URVNUO1xuXG50eXBlIHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlID0gUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIFZpc2liaWxpdHlDb250ZXh0PjtcblxuY29uc3QgZWxlbVByZWZpeCA9ICd0ZXN0JztcbmNvbnN0IGdldElkID0gKGluZGV4OiBudW1iZXIpID0+IGAke2VsZW1QcmVmaXh9JHtpbmRleH1gO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+XG4gIEFycmF5KDE3MClcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKF8sIGluZCkgPT4gKHsgaWQ6IGdldElkKGluZCkgfSkpO1xuXG5jb25zdCBvbldoZWVsID0gKFxuICBhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLFxuICBldjogUmVhY3QuV2hlZWxFdmVudFxuKTogdm9pZCA9PiB7XG4gIC8vIE5PVEU6IG5vIGdvb2Qgc3RhbmRhcnQgd2F5IHRvIGRpc3Rpbmd1aXNoIHRvdWNocGFkIHNjcm9sbGluZyBnZXN0dXJlc1xuICAvLyBidXQgY2FuIGFzc3VtZSB0aGF0IGdlc3R1cmUgd2lsbCBhZmZlY3QgWCBheGlzLCBtb3VzZSBzY3JvbGwgb25seSBZIGF4aXNcbiAgLy8gb2YgaWYgZGVsdGFZIHRvbyBzbWFsbCBwcm9iYWJseSBpcyBpdCB0b3VjaHBhZFxuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKGdldEl0ZW1zKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIC8vIE5PVEU6IGZvciBhZGQgbW9yZSBpdGVtcyB3aGVuIGxhc3QgaXRlbSByZWFjaGVkXG4gIC8vIGNvbnN0IG9uVXBkYXRlID0gKHsgaXNMYXN0SXRlbVZpc2libGUgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+IHtcbiAgLy8gICBpZiAoaXNMYXN0SXRlbVZpc2libGUpIHtcbiAgLy8gICAgIGNvbnN0IG5ld0l0ZW1zID0gaXRlbXMuY29uY2F0KFxuICAvLyAgICAgICBBcnJheSg1KVxuICAvLyAgICAgICAgIC5maWxsKDApXG4gIC8vICAgICAgICAgLm1hcCgoXywgaW5kKSA9PiAoeyBpZDogZ2V0SWQoaXRlbXMubGVuZ3RoICsgaW5kKSB9KSlcbiAgLy8gICAgICk7XG4gIC8vICAgICBjb25zb2xlLmxvZygncHVzaCBuZXcgaXRlbXMnKTtcbiAgLy8gICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgaXNJdGVtU2VsZWN0ZWQgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgICAhIXNlbGVjdGVkLmZpbmQoKGVsKSA9PiBlbCA9PT0gaWQpO1xuXG4gIGNvbnN0IHsgZHJhZ1N0YXJ0LCBkcmFnU3RvcCwgZHJhZ01vdmUsIGRyYWdnaW5nIH0gPSB1c2VEcmFnKCk7XG4gIGNvbnN0IG9uTW91c2VVcCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGRyYWdTdG9wLCBbZHJhZ1N0b3BdKTtcbiAgY29uc3Qgb25Nb3VzZURvd24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBkcmFnU3RhcnQsIFtkcmFnU3RhcnRdKTtcblxuICBjb25zdCBwb3MgPSB7IGN1cnJlbnQ6IDAgfTtcbiAgY29uc3QgaGFuZGxlRHJhZyA9XG4gICAgKHsgc2Nyb2xsQ29udGFpbmVyIH06IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlKSA9PlxuICAgIChldjogUmVhY3QuTW91c2VFdmVudCkgPT5cbiAgICAgIGRyYWdNb3ZlKGV2LCAoZGlmZikgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHNjcm9sbENvbnRhaW5lci5jdXJyZW50O1xuICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IHBvcy5jdXJyZW50IC0gZGlmZjtcbiAgICAgICAgICBwb3MuY3VycmVudCA9IGRpZmY7XG4gICAgICAgICAgY29uc3QgbmV3UG9zID0gc2Nyb2xsTGVmdCArIGNoYW5nZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh7IGNoYW5nZSwgZGlmZiwgbmV3UG9zIH0pO1xuICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBuZXdQb3MgPiAwID8gbmV3UG9zIDogMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID1cbiAgICAoaXRlbUlkOiBzdHJpbmcpID0+XG4gICAgKHsgZ2V0SXRlbUJ5SWQsIHNjcm9sbFRvSXRlbSB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RlZCA9IGlzSXRlbVNlbGVjdGVkKGl0ZW1JZCk7XG5cbiAgICAgIHNldFNlbGVjdGVkKChjdXJyZW50U2VsZWN0ZWQ6IHN0cmluZ1tdKSA9PlxuICAgICAgICBpdGVtU2VsZWN0ZWRcbiAgICAgICAgICA/IGN1cnJlbnRTZWxlY3RlZC5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gaXRlbUlkKVxuICAgICAgICAgIDogY3VycmVudFNlbGVjdGVkLmNvbmNhdChpdGVtSWQpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWl0ZW1TZWxlY3RlZCkge1xuICAgICAgICAvLyBOT1RFOiBjZW50ZXIgaXRlbSBvbiBzZWxlY3RcbiAgICAgICAgc2Nyb2xsVG9JdGVtKGdldEl0ZW1CeUlkKGl0ZW1JZCksICdzbW9vdGgnLCAnY2VudGVyJywgJ25lYXJlc3QnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHJlc3RvcmVQb3NpdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICBzY3JvbGxDb250YWluZXIsXG4gICAgICBnZXRJdGVtQnlJZCxcbiAgICAgIHNjcm9sbFRvSXRlbSxcbiAgICB9OiBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSkgPT4ge1xuICAgICAgLy8gTk9URTogc2Nyb2xsIHRvIGl0ZW0sIGF1dG8vc21vb3RoIGZvciBhbmltYXRpb25cbiAgICAgIC8vIHNjcm9sbFRvSXRlbShnZXRJdGVtQnlJZCgndGVzdDE1JyksICdhdXRvJyk7XG4gICAgICAvLyBOT1RFOiBvciByZXN0b3JlIGV4YWN0IHBvc2l0aW9uIGJ5IHBpeGVsc1xuICAgICAgLy8gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgIH0sXG4gICAgW3Bvc2l0aW9uXVxuICApO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgY29uc3Qgc2F2ZVBvc2l0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgdGhyb3R0bGUoXG4gICAgICAoeyBzY3JvbGxDb250YWluZXIgfTogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUpID0+XG4gICAgICAgICEhc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgJiZcbiAgICAgICAgc2V0UG9zaXRpb24oc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCksXG4gICAgICA1MDBcbiAgICApLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgeyBoaWRlU2Nyb2xsLCBzaG93U2Nyb2xsIH0gPSB1c2VIaWRlQm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHN0eWxlPXt7IGhlaWdodDogJzIwMHZoJywgcGFkZGluZ1RvcDogJzIwMHB4JyB9fT5cbiAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2hpZGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17c2hvd1Njcm9sbH0+XG4gICAgICAgICAgPGRpdiBvbk1vdXNlTGVhdmU9e2RyYWdTdG9wfT5cbiAgICAgICAgICAgIDxTY3JvbGxNZW51XG4gICAgICAgICAgICAgIExlZnRBcnJvdz17TGVmdEFycm93fVxuICAgICAgICAgICAgICBSaWdodEFycm93PXtSaWdodEFycm93fVxuICAgICAgICAgICAgICBvbkluaXQ9e3Jlc3RvcmVQb3NpdGlvbn1cbiAgICAgICAgICAgICAgLy8gb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgICBvblNjcm9sbD17c2F2ZVBvc2l0aW9ufVxuICAgICAgICAgICAgICBvbldoZWVsPXtvbldoZWVsfVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17b25Nb3VzZVVwfVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlRHJhZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aWR9IC8vIE5PVEU6IGl0ZW1JZCBpcyByZXF1aXJlZCBmb3IgdHJhY2sgaXRlbXNcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2soaWQpfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkKGlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2Nyb2xsTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGVmdEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNGaXJzdEl0ZW1WaXNpYmxlLCBzY3JvbGxQcmV2IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuICAvLyBOT1RFIGluaXRDb21wbGV0ZSBpcyBhIGhhY2sgZm9yICBwcmV2ZW50IGJsaW5raW5nIG9uIGluaXRcbiAgLy8gQ2FuIGdldCB2aXNpYmlsaXR5IG9mIGl0ZW0gb25seSBhZnRlciBpdCdzIHJlbmRlcmVkXG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXshaW5pdENvbXBsZXRlIHx8IChpbml0Q29tcGxldGUgJiYgaXNGaXJzdEl0ZW1WaXNpYmxlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFByZXYoaXNUZXN0ID8gJ2F1dG8nIDogJ3Ntb290aCcpfVxuICAgID5cbiAgICAgIExlZnRcbiAgICA8L0Fycm93PlxuICApO1xufVxuXG5mdW5jdGlvbiBSaWdodEFycm93KCkge1xuICBjb25zdCB7IGluaXRDb21wbGV0ZSwgaXNMYXN0SXRlbVZpc2libGUsIHNjcm9sbE5leHQgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChWaXNpYmlsaXR5Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXJyb3dcbiAgICAgIGRpc2FibGVkPXtpbml0Q29tcGxldGUgJiYgaXNMYXN0SXRlbVZpc2libGV9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxOZXh0KGlzVGVzdCA/ICdhdXRvJyA6ICdzbW9vdGgnKX1cbiAgICA+XG4gICAgICBSaWdodFxuICAgIDwvQXJyb3c+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFycm93KHtcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICByaWdodDogJzElJyxcbiAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgPyAnMCcgOiAnMScsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHtcbiAgb25DbGljayxcbiAgc2VsZWN0ZWQsXG4gIHRpdGxlLFxuICBpdGVtSWQsXG59OiB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgb25DbGljazogRnVuY3Rpb247XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IFJlYWN0LnVzZUNvbnRleHQoVmlzaWJpbGl0eUNvbnRleHQpO1xuXG4gIGNvbnN0IHZpc2libGUgPVxuICAgICF2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSB8fFxuICAgICh2aXNpYmlsaXR5LmluaXRDb21wbGV0ZSAmJiB2aXNpYmlsaXR5LmlzSXRlbVZpc2libGUoaXRlbUlkKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLWN5PXtpdGVtSWR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHZpc2liaWxpdHkpfVxuICAgICAgb25LZXlEb3duPXsoZXYpID0+IHtcbiAgICAgICAgZXYuY29kZSA9PT0gJ0VudGVyJyAmJiBvbkNsaWNrKHZpc2liaWxpdHkpO1xuICAgICAgfX1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1hcmdpbjogJzAgMTBweCcsXG4gICAgICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB9fVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdmlzaWJsZSA/ICd0cmFuc3BhcmVudCcgOiAnZ3JheScgfX0+XG4gICAgICAgICAgdmlzaWJsZToge0pTT04uc3RyaW5naWZ5KHZpc2libGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5zZWxlY3RlZDoge0pTT04uc3RyaW5naWZ5KCEhc2VsZWN0ZWQpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZCA/ICdncmVlbicgOiAnYmlzcXVlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBUT0RPOiBuZXh0anMgY29tcGxhaW5zIGFib3V0IHVzZUxheW91dEVmZmVjdFxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtb3VudGVkID8gPEFwcCAvPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})