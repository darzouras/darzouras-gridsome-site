<template>
    <Layout>
        <h1>Contact</h1>

        <div class="page-body" v-html="$page.contact.content"></div>

        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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

            <input type="submit" value="Send">
        </form>
    </Layout>
</template>

<page-query>
    query ($id: ID!) {
        contact (id: $id) {
            content
            header
            summary
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.contact.summary,
            meta: [
                {
                    name: 'description',
                    content: this.$page.contact.summary
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
            font-size: .8rem;
            letter-spacing: .1rem;
            @include font-weight(600);

            input {
                font-family: $fonts;
                display: block;
                width: 100%;
                background: transparent;
                padding: .3rem;
                border-width: 0 0 3px 0;
                border-color: $midtone;
                font-size: 1rem;
                @include font-weight(200);
            }
            textarea {
                font-family: $fonts;
                display: block;
                width: 100%;
                padding: .3rem;
                background: $midtone;
                border: 3px solid $midtone;
                border-radius: 10px;
                font-size: 1rem;
                @include font-weight (200);
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
        }
    }
</style>