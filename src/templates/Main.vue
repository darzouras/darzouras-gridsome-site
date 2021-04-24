<template>
    <Layout>
        <h1>{{ $page.main.title }}</h1>

        <div class="page-body" v-html="$page.main.content"></div>

        <template v-slot:header>
            <g-image v-if="$page.main.header" :src="$page.main.header" alt="" class="header"/>
        </template>
    </Layout>
</template>

<page-query>
    query Main ($id: ID!) {
        main: main (id: $id) {
            title
            content
            summary
            header
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
    }
}
</script>