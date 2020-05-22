<template>
    <Layout>
        <h1>Blog</h1>
        <p>idk the description goes here</p>

        <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </Layout>
</template>

<page-query>
    query {
        posts: allPost {
            edges {
                node {
                    id
                    title
                    date
                    summary
                }
            }
        }
    }
</page-query>

<script>
import PostList from '~/components/postlist.vue'

export default {
    components: {
        PostList
    },
    metaInfo: {
        title: 'Blog'
    }
}
</script>

