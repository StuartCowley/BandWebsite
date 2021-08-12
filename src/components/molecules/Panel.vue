<template>
	<div class="panel">
		<div class="grid grid--v-spread grid--s-24" :class="$mq == 'ptab' || $mq == 'mob' ? 'grid--vertical' : 'grid--center'">
			<div class="grid__item" :class="{'one-half': $mq == 'ltab' || $mq == 'desk' || $mq == 'max' }">
				<div class="panel__heading-wrap">
					<div class="panel__heading" v-html="heading"></div>
				</div>
			</div>
			<div class="grid__item" :class="{'one-half': $mq == 'ltab' }">
				<div class="panel__content"
				:class="{
					'panel__content--vertical': $mq == 'mob' || $mq == 'ptab' || $mq == 'max',
					'panel__content--list': isList
					}">
					<slot />
					<div v-if="highlight" class="panel__highlight">{{this.highlight}}</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: 'Panel',
	props: {
		heading: {
			type: String,
		},
		isList: {
			type: Boolean,
			default: false
		},
		highlight: {
			type: String,
			default: ''
		}
	}

}
</script>

<style lang="scss">
@import 'src/scss/toolkit';

$c:'.panel';
#{$c} {
	padding-top: 24px;
	padding-bottom: 24px;

	&__heading {
		@include heading;
		width: 100%;
		padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
		background-color: $almostBlack;
		opacity: 0.9;
		border-radius: 40px;
		text-align: center;
		color: $mainGold;
		@media screen and (max-width: $breakpoint-ptab) {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
		}

		&-wrap {
			display: flex;
			align-items: center;
			height: 100%;
			min-width: 300px;
		}
	}
	&__content {
		border-radius: 40px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2.5rem;
    padding-right: 1rem;
		background-color: $almostBlack;
		opacity: 0.9;
		color: $mainGold;
		@include copy;
		&--vertical {
			text-align: center;
		}
		ul {
			list-style: none;
			padding-left: 0;
			margin-top: 0;
			margin-bottom: 0;
		}
		li {
			text-align: center;
		}
		&--list {
			li {
				@media screen and (min-width: $breakpoint-ptab) {
					text-align: left;
					display: list-item;
					list-style-type: disc;
					list-style-position: outside;
				}
			}
		}
	}
	&__highlight {
		text-align: center;
		font-weight: 600;
	}
}

</style>
