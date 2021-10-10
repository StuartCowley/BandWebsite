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
	min-height: 100%;
	background: url('../../assets/blur-abstract-black-hexagon-mesh-pattern-background_33869-397.jpg');
	background-size: 100%;

	&__title {
    display: flex;
    justify-content: center;
		margin-top: 1rem;
    margin-bottom: 1rem;
		font: $heading-font-family;
	}

	&__content {
		flex: 1;
		margin-bottom: 2rem;
		.page-container	{
			@media screen and (max-width: $breakpoint-mob){
				padding-left: 0;
				padding-right: 0;
			}
		}
	}
}
</style>
