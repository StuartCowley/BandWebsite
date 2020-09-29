<template>
	<div class="footer">
		<div class="page-container">

			<div class="grid" :class="{'grid--vertical': $mq == 'ptab' || $mq == 'mob'}">

				<div class="grid__item">
					<nav class="footer__nav-wrap">
						<a href="#" class="footer__nav-item">
							About
						</a>
						<a href="#" class="footer__nav-item">
							Testimonials
						</a>
						<a href="#" class="footer__nav-item">
							FAQs
						</a>
						<a href="#" class="footer__nav-item">
							Song list
						</a>
						<a href="#" class="footer__nav-item">
							Contact
						</a>
					</nav>
				</div>

				<div class="grid__item grid__item--auto ">
					<div class="footer__logo-wrap">
						<div class="footer__logo" v-html="require('../../assets/bee.svg')"></div>
						<div class="footer__logo-title">The Bees Knees</div>
						<div class="footer__logo-subtitle">Professional Party Band</div>
					</div>
				</div>

				<div class="grid__item">
					<div class="footer__social-wrap">
						<SocialItem link="http://www.facebook.com" :logo="require('../../assets/icon-facebook.svg')" />
						<SocialItem link="http://www.google.com" :logo="require('../../assets/icon-mail.svg')" />
					</div>
				</div>

			</div>


		</div>
		<div class="footer__copyright">
			<p>
				&copy; The Bees Knees {{currentYear}}
			</p>
		</div>
	</div>
</template>

<script>
import SocialItem from '../atoms/SocialItem.vue'

export default {
	name: "Footer",
	components: {
		SocialItem,
	},
	computed: {
		currentYear() {
			return new Date().getFullYear()
		}
	}
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".footer";
#{$c} {
	width: 100%;
	padding-top: 56px;
	padding-bottom: 8px;
	background-color: $almostBlack;
	@media screen and (max-width: $breakpoint-ptab) {
		padding-top: 1.6rem;
	}

	.page-container {
		max-width: $page-width;
		margin-left: auto;
		margin-right: auto;
		padding-left: 2rem;
		padding-right: 2rem;
	}
	&__logo {
		width: 60px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 12px;
		&-wrap {
			color: $mainGold;
			margin-left: auto;
			margin-right: auto;
			@media screen and (max-width: $breakpoint-ptab) {
				margin-bottom: 2rem;
			}
		}
		&-title {
			@include heading;
			text-align: center;
			margin-bottom: 16px;
		}
		&-subtitle {
			letter-spacing: 0.4rem;
			text-align: center;
			text-transform: uppercase;
		}
	}
	&__nav {
		&-wrap {
			@media screen and (max-width: $breakpoint-ptab) {
				margin-bottom: 2rem;
			}
		}
		&-item {
			text-transform: uppercase;
			display: block;
			text-decoration: none;
			color: $offWhite;
			margin-bottom: 12px;
			@include hover--colors($offWhite, $mainGold);
			@media screen and (max-width: $breakpoint-ptab) {
				text-align: center;
			}
		}
	}
	&__social-wrap {
		@media screen and (max-width: $breakpoint-ptab) {
				text-align: center;
			}
	}
	&__copyright {
		margin-top: 40px;
		text-align: center;
		font-size: 0.6rem;
		color: $offWhite;
	}
}
</style>
