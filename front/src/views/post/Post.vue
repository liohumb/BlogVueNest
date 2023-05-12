<template>
    <section class="post section">
        <form @submit.prevent="editPost" class="post__container section__container">
            <h1 v-if="!editing" class="post__title section__title">
                _{{ post.title }}
                <span class="post__author">
                    <span>écrit par:</span>
                    {{ post.author }}
                </span>
            </h1>
            <div v-if="editing" class="post__title">
                <input v-model="post.title" type="text" name="title" class="post__title-edit">
                <div class="post__author">
                    <span>écrit par:</span>
                    <input v-model="post.author" type="text" class="post__author-edit">
                </div>
            </div>

            <h4 v-if="!editing" class="post__subtitle">{{ post.description }}</h4>
            <input v-if="editing" v-model="post.description" type="text" class="post__subtitle post__subtitle-edit">

            <p v-if="!editing" class="post__text">{{ post.body }}</p>
            <textarea v-if="editing" v-model="post.body" class="post__text post__text-edit"/>

            <div class="post__buttons">
                <span @click="editing = !editing" v-if="!editing" class="post__buttons-edit">_modifier</span>
                <span @click="deletePost" class="post__buttons-delete" v-if="!editing">_supprimer</span>

                <button v-if="editing" type="submit" class="post__buttons-save">_sauvegarder</button>
            </div>
        </form>
    </section>
</template>

<script>
import axios from 'axios';
import {server} from '../../utils/helper.js';
import Routes from '../../Routes.js';

export default {
    data() {
        return {
            id: 0,
            post: {
                type: Object
            },
            editing: false
        }
    },
    created() {
        this.id = this.$route.params.postID
        this.getPost()
    },
    methods: {
        getPost() {
            axios.get(`${server.baseURL}/blog/post/${this.id}`)
                .then(data => (this.post = data.data))
        },
        editPost() {
            let postData = {
                title: this.post.title,
                description: this.post.description,
                body: this.post.body,
                author: this.post.author,
                date_posted: this.post.date_posted
            }

            axios.put(`${server.baseURL}/blog/edit?postID=${this.id}`, postData)
                .then(() => {
                    this.editing = false
                    this.getPost()
                })
        },
        deletePost() {
            axios.delete(`${server.baseURL}/blog/delete?postID=${this.id}`)
                .then(Routes.push({name: 'posts'}))
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'post';
</style>
