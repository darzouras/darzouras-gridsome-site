<template>
    <article>
        <h2 v-html="post.title"></h2>
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