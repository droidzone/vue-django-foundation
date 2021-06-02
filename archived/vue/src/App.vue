<template>
    <div class="top-bar">
        <div class="top-bar-left">
            <ul class="menu">
                <!-- use the router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
                <li class="menu-text"><router-link to="/">Home</router-link></li>
                <li class="menu-text"><router-link to="/about">About</router-link></li>
                <li class="menu-text"><a href="#">Three</a></li> 
            </ul>
        </div>
    </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
