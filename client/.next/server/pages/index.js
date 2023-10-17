"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction index() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Axios automatically returns the data property of the response object,\n        // and will throw an error if the request fails.\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/\").then((response)=>{\n            setData(response.data);\n        }).catch((error)=>{\n            setError(error.toString());\n            console.error(\"There was an error fetching the data:\", error);\n        });\n    }, []); // Empty dependency array means this useEffect runs once, similar to componentDidMount\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"hel\"\n            }, void 0, false, {\n                fileName: \"/Users/nicholasthorp/Documents/code/letsChat/client/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Error: \",\n                    error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nicholasthorp/Documents/code/letsChat/client/src/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: JSON.stringify(data)\n            }, void 0, false, {\n                fileName: \"/Users/nicholasthorp/Documents/code/letsChat/client/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/nicholasthorp/Documents/code/letsChat/client/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nicholasthorp/Documents/code/letsChat/client/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ3pCO0FBRzFCLFNBQVNJLEtBQUssR0FBRztJQUVmLE1BQU0sS0FBQ0MsSUFBSSxNQUFFQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE1BQU0sS0FBQ0ssS0FBSyxNQUFFQyxRQUFRLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRXhDRCxnREFBUyxDQUFDLElBQU07UUFDZCx3RUFBd0U7UUFDeEUsZ0RBQWdEO1FBQ2hERSxpREFBUyxDQUFDLHdCQUF3QixDQUFDLENBQ2hDTyxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBSTtZQUNoQkwsT0FBTyxDQUFDSyxRQUFRLENBQUNOLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNETyxLQUFLLENBQUNMLENBQUFBLEtBQUssR0FBSTtZQUNkQyxRQUFRLENBQUNELEtBQUssQ0FBQ00sUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzQkMsT0FBTyxDQUFDUCxLQUFLLENBQUMsdUNBQXVDLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUUsc0ZBQXNGO0lBRS9GTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDO0lBQ2pCLHFCQUNFLDhEQUFDVyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxLQUFHOzs7OztvQkFBSztZQUNYVixLQUFLLGlCQUNKLDhEQUFDUyxLQUFHOztvQkFBQyxTQUFPO29CQUFDVCxLQUFLOzs7Ozs7b0JBQU8sR0FDdkJGLElBQUksaUJBQ04sOERBQUNXLEtBQUc7MEJBQUVFLElBQUksQ0FBQ0MsU0FBUyxDQUFDZCxJQUFJLENBQUM7Ozs7O29CQUFPLGlCQUVqQyw4REFBQ1csS0FBRzswQkFBQyxZQUFVOzs7OztvQkFBTTs7Ozs7O1lBRW5CLENBQ047QUFDRSxDQUFDO0FBRVAsaUVBQWVaLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQXhpb3MgYXV0b21hdGljYWxseSByZXR1cm5zIHRoZSBkYXRhIHByb3BlcnR5IG9mIHRoZSByZXNwb25zZSBvYmplY3QsXG4gICAgLy8gYW5kIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIHJlcXVlc3QgZmFpbHMuXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBzZXRFcnJvcihlcnJvci50b1N0cmluZygpKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBkYXRhOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7ICAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IG1lYW5zIHRoaXMgdXNlRWZmZWN0IHJ1bnMgb25jZSwgc2ltaWxhciB0byBjb21wb25lbnREaWRNb3VudFxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5oZWw8L2gxPlxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+XG4gICAgICApIDogZGF0YSA/IChcbiAgICAgICAgPGRpdj57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG4gICAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJpbmRleCIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();