<template>
  <div>
    <Navigation />

    <main>
      <div class="header_wrapper">
        <slot name="header" />
      </div>
      <div class="content">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
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

  main {
    margin: 25px 5% 75px;

    @include md {
      margin: 75px 5% 50px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    .content {
      max-width: 666px;
      padding: 1em 0 2em;
    }
  }
</style>
