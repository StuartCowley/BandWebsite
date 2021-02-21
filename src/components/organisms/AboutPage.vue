<template>
	<div class="about-page">
		<SecondaryLayout>
			<div class="about-page__title">
				about page
			</div>
		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'AboutPage',
	components: {
		SecondaryLayout
	}
}
</script>

<style lang="scss">
$c: ".about-page";

#{$c}
{
	&__title {
		font-size: 3rem;
		color: red;
	}
}
</style>
