<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <Timestamp v-bind:time="$page.post.date" />

        <div class="post-body" v-html="$page.post.content"></div>

        <div class="post-back">
            <g-link to="/blog">Back to Blog</g-link>
        </div>
    </Layout>
</template>

<page-query>
    query Post ($id: ID!) {
        post: post (id: $id) {
            title
            date
            summary
            content
        }
    }
</page-query>

<style type="scss" scoped>
    .post-back {
        margin-top: 3rem;
    }
</style>

<script>
import Timestamp from '~/components/timestamp.vue'

export default {
    components: {
        Timestamp
    },
    metaInfo () {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: this.$page.post.title
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: this.$page.post.title
                },
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.post.summary
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.post.summary
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: this.$page.post.summary
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://darzouras.com' + this.$page.post.header
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://darzouras.com' + this.$page.post.header
                }
            ]
        }
    }
}
</script>