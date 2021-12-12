<template>
	<div class="contact-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="secondary-layout__title">
					Contact Us
				</div>
			</template>

			<template v-slot:content>
				<div class="contact-page__content-block">
					<div class="contact-page__form-wrap">
						<ContactForm />
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

	&__content-block {
		@include framed-content-block;
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
