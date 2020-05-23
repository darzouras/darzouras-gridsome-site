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
            header
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
                    name: 'description',
                    content: this.$page.post.summary
                }
            ]
        }
    },
    methods: {
        setHeader() {
            this.$store.dispatch('setHeader', this.$page.post.header)
        }
    },
    created() {
        this.setHeader()
    },
    updated() {
        this.setHeader()
    }
}
</script>