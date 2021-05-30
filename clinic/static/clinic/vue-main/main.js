const app = Vue.createApp({
  delimiters: ["[[", "]]"],
  data() {
    return {
      successmsg: "Test succeeded. Vue loaded. Hurray!",
    };
  },
});

app.mount("#app");
