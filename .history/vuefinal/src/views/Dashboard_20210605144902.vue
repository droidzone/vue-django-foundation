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
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      links: [],
    };
  },

  created() {
    // You need to use Arrow function only to use $router etc inside then/catch
    console.log("Getting from API");
    axios.post("http://127.0.0.1:8000/api/links/").then(({ data }) => {
      console.log(`data is`);
      console.log(data);
      let mylinks = data.results;
      console.log("mylinks:");
      console.log(mylinks);
      this.links = mylinks;
    }).catch(error =>{
        console.log("An error occured");
        
        if (error.response) {
          // this.doLogin();
          console.log("Router is ");
          console.log(this.$router);
          // // The request was made and the server responded with a status code
          // // that falls out of the range of 2xx
          // console.log(error.response.data.detail);
          this.$router.push({ path: '/login' });
          // // router.push({ path: '/login' })
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }}
    )
  },

  methods: {
    doLogin() {
      console.log('router is');
      console.log(this.$router);

    }
  }
};
</script>

<style lang="scss" scoped></style>
