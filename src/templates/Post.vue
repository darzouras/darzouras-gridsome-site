<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <time datetime="page.post.date">
            {{ $page.post.date | formatDate }}
        </time>

        <div class="post-body" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
    query Post ($id: ID!) {
        post: post (id: $id) {
            title
            date
            summary
            content
            header
        }
    }
</page-query>