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
          <div class="medium-8 grid-x grid-padding-x cell align-center">
            <div class="grid-x grid-padding-x">
              <div class="small-3 cell">
                <label for="right-label" class="text-right">Label</label>
              </div>
              <div class="small-9 cell">
                <input
                  type="text"
                  id="right-label"
                  placeholder="Right-aligned text input"
                  autocomplete="off"
                />
              </div>
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
