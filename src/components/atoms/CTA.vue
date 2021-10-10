<template>
	<router-link :to="link">
		<div class="cta">
			{{label}}
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'CTA',
	props: {
		label: {
			type: String,
		},
		link: {
			type: String,
			default: 'contact'
		}
	}
}
</script>

<style lang="scss">
	@import "src/scss/toolkit";
	$c: '.cta';
	#{$c} {
		@include cta;
	}

</style>
