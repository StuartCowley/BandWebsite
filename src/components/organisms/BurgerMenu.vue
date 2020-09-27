<template>
	<div class="burger-menu" :class="{'burger-menu--open': navOpen}">
		<ul class="burger-menu__items">
			<a href="#"><li class="burger-menu__item palette--link">Home</li></a>
			<a href="#"><li class="burger-menu__item palette--link">About</li></a>
			<a href="#"><li class="burger-menu__item palette--link">Info</li></a>
			<a href="#"><li class="burger-menu__item palette--link">Contact</li></a>
		</ul>
	</div>
</template>

<script>
export default {
	name: "BurgerMenu",
	props: {
		navOpen: {
			type: Boolean,
			default: false,
		}
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c:'.burger-menu';
#{$c}{
	position: fixed;
	top: 0;
	height: 100%;
	width: 60%;
	max-width: 280px;
	min-width: 220px;
	background-color: $black;
	transform: translate(-100%, 0);
	-webkit-user-select: none;
	user-select: none;
	transition: transform $base-trans-speed*0.75 ease-in-out;

	&--open {
		transform: none;
	}

	&__items {
		position: relative;
		padding-top: $header-height;
		padding-left: 50px;
		padding-right: 50px;
		padding-bottom: 50px;

		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transition: transform $base-trans-speed*0.75 cubic-bezier(0.77,0.2,0.05,1.0);
	}
	&__item {
		transition: color $base-trans-speed ease;
		padding: 10px 0;
		font-size: 1.5rem;
	}

}

</style>
