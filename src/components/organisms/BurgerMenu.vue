<template>
	<div class="burger-menu" :class="{'burger-menu--open': navOpen}">
		<div class="burger-menu__items">
			<router-link to="/">
				<Logo class="burger-menu__logo" />
				<div class="burger-menu__logo-title">
					The Bees Knees
				</div>
			</router-link>
			<router-link class="burger-menu__item palette--link" v-for="item in menuItems" :key="item.title" :to="item.url">
				{{item.title}}
			</router-link>
			<div class="burger-menu__socials">
				<SocialItem link="http://www.facebook.com" :logo="require('../../assets/icon-facebook.svg')" />
				<SocialItem link="http://www.google.com" :logo="require('../../assets/icon-mail.svg')" />
			</div>
		</div>
	</div>
</template>

<script>
import SocialItem from '../atoms/SocialItem'
import Logo from '../atoms/Logo'

export default {
	name: "BurgerMenu",
	components: {
		Logo,
		SocialItem
	},
	props: {
		navOpen: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		menuItems() {
			return this.$store.state.menuItems
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

	&__logo {
		width: 5rem;
		margin-left: auto;
		margin-right: auto;
		&-title {
			color: $mainGold;
		font-family: $heading-font-family;
		margin-bottom: 1rem;
		text-align: center;
		line-height: 1.2;
		text-shadow: 0 0 5px #000;
		}
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
		display: block;
		transition: color $base-trans-speed ease;
		padding: 10px 0;
		font-size: 1.5rem;
	}

	&__socials {
		padding-top: 10px;
	}

}

</style>
