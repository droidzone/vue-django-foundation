<template>
  <div class="margin-1">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th class="width-100 text-left">Short Link</th>
          <th class="width-200 text-left">Long Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id">
          <td>{{ link.id }}</td>
          <td class="width-100 text-left">{{ link.short_link }}</td>
          <td class="width-200 text-left">{{ link.long_link }}</td>
        </tr>
      </tbody>
    </table>

    <div class="grid-container">
      <div class="grid-x">
        <div class="cell small-4">ID</div>
        <div class="cell small-4">Short Link</div>
        <div class="cell small-4">Long Link</div>
      </div>
      <div v-for="link in links" :key="link.id" class="grid-x">
        <div class="cell small-4">{{ link.id }}</div>
        <div class="cell small-4">{{ link.short_link }}</div>
        <div class="cell small-4">{{ link.long_link }}</div>
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
    });
  },
};
</script>

<style lang="scss" scoped></style>
