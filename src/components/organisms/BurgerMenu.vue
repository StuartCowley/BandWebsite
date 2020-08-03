<template>
	<div class="burger-menu" :class="{'burger-menu--open': navOpen}">
		<ul class="menu-items">
			<a href="#"><li class="item">Home</li></a>
			<a href="#"><li class="item">About</li></a>
			<a href="#"><li class="item">Info</li></a>
			<a href="#"><li class="item">Contact</li></a>
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
	bottom: 0;
	width: 300px;
	background-color: $almostBlack;
	color: red;
	transform: translate(-100%, 0);
	-webkit-user-select: none;
	user-select: none;
	transition: transform 500ms ease-in-out;

	&--open {
		transform: none;
	}

	.menu-items {
		position: relative;
		padding-top: $header-height;
		padding-left: 50px;
		padding-right: 50px;
		padding-bottom: 50px;

		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		/* to stop flickering of text in safari */

		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
		&-item {
			padding: 10px 0;
			font-size: 22px;
		}
		a {
			text-decoration: none;
			color: $mainGold;
			transition: color 0.3s ease;
			&:hover {
				color: yellow;
			}
		}
	}
}

</style>
