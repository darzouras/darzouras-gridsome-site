<template>
  <Layout>
    <h1>DarZouras.com</h1>

    <div v-html="$page.index.content" class="content-top"></div>

    <h2>News and Updates</h2>

    <PostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

    <p><g-link to="/blog">See all posts</g-link></p>
  </Layout>
</template>

<page-query>
  query ($page: Int, $id: ID!) {
    index (id: $id) {
      content
      summary
    }

    posts: allPost(perPage: 3, page: $page) @paginate {
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
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.index.summary
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.index.summary
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.index.summary
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://darzouras.com' + this.$page.index.header
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://darzouras.com' + this.$page.index.header
        }
      ]
    }
  }
}
</script>


