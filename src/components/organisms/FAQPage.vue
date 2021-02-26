<template>
	<div class="faq-page">
		<SecondaryLayout>

			<template v-slot:title>
				title here
			</template>

			<template v-slot:content>
				FAQ content
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
}
</style>
