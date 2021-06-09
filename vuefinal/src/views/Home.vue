<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <i class="fad fa-laptop-medical fa-20x green_light_green" style=""></i>
    <router-link to="/dashboard"
      ><HelloWorld msg="Welcome to Short Links App" />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.fa-20x {
  font-size: 20em;
}
.pink {
  color: #f783ac;
}

.green_light_green {
  --fa-primary-color: #1c6b84;
  --fa-secondary-color: #7cd892;
}
</style>
