import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		appInitialised: false
	},
	mutations: {
		appLoaded(state) {
			state.appInitialised = true
		}
	},
	actions: {
	},
	getters: {

	}
})
