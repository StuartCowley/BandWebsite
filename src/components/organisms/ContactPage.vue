<template>
	<div class="contact-page">
		<SecondaryLayout>

			<template v-slot:title>
				title here
			</template>

			<template v-slot:content>
				contact content
			</template>

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
@import "src/scss/toolkit";

$c: ".contact-page";
#{$c}
{
	@include secondary-page-layout;
}
</style>
