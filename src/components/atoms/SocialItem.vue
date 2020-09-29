<template>
	<a :href="link" class="social-item__wrap" :class="{'social-item__wrap--reverse-colors': reverseColors }">
		<div class="social-item__logo" v-html="logo"></div>
	</a>
</template>

<script>

export default {
	name: "SocialItem",
	props: {
		logo: String,
		reverseColors: {
			type: Boolean,
			default: false,
		},
		link: {
			type: String,
			default: '',
		}
	},

}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".social-item";
#{$c} {
	&__wrap {
		width: 30px;
		display: inline-block;
		position: relative;
		padding-top: 10px;
		padding-right: 10px;
		padding-bottom: 8px;
		padding-left: 10px;
		margin-right: 10px;
		border: $mainGold 2px solid;
		border-radius: 20px;
		color: $mainGold;
		&:last-of-type {
			margin-right: 0;
		}
		@media screen and (max-width: $breakpoint-ptab) {
			width: 20px;
			padding-top: 6px;
			padding-bottom: 4px;
			padding-left: 6px;
			padding-right: 6px;
			border-radius: 14px;
		}
		@include hover--colors($mainGold, $offWhite)
	}
	&__logo {
		svg {
			width: 100%;
			height: 100%;
		}
		path {
			fill: currentColor;
		}
	}
}
</style>
