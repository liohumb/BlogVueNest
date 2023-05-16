<template>
    <div class="card">
        <div class="card__container">
            <router-link :to="{name: 'post', params: {postID: post._id}}" class="card__title">{{post.title}}</router-link>
            <div class="card__content">
                <span class="card__content-subtitle">{{post.description}}</span>
                <p class="card__content-text">
                    {{post?.body && post.body.length > 222 ? post.body.substring(0, 222) + '…' : post.body}}
                </p>
            </div>
            <span class="card__author">{{post.author}}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {server} from '../../utils/helper.js';
import Routes from '../../Routes.js';

export default {
    props: {
        post: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'card';
</style>