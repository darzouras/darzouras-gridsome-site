<template>
    <article>
        <g-link :to="post.path"><h2 v-html="post.title"></h2></g-link>
        <time datetime="post.date">
            {{ post.date | formatDate }}
        </time>

        <p v-html="post.summary"></p>
    </article>
</template>

<script>
export default {
    name: 'PostList',
    props: ['post']
}
</script>