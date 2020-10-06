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

  @font-face {
    src: url('../assets/fonts/FantasqueSansMono-Regular.woff2');
    font-family: "Fantasque Sans Mono";
    font-style: normal;
  }
  @font-face {
    src: url('../assets/fonts/FantasqueSansMono-Italic.woff2');
    font-family: "Fantasque Sans Mono";
    font-style: italic;
  }
  @font-face {
    src: url('../assets/fonts/FantasqueSansMono-Bold.woff2');
    font-family: "Fantasque Sans Mono";
    font-style: normal;
    font-weight: bold;
  }
  @font-face {
    src: url('../assets/fonts/FantasqueSansMono-BoldItalic.woff2');
    font-family: "Fantasque Sans Mono";
    font-style: italic;
    font-weight: bold;
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
