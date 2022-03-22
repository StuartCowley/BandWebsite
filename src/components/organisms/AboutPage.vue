<template>
  <div class="about-page">
    <SecondaryLayout>
      <template v-slot:title>
        <div class="secondary-layout__title">
          About the band
        </div>
      </template>

      <template v-slot:content>
        <div class="secondary-layout__content">
          <div class="about-page__content-block">
            <div class="about-page__copy">
              Some content
            </div>
          </div>
        </div>
      </template>
    </SecondaryLayout>
  </div>
</template>

<script>
import SecondaryLayout from "./SecondaryLayout";

export default {
  name: "AboutPage",
  components: {
    SecondaryLayout
  }
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".about-page";
#{$c} {
  @include secondary-page-layout;

  &__content-block {
    @include framed-content-block;
  }

  &__copy {
    @include copy;
    text-align: center;
  }
}
</style>
