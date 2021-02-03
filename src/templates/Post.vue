<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <Timestamp v-bind:time="$page.post.date" />

        <div class="post-body" v-html="$page.post.content"></div>

        <div class="post-back">
            <g-link to="/blog">Back to Blog</g-link>
        </div>

        <template v-slot:header>
            <g-image v-if="$page.post.header" :src="$page.post.header" alt="" class="header"/>
        </template>
    </Layout>
</template>

<page-query>
    query Post ($id: ID!) {
        post: post (id: $id) {
            title
            date
            summary
            content
            header
        }
    }
</page-query>

<style lang="scss" scoped>
    .post-back {
        margin-top: 3rem;
    }

    .header {
        margin-bottom: 1.5rem;
        width: 100%;
        max-width: 888px;
        border: .5rem solid $midtone-green;
        border-top: 2.5rem solid $midtone-green;

        @include md {
            margin-bottom: 0;
            margin-left: 2.5rem;
            position: sticky;
            top: 75px;
        }
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