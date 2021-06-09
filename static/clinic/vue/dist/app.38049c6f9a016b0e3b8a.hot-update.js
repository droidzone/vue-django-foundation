webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Dashboard.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! izitoast */ \"./node_modules/izitoast/dist/js/iziToast.js\");\n/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _uicomponents_ShortLinkListEl_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uicomponents/ShortLinkListEl.vue */ \"./src/views/uicomponents/ShortLinkListEl.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ShortLinkListEl: _uicomponents_ShortLinkListEl_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data: function data() {\n    return {\n      links: [],\n      isLoading: true\n    };\n  },\n  created: function created() {\n    // You need to use Arrow function only to use $router etc inside then/catch\n    console.log(\"Getting from API\");\n    this.isLoading = true;\n    this.reload();\n  },\n  methods: {\n    doLogin: function doLogin() {\n      console.log(\"router is\");\n      console.log(this.$router);\n    },\n    reload: function reload() {\n      var _this = this;\n\n      izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.show({\n        title: \"Loading\",\n        message: \"Getting links from server\",\n        icon: \"fad fa-cog fa-spin\",\n        position: \"topRight\",\n        // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center\n        messageColor: \"#ffffff\",\n        backgroundColor: \"#5498bf\"\n      });\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/links/\").then(function (_ref) {\n        var data = _ref.data;\n        console.log(\"data is\");\n        console.log(data);\n        var mylinks = data.results;\n        console.log(\"mylinks:\");\n        console.log(mylinks);\n        _this.links = mylinks;\n        _this.isLoading = false;\n        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.show({\n          title: \"Loaded\",\n          message: \"Links were retrieved from server.\",\n          icon: \"fa fa-check\",\n          position: \"topRight\",\n          color: \"green\"\n        });\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n        _this.isLoading = false;\n        izitoast__WEBPACK_IMPORTED_MODULE_1___default.a.show({\n          title: \"Error\",\n          message: \"An error occured connecting to server.\",\n          icon: \"fad fa-cog fa-spin\",\n          position: \"topRight\",\n          // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center\n          messageColor: \"#ffffff\",\n          backgroundColor: \"#5498bf\"\n        });\n\n        if (error.response) {\n          console.log(\"error is \".concat(error));\n          console.log(error); // // The request was made and the server responded with a status code\n          // // that falls out of the range of 2xx\n\n          _this.$router.push({\n            path: \"/login\"\n          });\n        }\n      });\n    },\n    deleteLink: function deleteLink(id) {\n      var _this2 = this;\n\n      console.log(\"ID is \".concat(id, \". Deleting..\"));\n      this.isLoading = true;\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(\"/api/links/\".concat(id, \"/\")).then(function (_ref2) {\n        var data = _ref2.data;\n        console.log(\"data is\");\n        console.log(data);\n        var results = data.results;\n        console.log(\"results:\");\n        console.log(results);\n        console.log(\"Reloading current data..\");\n\n        _this2.reload();\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n        console.log(error);\n        _this2.isLoading = false;\n\n        if (error.response) {\n          console.log(\"error is \".concat(error));\n          console.log(error);\n\n          _this2.$router.push({\n            name: \"Dashboard\"\n          });\n        }\n      });\n    },\n    CreateNew: function CreateNew() {\n      this.$router.push({\n        name: \"CreateLink\"\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvdmlld3MvRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9EYXNoYm9hcmQudnVlPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC14XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ2luLTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzTG9hZGluZ1wiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIExvYWRpbmcgZnJvbSBzZXJ2ZXIuLlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhZCBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3ggbWFyZ2luLTJcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMVwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBTaG9ydCBMaW5rXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC02XCIgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCAjNDY2ZDk4O1wiPlxuICAgICAgICAgICAgICAgIExvbmcgTGlua1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGwgc21hbGwtMlwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQgIzQ2NmQ5ODtcIj5cbiAgICAgICAgICAgICAgICBBY3Rpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2hvcnQtbGluay1saXN0LWVsXG4gICAgICAgICAgICAgIHYtZm9yPVwibGluayBpbiBsaW5rc1wiXG4gICAgICAgICAgICAgIDprZXk9XCJsaW5rLmlkXCJcbiAgICAgICAgICAgICAgOmVsPVwibGlua1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZ3JpZC14XCJcbiAgICAgICAgICAgICAgQGRlbGV0ZT1cImRlbGV0ZUxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9zaG9ydC1saW5rLWxpc3QtZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2VsbCBzbWFsbC0xXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiQ3JlYXRlTmV3XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYWQgZmEtYm9sdFwiPjwvaT4gQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBpemlUb2FzdCBmcm9tIFwiaXppdG9hc3RcIjtcbmltcG9ydCBTaG9ydExpbmtMaXN0RWwgZnJvbSBcIi4vdWljb21wb25lbnRzL1Nob3J0TGlua0xpc3RFbC52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFNob3J0TGlua0xpc3RFbCB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rczogW10sXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIC8vIFlvdSBuZWVkIHRvIHVzZSBBcnJvdyBmdW5jdGlvbiBvbmx5IHRvIHVzZSAkcm91dGVyIGV0YyBpbnNpZGUgdGhlbi9jYXRjaFxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBmcm9tIEFQSVwiKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWxvYWQoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZG9Mb2dpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicm91dGVyIGlzXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy4kcm91dGVyKTtcbiAgICB9LFxuICAgIHJlbG9hZCgpIHtcbiAgICAgIGl6aVRvYXN0LnNob3coe1xuICAgICAgICB0aXRsZTogXCJMb2FkaW5nXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiR2V0dGluZyBsaW5rcyBmcm9tIHNlcnZlclwiLFxuICAgICAgICBpY29uOiBcImZhZCBmYS1jb2cgZmEtc3BpblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BSaWdodFwiLCAvLyBib3R0b21SaWdodCwgYm90dG9tTGVmdCwgdG9wUmlnaHQsIHRvcExlZnQsIHRvcENlbnRlciwgYm90dG9tQ2VudGVyLCBjZW50ZXJcbiAgICAgICAgbWVzc2FnZUNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1NDk4YmZcIixcbiAgICAgIH0pO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvbGlua3MvXCIpXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBkYXRhIGlzYCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgbGV0IG15bGlua3MgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJteWxpbmtzOlwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhteWxpbmtzKTtcbiAgICAgICAgICB0aGlzLmxpbmtzID0gbXlsaW5rcztcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGl6aVRvYXN0LnNob3coe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9hZGVkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkxpbmtzIHdlcmUgcmV0cmlldmVkIGZyb20gc2VydmVyLlwiLFxuICAgICAgICAgICAgaWNvbjogXCJmYSBmYS1jaGVja1wiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIixcbiAgICAgICAgICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VyZWRcIik7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpemlUb2FzdC5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VyZWQgY29ubmVjdGluZyB0byBzZXJ2ZXIuXCIsXG4gICAgICAgICAgICBpY29uOiBcImZhZCBmYS1jb2cgZmEtc3BpblwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUmlnaHRcIiwgLy8gYm90dG9tUmlnaHQsIGJvdHRvbUxlZnQsIHRvcFJpZ2h0LCB0b3BMZWZ0LCB0b3BDZW50ZXIsIGJvdHRvbUNlbnRlciwgY2VudGVyXG4gICAgICAgICAgICBtZXNzYWdlQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1NDk4YmZcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGlzICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAvLyAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXG4gICAgICAgICAgICAvLyAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6IFwiL2xvZ2luXCIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZUxpbmsoaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBJRCBpcyAke2lkfS4gRGVsZXRpbmcuLmApO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgYXhpb3NcbiAgICAgICAgLmRlbGV0ZShgL2FwaS9saW5rcy8ke2lkfS9gKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgZGF0YSBpc2ApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGxldCByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0czpcIik7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XG4gICAgICAgICAgY29uc29sZS5sb2coYFJlbG9hZGluZyBjdXJyZW50IGRhdGEuLmApO1xuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIG9jY3VyZWRcIik7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBpcyAke2Vycm9yfWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBcIkRhc2hib2FyZFwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBDcmVhdGVOZXcoKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IFwiQ3JlYXRlTGlua1wiIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiQUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBakZBO0FBaEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js\n");

/***/ })

})