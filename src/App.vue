<template>
    <transition name="fade">
        <router-view />
    </transition>
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
export default {
    metaInfo() {
        return {
            title: this.$static.metadata.siteName,
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: this.$static.metadata.siteDescription
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>