<template>
	<div class="page-wrapper">
		<Header />
		<ParallaxBody />
	</div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import ParallaxBody from './components/molecules/ParallaxBody.vue'

export default {
	name: 'App',
  components: {
		Header,
		ParallaxBody,
	},
}
</script>

<style>
@import "/scss/toolkit";

html, body {
	font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-wrapper {
	position: relative;
}
</style>
