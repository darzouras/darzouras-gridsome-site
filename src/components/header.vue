<template>
    <header :style="headerStyle"></header>
</template>

<static-query>
query {
    metadata {
        header
    }
}
</static-query>

<script>
export default {
    name: 'Header',
    computed: {
        headerStyle() {
            return {
                "background-image": "url(" + this.$static.metadata.header + ")"
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
        height:300px;
    }
</style>