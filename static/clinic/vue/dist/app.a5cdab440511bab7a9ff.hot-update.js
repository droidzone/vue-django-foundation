webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      links: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    console.log(\"Getting from API\");\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://127.0.0.1:8000/api/links/\").then(function (_ref) {\n      var data = _ref.data;\n      console.log(\"data is\");\n      console.log(data);\n      var mylinks = data.results;\n      console.log(\"mylinks:\");\n      console.log(mylinks);\n      _this.links = mylinks;\n    }).catch();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQteFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPklEPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTJcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+U2hvcnQgTGluazwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC02XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPkxvbmcgTGluazwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZm9yPVwibGluayBpbiBsaW5rc1wiIDprZXk9XCJsaW5rLmlkXCIgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj57eyBsaW5rLmlkIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTJcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+e3sgbGluay5zaG9ydF9saW5rIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTZcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+e3sgbGluay5sb25nX2xpbmsgfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgZnJvbSBBUElcIik7XG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9saW5rcy9cIikudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBkYXRhIGlzYCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGxldCBteWxpbmtzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgY29uc29sZS5sb2coXCJteWxpbmtzOlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKG15bGlua3MpO1xuICAgICAgdGhpcy5saW5rcyA9IG15bGlua3M7XG4gICAgfSkuY2F0Y2goXG4gICAgICBcbiAgICApO1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6IkFBbUJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQW5CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})