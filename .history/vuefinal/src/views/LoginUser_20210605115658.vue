<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">
        Username
      </label>
    </form>
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
