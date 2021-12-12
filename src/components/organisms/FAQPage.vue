<template>
	<div class="faq-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="secondary-layout__title">
					FAQs
				</div>
			</template>

			<template v-slot:content>
				<div class="secondary-layout__content">
					<div class="faq-page__content-block">
						<div class="faq-page__copy">
							Welcome to our Frequently Asked Questions (FAQs) page. Here you will find:
							<ul>
								<li>Price ranges</li>
								<li>Line-up choices</li>
								<li>Logistical information</li>
								<li>Public Liability</li>
								<li>Repertoire choices</li>
							</ul>
							If you have a question that isn't answered here, please contact us.
						</div>
						<FAQ :question="faq.question" :answer="faq.answer" v-for="faq in faqs" :key="faq.id" />
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import FAQ from '../atoms/Faq'
import SecondaryLayout from './SecondaryLayout'

import FAQList from "../../data/faqs.json";

export default {
	name: 'FAQPage',
	components: {
		FAQ,
		SecondaryLayout
	},
	computed: {
		faqs() {
			return FAQList
		}
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".faq-page";
#{$c}
{
	@include secondary-page-layout;

	&__content-block {
		@include framed-content-block;
	}

	&__copy {
		@include copy;
		margin-bottom: 1rem;
	}
}
</style>
