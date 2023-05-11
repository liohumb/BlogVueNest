<template>
    <form class="form" @submit.prevent="$emit('on-submit', form)">
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="title"></label>
                <input type="text" name="title"
                       id="title" placeholder="Titre de l'article"
                       v-model="form.title">
            </div>
            <div class="form__contents-content">
                <label for="description"></label>
                <input type="text" name="description"
                       id="description" placeholder="Description de l'article"
                       v-model="form.description">
            </div>
        </div>
        <div class="form__contents">
            <label for="body"></label>
            <textarea name="body" id="body"
                      placeholder="Contenu de l'article"
                      v-model="form.body"/>
        </div>
        <div class="form__contents">
            <div class="form__contents-content">
                <label for="author"></label>
                <input name="author" id="description"
                       placeholder="Auteur de l'article"
                       v-model="form.author">
            </div>
            <div class="form__contents-content">
                <button type="submit">Valider</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        post: {
            type: Object
        }
    },
    data() {
        return {
            form: {
                title: this.post?.title || '',
                description: this.post?.description || '',
                body: this.post?.body || '',
                author: this.post?.author || '',
                date_posted: this.post?.date_posted || new Date().toLocaleDateString()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'form';
</style>
