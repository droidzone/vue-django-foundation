import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user_id: null,
    email: null,
    token: null,
  },
  mutations: {
    SET_USER_DATA(state, user_id, email, token) {
      state.user_id = user_id;
      state.email = email;
      state.token = token;
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
  },
  actions: {
    login({ context }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/api/api-token-auth/", {
          username: credentials.username,
          password: credentials.password,
        })
        .then(({ data }) => {
          console.log(`Login Successful!`);
          console.log(`After trying to login, data is`);
          console.log(data);
          let results = data.results;
          console.log("results:");
          console.log(results);
          // this.links = mylinks;
        })
        .catch((error) => {
          console.log("An error occured");

          if (error.response) {
            // this.doLogin();
            console.log("Router is ");
            console.log(this.$router);
            // // The request was made and the server responded with a status code
            // // that falls out of the range of 2xx
            // console.log(error.response.data.detail);
            //   this.$router.push({ path: '/login' });
            // // router.push({ path: '/login' })
            // console.log(error.response.status);
            // console.log(error.response.headers);
          }
        });
    },
  },
  modules: {},
});
