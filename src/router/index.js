import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ParallaxBody from '../components/organisms/ParallaxBody'
import AboutPage from '../components/organisms/AboutPage'
import TestimonialPage from '../components/organisms/TestimonialPage'
import FAQPage from '../components/organisms/FAQPage'
import SongListPage from '../components/organisms/SongListPage'
import ContactPage from '../components/organisms/ContactPage'

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '*', redirect: '/' },
		{ path: '/', component: ParallaxBody },
    { path: '/about-the-band', component: AboutPage },
    { path: '/testimonials', component: TestimonialPage },
    { path: '/frequently-asked-questions', component: FAQPage },
    { path: '/song-list', component: SongListPage },
    { path: '/contact', component: ContactPage }
	]
})
