<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>

        <time datetime="page.post.date">
            {{ $page.post.date | formatDate }}
        </time>

        <div class="post-body" v-html="$page.post.content"></div>

        <div class="post-back">
            <g-link to="/blog">Back to Blog</g-link>
        </div>
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

<style type="scss" scoped>
    .post-back {
        margin-top: 3rem;
    }
</style>