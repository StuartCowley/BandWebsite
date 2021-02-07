<template>
	<div class="logo-wrap">
		<a :href="link" :is="link ? 'a' : 'div'">
			<div class="logo" v-html="require('../../assets/bee.svg')"></div>
			<div class="logo-text" v-if="showText">
				<span>The</span>
				<span>Bees Knees</span>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'Logo',
	props: {
		showText: Boolean,
		link: String,
	},
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: '.logo';

#{$c} {
	&-wrap {
		position: relative;
	}
	&-text {
		position: absolute;
		top: 0;
		color: $mainGold;
		font-family: $heading-font-family;
		line-height: 1.2;
		text-shadow: 0 0 5px #000;
		span {
			display: block;
			text-align: center;
		}
	}
}

</style>
