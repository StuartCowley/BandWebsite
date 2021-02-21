<template>
	<div class="songlist-page">
		<SecondaryLayout>
			<div class="songlist-page__title">
				Song list page
			</div>
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
$c: ".songlist-page";

#{$c}
{
	&__title {
		font-size: 3rem;
		color: red;
	}
}
</style>
