webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import axios from \"axios\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      links: []\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    // You need to use Arrow function only to use $router etc inside then/catch\n    console.log(\"Getting from API\");\n    this.$axios.post(\"http://127.0.0.1:8000/api/links/\").then(function (_ref) {\n      var data = _ref.data;\n      console.log(\"data is\");\n      console.log(data);\n      var mylinks = data.results;\n      console.log(\"mylinks:\");\n      console.log(mylinks);\n      _this.links = mylinks;\n    }).catch(function (error) {\n      console.log(\"An error occured\");\n\n      if (error.response) {\n        // this.doLogin();\n        console.log(\"Router is \");\n        console.log(_this.$router); // // The request was made and the server responded with a status code\n        // // that falls out of the range of 2xx\n        // console.log(error.response.data.detail);\n\n        _this.$router.push({\n          path: '/login'\n        }); // // router.push({ path: '/login' })\n        // console.log(error.response.status);\n        // console.log(error.response.headers);\n\n      }\n    });\n  },\n  methods: {\n    doLogin: function doLogin() {\n      console.log('router is');\n      console.log(this.$router);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5JRDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIFNob3J0IExpbmtcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHNtYWxsLTZcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkICM0NjZkOTg7XCI+XG4gICAgICAgICAgTG9uZyBMaW5rXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtZm9yPVwibGluayBpbiBsaW5rc1wiIDprZXk9XCJsaW5rLmlkXCIgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICB7eyBsaW5rLmlkIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0yXCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgIHt7IGxpbmsuc2hvcnRfbGluayB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtNlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICB7eyBsaW5rLmxvbmdfbGluayB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICAvLyBZb3UgbmVlZCB0byB1c2UgQXJyb3cgZnVuY3Rpb24gb25seSB0byB1c2UgJHJvdXRlciBldGMgaW5zaWRlIHRoZW4vY2F0Y2hcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgZnJvbSBBUElcIik7XG4gICAgXG4gICAgdGhpcy4kYXhpb3MucG9zdChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbGlua3MvXCIpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZGF0YSBpc2ApO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBsZXQgbXlsaW5rcyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKFwibXlsaW5rczpcIik7XG4gICAgICBjb25zb2xlLmxvZyhteWxpbmtzKTtcbiAgICAgIHRoaXMubGlua3MgPSBteWxpbmtzO1xuICAgIH0pLmNhdGNoKGVycm9yID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VyZWRcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyB0aGlzLmRvTG9naW4oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvdXRlciBpcyBcIik7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy4kcm91dGVyKTtcbiAgICAgICAgICAvLyAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXG4gICAgICAgICAgLy8gLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsKTtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6ICcvbG9naW4nIH0pO1xuICAgICAgICAgIC8vIC8vIHJvdXRlci5wdXNoKHsgcGF0aDogJy9sb2dpbicgfSlcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICB9fVxuICAgIClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZG9Mb2dpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZXIgaXMnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlcik7XG5cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiJBQTRCQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQXBDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})