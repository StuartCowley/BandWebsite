<template>
	<div class="faq-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="secondary-layout__title">
					FAQs
				</div>
			</template>

			<template v-slot:content>
				<div class="secondary-layout__content">
					<div class="faq-page__content-block">
						<div class="faq-page__copy">
							FAQ content
						</div>
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'FAQPage',
	components: {
		SecondaryLayout
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".faq-page";
#{$c}
{
	@include secondary-page-layout;

	&__content-block {
		@include framed-content-block;
	}

	&__copy {
		@include copy;
		text-align: center;
	}
}
</style>
