<template>
  <div class="secondary-layout">
    <div class="secondary-layout__title-wrap">
      <slot name="title" />
    </div>

    <div class="secondary-layout__content-wrap">
      <div class="page-container">
        <slot name="content" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "SecondaryLayout",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
@import "src/scss/toolkit";
$c: ".secondary-layout";

#{$c} {
  display: flex;
  @include header--padding;
  flex-flow: column;
  min-height: 100%;
  background: url("../../assets/black-hexagon-mesh.jpg");
  background-size: cover;
  background-attachment: fixed;

  &__title-wrap {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font: $heading-font-family;
  }

  &__title {
    @include secondary-page-heading;
  }

  &__content {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: $breakpoint-mob) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__content-wrap {
    flex: 1;
    margin-bottom: 2rem;
  }
}
</style>
