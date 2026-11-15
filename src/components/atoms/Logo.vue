<template>
  <div class="logo-wrap">
    <component
      :is="isLink ? 'router-link' : 'div'"
      v-bind="isLink ? { to: '/' } : {}"
    >
      <div class="logo" v-html="beeSvg"></div>
      <div class="logo-text" v-if="showText">
        <span>The</span>
        <span>Bees Knees</span>
      </div>
    </component>
  </div>
</template>

<script>
import beeSvg from "../../assets/bee.svg?raw";

export default {
  name: "Logo",
  props: {
    showText: Boolean,
    isLink: Boolean
  },
  data() {
    return { beeSvg };
  }
};
</script>

<style lang="scss">
@use "src/scss/toolkit" as *;

$c: ".logo";

#{$c} {
  &-wrap {
    position: relative;
  }
  &-text {
    position: absolute;
    top: 0;
    color: $mainGold;
    font-family: $heading-font-family;
    line-height: 1.2;
    text-shadow: 0 0 5px #000;
    span {
      display: block;
      text-align: center;
    }
  }
}
</style>
