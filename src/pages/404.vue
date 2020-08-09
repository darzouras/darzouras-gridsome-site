<template>
    <Layout>
        <h1>404</h1>

        <p>This page does not exist.</p>
    </Layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: '404',
            meta: [
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: '/uploads/iStock-1142986365.jpg'
                }
            ]
        }
    }
}
</script>