<template>
    <Layout>
        <h1>Tag: {{ $page.tag.title }}</h1>
        
        <Tags v-bind:tags="$page.allTag.edges" v-bind:bottomMargin="true"/>

        <p>
            <g-link to="/blog">Go to all posts</g-link>
        </p>
        
        <transition-group name="fade">
            <PostList v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node" :level="'h2'" />
        </transition-group>

        <div class="pagination">
            <Pager :info="$page.tag.belongsTo.pageInfo" />
        </div>
    </Layout>
</template>

<page-query>
    query ($id: ID!, $page: Int) {
        tag(id: $id) {
            title
            belongsTo(perPage: 5, page: $page) @paginate {
                pageInfo {
                    totalPages
                    currentPage
                }
                edges {
                    node {
                    ... on Post {
                        id
                        title
                        date
                        summary
                        path
                        }
                    }
                }
            }
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
        Pager,
        Tags
    } ,
    metaInfo() {
        return {
            title: 'Tag: ' + this.$page.tag.title,
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Tag: ' + this.$page.tag.title
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Tag: ' + this.$page.tag.title
                },
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