<template>
    <section class="edit section">
        <div class="edit__container section__container">
            <h1 class="edit__title section__title">_modifier un article</h1>
            <Form :post="post" @on-submit="editPost"/>
        </div>
    </section>
</template>

<script>
import Form from '../../components/form/Form.vue';
import axios from 'axios';
import {server} from '../../utils/helper.js';
import Routes from '../../Routes.js';

export default {
    data() {
        return {
            id: 0,
            post: {}
        }
    },
    created() {
        this.id = this.$route.params.id
        this.getPost()
    },
    methods: {
        editPost() {
            let postData = {
                title: this.post.title,
                description: this.post.description,
                body: this.post.body,
                author: this.post.author,
                date_posted: this.post.date_posted
            }

            axios.put(`${server.baseURL}/blog/edit?postID=${this.id}`, postData)
                .then(data => {
                    Routes.push({name: 'home'})
                })
        },
        getPost() {
            axios.get(`${server.baseURL}/blog/post/${this.id}`)
                .then(data => (this.post = data.data))
        },
        navigate() {
            Routes.go(-1)
        }
    },
    components: {
        Form
    },
}
</script>

<style lang="scss" scoped>
@import 'edit';
</style>