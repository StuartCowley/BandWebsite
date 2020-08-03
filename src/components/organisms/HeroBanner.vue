<template>
	<div class="hero-banner">
		<ScreenFill class="hero-banner__shaper">
			<div class="hero-banner__video-wrap">
				<video class="hero-banner__video" muted loop autoplay>
					Sorry, your browser doesn't support embedded videos
					<source type="video/mp4" src="../../assets/Placeholder Video.mp4" />
				</video>
			</div>
			<div class="hero-banner__text-wrap">
				<div class="title">
					<span>The</span>
					<span>Bees Knees</span>
				</div>
				<div class="subtitle">
					Professional Party Band
				</div>
				<div class="cta-wrap">
					<div class="cta">
						<CTA :label="'Book Now'" />
					</div>
				</div>
			</div>
		</ScreenFill>
	</div>
</template>

<script>
import ScreenFill from '../molecules/ScreenFill.vue'
import CTA from '../atoms/CTA.vue'

export default {
	name: "HeroBanner",
	components: {
		ScreenFill,
		CTA
	}
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".hero-banner";
#{$c} {
	&__shaper {
		position: relative;
	}
	overflow: hidden;
	@media screen and (max-width: $breakpoint-ptab) {
	}
	&__video {
    width: 100%;
		height: 100%;
		object-fit: cover;
		@media (min-aspect-ratio: 16/9) {
			// height: 150%;
			// top: -100%;
		}
		@media (max-aspect-ratio: 16/9) {
			// width: 200%;
			// left: -100%;
		}
		&-wrap {
			height: 100%;
			overflow: hidden;
		}
	}
	&__text-wrap {
    box-sizing: border-box;
		position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    text-align: center;
    width: 100%;
    padding: 0 30px;
		// @media screen and (max-width: $breakpoint-mob) {
			// font-size: 1.6rem;
		// }
		.title {
			@include heading;
			color: $offWhite;
			letter-spacing: 0.5rem;
			line-height: 1.7;
			margin-bottom: 24px;
			span {
				display: block;
				text-align: center;
			}
		}
		.subtitle {
			font-size: 1.6rem;
			color: $offWhite;
			letter-spacing: 0.75rem;
			margin-bottom: 32px;
			@media screen and (max-width: $breakpoint-mob) {
				font-size: 1rem;
			}
		}
	}
}
</style>
