<template>
    <section class="posts section">
        <div class="posts__container section__container">
            <h1 class="posts__title section__title">_les articles</h1>
            <div class="posts__content section__content">
                <Card v-for="post in posts.reverse()" :key="post._id" :post="post"/>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../../components/card/Card.vue';
import {server} from '../../utils/helper.js';
import axios from 'axios';

export default {
    data() {
      return {
          posts: []
      }
    },
    created() {
        this.fetchPosts()
    },
    methods: {
        fetchPosts() {
            axios.get(`${server.baseURL}/blog/posts`)
                .then(data => {
                    this.posts = data.data
                })
        }
    },
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>
@import 'posts';
</style>