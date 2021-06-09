<template>
  <div>
    <form @submit.prevent="">
      <my-container>
        <h3>Edit Shortened link</h3>
        <div class="grid-x grid-padding-x">
          <div class="small-3 cell">
            <label for="long-link" class="text-right">Long Link</label>
          </div>
          <div class="small-9 cell">
            <input
              type="text"
              id="long-link"
              v-model="link.long_link"
              placeholder="Long link to be shortened"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="small-3 cell">
            <label for="long-link" class="text-right">Short Link</label>
          </div>
          <div class="small-9 cell">
            <input
              type="text"
              id="long-link"
              v-model="link.short_link"
              placeholder="Short link"
              autocomplete="off"
              data-tooltip
              title="You can't modify short links here."
              data-position="top"
              disabled
            />
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="cell">
            <button type="button" class="button large" @click="saveEdits">
              <i class="fad fa-save"></i> Save
            </button>
          </div>
        </div>
      </my-container>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import MyContainer from "./MyContainer.vue";
export default {
  components: { MyContainer },
  props: ["elem"],
  emits: ["edit"],
  data() {
    return {
      link: {},
      //   link: this.elem,
    };
  },
  methods: {
    saveEdits() {
      console.log(`Saving edits...`);
      iziToast.show({
        title: "Saving edits",
        message: "Sending data to server.",
        icon: "fad fa-cog fa-spin",
        position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        messageColor: "#ffffff",
        backgroundColor: "#5498bf",
      });
      console.log(JSON.stringify(this.link, null, 2));
      axios
        .put(`/api/links/`, {
          params: {
              pk: this.link.id,
              link: this.link,
          },
        })
        .then(({ data }) => {
          console.log(`data is`);
          console.log(data);
          console.log(JSON.stringify(data, null, 2));
          iziToast.show({
            title: "Saved",
            message: "Successfully updated long link.",
            icon: "fa fa-check",
            position: "topRight",
            color: "green",
          });
        })
        .catch((error) => {
          console.log("An error occured:");
          console.log(error);
        });
    },
  },
  mounted() {
    console.log("Route:");
    console.log(this.$route);
    console.log(JSON.stringify(this.$route, null, 2));
    console.log("Params:");
    console.log(this.$route.params);
    console.log("Stringified params:");
    console.log(JSON.stringify(this.$route.params, null, 2));
    console.log("ID:");
    console.log(this.$route.params.id);
    this.link = this.$route.params;
  },
};
</script>

<style lang="scss" scoped></style>
