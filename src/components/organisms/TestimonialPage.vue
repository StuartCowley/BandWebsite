<template>
	<div class="testimonial-page">
		<SecondaryLayout>
			<template v-slot:title>
				<div class="testimonial-page__header">
					Testimonials
				</div>
			</template>

			<template v-slot:content>
				<div class="page-container">
					<div class="testimonial-page__body">
						<BasicTestimonial>
							<template v-slot:quote>
								AMAZING!! This band were absolutely incredible. We picked the Bees Knees because of Lauren’s voice and their varied set list. They exceeded all expectations and kept our wedding dancing all night. All the guests said what an amazing band we had and they really helped make our wedding so wonderful. They happily learnt our first dance song and even played requests from guests. Thank you Bees Knees!!
							</template>
							<template v-slot:attribution>
								- Philip S, 2019
							</template>
						</BasicTestimonial>
					</div>
				</div>
			</template>
		</SecondaryLayout>
	</div>
</template>

<script>
import BasicTestimonial from '../atoms/BasicTestimonial.vue'
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'TestimonialPage',
	components: {
		BasicTestimonial,
		SecondaryLayout
	},
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".testimonial-page";
#{$c}
{
	@include secondary-page-layout;

	&__header {
		@include secondary-page-heading;
	}

	&__body {
		@include secondary-page-body;
		position: relative;
		padding-top: 20px;
		padding-bottom: 20px;
		padding-left: 20px;
		padding-right: 20px;
		margin-bottom: 20px;
	}

	&__copy {
		@include copy;
		text-align: center;
	}

	&__testimonial {
		// TODO add transition effects on scroll
		border: 8px solid $white;
		background-color: $offWhite;
		border-radius: 20px;
		margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 2rem;
		margin-bottom: 2rem;

		.quote {
			width: 80%;
			line-height: 1.75;
			padding-top: 2rem;
			padding-bottom: 2rem;
			padding-left: 2rem;
			padding-right: 2rem;
		}

		.attribution {
			margin-right: 2rem;
			padding-bottom: 2rem;
			text-align: right;
			font-style: italic;
		}
	}
}
</style>
