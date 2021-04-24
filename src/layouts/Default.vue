<template>
  <main>
    <div class="header_wrapper">
      <slot name="header" />
    </div>
    
    <div class="content">
      <slot />
    </div>
  </main>
</template>

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
      flex-grow: 1;
    }
  }

  .fade-enter-active {
      transition-duration: 0.3s;
      transition-property: opacity;
      transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }

  .header {
        margin-bottom: 1.5rem;
        width: 100%;
        max-width: 888px;
        border: .5rem solid $midtone-green;
        border-top: 2.5rem solid $midtone-green;

        @include md {
            margin-bottom: 0;
            margin-left: 2.5rem;
            position: sticky;
            top: 75px;
        }
    }
</style>
