<template>
	<div class="faq">
		<div class="faq__question">Q. {{question}}</div>
		<div class="faq__answer">{{answer}}</div>
	</div>
</template>

<script>
export default {
	name: 'Faq',
	props: {
		question: {
			type: String,
		},
		answer: {
			type: String,
		}
	}
}
</script>

<style lang="scss">
	@import "src/scss/toolkit";
	$c: '.faq';
	#{$c} {
		margin-bottom: 1rem;
		padding-left: 2rem;
		padding-right: 2rem;
		@media screen and (max-width: $breakpoint-mob) {
			padding-left: 0;
			padding-right: 0;
		}
		&__question {
			@include copy;
			text-decoration: underline;
			padding-bottom: 8px;
		}
	}
</style>
