<template>
	<div class="secondary-layout">

		<div class="secondary-layout__title">
			<slot name="title" />
		</div>

		<div class="secondary-layout__content">
			<slot name="content" />
		</div>

		<Footer />
	</div>
</template>

<script>
import Footer from './Footer'

export default {
	name: 'SecondaryLayout',
	components: {
		Footer
	}

}
</script>

<style lang="scss">
@import "src/scss/toolkit";
$c: ".secondary-layout";

#{$c}
{
	display: flex;
	flex-flow: column;
	@include header--padding;
	height: 100%;
	background-color: $white;

	&__title {
		font: $heading-font-family;
		font-size: 3rem;
	}

	&__content {
		flex: 1;
	}
}
</style>
