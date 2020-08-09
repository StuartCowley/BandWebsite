<template>
	<div class="parallax-body">
		<HeroBanner class="parallax-body__section parallax-body__section--parallax" />
		<div class="parallax-body__section parallax-body__section--static">
			<div class="page-container">

				<div class="parallax-body__intro-panel">
					<div class="title">
						Manchester based professional party band playing pop, rock, motown, ska and more, available for all your event needs
					</div>
				</div>
			</div>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg1">
			<div class="page-container">
				<Panel heading="About The Band">
					<ul>
						<li>
							All sound and lighting equipment provided
						</li>
						<li>
							Available for all types of events all across the country
						</li>
						<li>
							Bookings taken for various band line ups and can include two guitars, bass, saxophone, keyboards and drums
						</li>
						<li>
							Available from solo acoustic to full five piece band as needed
						</li>
						<li>
							DJ service available, we take care of everything!
						</li>
					</ul>
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
				<Panel class="is-list" heading="Available for:">
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
					AMAZING!! This band were absolutely incredible. We picked the Bees Knees because of Lauren’s voice and their varied set list. They exceeded all expectations and kept our wedding dancing all night. All the guests said what an amazing band we had and they really helped make our wedding so wonderful. They happily learnt our first dance song and even played requests from guests. I can not recommend this band enough and 5 stars doesn’t seem to do them justice. Thank you Bees Knees!!
				</template>
				<template v-slot:attribution>
					- Philip S, 2019
				</template>
			</Testimonial>
		</div>
		<div class="parallax-body__section parallax-body__section--parallax bg3">
			<div class="page-container">
				<Panel class="is-list" heading="Genres / Set options">
					<ul>
						<li>1950s to modern day</li>
						<li>Rock/Pop</li>
						<li>Ska</li>
						<li>Motown</li>
						<li>Folk</li>
						<li>Acoustic</li>
						<li>Disco</li>
						<li>R &amp; B / Soul</li>
						<li>Alternative Rock</li>
						<li>Classic Rock</li>
						<li>Rock n Roll</li>
						<li>Blues</li>
						<li>Requests taken in advance</li>
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
				<Panel heading="Performance details">
					<ul>
						<li>Can perform outdoors</li>
						<li>We provide all our own sound and lighting equipment</li>
						<li>Custom tailored sets if requested</li>
						<li>All equipment is PAT tested</li>
						<li>Different line ups availbale to suit your budget and preference</li>
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
			bride: require('../../assets/bride-1.jpg')
		}
	},
	props: {
	},
	computed: {
	},
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
		@include header--padding;
		perspective: 2px;

		&__intro-panel {
			text-align: center;
			.title {
				@include heading;
				font-family: 'Montserrat';
				color: $mainGold;
			}
		}

		&__section {
			position: relative;
			height: 100%;

			/* For text formatting. */
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			&--parallax::after {
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				transform: translateZ(-1px) scale(1.5);
				background-repeat: no-repeat;
				background-size: cover;
				z-index: -1;
			}
			&--static {
				height: 65%;
				overflow: hidden;
				background: url('../../assets/blur-abstract-black-hexagon-mesh-pattern-background_33869-397.jpg');
				background-size: 200%;
			}
			ul {
					list-style: none;
					padding-left: 0;
				li {
					display: block;
					padding-right: 10%;
					margin-bottom: 20px;
				}
			}
			.is-list {
				ul {
					li {
						display: inline-block;
						width: 40%;
					}
				}
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
