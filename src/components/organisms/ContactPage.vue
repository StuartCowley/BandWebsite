<template>
	<div class="contact-page">
		<Modal
			:display="this.modal.show"
			:content="this.modal.message"
			@closeModal="handleModal"
		/>
		<SecondaryLayout>

			<template v-slot:title>
				<div class="secondary-layout__title">
					Contact Us
				</div>
			</template>

			<template v-slot:content>
				<div class="contact-page__content-block">
					<div class="contact-page__form-wrap">
						<ContactForm @openModal="handleModal" />
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'
import ContactForm from '../molecules/ContactForm.vue'
import Modal from '../molecules/Modal.vue'

export default {
	name: 'ContactPage',
	components: {
		SecondaryLayout,
		ContactForm,
		Modal
	},
	metaInfo: {
		title: 'The Bees Knees - Professional Party Band from Manchester',
		titleTemplate: '%s | Contact The Band | Get a quote | Check Availability | Ask us anything!'
  },
	data: () => {
		return {
			modal: {
				show: false,
				message: {
					heading: '',
					body: ''
				}
			}
		}
	},
	methods: {
		handleModal(payload) {
			if (payload == 'emailInvalid') {
				this.modal = {
					show: true,
					message: {
						heading: 'Oops!',
						body: 'Please check your email address is valid!'
					}
				}
			} else if (payload == 'success') {
				this.modal = {
					show: true,
					message: {
						heading: 'Thanks!',
						body: 'Your message has been sent'
					}
				}
			} else {
				this.modal = {
					show: false,
					message: {
						heading: '',
						body: ''
					}
				}
			}
		}
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
