<template>
    <time >
        {{ this.time | formatDate }}
    </time>
</template>

<script>
export default {
    name: 'Timestamp',
    props: ['time']
}
</script>

<style lang="scss" scoped>
    time {
        font-size: 1.2rem;
        @include font-weight(550);
    }
</style>