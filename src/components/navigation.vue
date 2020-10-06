<template>
    <nav>
        <ul>

            <li v-for="(link, i) in links" :key="`${i}-${link.id}`">
                <g-link :to="link.link">{{ link.title }}</g-link>
            </li>

        </ul>
    </nav>
</template>

<script>
import links from '@/data/nav.yaml'

export default {
    computed: {
        links () {
            return links
        }
    },
    name: 'Navigation',
}
</script>

<style lang="scss" scoped>
    nav {
        background: $midtone;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;

        @include md {
            top: 0;
            left: 0;
            right: unset;
            bottom: unset;
            width: 325px;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            margin: 0 auto;
            justify-content: center;
            padding: 0;
            font-size: 2.4rem;

            li {
                margin: 0;
                width: calc(100% / 3);
                padding: 1rem 0;

                &:nth-child(1) {
                    background: $light;
                    @include dm {
                        background: $light-green;
                    }
                }
                &:nth-child(2) {
                    background: $midtone;
                    @include dm {
                        background: $midtone-green;
                    }
                }
                &:nth-child(3) {
                    background: $darkest;
                    @include dm {
                        background: $darkest-green;
                    }
                }

                a {
                    color: $lightest;
                    margin: 0 .5rem;
                    text-decoration: none;
                    text-transform: lowercase;
                    font-weight: 750;
                    font-variation-settings: 'wght' 750;
                    letter-spacing: .2em;

                    @include dm{
                        color: $midtone;
                    }
                }
            }
        }
    }
</style>