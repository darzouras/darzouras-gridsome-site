<template>
    <time >
        {{ this.time | formatDate }}
        <div class="bar"></div>
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
        font-size: 2.4rem;
        @include font-weight(bold);
        display: flex;
        align-items: center;

        .bar {
            display: block;
            width: 100%;
            margin-left: 5px;
            margin-bottom: 2px;
            height: 5px;
            background: $midtone-green;
        }

        @include dm {
            color: $light-green;

            .bar {
                background: $light;
            }
        }
    }
</style>