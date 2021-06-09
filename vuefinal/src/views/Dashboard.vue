<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell small-11">
        <div class="margin-1">
          <div class="grid-container">
            <div v-if="isLoading" class="">
              Loading from server..
              <i class="fad fa-spinner fa-spin fa-3x margin-2"></i>
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
            <short-link-list-el
              v-for="link in links"
              :key="link.id"
              :el="link"
              class="grid-x"
              @delete="deleteLink"
              @edit="editLink"
              @update="updateLink"
            >
            </short-link-list-el>
          </div>
        </div>
      </div>
      <div class="cell small-1">
        <button type="button" class="button" @click="CreateNew">
          <i class="far fa-plus-square"></i> Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import iziToast from "izitoast";
import ShortLinkListEl from "./uicomponents/ShortLinkListEl.vue";

export default {
  components: { ShortLinkListEl },
  data() {
    return {
      links: [],
      isLoading: true,
    };
  },

  created() {
    // You need to use Arrow function only to use $router etc inside then/catch
    console.log("Getting from API");
    this.isLoading = true;
    this.reload();
  },

  methods: {
    doLogin() {
      console.log("router is");
      console.log(this.$router);
    },
    reload() {
      iziToast.show({
        title: "Loading",
        message: "Getting links from server",
        icon: "fad fa-cog fa-spin",
        position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        messageColor: "#ffffff",
        backgroundColor: "#5498bf",
      });
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
          iziToast.show({
            title: "Loaded",
            message: "Links were retrieved from server.",
            icon: "fa fa-check",
            position: "topRight",
            color: "green",
          });
        })
        .catch((error) => {
          console.log("An error occured:");
          this.isLoading = false;
          console.log(error);
          console.log(JSON.stringify(error, null, 2));
          if (error.message.includes("status code 401")) {
            iziToast.show({
              title: "You have to login",
              message: "You have to login to access the dashboard.",
              icon: "fad fa-exclamation-triangle ",
              position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
              messageColor: "#ffffff",
              backgroundColor: "#5498bf",
              titleColor: "#e02d2d",
            });

            this.$router.push({ path: "/login" });
            return;
          }

          iziToast.show({
            title: "Error",
            message: "An error occured connecting to server.",
            icon: "fad fa-exclamation-triangle",
            position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
            messageColor: "#ffffff",
            backgroundColor: "#e02d2d",
            titleColor: "#e02d2d",
          });
          if (error.response) {
            console.log(`error is ${error}`);
            console.log(error);
            // // The request was made and the server responded with a status code
            // // that falls out of the range of 2xx
            this.$router.push({ path: "/login" });
          }
        });
    },
    updateLink(myLink) {
      console.log(`About to update link: ${myLink}`);
    },

    deleteLink(id) {
      console.log(`ID is ${id}. Deleting..`);
      this.isLoading = true;
      axios
        .delete(`/api/links/${id}/`)
        .then(({ data }) => {
          console.log(`data is`);
          console.log(data);
          let results = data.results;
          console.log("results:");
          console.log(results);
          console.log(`Reloading current data..`);
          this.reload();
        })
        .catch((error) => {
          console.log("An error occured");
          console.log(error);
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
    editLink(el) {
      console.log(JSON.stringify(this.links));
      console.log(`In DashBoard: editLink. Got id:${el}. The link is:`);
      console.log(JSON.stringify(el, null, 2));
      this.$router.push({
        name: "EditLink",
        params: {...el},
      });
      // this.$router.push({ name: 'foo', params: {title: 'test title' }})
      // id: el.id,
      //     short_link: el.short_link,
      //     long_link: el.long_link,
    },
  },
};
</script>

<style lang="scss" scoped></style>
