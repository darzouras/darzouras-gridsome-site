<template>
  <Layout>
    <h1 v-html="$page.work.title"></h1>

    <div v-html="$page.work.content"></div>

    <WorkPostList v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />

    <p>I'm always excited for new opportunities. You can <g-link to="/contact">contact me</g-link> if you want to connect.</p>

  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    work (id: $id) {
      title
      content
      summary
    }

    posts: allWorkPost {
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
          content: this.$page.work.title
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.work.title
        },
        {
          key: 'description',
          name: 'description',
          content: this.$page.work.summary
        },
        {
          key: 'og:description',
          name: 'description',
          content: this.$page.work.summary
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.work.summary
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://darzouras.com' + this.$page.work.header
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


