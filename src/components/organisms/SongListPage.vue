<template>
	<div class="songlist-page">
		<SecondaryLayout>

			<template v-slot:title>
				title here
			</template>

			<template v-slot:content>
				Song list content
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import SecondaryLayout from './SecondaryLayout'

export default {
	name: 'SongListPage',
	components: {
		SecondaryLayout
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";
$c: ".songlist-page";

#{$c}
{
	@include secondary-page-layout;
}
</style>
