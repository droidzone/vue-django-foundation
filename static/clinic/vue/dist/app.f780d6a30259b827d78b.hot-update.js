webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      links: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    // You need to use Arrow function only to use $router etc inside then/catch\n    console.log(\"Getting from API\");\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"http://127.0.0.1:8000/api/links/\").then(function (_ref) {\n      var data = _ref.data;\n      console.log(\"data is\");\n      console.log(data);\n      var mylinks = data.results;\n      console.log(\"mylinks:\");\n      console.log(mylinks);\n      _this.links = mylinks;\n    }).catch(function (error) {\n      console.log(\"An error occured\");\n\n      if (error.response) {\n        console.log(\"error is \".concat(error));\n        console.log(error); // // The request was made and the server responded with a status code\n        // // that falls out of the range of 2xx\n\n        _this.$router.push({\n          path: \"/login\"\n        });\n      }\n    });\n  },\n  methods: {\n    doLogin: function doLogin() {\n      console.log(\"router is\");\n      console.log(this.$router);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5JRDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIFNob3J0IExpbmtcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTZcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+XG4gICAgICAgICAgTG9uZyBMaW5rXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIEFjdGlvbnNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgOmtleT1cImxpbmsuaWRcIiBjbGFzcz1cImdyaWQteFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIHt7IGxpbmsuaWQgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTJcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+XG4gICAgICAgICAge3sgbGluay5zaG9ydF9saW5rIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC02XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIHt7IGxpbmsubG9uZ19saW5rIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWxlcnQgYnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogW10sXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIC8vIFlvdSBuZWVkIHRvIHVzZSBBcnJvdyBmdW5jdGlvbiBvbmx5IHRvIHVzZSAkcm91dGVyIGV0YyBpbnNpZGUgdGhlbi9jYXRjaFxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBmcm9tIEFQSVwiKTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9saW5rcy9cIilcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgZGF0YSBpc2ApO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgbGV0IG15bGlua3MgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibXlsaW5rczpcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKG15bGlua3MpO1xuICAgICAgICB0aGlzLmxpbmtzID0gbXlsaW5rcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3Igb2NjdXJlZFwiKTtcblxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaXMgJHtlcnJvcn1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgLy8gLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxuICAgICAgICAgIC8vIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IFwiL2xvZ2luXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBkb0xvZ2luKCkge1xuICAgICAgY29uc29sZS5sb2coXCJyb3V0ZXIgaXNcIik7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRyb3V0ZXIpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiQUFrQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFsQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})