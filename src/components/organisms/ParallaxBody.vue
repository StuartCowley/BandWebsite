<template>
	<div class="parallax-body" :class="{'parallax-body--frozen': burgerOpen}">
		<HeroBanner class="parallax-body__section parallax-body__section--parallax" />
		<div class="parallax-body__section parallax-body__section--static">
			<div class="page-container">
				<div class="parallax-body__intro-panel">
					<div class="intro-header">We are The Bees Knees!</div>
					<div>
						Versatile professional party band dedicated to making your event amazing. From London to Glasgow we have been thrilling audiences with our covers from pop, rock, Motown, ska and much much more. Available for all your event needs
					</div>
				</div>
			</div>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg1">
			<div class="page-container">
				<Panel heading="About The Band">
					The Bee Knees formed in 2018 by a group of fun loving musicians with decades of experience in everything from function bands to orchestras.
					We have travelled across the British Isles and our goal is to create the best most energetic parties for our clients and have a blast at the same time.
				</Panel>
			</div>
		</div>
		<div class="parallax-body__section parallax-body__section--static">
			<Testimonial bgImage="bride-1.jpg">
				<template v-slot:quote>
					The Bees Knees were amazing, a highlight of the day for me. They played the best songs and I was so impressed with their version of Etta James ‘At Last’ it was such a beautiful moment for me and my husband.
				</template>
				<template v-slot:attribution>
					- Elaine M, 2019
				</template>
			</Testimonial>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg2">
			<div class="page-container">
				<Panel :isList="true" heading="Available for:">
					<ul>
						<li>Weddings</li>
						<li>Wedding Proposals</li>
						<li>Hotel / Restaurant Event</li>
						<li>Corporate / Charity Events</li>
						<li>Birthday Party</li>
						<li>Memorial Service</li>
						<li>Bah / Bat Mitzvahs</li>
						<li>Christmas / NYE Party</li>
					</ul>
				</Panel>
			</div>
		</div>
		<div class="parallax-body__section parallax-body__section--static">
			<Testimonial :reverse="true" bgImage="bride-2.jpg">
				<template v-slot:quote>
					AMAZING!! This band were absolutely incredible. We picked the Bees Knees because of Lauren’s voice and their varied set list. They exceeded all expectations and kept our wedding dancing all night. All the guests said what an amazing band we had and they really helped make our wedding so wonderful. They happily learnt our first dance song and even played requests from guests. Thank you Bees Knees!!
				</template>
				<template v-slot:attribution>
					- Philip S, 2019
				</template>
			</Testimonial>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg3">
			<div class="page-container">
				<Panel :isList="false" heading="Genres / Set options" highlight="Special Requests taken in advance!">
					<ul>
						<li>1950s to modern day</li>
						<li>Rock/Pop</li>
						<li>Ska</li>
						<li>Motown</li>
						<li>Acoustic</li>
						<li>Disco</li>
						<li>R &amp; B / Soul</li>
						<li>Alternative Rock</li>
						<li>Classic Rock</li>
						<li>Rock n Roll</li>
						<li>Blues</li>
					</ul>
				</Panel>
			</div>
		</div>
		<div class="parallax-body__section parallax-body__section--static">
			<Testimonial bgImage="crowd.jpg">
				<template v-slot:quote>
					Absolutely fantastic from start to finish! They entertained on four different nights for us for a total of 32 different groups , and the feedback from all was outstanding! Not only would I recommend these guys but would have them back in a heartbeat! Awesome !
				</template>
				<template v-slot:attribution>
					- Donald B, 2019
				</template>
			</Testimonial>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg4">
			<div class="page-container">
				<Panel :isList="true" heading="Performance details">
					<ul>
						<li>Can perform outdoors</li>
						<li>We provide all our own sound and lighting equipment</li>
						<li>Custom tailored sets if requested</li>
						<li>All equipment is PAT tested</li>
						<li>Different line ups available to suit your budget and preference</li>
					</ul>
				</Panel>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import HeroBanner from '../organisms/HeroBanner'
import Testimonial from '../atoms/Testimonial'
import Panel from '../molecules/Panel'
import Footer from '../organisms/Footer'

export default {
	name: 'ParallaxBody',
	components: {
		HeroBanner,
		Footer,
		Panel,
		Testimonial,
	},
	data () {
		return {
		}
	},
	props: {
		burgerOpen: {
			type: Boolean,
			default: false,
		}
	},
	// computed: {
	// 	burgerOpen() {
	// 		return this.$store.state.burgerOpen
	// 	}
	// },
	created: function()
	{
	},
	methods: {
	}
}
</script>

<style lang="scss">
	@import "src/scss/toolkit";

	$c: ".parallax-body";
	#{$c}
	{
		height: 100vh;
		box-sizing: border-box;
		overflow-x: hidden;
		overflow-y: scroll;
		@include header--padding;
		perspective: 8px;

		&--frozen {
			overflow: hidden;
		}

		&__intro-panel {
			text-align: center;
			font-family: 'Montserrat';
			color: $mainGold;
			font-size: 1.8rem;
			@media screen and (max-width: $breakpoint-ptab) {
				font-size: 1.2rem;
				}
			.intro-header {
				@include heading;
				text-decoration: underline;
				margin-bottom: 1rem;;
			}
		}

		&__section {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			&--parallax {
				transform: translateZ(1px) scale(0.85);
				.page-container {
					@media screen and (max-width: $breakpoint-mob){
						padding-left: 1rem;
						padding-right: 1rem;
					}
				}
				&::after {
					content: "";
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-repeat: no-repeat;
					background-size: cover;
					z-index: -1;
				}
			}
			&--static {
				height: 65%;
				overflow: hidden;
				background: url('../../assets/blur-abstract-black-hexagon-mesh-pattern-background_33869-397.jpg');
				background-size: 150%;
			}
		}

		.bg1::after {
			background-image: url('../../assets/pic1.jpg');
			background-position: center;

		}

		.bg2::after {
			background-image: url('../../assets/pic2.jpg');
			background-position: center;
		}

		.bg3::after {
			background-image: url('../../assets/pic3.jpg');
			background-position: center;
		}

		.bg4::after {
			background-image: url('../../assets/pic4.jpg');
			background-position: center;
		}

	}

</style>
