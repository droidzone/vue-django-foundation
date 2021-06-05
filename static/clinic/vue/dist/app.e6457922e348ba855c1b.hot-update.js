webpackHotUpdate("app",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: {\n    user_id: null,\n    email: null,\n    token: null\n  },\n  mutations: {\n    SET_USER_DATA: function SET_USER_DATA(state, user_id, email, token) {\n      state.user_id = user_id;\n      state.email = email;\n      state.token = token;\n      localStorage.setItem(\"user_id\", user_id);\n      localStorage.setItem(\"email\", email);\n      localStorage.setItem(\"token\", token);\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(token);\n    }\n  },\n  actions: {\n    login: function login(_ref, credentials) {\n      var _this = this;\n\n      var context = _ref.context;\n      return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"http://127.0.0.1:8000/api/api-token-auth/\", {\n        username: credentials.username,\n        password: credentials.password\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n        console.log(\"Login Successful!\");\n        console.log(\"After trying to login, data is\");\n        console.log(data);\n        var results = data.results;\n        console.log(\"results:\");\n        console.log(results); // this.links = mylinks;\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n\n        if (error.response) {\n          // this.doLogin();\n          console.log(\"Router is \");\n          console.log(_this.$router); // // The request was made and the server responded with a status code\n          // // that falls out of the range of 2xx\n          // console.log(error.response.data.detail);\n          //   this.$router.push({ path: '/login' });\n          // // router.push({ path: '/login' })\n          // console.log(error.response.status);\n          // console.log(error.response.headers);\n        }\n      });\n    }\n  },\n  modules: {}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcbiAgc3RhdGU6IHtcbiAgICB1c2VyX2lkOiBudWxsLFxuICAgIGVtYWlsOiBudWxsLFxuICAgIHRva2VuOiBudWxsLFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBTRVRfVVNFUl9EQVRBKHN0YXRlLCB1c2VyX2lkLCBlbWFpbCwgdG9rZW4pIHtcbiAgICAgIHN0YXRlLnVzZXJfaWQgPSB1c2VyX2lkO1xuICAgICAgc3RhdGUuZW1haWwgPSBlbWFpbDtcbiAgICAgIHN0YXRlLnRva2VuID0gdG9rZW47XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfaWRcIiwgdXNlcl9pZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVtYWlsXCIsIGVtYWlsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvZ2luKHsgY29udGV4dCB9LCBjcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hcGktdG9rZW4tYXV0aC9cIiwge1xuICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2dpbiBTdWNjZXNzZnVsIWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBBZnRlciB0cnlpbmcgdG8gbG9naW4sIGRhdGEgaXNgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdHM6XCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgICAgICAgIC8vIHRoaXMubGlua3MgPSBteWxpbmtzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBvY2N1cmVkXCIpO1xuXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRvTG9naW4oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm91dGVyIGlzIFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHJvdXRlcik7XG4gICAgICAgICAgICAvLyAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXG4gICAgICAgICAgICAvLyAvLyB0aGF0IGZhbGxzIG91dCBvZiB0aGUgcmFuZ2Ugb2YgMnh4XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbCk7XG4gICAgICAgICAgICAvLyAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogJy9sb2dpbicgfSk7XG4gICAgICAgICAgICAvLyAvLyByb3V0ZXIucHVzaCh7IHBhdGg6ICcvbG9naW4nIH0pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBtb2R1bGVzOiB7fSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQWtDQTtBQW5EQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})