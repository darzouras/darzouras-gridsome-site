<template>
    <Layout>
        <h1>Blog</h1>
        
        <div v-html="$page.blog.content"></div>

        <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

        <Pager :info="$page.posts.pageInfo"/>
    </Layout>
</template>

<page-query>
    query ($page: Int, $id: ID!) {
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

        blog (id:$id) {
            title
            content
            header
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
    metaInfo() {
        return {
            title: 'Blog',
            meta: [
                {
                    name: 'description',
                    content: this.$page.blog.summary
                }
            ] 
        }
    },
    methods: {
        setHeader() {
            this.$store.dispatch('setHeader', this.$page.blog.header)
        }
    },
    created() {
        this.setHeader()
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