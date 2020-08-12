<template>
	<div class="testimonial">
		<div class="page-container">
			<div class="grid grid--middle" :class="{'grid--reverse': reverse}">
				<div class="grid__item z--2" :class="{'one-half': $mq == 'desk' || $mq == 'max' }">
					<div class="testimonial-wrap">
						<div class="testimonial__content">
							<slot name="quote"></slot>
						</div>
						<div class="testimonial__attribution">
							<slot name="attribution"></slot>
						</div>
					</div>
				</div>
				<div class="grid__item" :class="{'one-half': $mq == 'ltab' || $mq == 'desk' || $mq == 'max' }">
					<div class="testimonial__image"
					:class="{'testimonial__image--fill': $mq == 'mob' || $mq == 'ptab' || $mq == 'ltab' }"
					:style="{backgroundImage: `url(${image})` }"></div>
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
	.page-container {
		padding-left: 5rem;
		padding-right: 5rem;
		@media screen and (max-width: $breakpoint-ptab) {
			// padding-left: 1rem;
			// padding-right: 1rem;
		}
	}
	&-wrap {
		text-align: center;
	}
	&__content {
		color: orange;
		margin-bottom: 1rem;
		font-size: 1.6rem;
		@media screen and (max-width: $breakpoint-mob) {
			font-size: 0.8rem;
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
			margin-left: -8px;
		}
	}
	&__attribution {
		color: yellow;
	}
	&__image {
		background-size: cover;
		width: 100%;

		&-mask,
		&--fill {
			position: absolute;
			left: 20px;
			top: 20px;
			bottom: 20px;
			right: 20px;
		}
		&--fill {
			background-repeat: no-repeat;
			background-position: center;
			width: auto;
		}
		// &-mask {
		// 	opacity: 0.5;
		// 	display: none;
		// 	&--show {
		// 		display: block;
		// 	}
		// }
		&::before {
			content: '';
			display: block;
			background-color: black;
			height: 100%;
			opacity: 0.5;
		}
		&::after {
			content: '';
			display: block;
			padding-top: 62.5%;
		}
	}
}

</style>
