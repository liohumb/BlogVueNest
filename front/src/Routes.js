import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/home/Home.vue';
import Posts from './views/posts/Posts.vue';
import Post from './views/post/Post.vue';
import Create from './views/create/Create.vue';
import Auth from "./views/auth/auth/Auth.vue";

Vue.use(VueRouter)

const user =  localStorage.getItem('user')

export default new VueRouter({
    mode: 'history',
    routes: [
        {name: 'home', path: '/', component: Home},
        {name: 'posts', path: '/posts', component: Posts},
        {name: 'post', path: '/post/:postID', component: Post},
        {name: 'create', path: '/ajouter-un-post', component: Create},
        {name: 'connexion', path: '/connexion', component: user ? Home : Auth, props: {title: 'connexion'}},
        {name: 'register', path: '/inscription', component: user ? Home : Auth, props: {title: 'inscription'}}
    ]
})