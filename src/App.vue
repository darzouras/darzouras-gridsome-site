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