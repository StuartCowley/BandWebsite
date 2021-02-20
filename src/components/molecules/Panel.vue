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
    padding-left: 2rem;
    padding-right: 2rem;
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
		}
		&--list {
			@media screen and (max-width: $breakpoint-ptab) {
				padding-top: 12px;
				padding-bottom: 12px;
				padding-left: 12px;
				padding-right: 12px;
			}
			li {
				display: inline-flex;
				box-sizing: border-box;
				font-size: 1.5rem;
				width: 50%;
				padding-right: 20px;
				margin-bottom: 10px;
				max-height: 84px;
				align-items: center;
				&.bold {
					font-weight: 600;
				}
				@media screen and (max-width: $breakpoint-ptab) {
					width: 100%;
					justify-content: center;
					min-height: 20px;
				}
			}
		}
	}
}

</style>
