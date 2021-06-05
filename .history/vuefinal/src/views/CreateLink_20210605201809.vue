<template>
  <div>
    <div class="grid-container">
      <div class="grid-x">
        <form @submit.prevent="">
          <div class="row">
            <div class="columns small-2">
              <label for="username" class="float-right">
                Long Link
              </label>
            </div>
            <div class="columns small-6">
              <input type="text" v-model="longLink" />
            </div>
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
