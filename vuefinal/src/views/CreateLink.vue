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
              <div class="small-9 cell margin-top-1 margin-bottom-2" v-if="shortLink">Short link created at <a v-bind:href="shortLink">{{ shortLink }}</a></div>
            </div>
            <div class="grid-x grid-padding-x">
                <div class="cell">
                    <button type="submit" class="button large" @click="CreateShortLink"><i class="fad fa-compress-arrows-alt"></i> Shorten</button>
                </div>
            </div>
            <div v-if="isLoading" class="">
              Loading from server.. <i class="fad fa-spinner fa-spin fa-3x margin-2"></i>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      longLink: "",
      shortLink: null,
      isLoading: false,
    };
  },
  methods: {
      CreateShortLink() {
        this.isLoading=true;
      axios
        .post(`/api/links/`, {
          long_link: this.longLink,
        })
        .then(({ data }) => {
          this.isLoading=false;
          console.log(`data is`);
          console.log(data);
          if (data.short_link) {
            this.shortLink = data.short_link;

          }
          // let results = data.results;
          // console.log("results:");
          // console.log(results);
        })
        .catch((error) => {
          this.isLoading=false;
          console.log("An error occured");

          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
            this.$router.push({ path: "/login" });
            // this.$router.push({ name: "Dashboard" });
          }
        });

    },


  }
};
</script>

<style lang="scss" scoped></style>
