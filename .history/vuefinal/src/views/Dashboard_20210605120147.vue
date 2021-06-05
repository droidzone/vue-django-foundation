<template>
  <div class="margin-1">

    <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-1" style="border: 2px solid #466d98;">ID</div>
        <div class="cell small-2" style="border: 2px solid #466d98;">Short Link</div>
        <div class="cell small-6" style="border: 2px solid #466d98;">Long Link</div>
      </div>
      <div v-for="link in links" :key="link.id" class="grid-x">
        <div class="cell small-1" style="border: 2px solid #466d98;">{{ link.id }}</div>
        <div class="cell small-2" style="border: 2px solid #466d98;">{{ link.short_link }}</div>
        <div class="cell small-6" style="border: 2px solid #466d98;">{{ link.long_link }}</div>
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
    console.log("Getting from API");
    axios.get("http://127.0.0.1:8000/api/links/").then(({ data }) => {
      console.log(`data is`);
      console.log(data);
      let mylinks = data.results;
      console.log("mylinks:");
      console.log(mylinks);
      this.links = mylinks;
    }).catch(
      
    );
  },
};
</script>

<style lang="scss" scoped></style>
