<template>
  <div>
    <div class="grid-container">
      <div class="grid-x">
        <form @submit.prevent="">
          <div class="cell small-2">
            <label for="username">
              Long Link
            </label>
          </div>
          <div class="cell small-8">
            <input type="text" v-model="longLink" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longLink: "",
      shortLink: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
