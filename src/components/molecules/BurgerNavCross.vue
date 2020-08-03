<template>
	<div class="burger-nav-cross">
		<input type="checkbox" @click="$emit('clickedBox')" />
		<span :class="{'open': navOpen}"></span>
		<span :class="{'open': navOpen}"></span>
		<span :class="{'open': navOpen}"></span>
	</div>
</template>

<script>
export default {
	name: "BurgerNavCross",
	props: {
		navOpen: {
			type: Boolean,
			default: false,
		}
	},
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c:'.burger-nav-cross';
#{$c}{
	display: block;
	width: 24px;
  position: relative;
  z-index: 100;
  -webkit-user-select: none;
	user-select: none;

	& span {
		display: block;
		height: 4px;
		margin-bottom: 4px;
		position: relative;
		background: blue;
		border-radius: 3px;
		z-index: 1;
		transform-origin: 4px 0px;
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								background-color 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
								opacity 0.55s ease;
		&:last-of-type {
			margin-bottom: 0;
			transform-origin: 0% 50%;
		}
		&:first-of-type {
			transform-origin: 0% 0%;
		}
	}
	.open {
		background: yellow;
		transform: rotate(45deg) translate(1px, -1px);
		&:nth-of-type(2) {
			transform: rotate(0deg) scale(0.2, 0.2);
			opacity: 0;
		}
		&:last-of-type {
			transform: rotate(-45deg) translate(0, 0px);
		}
	}

	& input {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		margin: 0;
		cursor: pointer;
		opacity: 0;
		z-index: 2;

		-webkit-touch-callout: none;
	}
}

</style>
