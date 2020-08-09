<template>
  <Layout>
    <h1 v-html="$page.web.title"></h1>

    <div v-html="$page.web.content"></div>

    <WorkPostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    web (id: $id) {
      title
      content
      summary
    }

    posts: allWebPost {
      edges {
        node {
          id
          title
          summary
          header
          path
        }
      }
    }
  }
</page-query>

<script>
import WorkPostList from '~/components/workpostlist.vue'

export default {
  components: {
    WorkPostList
  },
  metaInfo() {
    return {
      title: this.$page.web.title,
      meta: [
        {
          key: 'og:title',
          name: 'og:title',
          content: this.$page.web.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.web.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.web.summary
        },
        {
          key: 'og:description',
          name: 'description',
          content: this.$page.web.summary
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.web.summary
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://darzouras.com' + this.$page.web.header
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://darzouras.com' + this.$page.web.header
        }
      ]
    }
  }
}
</script>


