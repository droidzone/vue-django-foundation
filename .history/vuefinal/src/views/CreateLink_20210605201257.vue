<template>
  <div>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-10">
          <form @submit.prevent="">
            <label for="username">
              Long Link
            </label>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            longLink: '',
            shortLink: '',
        }
    },
};
</script>

<style lang="scss" scoped></style>
