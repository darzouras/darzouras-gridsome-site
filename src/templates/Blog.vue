<template>
    <Layout>
        <h1>Blog</h1>
        
        <div v-html="$page.blog.content" class="content-top"></div>

        <Tags v-bind:tags="$page.allTag.edges" v-bind:bottomMargin="true"/>
        
        <transition-group name="fade">
            <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" :level="'h2'" />
        </transition-group>

        <div class="pagination">
            <Pager :info="$page.posts.pageInfo"/>
        </div>
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
            summary
        }

        allTag {
            edges {
                node {
                    title
                }
            }
        }
    }
</page-query>

<script>
import PostList from '~/components/postlist.vue'
import Tags from '~/components/tags.vue'
import { Pager } from 'gridsome'

export default {
    components: {
        PostList,
        Tags,
        Pager
    },
    metaInfo() {
        return {
            title: 'Blog',
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Blog'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Blog'
                },
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.blog.summary
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.blog.summary
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: this.$page.blog.summary
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://darzouras.com' + this.$page.blog.header
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://darzouras.com' + this.$page.blog.header
                }
            ] 
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination > nav {
        font-size: 1.8rem;
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