<template>
    <article>
        <h2><g-link :to="post.path">{{ post.title }}</g-link></h2>
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