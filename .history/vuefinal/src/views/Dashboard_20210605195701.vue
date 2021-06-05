<template>
  <div class="margin-1">
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-1" style="border: 2px solid #466d98;">ID</div>
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
          {{ link.short_link }}
        </div>
        <div class="cell small-6" style="border: 2px solid #466d98;">
          {{ link.long_link }}
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      links: [],
    };
  },

  created() {
    // You need to use Arrow function only to use $router etc inside then/catch
    console.log("Getting from API");

    axios
      .get("http://127.0.0.1:8000/api/links/")
      .then(({ data }) => {
        console.log(`data is`);
        console.log(data);
        let mylinks = data.results;
        console.log("mylinks:");
        console.log(mylinks);
        this.links = mylinks;
      })
      .catch((error) => {
        console.log("An error occured");

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
      axios
        .delete(`http://127.0.0.1:8000/api/links/${id}/`)
        .then(({ data }) => {
          console.log(`data is`);
          console.log(data);
          let results = data.results;
          console.log("results:");
          console.log(results);
        })
        .catch((error) => {
          console.log("An error occured");

          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
            this.$router.push({ name: "Dashboard" });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
