<template>
    <header :style="headerStyle"></header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        headerStyle() {
            return {
                "background-image": "url(" + this.$store.state.headerbg + ")"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    header {
        background-color: $darkest;
        color: $lightest;
        position: relative;
        padding: 1em;
        background-size: cover;
        background-position: center;
        height:175px;

        @include sm {
            height: 300px;
        }
    }
</style>