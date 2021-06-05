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
      console.log(`In login function..trying to obtain token.`);
      this.$store.dispatch('login', {
          username: this.username,
          password: this.password,
      });
      

    },
  },
};
</script>

<style lang="scss" scoped></style>
