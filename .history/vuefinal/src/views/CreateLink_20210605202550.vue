<template>
  <div>
    <div class="grid-container">
        <form @submit.prevent="">
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
            <div class="grid-x grid-padding-x">
                <div class="cell">
                    <button type="submit" class="button">Shorten</button>
                </div>
            </div>
        </form>
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
