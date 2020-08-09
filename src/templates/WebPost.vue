<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <div class="post-body" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
    query WebPost ($id: ID!) {
        post: webPost (id: $id) {
            title
            summary
            content
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
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
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.post.summary
                },
                {
                    key: 'twitter:description',
                    name: 'og:description',
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