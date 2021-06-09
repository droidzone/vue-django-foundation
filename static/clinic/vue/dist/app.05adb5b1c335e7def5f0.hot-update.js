webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast */ \"./node_modules/izitoast/dist/js/iziToast.js\");\n/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uicomponents_ShortLinkListEl_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uicomponents/ShortLinkListEl.vue */ \"./src/views/uicomponents/ShortLinkListEl.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ShortLinkListEl: _uicomponents_ShortLinkListEl_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      links: [],\n      isLoading: true\n    };\n  },\n  created: function created() {\n    // You need to use Arrow function only to use $router etc inside then/catch\n    console.log(\"Getting from API\");\n    this.isLoading = true;\n    this.reload();\n  },\n  methods: {\n    doLogin: function doLogin() {\n      console.log(\"router is\");\n      console.log(this.$router);\n    },\n    reload: function reload() {\n      var _this = this;\n\n      izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.show({\n        title: \"Loading\",\n        message: \"Getting links from server\"\n      });\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/links/\").then(function (_ref) {\n        var data = _ref.data;\n        console.log(\"data is\");\n        console.log(data);\n        var mylinks = data.results;\n        console.log(\"mylinks:\");\n        console.log(mylinks);\n        _this.links = mylinks;\n        _this.isLoading = false;\n        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.show({\n          title: \"Loaded\",\n          message: \"Links were retrieved from server.\"\n        });\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n        _this.isLoading = false;\n\n        if (error.response) {\n          console.log(\"error is \".concat(error));\n          console.log(error); // // The request was made and the server responded with a status code\n          // // that falls out of the range of 2xx\n\n          _this.$router.push({\n            path: \"/login\"\n          });\n        }\n      });\n    },\n    deleteLink: function deleteLink(id) {\n      var _this2 = this;\n\n      console.log(\"ID is \".concat(id, \". Deleting..\"));\n      this.isLoading = true;\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(\"/api/links/\".concat(id, \"/\")).then(function (_ref2) {\n        var data = _ref2.data;\n        console.log(\"data is\");\n        console.log(data);\n        var results = data.results;\n        console.log(\"results:\");\n        console.log(results);\n        console.log(\"Reloading current data..\");\n\n        _this2.reload();\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n        console.log(error);\n        _this2.isLoading = false;\n\n        if (error.response) {\n          console.log(\"error is \".concat(error));\n          console.log(error);\n\n          _this2.$router.push({\n            name: \"Dashboard\"\n          });\n        }\n      });\n    },\n    CreateNew: function CreateNew() {\n      this.$router.push({\n        name: \"CreateLink\"\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC14XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzTG9hZGluZ1wiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIExvYWRpbmcgZnJvbSBzZXJ2ZXIuLlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhZCBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggbWFyZ2luLTJcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBTaG9ydCBMaW5rXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC02XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgICAgICAgIExvbmcgTGlua1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBBY3Rpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2hvcnQtbGluay1saXN0LWVsXG4gICAgICAgICAgICAgIHYtZm9yPVwibGluayBpbiBsaW5rc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJsaW5rLmlkXCJcbiAgICAgICAgICAgICAgOmVsPVwibGlua1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZ3JpZC14XCJcbiAgICAgICAgICAgICAgQGRlbGV0ZT1cImRlbGV0ZUxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9zaG9ydC1saW5rLWxpc3QtZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiQ3JlYXRlTmV3XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYWQgZmEtYm9sdFwiPjwvaT4gQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tICdpeml0b2FzdCc7XG5pbXBvcnQgU2hvcnRMaW5rTGlzdEVsIGZyb20gXCIuL3VpY29tcG9uZW50cy9TaG9ydExpbmtMaXN0RWwudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBTaG9ydExpbmtMaXN0RWwgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IFtdLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICAvLyBZb3UgbmVlZCB0byB1c2UgQXJyb3cgZnVuY3Rpb24gb25seSB0byB1c2UgJHJvdXRlciBldGMgaW5zaWRlIHRoZW4vY2F0Y2hcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgZnJvbSBBUElcIik7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGRvTG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJvdXRlciBpc1wiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlcik7XG4gICAgfSxcbiAgICByZWxvYWQoKSB7XG4gICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgdGl0bGU6IFwiTG9hZGluZ1wiLFxuICAgICAgICBtZXNzYWdlOiBcIkdldHRpbmcgbGlua3MgZnJvbSBzZXJ2ZXJcIixcbiAgICAgIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvbGlua3MvXCIpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBkYXRhIGlzYCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgbGV0IG15bGlua3MgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJteWxpbmtzOlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhteWxpbmtzKTtcbiAgICAgICAgICB0aGlzLmxpbmtzID0gbXlsaW5rcztcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGl6aVRvYXN0LnNob3coe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9hZGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxpbmtzIHdlcmUgcmV0cmlldmVkIGZyb20gc2VydmVyLlwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cmVkXCIpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBpcyAke2Vycm9yfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgLy8gLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxuICAgICAgICAgICAgLy8gLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBcIi9sb2dpblwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWxldGVMaW5rKGlkKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSUQgaXMgJHtpZH0uIERlbGV0aW5nLi5gKTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5kZWxldGUoYC9hcGkvbGlua3MvJHtpZH0vYClcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYGRhdGEgaXNgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdHM6XCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWxvYWRpbmcgY3VycmVudCBkYXRhLi5gKTtcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cmVkXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaXMgJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogXCJEYXNoYm9hcmRcIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgQ3JlYXRlTmV3KCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBcIkNyZWF0ZUxpbmtcIiB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6IkFBNkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbEVBO0FBaEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})