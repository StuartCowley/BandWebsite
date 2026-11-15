import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router/index.js";
import mq from "./plugins/mq.js";

createApp(App)
  .use(store)
  .use(router)
  .use(mq, {
    breakpoints: {
      mob: 480,
      ptab: 768,
      ltab: 1024,
      desk: 1440,
      max: Infinity
    }
  })
  .mount("#app");
