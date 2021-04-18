<template>
    <div>
        <Navigation />

        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
            siteDescription
        }
    }
</static-query>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  .fade-enter-active {
      transition-duration: 0.45s;
      transition-property: opacity;
      transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }
</style>