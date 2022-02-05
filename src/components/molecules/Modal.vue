<template>
	<div v-show="display" class="modal">
		<div class="modal__wrapper">
			<div class="modal__container">
				<div class="modal__header">
					{{content.heading}}
				</div>

				<div class="modal__copy">
					{{content.body}}
				</div>

				<div class="modal__button--wrap">
					<button class="modal__button" @click="$emit('closeModal')">
						OK
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Modal',
	props: {
		display: {
			type: Boolean,
			default: false
		},
		content: {
			heading: {
				type: String,
				default: ''
			},
			body: {
				type: String,
				default: ''
			}
		},
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".modal";
#{$c}
{
	&__wrapper {
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: center;
		z-index: 100;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__container {
		padding: 20px 30px;
		background-color: $almostBlack;
		border-radius: 40px;
		border: 5px solid $mainGold;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	}

	&__header {
		color: $mainGold;
		@include heading;
		text-align: center;
	}

	&__copy {
		color: $mainGold;
		text-align: center;
		margin: 20px 0;
	}

	&__button {
		@include cta;
		&--wrap {
			display: flex;
			justify-content: center;
		}
	}
}
</style>
