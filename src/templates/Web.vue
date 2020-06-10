<template>
  <Layout>
    <h1>DarZouras.com</h1>

    <div v-html="$page.web.content"></div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    web (id: $id) {
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
  },
  methods: {
      setHeader() {
          this.$store.dispatch('setHeader', this.$page.web.header)
      }
  },
  created() {
      this.setHeader()
  }
}
</script>


