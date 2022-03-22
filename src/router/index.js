import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ParallaxBody from "../components/organisms/ParallaxBody";
import TestimonialPage from "../components/organisms/TestimonialPage";
import SongListPage from "../components/organisms/SongListPage";
import ContactPage from "../components/organisms/ContactPage";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ParallaxBody },
    // TODO Add these pages back in when content is ready
    // { path: '/about-the-band', component: AboutPage },
    { path: "/testimonials", component: TestimonialPage },
    // { path: '/frequently-asked-questions', component: FAQPage },
    { path: "/song-list", component: SongListPage },
    { path: "/contact", component: ContactPage },
    { path: "*", redirect: "/" }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
