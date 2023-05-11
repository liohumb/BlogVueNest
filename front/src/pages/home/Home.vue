<template>
    <section class="home section">
        <div class="home__container section__container">
            <h1 class="home__title section__title">_bienvenue</h1>
            <div class="home__content">
                <p class="home__content-text">
                    <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at beatae ducimus enim eos
                    esse est, eum fugit hic ipsa iusto libero mollitia, nihil officiis praesentium qui sequi,
                    tempora voluptatem? Consequuntur debitis enim ex, expedita explicabo mollitia
                    nesciunt nihil officia quos ullam! A animi autem beatae cum cupiditate deserunt explicabo
                    facere impedit maxime qui quos ratione, vero voluptate! Impedit, magni. Ab accusantium
                    animi doloribus error, fugit harum porro quo sit unde voluptate? Ad, atque aut autem
                    consectetur corporis iure nulla quaerat qui quis quod quos recusandae reiciendis totam
                    ullam vel. Architecto asperiores deleniti dolorum eius excepturi hic obcaecati sunt.
                    Distinctio doloribus eligendi enim eum eveniet excepturi incidunt ipsam laboriosam
                    laborum, magnam molestias necessitatibus nesciunt provident quibusdam suscipit veniam
                    vero voluptatibus!Aliquid aspernatur autem culpa cupiditate dolores doloribus eius,
                    enim error incidunt libero minima nesciunt nobis numquam porro sed sequi soluta
                    voluptatem. Aut beatae facere id modi nam, odio reprehenderit! Fuga?
                    </span>
                </p>
            </div>

            <h1 class="home__title section__title">_derniers articles</h1>
            <div class="home__posts section__content">
                <Card v-for="post in lastPosts" :key="post._id" :post="post"/>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import {server} from '../../utils/helper.js';
import Card from '../../components/card/Card.vue';

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
                .then(data =>{
                    this.posts = data.data
                })
        }
    },
    computed: {
        lastPosts() {
            return this.posts.reverse().slice(0, 3)
        }
    },
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>
@import 'home';
</style>