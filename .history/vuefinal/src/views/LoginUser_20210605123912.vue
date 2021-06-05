<template>
  <div>
    <div class="grid-x">
      <div class="cell small-6">
        <form @submit.prevent="login">
          <label for="username">
            Username
          </label>
          <input type="text" name="username" v-model="username" />

          <label for="password">Password</label>
          <input type="password" name="password" v-model="password" />

          <button type="submit" name="button"></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
