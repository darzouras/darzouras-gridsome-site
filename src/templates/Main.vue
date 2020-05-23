<template>
    <Layout>
        <h1>{{ $page.main.title }}</h1>

        <div class="page-body" v-html="$page.main.content"></div>
    </Layout>
</template>

<page-query>
    query Main ($id: ID!) {
        main: main (id: $id) {
            title
            content
            header
            summary
        }
    }
</page-query>

<script>
export default {
    metaInfo () {
        return {
            title: this.$page.main.title,
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: this.$page.main.title
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: this.$page.main.title
                },
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.main.summary
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.main.summary
                },
                {
                    key: 'twitter:description',
                    name: 'og:description',
                    content: this.$page.main.description
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://darzouras.com' + this.$page.main.header
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://darzouras.com' + this.$page.main.header
                }
            ]
        }
    },
    methods: {
        setHeader() {
            this.$store.dispatch('setHeader', this.$page.main.header)
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