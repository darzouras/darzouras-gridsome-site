<template>
    <nav>
        <ul>
            <li>
                <g-link to="/">Home</g-link>
            </li>
            <li>
                <g-link to="/about/">About</g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
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