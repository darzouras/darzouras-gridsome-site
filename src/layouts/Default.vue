<template>
  <div class="body-wrapper">
    <Navigation />

    <main>
      <slot />
    </main>

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
  @font-face {
      src: url('../assets/fonts/PublicSans-Roman-VF.woff2');
      font-family: "Public Sans";
      font-style: normal;
  }
  @font-face {
      src: url('../assets/fonts/PublicSans-Italic-VF.woff2');
      font-family: "Public Sans Italic";
      font-style: italic;
  }

  .body-wrapper {
    width: 90%;
    max-width: 500px;
    margin: 1em auto 4em;
    border: 3px solid $darkest;
    background: $lightest;
    border-radius: 50px 50px 10px 10px;
    display: block;
    overflow: hidden;

    main {
      width: 90%;
      padding: 1em 5% 2em;
    }
  }
</style>
