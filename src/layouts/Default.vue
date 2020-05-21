<template>
  <div class="body-wrapper">
    <Navigation />

    <slot />

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '~/components/navigation.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .body-wrapper {
    width: 90%;
    max-width: 500px;
    margin: 1em auto 4em;
    border: 3px solid $darkest;
    background: $lightest;
    border-radius: 50px 50px 10px 10px;
    display: block;
    overflow: hidden;
  }
</style>
