webpackHotUpdate("app",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])({\n  state: {\n    user_id: null,\n    email: null,\n    token: null\n  },\n  mutations: {\n    // You can pass ONE additional argument to store.commit, which is called the payload for the mutation:\n    SET_USER_DATA: function SET_USER_DATA(state, data_obj) {\n      console.log(\"In mutation:SET_USER_DATA user_id:\".concat(user_id, \" email:\").concat(email, \" token:\").concat(token));\n      state.user_id = data_obj.user_id;\n      state.email = data_obj.email;\n      state.token = data_obj.token;\n      localStorage.setItem(\"user_id\", data_obj.user_id);\n      localStorage.setItem(\"email\", data_obj.email);\n      localStorage.setItem(\"token\", data_obj.token);\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common[\"Authorization\"] = \"Bearer \".concat(token);\n      console.log(\"Stored token\");\n    }\n  },\n  actions: {\n    login: function login(_ref, credentials) {\n      var _this = this;\n\n      var commit = _ref.commit;\n      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://127.0.0.1:8000/api/api-token-auth/\", {\n        username: credentials.username,\n        password: credentials.password\n      }).then(function (_ref2) {\n        var data = _ref2.data;\n        console.log(\"Login Successful!\");\n        console.log(\"After trying to login, data is\");\n        console.log(data);\n        commit(\"SET_USER_DATA\", data.user_id, data.email, data.token); // let results = data.results;\n        // console.log(\"results:\");\n        // console.log(results);\n        // this.links = mylinks;\n      }).catch(function (error) {\n        console.log(\"An error occured\");\n\n        if (error.response) {\n          // this.doLogin();\n          console.log(\"Router is \");\n          console.log(_this.$router); // // The request was made and the server responded with a status code\n          // // that falls out of the range of 2xx\n          // console.log(error.response.data.detail);\n          //   this.$router.push({ path: '/login' });\n          // // router.push({ path: '/login' })\n          // console.log(error.response.status);\n          // console.log(error.response.headers);\n        }\n      });\n    }\n  },\n  modules: {}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcbiAgc3RhdGU6IHtcbiAgICB1c2VyX2lkOiBudWxsLFxuICAgIGVtYWlsOiBudWxsLFxuICAgIHRva2VuOiBudWxsLFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICAvLyBZb3UgY2FuIHBhc3MgT05FIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gc3RvcmUuY29tbWl0LCB3aGljaCBpcyBjYWxsZWQgdGhlIHBheWxvYWQgZm9yIHRoZSBtdXRhdGlvbjpcbiAgICBTRVRfVVNFUl9EQVRBKHN0YXRlLCBkYXRhX29iaikge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGBJbiBtdXRhdGlvbjpTRVRfVVNFUl9EQVRBIHVzZXJfaWQ6JHt1c2VyX2lkfSBlbWFpbDoke2VtYWlsfSB0b2tlbjoke3Rva2VufWBcbiAgICAgICk7XG4gICAgICBzdGF0ZS51c2VyX2lkID0gZGF0YV9vYmoudXNlcl9pZDtcbiAgICAgIHN0YXRlLmVtYWlsID0gZGF0YV9vYmouZW1haWw7XG4gICAgICBzdGF0ZS50b2tlbiA9IGRhdGFfb2JqLnRva2VuO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2lkXCIsIGRhdGFfb2JqLnVzZXJfaWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCBkYXRhX29iai5lbWFpbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGFfb2JqLnRva2VuKTtcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgY29uc29sZS5sb2coYFN0b3JlZCB0b2tlbmApO1xuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBsb2dpbih7IGNvbW1pdCB9LCBjcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9hcGktdG9rZW4tYXV0aC9cIiwge1xuICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2dpbiBTdWNjZXNzZnVsIWApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBBZnRlciB0cnlpbmcgdG8gbG9naW4sIGRhdGEgaXNgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBjb21taXQoXCJTRVRfVVNFUl9EQVRBXCIsIGRhdGEudXNlcl9pZCwgZGF0YS5lbWFpbCwgZGF0YS50b2tlbik7XG4gICAgICAgICAgLy8gbGV0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRzOlwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICAgICAgICAvLyB0aGlzLmxpbmtzID0gbXlsaW5rcztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3Igb2NjdXJlZFwiKTtcblxuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5kb0xvZ2luKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJvdXRlciBpcyBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRyb3V0ZXIpO1xuICAgICAgICAgICAgLy8gLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZVxuICAgICAgICAgICAgLy8gLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwpO1xuICAgICAgICAgICAgLy8gICB0aGlzLiRyb3V0ZXIucHVzaCh7IHBhdGg6ICcvbG9naW4nIH0pO1xuICAgICAgICAgICAgLy8gLy8gcm91dGVyLnB1c2goeyBwYXRoOiAnL2xvZ2luJyB9KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbiAgbW9kdWxlczoge30sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQW1DQTtBQXpEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ })

})