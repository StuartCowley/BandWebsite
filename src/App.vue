<template>
	<div class="page-wrapper">
		<Header />

		<template v-if="initialised">
			<ParallaxBody />
		</template>

		<template v-else>
			<div class="loading-wrap">
				<img class="loading" :src="require('./assets/loading.gif')" />
			</div>
		</template>
	</div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import ParallaxBody from './components/molecules/ParallaxBody.vue'
import Store from './store/index.js'

export default {
	name: 'App',
	data() {
		return {}
	},
  components: {
		Header,
		ParallaxBody,
	},
	computed: {
		initialised() {
			return Store.state
		}
	},
	mounted: function() {
		this.apploaded()
	},
	methods: {
		apploaded() {
			Store.commit('appLoaded')
		}
	}
}
</script>

<style lang='scss'>
@import "/scss/toolkit";

html, body {
	font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-wrapper {
	position: relative;
	.loading {
		width: 100px;
		height: 100px;
		&-wrap {
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
}
</style>
