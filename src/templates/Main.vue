<template>
    <Layout>
        <h1>{{ $page.main.title }}</h1>

        <div class="page-body" v-html="$page.main.content"></div>
    </Layout>
</template>

<page-query>
    query Main ($id: ID!) {
        main: main (id: $id) {
            title
            content
        }
    }
</page-query>