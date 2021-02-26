<template>
	<div class="about-page">
		<SecondaryLayout>

			<template v-slot:title>
				title here
			</template>

			<template v-slot:content>
				About content
			</template>

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
@import "src/scss/toolkit";

$c: ".about-page";
#{$c}
{
	@include secondary-page-layout;
}
</style>
