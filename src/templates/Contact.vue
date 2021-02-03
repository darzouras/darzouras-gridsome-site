<template>
    <Layout>
        <h1>Contact</h1>

        <div class="page-body" v-html="$page.contact.content"></div>

        <form name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />
            
            <label>
                Name
                <input type="text" name="name" required>
            </label>

            <label>
                Email
                <input type="text" name="email" required>
            </label>

            <label>
                Message
                <textarea name="message" required></textarea>
            </label>

            <div data-netlify-recaptcha="true"></div>

            <input type="submit" value="Send">
        </form>
    </Layout>
</template>

<page-query>
    query ($id: ID!) {
        contact (id: $id) {
            title
            content
            summary
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.contact.title,
            meta: [
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: this.$page.contact.title
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: this.$page.contact.title
                },
                {
                    key: 'description',
                    name: 'description',
                    content: this.$page.contact.summary
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: this.$page.contact.summary
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: this.$page.contact.summary
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://darzouras.com' + this.$page.contact.header
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://darzouras.com' + this.$page.contact.header
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .page-body {
        /deep/ ul {
            list-style: none;
            padding: 0;
        }
    }

    form {
        margin-top: 3rem;
        
        label {
            display: block;
            width: 100%;
            margin-top: 1rem;
            font-size: 1.8rem;
            letter-spacing: .1rem;
            @include font-weight(600);

            input, textarea {
                font-family: $fonts;
                font-size: 1.5rem;
                display: block;
                width: 100%;
                padding: .3rem;
                @include font-weight(200);

                &:focus {
                    background: $light;
                    color: $lightest;
                }
            }

            input {
                background: transparent;
                border-width: 0 0 3px 0;
                border-color: $midtone;
            }
            textarea {
                background: transparent;
                border: 3px solid $midtone;
                border-radius: 10px;
            }
        }

        input[type="submit"] {
            font-family: $fonts;
            background: $light;
            color: $darkest;
            border: none;
            border-radius: 10px;
            width: 100%;
            padding: .7rem 0;
            text-transform: uppercase;
            margin-top: 1rem;
            font-size: 1rem;
            @include font-weight(600);
            letter-spacing: .1rem;

            &:focus {
                background: $midtone;
                color: $lightest;
            }
        }
    }
</style>