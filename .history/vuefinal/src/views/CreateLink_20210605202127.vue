<template>
  <div>
    <div class="grid-container">
      <div class="grid-x">
        <form @submit.prevent="">
          <div class="medium-8 grid-x grid-padding-x cell align-center">
            <div class="grid-x grid-padding-x">
              <div class="small-3 cell">
                <label for="long-link" class="text-right">Long Link</label>
              </div>
              <div class="small-9 cell">
                <input
                  type="text"
                  id="long-link"
                  v-model="longLink"
                  placeholder="Long link to be shortened"
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
