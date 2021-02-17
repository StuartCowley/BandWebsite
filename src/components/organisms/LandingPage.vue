<template>
	<div class="landing-page">
		<LandingVideo />
		<div class="landing-page__content-wrap">
			<div class="page-container">

				<div class="landing-page__logo-wrap">
					<Logo class="landing-page__logo" />
					<div class="landing-page__logo-title">The Bees Knees</div>
					<div class="landing-page__logo-subtitle">Professional Party Band</div>
				</div>

				<div class="landing-page__text-wrap">
					<div class="landing-page__text">
						We are accepting still accepting bookings during the COVID-19 emergency.
					</div>
					<div class="landing-page__text">
						If you would like to enquire or book the band please get in touch
						via
						<a class="landing-page__text--link" href="mailto:thebeeskneesband@hotmail.com">
							Email</a>,
						or our
						<a class="landing-page__text--link" href="http://www.facebook.com/thebeeskneesuk">
							Facebook
						</a> page.
					</div>
					<div class="landing-page__text">
						Stay safe!
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LandingVideo from '../molecules/LandingVideo'
import Logo from '../atoms/Logo'

export default {
	name: 'ParallaxBody',
	components: {
		LandingVideo,
		Logo
	},
	data () {
		return {
		}
	},
	created() {
		document.title = "The Bees Knees - Professional Cover Band from Manchester"
	}
}
</script>

<style lang="scss">
	@import "src/scss/toolkit";

	$c: ".landing-page";
	#{$c}
	{
		height: 100%;
		box-sizing: border-box;

		&__logo {
			width: 100px;
			margin-left: auto;
			margin-right: auto;
			@media screen and (max-width: $breakpoint-ptab) {
					width: 50px;
				}
			&-wrap {
				color: $mainGold;
				margin-bottom: 40px;
				@media screen and (max-width: $breakpoint-ptab) {
					margin-bottom: 20px;
				}
			}
			&-title {
			@include heading;
			text-align: center;
			margin-bottom: 16px;
			@media screen and (orientation: landscape) {
				font-size: 1.6rem;
				}
			}
			&-subtitle {
				letter-spacing: 0.4rem;
				text-align: center;
				text-transform: uppercase;
			}
		}

		&__content-wrap {
			background-color: rgba(0, 0, 0, 0.75);
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__text {
			text-align: center;
			margin-bottom: 20px;
			&--link {
				color: white;
			}
			&:last-of-type {
				margin-bottom: 0px;
			}

			&-wrap {
				color: $mainGold;
				font-size: 1.4rem;
				font-family: 'Montserrat';
				@media screen and (max-width: $breakpoint-ptab) {
					font-size: 1rem;
				}
			}
		}
	}
</style>
