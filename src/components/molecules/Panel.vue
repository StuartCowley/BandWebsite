<template>
	<div class="panel">
		<div class="grid grid--v-spread grid--s-24" :class="$mq == 'ptab' || $mq == 'mob' ? 'grid--vertical' : 'grid--center'">
			<div class="grid__item" :class="{'one-half': $mq == 'ltab' || $mq == 'desk'}">
				<div class="panel__heading-wrap" :class="{'panel__heading-wrap--vertical': $mq == 'ptab' || $mq == 'mob'}">
					<div class="panel__heading" :class="{'panel__heading--vertical':  $mq == 'ptab' || $mq == 'mob' }" v-html="heading"></div>
				</div>
			</div>
			<div class="grid__item" :class="{'one-half': $mq == 'ltab' || $mq == 'desk'}">
				<div class="panel__content" :class="{'panel__content--vertical': $mq == 'mob' || $mq == 'ptab'}">
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
		}
	}

}
</script>

<style lang="scss">
@import 'src/scss/toolkit';

$c:'.panel';
#{$c} {
	padding-top: 24px;
	padding-right: 24px;
	padding-bottom: 24px;
	padding-left: 24px;
	&--vertical {

	}
	&__heading {
		@include heading;
		width: 100%;
		padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
		background-color: $almostBlack;
		border-radius: 40px;
		text-align: center;
		color: $mainGold;
		&--vertical {
			width: auto;
			margin-left: auto;
			margin-right: auto;
		}
		&-wrap {
			display: flex;
			align-items: center;
			// justify-content: flex-end;
			height: 100%;
			&--vertical {
				// justify-content: center;
			}
		}
	}
	&__content {
		border-radius: 40px;
		padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
		background-color: $almostBlack;
		color: $mainGold;
		&--vertical {
			text-align: center;
		}
		// ul {
		// 	list-style: none;
		// 	padding-left: 0;
		// 	li {
		// 		display: inline-block;
		// 		width: 40%;
		// 		padding-right: 10%;
		// 		margin-bottom: 20px;
		// 	}
		// }
	}
}

</style>
