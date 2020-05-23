<template>
    <Layout>
        <h1>Contact</h1>

        <div class="page-body" v-html="$page.contact.content"></div>
    </Layout>
</template>

<page-query>
    query ($id: ID!) {
        contact (id: $id) {
            content
            header
            summary
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.contact.summary,
            meta: [
                {
                    name: 'description',
                    content: this.$page.contact.summary
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-body {
        /deep/ ul {
            list-style: none;
            padding: 0;
        }
    }
</style>