<template>
	<div class="header" :class="{'header--small': $mq == 'mob' || $mq == 'ptab'}">
		<BurgerMenu @menuItemClicked="toggleNav" :navOpen="burgerOpen" />

		<div class="page-container">

			<div class="grid grid--middle grid--spread">

				<div class="grid__item" :class="{'grid__item--hide': $mq == 'ltab' ||  $mq == 'desk' || $mq == 'max' }">
					<BurgerNavCross @clickedBurgerIcon="toggleNav" class="header__burger" :navOpen="burgerOpen" />
				</div>

				<div class="grid__item" :class="{'grid__item--hide': $mq == 'mob' ||  $mq == 'ptab' }">
					<div class="header__logo-wrap">
						<Logo :isLink="true" :show-text="true" />
					</div>
				</div>

				<div class="grid__item grid__item--auto" :class="{'grid__item--hide': $mq == 'mob' ||  $mq == 'ptab' }">
					<nav class="header__nav-wrap">
						<router-link class="header__nav-item" v-for="item in menuItems" :key="item.title" :to="item.url">
							{{item.title}}
						</router-link>
					</nav>
				</div>

				<div class="grid__item">
					<div class="header__social-wrap">
						<SocialItem link="https://www.facebook.com/thebeeskneesuk" :linkExternal="true" :logo="require('../../assets/icon-facebook.svg')" />
						<SocialItem link="contact" :logo="require('../../assets/icon-mail.svg')" />
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import SocialItem from '../atoms/SocialItem.vue'
import BurgerMenu from './BurgerMenu.vue'
import BurgerNavCross from '../atoms/BurgerNavCross.vue'
import Logo from '../atoms/Logo.vue'

export default {
	name: "Header",
	props: {
		burgerOpen: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		toggleNav() {
			this.$store.dispatch('toggleBurger')
		}
	},

	computed: {
		menuItems() {
			return this.$store.state.menuItems
		}
	},

	components: {
		SocialItem,
		BurgerNavCross,
		BurgerMenu,
		Logo,
	},
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".header";

#{$c} {
	z-index: 100;
	position: fixed;
	top: 0;
	width: 100%;
	height: $header-height;
	background-color: $black;

	display: flex;
  align-items: center;
	@media screen and (max-width: $breakpoint-mob) {
		// Keep override the standard media query to not change behaviour
		.page-container {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}

	&--small {
		height: $header-height-small;
	}

	&__logo {
		&-wrap {
			position: relative;
			width: 60px;
		}
		&-text {
			position: absolute;
			top: 0;
			color: $mainGold;
			font-family: $heading-font-family;
			line-height: 1.2;
			text-shadow: 0 0 5px #000;
			text-align: center;
			span {
				display: block;
			}
		}
	}

	&__nav {
		&-wrap {
			text-align: center;
			padding-left: 32px;
		}
		&-item {
			color: $offWhite;
			position: relative;
			text-decoration: none;
			display: inline-flex;
			margin-right: 20px;
			font-size: 1.5rem;
			transition: color $base-trans-speed ease-in-out;
			@include hover--colors($offWhite, $mainGold);
			@include underline();
			&:last-of-type {
				margin-right: 0;
			}
			@media screen and (max-width: $breakpoint-ltab) {
				font-size: 1rem;
			}
		}
	}
}
</style>
