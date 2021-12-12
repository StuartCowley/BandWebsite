<template>
	<div class="songlist-page">
		<SecondaryLayout>

			<template v-slot:title>
				<div class="secondary-layout__title">
					Current Repertoire
				</div>
			</template>

			<template v-slot:content>
				<div class="secondary-layout__content">
					<div class="songlist-page__content-block">
						<div class="songlist-page__copy">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos fugiat quae, earum asperiores pariatur odit rem nobis labore nostrum facilis itaque aspernatur debitis fugit quibusdam praesentium harum recusandae nulla.
						</div>
						<div class="songlist-page__table">
							<div class="song-wrapper" v-for="song in songData" :key="song.id">
								<span>{{song.title}} - </span><span class="song-artist">{{song.artist}}</span>
							</div>
						</div>
					</div>
					<div class="songlist-page__content-block songlist-page__cta-block">
						<div class="songlist-page__copy">
							Have a question about reportoire? Is there a certain song you would like us to perform for our event? Get in touch!
						</div>
						<div class="songlist-page__cta-wrap">
							<CTA class="songlist-page__cta" label="Contact us" link="contact" />
						</div>
					</div>
				</div>
			</template>

		</SecondaryLayout>
	</div>
</template>

<script>
import CTA from '../atoms/CTA.vue';
import SecondaryLayout from './SecondaryLayout';
import songs from '../../data/songs.json';

export default {
	name: 'SongListPage',
	components: {
		CTA,
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
	&__content-block {
		@include framed-content-block;
	}

	&__copy {
		@include copy;
		text-align: center;
	}

	&__cta {
		margin-left: auto;
		margin-right: auto;
		margin-top: 1rem;
		&-wrap {
			display: flex;
		}
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
