<template>
    <nav>
        <ul>

            <li v-for="link in links" :key="link">
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

            a {
                color: $lightest;
                margin: 0 .5em;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 750;
                font-variation-settings: 'wght' 750;
                letter-spacing: .2em;

                &:hover {
                    background: $darkest;
                }
            }
        }
    }
</style>