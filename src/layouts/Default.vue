<template>
  <div class="body-wrapper">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Header,
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
    width: 100%;
    max-width: 666px;
    background: $lightest;
    display: block;
    overflow: hidden;
    margin: auto;

    main {
      width: 90%;
      padding: 1em 0 2em;
      margin: auto;
    }

    @include sm {
      margin: 2rem auto 4rem;
    }
  }
</style>
