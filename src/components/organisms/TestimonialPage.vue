<template>
	<div class="testimonial-page">
		<SecondaryLayout>
			<template v-slot:title>
				<div class="secondary-layout__title">
					Testimonials
				</div>
			</template>

			<template v-slot:content>
				<div class="testimonial-page__content-block"
					v-for="testimonial in testimonials" :key="testimonial.id">
					<BasicTestimonial>
						<template v-slot:quote>
							{{testimonial.copy}}
						</template>
						<template v-slot:attribution>
							- {{testimonial.author}}
						</template>
					</BasicTestimonial>
				</div>
			</template>
		</SecondaryLayout>
	</div>
</template>

<script>
import BasicTestimonial from '../atoms/BasicTestimonial.vue'
import SecondaryLayout from './SecondaryLayout'

import TestimonialList from '../../data/testimonials.json';

export default {
	name: 'TestimonialPage',
	components: {
		BasicTestimonial,
		SecondaryLayout
	},
	computed: {
		testimonials() {
			return TestimonialList
		}
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".testimonial-page";
#{$c}
{
	@include secondary-page-layout;

	&__content-block {
		@include framed-content-block;
		position: relative;
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
