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
        background: $darkest;
        padding: .75em 1em .75em;
        text-align: center;

        ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            margin: 0 auto;
            justify-content: center;
            padding: 0;
            font-size: 1.2rem;

            li {
                margin: .3rem 0;
                a {
                    color: $lightest;
                    margin: 0 .5rem;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 750;
                    font-variation-settings: 'wght' 750;
                    letter-spacing: .2em;
                    padding: .1rem .3rem;

                    &:hover {
                        background: $midtone;
                    }
                }
            }
        }
    }
</style>