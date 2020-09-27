import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		appInitialised: false,
		burgerOpen: false,
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
