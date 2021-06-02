<template>
  <div class="row">
    Above Links
  </div>
  <ul>
    <li v-for="link in links" :key="link.id">
      ID:{{ link.id }} Short Link:{{ link.short_link }}
    </li>
  </ul>
  <div class="row">
    Below Links
  </div>
</template>

<script>
import axios from "axios";

export default {
    links: [],
  created() {
    console.log("Getting from API");
    axios.get("http://127.0.0.1:8000/api/links/").then(({ data }) => {
      console.log(`data is`);
      console.log(data);
      let mylinks = data.results;
      console.log("mylinks:");
      console.log(mylinks);
      this.links = mylinks;
    });
  },
}
</script>

<style lang="scss" scoped></style>
