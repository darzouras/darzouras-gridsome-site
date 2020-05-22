<template>
    <Layout>
        <h1>Blog</h1>
        <p>idk the description goes here</p>

        <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

        <Pager :info="$page.posts.pageInfo"/>
    </Layout>
</template>

<page-query>
    query ($page: Int) {
        posts: allPost(perPage: 5, page: $page) @paginate {
            pageInfo {
                totalPages
                currentPage
            }
            edges {
                node {
                    id
                    title
                    date
                    summary
                    path
                }
            }
        }
    }
</page-query>

<script>
import PostList from '~/components/postlist.vue'
import { Pager } from 'gridsome'

export default {
    components: {
        PostList,
        Pager
    },
    metaInfo: {
        title: 'Blog'
    }
}
</script>

<style lang="scss" scoped>
    nav {
        text-align: center;
        margin-top: 3rem;

        a {
            margin: 0 .3rem;
            text-decoration: none;

            &.active {
                text-decoration: underline;
                text-decoration-color: $midtone;
                text-decoration-thickness: 3px;
            }
        }
    }
</style>