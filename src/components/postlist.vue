<template>
    <article>
        <h3>
            <span class="post-date"><Timestamp v-bind:time="post.date" /></span>
            <span class="post-title"><g-link :to="post.path">{{ post.title }}</g-link></span>
        </h3>

        <p v-html="post.summary"></p>
    </article>
</template>

<script>
import Timestamp from '~/components/timestamp.vue'

export default {
    components: {
        Timestamp
    }, 
    name: 'PostList',
    props: ['post']
}
</script>

<style lang="scss" scoped>
    article {
        margin-bottom: 2.4rem;
        position: relative;

        h3 {
            .post-date {
                display: block;
                font-size: 2.4rem;
            }
            .post-title {
                font-size: 2.1rem;
                color: $light;
                a {
                    text-decoration: none;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }

                    @include dm {
                        color: $lightest;
                    }
                }
            }
        }
    }
</style>