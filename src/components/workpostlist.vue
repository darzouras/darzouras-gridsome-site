<template>
    <article>
        <img :src="post.header" alt="" />

        <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>

        <p v-html="post.summary"></p>
    </article>
</template>

<script>
export default {
    name: 'WorkPostList',
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