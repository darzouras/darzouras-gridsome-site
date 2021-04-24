<template>
    <article>
        <component :is="level" class="subtitle">
            <span class="post-date"><Timestamp v-bind:time="post.date" /></span>
            <span class="post-title"><g-link :to="post.path">{{ post.title }}</g-link></span>
        </component>

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
    props: {
        'post': {}, 
        'level': {
            default: 'h3'
        }
    }
}
</script>

<style lang="scss" scoped>
    article {
        margin-bottom: 3.4rem;
        position: relative;

        .subtitle {
            margin-bottom: .8rem;
            .post-date {
                display: block;
                font-size: 2.4rem;
            }
            .post-title {
                font-size: 2.1rem;
                color: $light;
                line-height: .8em;
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
                        &:not(:hover) {
                            color: $lightest;
                        }
                    }
                }
            }
        }
    }
</style>