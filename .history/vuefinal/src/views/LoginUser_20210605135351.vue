<template>
  <div>
    <div class="grid-x">
      <div class="cell small-4"></div>
      <div class="cell small-4">
        <form @submit.prevent="login">
          <label for="username">
            Username
          </label>
          <input type="text" name="username" v-model="username" />

          <label for="password">Password</label>
          <input type="password" name="password" v-model="password" />

          <button type="submit" name="button" class="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(
        `Before logging in, username:${this.username} password:${this.password}`
      );
      this.$store.dispatch('login', {
          username: this.username,
          password: this.password,
      })
      console.log(`In login function..trying to obtain token.`);
      axios
        .post("http://127.0.0.1:8000/api/api-token-auth/", {
          username: this.username,
          password: this.password,
        })
        .then(({ data }) => {
            console.log(`Login Successful!`);
          console.log(`After trying to login, data is`);
          console.log(data);
          let mylinks = data.results;
          console.log("mylinks:");
          console.log(mylinks);
          this.links = mylinks;
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
};
</script>

<style lang="scss" scoped></style>
