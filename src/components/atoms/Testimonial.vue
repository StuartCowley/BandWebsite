<template>
	<div class="testimonial">
		<div class="page-container">
			<div class="grid grid--middle" :class="{'grid--reverse': reverse}">
				<div class="grid__item one-half">
					<div class="testimonial-wrap">
						<div class="testimonial__content">
							<slot name="quote"></slot>
						</div>
						<div class="testimonial__attribution">
							<slot name="attribution"></slot>
						</div>
					</div>
				</div>
				<div class="grid__item one-half">
					<div class="testimonial__image" :style="{backgroundImage: `url(${image})` }"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Testimonial',
	props: {
		reverse: {
			type: Boolean,
			default: false,
		},
		bgImage: {
			type: String,
		},
	},
	computed: {
		image() {
			return require(`../../assets/${this.bgImage}`)
		}
	}
}
</script>

<style lang="scss">
@import 'src/scss/toolkit';

$c:'.testimonial';
#{$c} {
	padding-top: 100px;
	padding-bottom: 100px;
	.page-container {
		padding-left: 5rem;
		padding-right: 5rem;
	}
	&-wrap {
		text-align: center;
	}
	&__content {
		color: orange;
		margin-bottom: 1rem;
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
			margin-left: -8px;
		}
	}
	&__attribution {
		color: yellow;
	}
	&__image {
		background-size: cover;
		&::before {
			content: '';
			display: block;
			padding-top: 62.5%;
		}
	}
}

</style>
