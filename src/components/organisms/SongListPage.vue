<template>
	<div class="songlist-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="songlist-page__header">
					Current Repertoire
				</div>
			</template>

			<template v-slot:content>
				<div class="page-container">
					<div class="songlist-page__body">
						<div class="songlist-page__copy">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos fugiat quae, earum asperiores pariatur odit rem nobis labore nostrum facilis itaque aspernatur debitis fugit quibusdam praesentium harum recusandae nulla.
						</div>
						<div class="songlist-page__table">
							<div class="song-wrapper" v-for="song in songData" :key="song.id">
								<div class="title">{{song.title}}</div>
								<div class="artist">{{song.artist}}</div>
							</div>
						</div>
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
// TODO refactor to fix secondary layout issues as described here: https://markus.oberlehner.net/blog/dynamic-vue-layout-components/
import SecondaryLayout from './SecondaryLayout'
import songs from '../../data/songs.json';

export default {
	name: 'SongListPage',
	components: {
		SecondaryLayout
	},
	computed: {
		songData() {
			return songs.map(song => { return song })
		}
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";
$c: ".songlist-page";

#{$c}
{
	@include secondary-page-layout;
	&__header {
		@include secondary-page-heading;
	}
	&__body {
		@include secondary-page-body;
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}
	&__copy {
		@include copy;
		text-align: center;
	}
	&__table {
		margin-left: 2rem;
		margin-right: 2rem;
		.song {
			&-wrapper {
				margin-top: 1rem;
				margin-bottom: 1rem;
				display: flex;
				.artist,
				.title {
					width: 50%;
				}
				.title {
					text-align: right;
				}
				.artist {
					padding-left: 1rem;
				}
			}
		}
	}
}
</style>
