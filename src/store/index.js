import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showLandingPageOnly: false,
		appInitialised: false,
		burgerOpen: false,
		menuItems: [
			// TODO Add these pages back in when content is ready
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
				title: 'Song List',
				url: '/song-list'
			},
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
