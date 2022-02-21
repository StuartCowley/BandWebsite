import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showLandingPageOnly: true,
		appInitialised: false,
		burgerOpen: false,
		menuItems: [
			{
				title: 'Song List',
				url: '/song-list'
			},
			// {
			// 	title: 'About',
			// 	url: '/about-the-band'
			// },
			{
				title: 'Testimonials',
				url: '/testimonials'
			},
			// {
			// 	title: 'FAQs',
			// 	url: '/frequently-asked-questions'
			// },
			{
				title: 'Contact',
				url: '/contact'
			}
		]
	},
	mutations: {
		showLoadScreen(state) {
			state.appInitialised = false
		},
		appLoaded(state) {
			state.appInitialised = true
		},
		toggleBurger(state) {
			state.burgerOpen = !state.burgerOpen
		},
		closeBurger(state) {
			state.burgerOpen = false
		}
	},
	actions: {
		showLoadScreen({commit}) {
			commit('showLoadScreen')
		},
		appLoaded({commit}) {
			commit('appLoaded')
		},
		toggleBurger({commit}) {
			commit('toggleBurger')
		},
		closeBurger({commit}) {
			commit('closeBurger')
		}
	},
})
