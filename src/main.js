import Vue from "vue";
import VueMq from "vue-mq";
import Meta from "vue-meta";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";

Vue.use(VueMq, {
  breakpoints: {
    mob: 480,
    ptab: 768,
    ltab: 1024,
    desk: 1440,
    max: 3000
  }
});

Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta"
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
