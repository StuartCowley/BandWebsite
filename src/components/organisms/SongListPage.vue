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
								<span>{{song.title}} - </span><span class="song-artist">{{song.artist}}</span>
							</div>
						</div>
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
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
    margin-top: 2rem;
    margin-bottom: 2rem;
		margin-left: 4rem;
    margin-right: 4rem;
    column-count: 3;
    -moz-column-count: 3;
		-webkit-column-count: 3;
		-o-column-count: 3;
		@media screen and (max-width: $breakpoint-ltab) {
			margin-left: 2rem;
			margin-right: 2rem;
		}
		@media screen and (max-width: $breakpoint-ptab) {
			margin-left: 1rem;
			margin-right: 1rem;
			column-count: 2;
			-moz-column-count: 2;
			-webkit-column-count: 2;
			-o-column-count: 2;
		}
		@media screen and (max-width: $breakpoint-mob) {
			column-count: 1;
			-moz-column-count: 1;
			-webkit-column-count: 1;
			-o-column-count: 1;
			text-align: center;
		}
		.song {
			&-wrapper {
				margin-bottom: 1rem;
			}
			&-artist {
				font-style: italic;
			}
		}
	}
}
</style>
