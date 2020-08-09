<template>
  <Layout>
    <h1 v-html="$page.art.title"></h1>

    <div v-html="$page.art.content"></div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    art (id: $id) {
        title
        content
        summary
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.art.summary
        },
        {
          key: 'og:description',
          name: 'description',
          content: this.$page.art.summary
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.art.summary
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://darzouras.com' + this.$page.art.header
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://darzouras.com' + this.$page.art.header
        }
      ]
    }
  }
}
</script>


