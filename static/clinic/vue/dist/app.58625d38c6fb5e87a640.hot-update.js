webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_joel_proj_project_vuefinal_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  testdata: \"Dummy data loaded\",\n  links: [],\n  created: function created() {\n    var _this = this;\n\n    console.log(\"Getting from API\");\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://127.0.0.1:8000/api/links/').then(function (_ref) {\n      var data = _ref.data;\n      console.log(\"data is \".concat(data));\n      console.log(\"type of data is \".concat(Object(_home_joel_proj_project_vuefinal_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data)));\n      console.log(data.results);\n      console.log(\"type:\".concat(Object(_home_joel_proj_project_vuefinal_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.results), \" results:data.results\"));\n      _this.links = data.results;\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgQWJvdmUgTGlua3NcbiAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgPGRpdiB2LWZvcj1cImxpbmsgaW4gbGlua3NcIiA6a2V5PVwibGluay5pZFwiPlxuICAgICAgICBJRDp7eyBsaW5rLmlkIH19IFNob3J0IExpbms6e3sgbGluay5zaG9ydF9saW5rIH19XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICBCZWxvdyBMaW5rc1xuICAgIDwvZGl2PlxuXG4gICAgXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICB0ZXN0ZGF0YTpcIkR1bW15IGRhdGEgbG9hZGVkXCIsXG4gICAgICAgIGxpbmtzOltdLFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIGZyb20gQVBJXCIpXG4gICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbGlua3MvJykudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGF0YSBpcyAke2RhdGF9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHR5cGUgb2YgZGF0YSBpcyAke3R5cGVvZiBkYXRhfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHR5cGU6JHt0eXBlb2YgZGF0YS5yZXN1bHRzfSByZXN1bHRzOmRhdGEucmVzdWx0c2ApO1xuICAgICAgICAgICAgICAgIHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7OztBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})