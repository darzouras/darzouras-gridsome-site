<template>
    <article>
        <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>
        <Timestamp v-bind:time="post.date" />

        <p v-html="post.summary"></p>
    </article>
</template>

<script>
import Timestamp from '~/components/timestamp.vue'

export default {
    components: {
        Timestamp
    }, 
    name: 'PostList',
    props: ['post']
}
</script>

<style lang="scss" scoped>
    article {
        margin-bottom: 3rem;

        h2 {
            margin-bottom: .5rem;
        }
    }
</style>