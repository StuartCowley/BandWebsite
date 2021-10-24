<template>
	<div class="basic-testimonial">
		<div class="grid__item">
			<div class="basic-testimonial-wrap">
				<div class="basic-testimonial__content">
					<slot name="quote"></slot>
				</div>
				<div class="basic-testimonial__attribution">
					<slot name="attribution"></slot>
				</div>
			</div>
		</div>
		<div
			class="basic-testimonial__image"
			:class="{'basic-testimonial__image--fill': $mq == 'mob' || $mq == 'ptab' || $mq == 'ltab' }"
			:style="{backgroundImage: `url(${image})` }">
		</div>
	</div>
</template>

<script>
export default {
	name: 'BasicTestimonial',
}
</script>

<style lang="scss">
@import 'src/scss/toolkit';

$c:'.basic-testimonial';
#{$c} {
	.page-container {
		padding-left: 3.5rem;
		padding-right: 3.5rem;
	}
	&-wrap {
		text-align: center;
	}
	&__content {
		color: orange;
		margin-bottom: 1rem;
		font-size: 1.4rem;
		@media screen and (max-width: $breakpoint-mob) {
			font-size: 0.9rem;
		}
		&:before,
		&:after {
			content: '"';
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			font-size: 100px;
			position: absolute;
			color: grey;
			opacity: 0.5;
		}
		&:before {
			margin-top: -32px;
			margin-left: -32px;
		}
		&:after {
			margin-top: -24px;
		}
	}
	&__attribution {
		color: yellow;
		font-style: italic;
	}

}

</style>
