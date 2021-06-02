<template>
  <div class="margin-1">
    <table>
      <thead>
        <tr>
          <th width="200">ID</th>
          <th>Short Link</th>
          <th width="150">Long Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id">
          <td>{{ link.id }}</td>
          <td>{{ link.short_link }}</td>
          <td>{{ link.long_link }}</td>
        </tr>
      </tbody>
    </table>
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
    });
  },
};
</script>

<style lang="scss" scoped></style>
