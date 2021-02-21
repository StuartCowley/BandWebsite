<template>
	<div class="testimonial-page">
		<SecondaryLayout>
			<div class="testimonial-page__title">
				testimonial page
			</div>
		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'TestimonialPage',
	components: {
		SecondaryLayout
	}
}
</script>

<style lang="scss">
$c: ".testimonial-page";

#{$c}
{
	&__title {
		font-size: 3rem;
		color: red;
	}
}
</style>
