<template>
	<div class="logo-wrap">
		<a href="#">
			<div class="logo" v-html="require('../../assets/bee.svg')"></div>
			<div class="logo-text">
				<span>The</span>
				<span>Bees Knees</span>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'Logo',
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: '.logo';

#{$c} {
	width: 60px;
	&-wrap {
		position: relative;
		cursor: pointer;
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
