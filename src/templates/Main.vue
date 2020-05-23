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
                    name: 'description',
                    content: this.$page.main.summary
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