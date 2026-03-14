<template>
  <router-link :to="link">
    <div class="cta">
      {{ label }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CTA",
  props: {
    label: {
      type: String
    },
    link: {
      type: String,
      default: "contact"
    }
  }
};
</script>

<style lang="scss">
@use "src/scss/toolkit" as *;
$c: ".cta";
#{$c} {
  @include cta;
}
</style>
