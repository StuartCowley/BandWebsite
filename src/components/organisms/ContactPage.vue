<template>
	<div class="contact-page">
		<SecondaryLayout>
			<div class="contact-page__title">
				Contact page
			</div>
		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'ContactPage',
	components: {
		SecondaryLayout
	}
}
</script>

<style lang="scss">
$c: ".contact-page";

#{$c}
{
	&__title {
		font-size: 3rem;
		color: red;
	}
}
</style>
