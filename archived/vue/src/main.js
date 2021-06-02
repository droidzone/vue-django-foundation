import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// .use(VueAxios, axios)

createApp(App).use(store).use(router).mount("#app");
