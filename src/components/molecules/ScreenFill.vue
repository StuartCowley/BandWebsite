<template>
  <div class="screen-fill">
    <div class="screen-fill__outer">
      <div class="screen-fill__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenFill"
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".screen-fill";
#{$c} {
  display: table;
  width: 100%;
  height: 100vh;

  &__outer {
    display: table-cell;
    width: 100%;
    height: 100%;
  }

  &__inner {
    width: 100%;
    max-width: 100vw;
    height: 100%;
  }
}
</style>
