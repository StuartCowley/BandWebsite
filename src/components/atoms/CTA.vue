<template>
	<div class="cta">
		{{label}}
	</div>
</template>

<script>
export default {
	name: 'CTA',
	props: {
		label: {
			type: String,
		},
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
