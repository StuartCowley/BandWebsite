<template>
	<div class="faq-page">
		<SecondaryLayout>
			<div class="faq-page__title">
				FAQ page
			</div>
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
$c: ".faq-page";

#{$c}
{
	&__title {
		font-size: 3rem;
		color: red;
	}
}
</style>
