<template>
  <div>
    <form>
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
              placeholder="Long link to be shortened"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="grid-x grid-padding-x">
          <div class="cell">
            <button type="submit" class="button large" @click="CreateShortLink">
              <i class="fad fa-save"></i> Save
            </button>
          </div>
        </div>
      </my-container>
    </form>
  </div>
</template>

<script>
import MyContainer from "./MyContainer.vue";
export default {
  components: { MyContainer },
  props: ["elem"],
  data() {
    return {
        link: {

        }
    //   link: this.elem,
    };
  },
  mounted() {
    console.log("Route:");
    console.log(this.$route);
    console.log(JSON.stringify(this.$route, null, 2));
    console.log("Params:");
    console.log(this.$route.params);
    this.link = {
        id: this.$route.params.id,
        short_link: this.$route.params.short_link,
        long_link: this.$route.params.long_link,
    }
    // console.log(JSON.stringify(this.$route.params, null, 2));
    // console.log("elem:");
    // console.log(JSON.stringify(this.$route.params.elem, null, 2));


    
    // console.log("EditLink was mounted.");
    // console.log(`This is`);
    // console.log(JSON.stringify(this, null, 2));
    // console.log(`Link is `);
    // console.log(this.link);
    // console.log(`el is `);
    // console.log(this.el);
    // console.log(JSON.stringify(this.el, null, 2));
    // console.log(`id is `);
    // console.log(this.el.id);
    // this.isLoading = true;
    // this.reload();
  },
};
</script>

<style lang="scss" scoped></style>
