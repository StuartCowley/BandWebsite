<template>
	<div class="screen-fill" v-bind:class="{
		'screen-fill--has-scroll-hint' : hasScrollHint,
		'screen-fill--header-padding' : hasHeaderPadding,
		'screen-fill--header-shift' : hasHeaderShift,
	}">
		<div class="screen-fill__outer">
			<div class="screen-fill__inner">

				<slot />

			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ScreenFill',
	components: {
	},
	data () {
		return {
		}
	},
	props: {
		hasScrollHint: Boolean,
		hasHeaderPadding: Boolean,
		hasHeaderShift: Boolean
	},
	computed: {
	},
	created: function()
	{
	},
	mounted: function()
	{
	},
	methods: {
	}
}
</script>

<style lang="scss">
	@import "src/scss/toolkit";

	//  Screen filling container

	$c: ".screen-fill";
	#{$c}
	{
		display: table;
		width: 100%;
		height: 100vh;

		// Portable fixes until BuggyFill kicks in
		// @include breakpoint(max-height 1024px) { max-height: 1024px; }
		// @include breakpoint(max-height 768px) { max-height: 768px; }
		// @include breakpoint(max-height 568px) { max-height: 568px; }
		// @include breakpoint(max-height 480px) { max-height: 480px; }
		// @include breakpoint(max-height 320px) { max-height: 320px; }

		&__outer
		{
			display: table-cell;
			width: 100%;
			height: 100%;
		}

		&__inner
		{
			width: 100%;
			max-width: 100vw;
			height: 100%;
		}

		&--header-padding
		{
			@include header--padding;
		}

		&--header-shift
		{
			margin-top: $header-height;
			// @include extend(header--shift);
		}

	}

</style>
