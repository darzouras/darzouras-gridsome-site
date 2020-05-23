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
      title: 'Hello, world!',
      meta: [
        {
          name: 'description',
          content: this.$page.index.summary
        }
      ]
    }
  }
}
</script>


