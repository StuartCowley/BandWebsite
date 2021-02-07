<template>
	<div class="landing-video">
		<ScreenFill class="landing-video__shaper">
			<div class="landing-video__video-wrap">
				<video class="landing-video__video" muted loop autoplay>
					Sorry, your browser doesn't support embedded videos
					<source type="video/mp4" src="../../assets/hero-video.mp4" />
				</video>
			</div>
		</ScreenFill>
	</div>
</template>

<script>
import ScreenFill from '../molecules/ScreenFill.vue'

export default {
	name: "LandingVideo",
	components: {
		ScreenFill,
	},
	computed: {

	}
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".landing-video";
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
		&-wrap {
			height: 100%;
			overflow: hidden;
		}
	}
}
</style>
