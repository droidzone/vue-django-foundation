<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell small-11">
        <div class="margin-1">
          <div class="grid-container">
            <div v-if="isLoading" class="">
              Loading from server.. <i class="fad fa-spinner fa-spin fa-3x margin-2"></i>
            </div>
            <div class="grid-x">
              <div class="cell small-1" style="border: 2px solid #466d98;">
                ID
              </div>
              <div class="cell small-2" style="border: 2px solid #466d98;">
                Short Link
              </div>
              <div class="cell small-6" style="border: 2px solid #466d98;">
                Long Link
              </div>
              <div class="cell small-2" style="border: 2px solid #466d98;">
                Actions
              </div>
            </div>
            
            <div v-for="link in links" :key="link.id" class="grid-x">
              <div class="cell small-1" style="border: 2px solid #466d98;">
                {{ link.id }}
              </div>
              <div class="cell small-2" style="border: 2px solid #466d98;">
                <a v-bind:href="link.short_link">{{ link.short_link }}</a>
              </div>
              <div class="cell small-6 text-left text-wrap" style="border: 2px solid #466d98;">
                <a v-bind:href="link.long_link"><span style="word-wrap: break-word;">{{ link.long_link }}</span></a>
              </div>
              <div class="cell small-2" style="border: 2px solid #466d98;">
                <button
                  type="button"
                  class="alert button"
                  @click="deleteLink(link.id)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cell small-1">
        <button type="button" class="button" @click="CreateNew">
          <i class="fad fa-bolt"></i> Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      links: [],
      isLoading: true,
    };
  },

  created() {
    // You need to use Arrow function only to use $router etc inside then/catch
    console.log("Getting from API");
    this.isLoading=true;

    axios
      .get("/api/links/")
      .then(({ data }) => {
        console.log(`data is`);
        console.log(data);
        let mylinks = data.results;
        console.log("mylinks:");
        console.log(mylinks);
        this.links = mylinks;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log("An error occured");
        this.isLoading = false;

        if (error.response) {
          console.log(`error is ${error}`);
          console.log(error);
          // // The request was made and the server responded with a status code
          // // that falls out of the range of 2xx
          this.$router.push({ path: "/login" });
        }
      });
  },

  methods: {
    doLogin() {
      console.log("router is");
      console.log(this.$router);
    },
    deleteLink(id) {
      console.log(`ID is ${id}. Deleting..`);
      this.isLoading=true;
      axios
        .delete(`/api/links/${id}/`)
        .then(({ data }) => {
          console.log(`data is`);
          console.log(data);
          let results = data.results;
          console.log("results:");
          console.log(results);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("An error occured");
          this.isLoading = false;

          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
            this.$router.push({ name: "Dashboard" });
          }
        });
    },
    CreateNew() {
      this.$router.push({ name: "CreateLink" });

    },
  },
};
</script>

<style lang="scss" scoped></style>
