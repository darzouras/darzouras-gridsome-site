<template>
    <nav aria-label="Tag List" class="tags__wrapper">
        <h2 id="tags-label" class="subtitle" v-if="headline">
            {{ headline }}
            <div class="bar"></div>
        </h2>
        <ul class="tags" v-if="tags[0].title">
            <li v-for="(tag, index) in tags" :key="index" class="tag">
                <g-link :to="`/tag/` + tag.title">{{ tag.title }}</g-link>
            </li>
        </ul>
        <ul class="tags" v-else-if="tags[0].node.title">
            <li v-for="(tag, index) in tags" :key="index" class="tag">
                <g-link :to="`/tag/` + tag.node.title">{{ tag.node.title }}</g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Tags',
    props: ['tags', 'headline']
}
</script>

<style lang="scss" scoped>
.tags__wrapper {
    margin: 2.6rem 0;
}

#tags-label {
    background: none;
    padding: 0;
    display: flex;
    align-items: center;

    .bar {
        display: block;
        width: 100%;
        margin-left: 5px;
        margin-bottom: 2px;
        height: 5px;
        background: $midtone-green;
    }

    @include dm {
        color: $light-green;

        .bar {
            background: $light;
        }
    }
}

.tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

.tag {
    margin-right: 1.5rem;
    margin-bottom: 7px;
    padding: 5px 7px;
    border: 2px solid $midtone-green;
    white-space: nowrap;
}
</style>