<template>
	<div class="testimonial-page">
		<SecondaryLayout>
			<template v-slot:title>
				title here
			</template>

			<template v-slot:content>
				<Testimonial :reverse="true" bgImage="bride-2.jpg">
					<template v-slot:quote>
						AMAZING!! This band were absolutely incredible. We picked the Bees Knees because of Lauren’s voice and their varied set list. They exceeded all expectations and kept our wedding dancing all night. All the guests said what an amazing band we had and they really helped make our wedding so wonderful. They happily learnt our first dance song and even played requests from guests. Thank you Bees Knees!!
					</template>
					<template v-slot:attribution>
						- Philip S, 2019
					</template>
				</Testimonial>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'
import Testimonial from '../atoms/Testimonial'

export default {
	name: 'TestimonialPage',
	components: {
		SecondaryLayout,
		Testimonial
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".testimonial-page";
#{$c}
{
	@include secondary-page-layout;
}
</style>
