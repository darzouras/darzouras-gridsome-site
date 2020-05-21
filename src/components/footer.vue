<template>
    <footer>
        <p>&copy; Darlene Zouras 2020</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    footer {
        background: $midtone;
        color: $lightest;
        text-align: center;
        padding: 1rem;

        p {
            width: 90%;
            letter-spacing: .1em;
            
            @include font-weight(150);
        }
    }
</style>