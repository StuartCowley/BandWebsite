<template>
	<div class="secondary-layout">
		<slot />
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
$c: ".secondary-layout";

#{$c}
{
	margin-top: 200px;
}
</style>
