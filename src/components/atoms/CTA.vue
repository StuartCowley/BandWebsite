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
		display: inline-block;
		color: $offWhite;
		background-color: $mainGold;
		letter-spacing: 0.5rem;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 24px;
		padding-right: 24px;
		border-radius: 40px;
		text-transform: uppercase;
		font-size: 1.6rem;
		@media screen and (max-width: $breakpoint-mob) {
			font-size: 1rem;
		}
	}

</style>
