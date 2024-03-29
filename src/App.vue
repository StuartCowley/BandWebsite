<template>
  <div class="page-wrapper">
    <template v-if="showLandingPageOnly">
      <LandingPage />
    </template>

    <template v-else>
      <template v-if="initialised">
        <Header :burgerOpen="burgerOpen" />
        <router-view />
        <transition name="fade">
          <div
            class="faded-background"
            v-show="burgerOpen"
            @click="handleClick"
          ></div>
        </transition>
      </template>
      <template v-else>
        <div class="loading-wrap">
          <img class="loading" :src="require('./assets/loading.gif')" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import Header from "./components/organisms/Header.vue";
import LandingPage from "./components/organisms/LandingPage";

export default {
  name: "App",
  metaInfo: {
    title: "The Bees Knees - Professional Party Band from Manchester",
    titleTemplate:
      "%s | Available for any event across the country | Special requests catered for | Line-up tailored to your needs"
  },
  components: {
    Header,
    LandingPage
  },
  computed: {
    showLandingPageOnly() {
      return this.$store.state.showLandingPageOnly;
    },
    initialised() {
      return this.$store.state.appInitialised;
    },
    currentScreen() {
      return this.$mq;
    },
    burgerOpen() {
      return this.$store.state.burgerOpen;
    }
  },
  created() {
    this.$store.dispatch("showLoadScreen"),
      (document.title =
        "The Bees Knees - Professional Cover Band from Manchester");
  },
  mounted: function() {
    this.$store.dispatch("appLoaded");
  },
  methods: {
    handleClick() {
      this.$store.dispatch("toggleBurger");
    }
  },
  watch: {
    currentScreen: function() {
      if (this.$mq == "ltab" || this.$mq == "desk" || this.$mq == "max") {
        this.$store.dispatch("closeBurger");
      }
    }
  }
};
</script>

<style lang="scss">
@import "/scss/toolkit";

html,
body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  @include hover--colors($mainGold, $mainGold);
}

.faded-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0.6;
  background-color: black;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity $base-trans-speed * 1.25 ease-in-out;
}

.page-wrapper {
  position: relative;

  .loading {
    width: 100px;
    height: 100px;
    &-wrap {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
