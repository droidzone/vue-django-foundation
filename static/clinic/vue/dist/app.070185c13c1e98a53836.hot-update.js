webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      links: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    // You need to use Arrow function only to use $router etc inside then/catch\n    console.log(\"Getting from API\");\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://127.0.0.1:8000/api/links/\").then(function (_ref) {\n      var data = _ref.data;\n      console.log(\"data is\");\n      console.log(data);\n      var mylinks = data.results;\n      console.log(\"mylinks:\");\n      console.log(mylinks);\n      _this.links = mylinks;\n    }).catch(function (error) {\n      console.log(\"An error occured\");\n\n      if (error.response) {\n        console.log(\"error is \".concat(error));\n        console.log(error); // this.doLogin();\n        // console.log(\"Router is \");\n        // console.log(this.$router);\n        // // The request was made and the server responded with a status code\n        // // that falls out of the range of 2xx\n        // console.log(error.response.data.detail);\n\n        _this.$router.push({\n          path: '/login'\n        }); // // router.push({ path: '/login' })\n        // console.log(error.response.status);\n        // console.log(error.response.headers);\n\n      }\n    });\n  },\n  methods: {\n    doLogin: function doLogin() {\n      console.log('router is');\n      console.log(this.$router);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5JRDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIFNob3J0IExpbmtcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTZcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+XG4gICAgICAgICAgTG9uZyBMaW5rXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZm9yPVwibGluayBpbiBsaW5rc1wiIDprZXk9XCJsaW5rLmlkXCIgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICB7eyBsaW5rLmlkIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIHt7IGxpbmsuc2hvcnRfbGluayB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtNlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICB7eyBsaW5rLmxvbmdfbGluayB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICAvLyBZb3UgbmVlZCB0byB1c2UgQXJyb3cgZnVuY3Rpb24gb25seSB0byB1c2UgJHJvdXRlciBldGMgaW5zaWRlIHRoZW4vY2F0Y2hcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgZnJvbSBBUElcIik7XG4gICAgXG4gICAgYXhpb3MucG9zdChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbGlua3MvXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZGF0YSBpc2ApO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBsZXQgbXlsaW5rcyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKFwibXlsaW5rczpcIik7XG4gICAgICBjb25zb2xlLmxvZyhteWxpbmtzKTtcbiAgICAgIHRoaXMubGlua3MgPSBteWxpbmtzO1xuICAgIH0pLmNhdGNoKGVycm9yID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VyZWRcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaXMgJHtlcnJvcn1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgLy8gdGhpcy5kb0xvZ2luKCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJSb3V0ZXIgaXMgXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlcik7XG4gICAgICAgICAgLy8gLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxuICAgICAgICAgIC8vIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbCk7XG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiAnL2xvZ2luJyB9KTtcbiAgICAgICAgICAvLyAvLyByb3V0ZXIucHVzaCh7IHBhdGg6ICcvbG9naW4nIH0pXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgfX1cbiAgICApXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGRvTG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZygncm91dGVyIGlzJyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRyb3V0ZXIpO1xuXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiQUE0QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQXRDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})