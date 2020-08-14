import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		appInitialised: false
	},
	mutations: {
		showLoadScreen(state) {
			state.appInitialised = false
		},
		appLoaded(state) {
			state.appInitialised = true
		}
	},
	actions: {
		showLoadScreen({commit}) {
			commit('showLoadScreen')
		},
		appLoaded({commit}) {
			commit('appLoaded')
		},
	},
})
