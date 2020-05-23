<template>
  <Layout>
    <h1>DarZouras.com</h1>

    <div v-html="$page.index.content"></div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    index (id: $id) {
      content
      summary
      header
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
          content: this.$page.index.summary
        },
        {
          key: 'og:description',
          name: 'description',
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
  },
  methods: {
      setHeader() {
          this.$store.dispatch('setHeader', this.$page.index.header)
      }
  },
  created() {
      this.setHeader()
  }
}
</script>


