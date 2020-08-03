import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'

Vue.use(VueMq, {
	breakpoints: {
		mob: 480,
		ptab: 768,
		ltab: 1024,
		desk: 1440,
		max: 3000
	}
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
