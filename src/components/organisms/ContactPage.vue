<template>
	<div class="contact-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="contact-page__header">
					Contact Us
				</div>
			</template>

			<template v-slot:content>
				<div class="page-container">
					<div class="contact-page__body">
						<div class="contact-page__form-wrap">
							<ContactForm />
						</div>
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'
import ContactForm from '../molecules/ContactForm.vue'

export default {
	name: 'ContactPage',
	components: {
		SecondaryLayout,
		ContactForm
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".contact-page";
#{$c}
{
	@include secondary-page-layout;
	&__header {
		@include heading;
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: $almostBlack;
		opacity: 0.9;
		text-align: center;
		color: $mainGold;
	}
	&__body {
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: $offWhite;
		color: $black;
	}
	&__form-wrap {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
}
	&__copy {
		@include copy;
		text-align: center;
	}
}
</style>
