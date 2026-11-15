import { createRouter, createWebHistory } from "vue-router";

import ParallaxBody from "../components/organisms/ParallaxBody.vue";
import TestimonialPage from "../components/organisms/TestimonialPage.vue";
import SongListPage from "../components/organisms/SongListPage.vue";
import ContactPage from "../components/organisms/ContactPage.vue";

const BASE_TITLE = "The Bees Knees - Professional Party Band from Manchester";

const DEFAULT_TITLE = `${BASE_TITLE} | Available for any event across the country | Special requests catered for | Line-up tailored to your needs`;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ParallaxBody },
    // TODO Add these pages back in when content is ready
    // { path: '/about-the-band', component: AboutPage },
    {
      path: "/testimonials",
      component: TestimonialPage,
      meta: { title: `${BASE_TITLE} | Reviews from previous clients` }
    },
    // { path: '/frequently-asked-questions', component: FAQPage },
    {
      path: "/song-list",
      component: SongListPage,
      meta: {
        title: `${BASE_TITLE} | Our current repertoire | Songs from 1950s - 2020s | Special requests catered for`
      }
    },
    {
      path: "/contact",
      component: ContactPage,
      meta: {
        title: `${BASE_TITLE} | Contact The Band | Get a quote | Check Availability | Ask us anything!`
      }
    },
    { path: "/:pathMatch(.*)*", redirect: "/" }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 };
  }
});

router.afterEach(to => {
  document.title = to.meta.title ?? DEFAULT_TITLE;
});

export default router;
