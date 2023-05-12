<template>
    <section class="create section">
        <div class="create__container section__container">
            <h1 class="create__title section__title">_ajouter un article</h1>
            <Form @on-submit="createPost"/>
        </div>
    </section>
</template>

<script>
import Form from '../../components/form/postForm/postForm.vue';
import axios from 'axios';
import {server} from '../../utils/helper.js';
import Routes from '../../Routes.js';

export default {
    methods: {
        createPost(postForm) {
            axios.post(`${server.baseURL}/blog/post`, postForm)
                .then(Routes.push({name: 'posts'}))
        }
    },
    components: {
        Form
    }
}
</script>

<style lang="scss" scoped>
@import 'create';
</style>